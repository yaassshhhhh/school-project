import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";
import { google } from "googleapis";

// --- Google Sheets Configuration ---
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"); // Fix newline issues
const SHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const role = formData.get("role") as string;
        const message = formData.get("message") as string;

        // Resume is now only a link
        const resumeLink = formData.get("resumeLink") as string | null;

        if (!name || !email || !phone || !role || !resumeLink) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // --- 1. Handle Resume (Link Only) ---
        let finalResumePathOrLink = resumeLink;

        const submittedAt = new Date().toISOString();

        // --- 2. Save Application to Local JSON (Backup/Logs) ---
        const applicationsFile = path.join(process.cwd(), "public/uploads/applications.json");
        const application = {
            id: Date.now().toString(),
            name,
            email,
            phone,
            role,
            message,
            resume: finalResumePathOrLink,
            submittedAt,
        };

        let applications = [];
        if (fs.existsSync(applicationsFile)) {
            try {
                const fileContent = fs.readFileSync(applicationsFile, "utf-8");
                applications = JSON.parse(fileContent);
            } catch (e) {
                console.error("Error parsing applications file", e);
                applications = [];
            }
        }
        applications.push(application);
        fs.writeFileSync(applicationsFile, JSON.stringify(applications, null, 2));


        // --- 3. Append to Google Sheet ---
        if (SERVICE_ACCOUNT_EMAIL && PRIVATE_KEY && SHEET_ID) {
            try {
                const auth = new google.auth.GoogleAuth({
                    credentials: {
                        client_email: SERVICE_ACCOUNT_EMAIL,
                        private_key: PRIVATE_KEY,
                    },
                    scopes: SCOPES,
                });

                const sheets = google.sheets({ version: "v4", auth });

                await sheets.spreadsheets.values.append({
                    spreadsheetId: SHEET_ID,
                    range: "Sheet1!A:G", // Adjust Sheet Name if needed
                    valueInputOption: "USER_ENTERED",
                    requestBody: {
                        values: [
                            [
                                new Date().toLocaleString(), // A: Timestamp
                                name,                        // B: Name
                                email,                       // C: Email
                                phone,                       // D: Phone
                                role,                        // E: Role
                                message,                     // F: Message
                                finalResumePathOrLink        // G: Resume
                            ],
                        ],
                    },
                });
                console.log("Appended to Google Sheet successfully.");
            } catch (sheetError) {
                console.error("Google Sheets Error:", sheetError);
                // Don't fail the request if sheet fails, but log it.
            }
        } else {
            console.warn("Google Sheets credentials missing. Skipping sheet append.");
        }

        return NextResponse.json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
        console.error("Error submitting application:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
