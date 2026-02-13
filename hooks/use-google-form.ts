"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface UseGoogleFormReturn {
    submit: (formData: any, formType: string) => Promise<void>;
    status: FormStatus;
    message: string;
}

export function useGoogleForm(scriptUrl: string | undefined): UseGoogleFormReturn {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [message, setMessage] = useState("");

    const submit = async (data: any, formType: string) => {
        if (!scriptUrl) {
            console.error("Google Script URL is missing");
            setStatus("error");
            setMessage("Configuration Error: Missing Script URL");
            return;
        }

        setStatus("submitting");
        setMessage("");

        try {
            // 1. Prepare Payload
            const payload: any = {
                ...data,
                form_type: formType,
                page_url: window.location.href,
                submitted_at: new Date().toISOString(),
                user_agent: navigator.userAgent
            };

            // 2. Handle File Uploads (Convert to Base64)
            if (data.resume instanceof File) {
                payload.resume = {
                    name: data.resume.name,
                    type: data.resume.type,
                    data: await toBase64(data.resume)
                };
            }

            // 3. Send Request
            // Note: We use 'no-cors' mode for Google Forms usually, but for custom Apps Script returning JSON, 
            // we need 'cors'. However, Apps Script redirects, which fetch handles poorly.
            // Standard Hack: Use text/plain to avoid preflight options, and handle response carefully.

            const response = await fetch(scriptUrl, {
                method: "POST",
                body: JSON.stringify(payload)
            });

            // Apps Script web apps handling
            // Usually returns a 200 JSON.
            const result = await response.json();

            if (result.status === "success") {
                setStatus("success");
                setMessage("Thank you! Your submission has been received.");
            } else {
                throw new Error(result.message || "Submission failed");
            }
        } catch (error: any) {
            console.error("Form Submission Error:", error);
            setStatus("error");
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return { submit, status, message };
}

// Helper to convert file to Base64
const toBase64 = (file: File) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        // Remove data:application/pdf;base64, prefix
        const result = reader.result as string;
        const base64 = result.split(',')[1];
        resolve(base64);
    };
    reader.onerror = error => reject(error);
});
