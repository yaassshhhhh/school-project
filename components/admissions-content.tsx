"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { FileText, Calendar, CheckCircle, Download, ArrowRight } from "lucide-react";
import { useGoogleForm } from "@/hooks/use-google-form";
import { GOOGLE_SCRIPT_URL } from "@/lib/constants";

const steps = [
    {
        number: "01",
        title: "Enquiry & Visit",
        description: "Fill out the online enquiry form or visit our campus in Naval Nagar for a guided tour.",
        icon: Calendar
    },
    {
        number: "02",
        title: "Application",
        description: "Submit the completed application form along with required documents (birth certificate, etc.).",
        icon: FileText
    },
    {
        number: "03",
        title: "Interaction",
        description: "A friendly interaction with the child and parents to understand needs and readiness.",
        icon: CheckCircle
    },
    {
        number: "04",
        title: "Admission Offer",
        description: "Receive the admission offer and complete fee payment to secure the seat.",
        icon: ArrowRight
    }
];

export function AdmissionsContent() {
    const { submit, status, message } = useGoogleForm(GOOGLE_SCRIPT_URL);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        submit({
            name: formData.get("parentName"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            grade: formData.get("grade"),
        }, "Admissions Enquiry");
    };

    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Admissions Open"
                description="We are excited to welcome new families to our community for the academic year 2026-27."
                image="/images/campus_playground.png"
            />

            {/* Process Steps */}
            <Section>
                <Container>
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">How to Apply</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mt-2">Simple 4-Step Process</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative py-8">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[50%] left-0 right-0 h-0.5 bg-gray-200 -z-10 -translate-y-1/2" />

                        {steps.map((step, index) => (
                            <div key={index} className="relative bg-background pt-4 md:pt-0 group">
                                <div className="w-16 h-16 rounded-full bg-background border-4 border-secondary text-primary font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-sm z-10 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    {step.number}
                                </div>
                                <div className="text-center px-2">
                                    <h3 className="font-bold text-lg text-primary mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Requirements & Call to Action */}
            <Section variant="muted">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Eligibility & Docs */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold font-serif text-primary mb-4">Documents Required</h3>
                                <ul className="space-y-3">
                                    {["Birth Certificate", "Previous School Report Card", "Passport Size Photographs", "Aadhar Card Copy", "Transfer Certificate (if applicable)"].map((req, i) => (
                                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                            <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4">
                                <Button size="lg" variant="outline" className="w-full md:w-auto gap-2">
                                    <Download className="h-4 w-4" /> Download Application Form (PDF)
                                </Button>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-background p-8 rounded-2xl shadow-lg border-t-4 border-secondary" id="application-form">
                            <h3 className="text-2xl font-bold font-serif text-primary mb-2">Ready to Apply?</h3>
                            <p className="text-muted-foreground mb-6">
                                Start your journey with us today. Our admissions team is here to guide you every step of the way.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="parentName">Parent Name</Label>
                                        <Input id="parentName" name="parentName" placeholder="Enter full name" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" name="email" type="email" placeholder="example@mail.com" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="grade">Grade Applying For</Label>
                                    <select
                                        id="grade"
                                        name="grade"
                                        className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                                        required
                                    >
                                        <option value="">Select Grade</option>
                                        <option value="nursery">Nursery</option>
                                        <option value="lkg">LKG / UKG</option>
                                        <option value="primary">Grade 1 - 5</option>
                                        <option value="secondary">Grade 6 - 10</option>
                                        <option value="higher-secondary">Grade 11 - 12</option>
                                    </select>
                                </div>

                                {status === "error" && <p className="text-red-500 text-sm">{message}</p>}
                                {status === "success" && <p className="text-green-600 text-sm font-bold">{message}</p>}

                                <Button size="lg" className="w-full mt-2" disabled={status === "submitting"}>
                                    {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
                                </Button>
                            </form>
                        </div>

                    </div>
                </Container>
            </Section>
        </div>
    );
}
