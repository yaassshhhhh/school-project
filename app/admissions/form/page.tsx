"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion } from "framer-motion";
import { useGoogleForm } from "@/hooks/use-google-form";
import { GOOGLE_SCRIPT_URL } from "@/lib/constants";
import { AlertCircle } from "lucide-react";

export default function AdmissionFormPage() {
    const { submit, status, message } = useGoogleForm(GOOGLE_SCRIPT_URL);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const studentName = formData.get("studentName")?.toString() || "";
        const email = formData.get("fatherEmail")?.toString() || "";
        const phone = formData.get("primaryContact")?.toString() || "";
        const grade = formData.get("grade")?.toString() || "";

        // Combine additional details into the message field for the Google Sheet
        const combinedMessage = `
Fathers Name: ${formData.get("fatherName")}
Mother Name: ${formData.get("motherName")}
Father Contact: ${formData.get("fatherContact")}
City: ${formData.get("city")}
User Message: ${formData.get("message")}
        `.trim();

        await submit({
            name: studentName,
            email: email,
            phone: phone,
            subject_role_grade: grade,
            message: combinedMessage,
            category: "Admission Full Form",
        }, "Admission Enquiry");
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    if (status === "success") {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <Container className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-50 p-8 rounded-2xl border border-green-200"
                    >
                        <h1 className="text-3xl font-serif font-bold text-green-800 mb-4">Thank You!</h1>
                        <p className="text-lg text-green-700 mb-6">Your admission enquiry has been received. Our team will contact you shortly.</p>
                        <Button onClick={() => window.location.reload()} variant="outline">Submit Another Response</Button>
                    </motion.div>
                </Container>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen pt-10 pb-20">
            <section className="py-10 bg-secondary/10 mb-10">
                <Container className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-serif font-bold text-primary mb-2"
                    >
                        Admissions Form
                    </motion.h1>
                    <p className="text-muted-foreground">Admission Form & Fee Structure Enquiry Form 2024</p>
                </Container>
            </section>

            <Container className="max-w-3xl">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={formVariants}
                    className="bg-card p-8 md:p-12 rounded-xl shadow-lg border border-border"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {status === "error" && (
                            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 flex items-start">
                                <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{message}</span>
                            </div>
                        )}

                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="studentName">Student Name *</Label>
                                    <Input id="studentName" name="studentName" placeholder="Student Name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="primaryContact">Primary Contact Number *</Label>
                                    <Input id="primaryContact" name="primaryContact" type="tel" placeholder="Primary Contact Number" required />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-2">
                            <Label htmlFor="grade">Select Grade</Label>
                            <select
                                id="grade"
                                name="grade"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            >
                                <option value="">—Please choose an option—</option>
                                <option value="pre-primary">Pre-Primary</option>
                                <option value="primary">Primary</option>
                                <option value="secondary">Secondary</option>
                                <option value="higher-secondary">Higher Secondary</option>
                            </select>
                        </motion.div>

                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fatherName">Fathers Name *</Label>
                                <Input id="fatherName" name="fatherName" placeholder="Fathers Name" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="motherName">Mother Name *</Label>
                                <Input id="motherName" name="motherName" placeholder="Mother Name" required />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fatherEmail">Father Email Id *</Label>
                                <Input id="fatherEmail" name="fatherEmail" type="email" placeholder="Father Email Id" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="fatherContact">Father Contact Number *</Label>
                                <Input id="fatherContact" name="fatherContact" type="tel" placeholder="Father Contact Number" required />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-2">
                            <Label htmlFor="city">Your City *</Label>
                            <Input id="city" name="city" placeholder="City" required />
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-2">
                            <Label htmlFor="message">Your Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                className="min-h-[120px]"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full text-lg bg-primary hover:bg-primary/90"
                                disabled={status === "submitting"}
                            >
                                {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
                            </Button>
                        </motion.div>
                    </form>
                </motion.div>
            </Container>
        </div>
    );
}
