"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";

const roles = [
    "PGT - Mathematics",
    "TGT - English",
    "Sports Coach",
    "Admin Executive",
    "Other"
];

export function CareerForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        setMessage("");

        const formData = new FormData(e.currentTarget);
        const resumeLink = formData.get("resumeLink") as string;

        if (!resumeLink) {
            setStatus("error");
            setMessage("Please provide a Google Drive Link for your resume.");
            return;
        }

        try {
            const response = await fetch("/api/careers/apply", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
                setMessage(result.error || "Submission failed");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
            >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Application Received!</h3>
                <p className="text-green-700 mb-6">
                    {message || "Thank you for your interest in joining The Oxford School. We have received your application and will review it shortly."}
                </p>
                <Button onClick={() => window.location.reload()} variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
                    Submit Another Application
                </Button>
            </motion.div>
        );
    }

    return (
        <div id="application-form" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Apply Now</h2>

            {status === "error" && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 flex items-start">
                    <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{message}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="role">Position Applying For <span className="text-red-500">*</span></Label>
                        <select
                            id="role"
                            name="role"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                        >
                            <option value="">Select a position</option>
                            {roles.map((role) => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                    <Label>Resume / CV <span className="text-red-500">*</span></Label>
                    <div className="space-y-2">
                        <Input
                            id="resumeLink"
                            name="resumeLink"
                            placeholder="Paste Google Drive Link"
                            required
                        />
                        <p className="text-xs text-gray-500">Please provide a public Google Drive link to your resume.</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Cover Letter / Message (Optional)</Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us why you'd be a great fit..."
                        rows={4}
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg"
                    disabled={status === "submitting"}
                >
                    {status === "submitting" ? "Submitting Application..." : "Submit Application"}
                </Button>
            </form>
        </div>
    );
}
