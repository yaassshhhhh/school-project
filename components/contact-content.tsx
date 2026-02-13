"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SCHOOL_INFO, GOOGLE_SCRIPT_URL } from "@/lib/constants";
import { useGoogleForm } from "@/hooks/use-google-form";

export function ContactContent() {
    const { submit, status, message } = useGoogleForm(GOOGLE_SCRIPT_URL);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        submit({
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        }, "Contact Form");
    };

    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Contact Us"
                description="We are here to answer your queries. Reach out to us via phone, email, or visit our campus."
                image="/images/campus_main_building.webp"
            />

            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info (Unchanged) */}
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <a
                                    href={SCHOOL_INFO.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-4 group hover:bg-secondary/5 p-2 -m-2 rounded-xl transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">Visit Us</h4>
                                        <p className="text-sm text-muted-foreground">{SCHOOL_INFO.address}</p>
                                    </div>
                                </a>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Call Us</h4>
                                        <p className="text-sm text-muted-foreground">{SCHOOL_INFO.phone}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Email Us</h4>
                                        <p className="text-sm text-muted-foreground">{SCHOOL_INFO.email}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Office Hours</h4>
                                        <p className="text-sm text-muted-foreground">Mon - Sat: 8:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                                <h3 className="text-2xl font-bold font-serif text-primary mb-6">Send us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="c-name">Name</Label>
                                            <Input id="c-name" name="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="c-email">Email</Label>
                                            <Input id="c-email" name="email" type="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="c-subject">Subject</Label>
                                        <Input id="c-subject" name="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="c-message">Message</Label>
                                        <Textarea id="c-message" name="message" rows={4} placeholder="How can we help you?" required />
                                    </div>

                                    {status === "error" && <p className="text-red-500 text-sm">{message}</p>}
                                    {status === "success" && <p className="text-green-600 text-sm font-bold">{message}</p>}

                                    <Button className="w-full" size="lg" disabled={status === "submitting"}>
                                        {status === "submitting" ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Map (Unchanged) */}
                        <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-gray-100 relative">
                            <iframe
                                src="https://maps.google.com/maps?q=The+Oxford+School,+Naval+Nagar,+Ziri,+Burhanpur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="School Location"
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
