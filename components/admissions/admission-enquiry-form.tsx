"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGoogleForm } from "@/hooks/use-google-form";
import { GOOGLE_SCRIPT_URL } from "@/lib/constants";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

interface AdmissionEnquiryFormProps {
    category: string;
    className?: string;
}

export function AdmissionEnquiryForm({ category, className }: AdmissionEnquiryFormProps) {
    const { submit, status, message } = useGoogleForm(GOOGLE_SCRIPT_URL);
    const [grade, setGrade] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const city = formData.get("city");
        await submit({
            name: formData.get("parents_name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            subject_role_grade: grade || formData.get("grade"),
            message: `City: ${city}`,
            category: category,
        }, "Admission Enquiry");
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
                <h3 className="text-2xl font-bold text-green-800 mb-2">Enquiry Sent!</h3>
                <p className="text-green-700 mb-6">
                    {message || "Thank you for your interest. We will contact you shortly."}
                </p>
                <Button onClick={() => window.location.reload()} variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
                    Send Another Enquiry
                </Button>
            </motion.div>
        );
    }

    // Determine grades based on category for better UX
    const getGrades = () => {
        switch (category) {
            case "Pre-Primary": return ["Playgroup", "Nursery", "Junior KG", "Senior KG"];
            case "Primary": return ["Grade I", "Grade II", "Grade III", "Grade IV", "Grade V"];
            case "Secondary": return ["Grade VI", "Grade VII", "Grade VIII", "Grade IX", "Grade X"];
            case "Higher Secondary": return ["Grade XI (Science)", "Grade XI (Commerce)", "Grade XI (Humanities)", "Grade XII (Science)", "Grade XII (Commerce)", "Grade XII (Humanities)"];
            default: return ["Playgroup", "Nursery", "KG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
        }
    };

    return (
        <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${className}`}>
            <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-primary">Admission Enquiry</h3>
                <p className="text-sm text-muted-foreground">For {category} Section</p>
            </div>

            {status === "error" && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 flex items-start">
                    <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{message}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="parents_name">Parent's Name <span className="text-red-500">*</span></Label>
                    <Input id="parents_name" name="parents_name" placeholder="Enter parent/guardian name" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Mobile Number <span className="text-red-500">*</span></Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                        <Input id="email" name="email" type="email" placeholder="email@example.com" required />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="grade">Grade/Class <span className="text-red-500">*</span></Label>
                        <select
                            id="grade"
                            name="grade"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                        >
                            <option value="">Select Grade</option>
                            {getGrades().map((g) => (
                                <option key={g} value={g}>{g}</option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
                        <Input id="city" name="city" placeholder="Your City" required />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={status === "submitting"}
                >
                    {status === "submitting" ? "Sending..." : "Submit Enquiry"}
                    {!status && <Send className="w-4 h-4 ml-2" />}
                </Button>
            </form>
        </div>
    );
}
