"use client";

import { Container } from "@/components/ui/container";
import { Shield, Monitor, Trees, Award } from "lucide-react";

const features = [
    {
        title: "Safe Environment",
        description: "24/7 CCTV surveillance and verified staff to ensure complete safety.",
        icon: Shield,
    },
    {
        title: "Smart Classrooms",
        description: "Digital learning tools and modern tech-driven teaching methods.",
        icon: Monitor,
    },
    {
        title: "Green Campus",
        description: "Lush green 12-acre campus promoting a healthy learning atmosphere.",
        icon: Trees,
    },
    {
        title: "Award Winning",
        description: "Recognized as the 'Best School in the Region' for 3 consecutive years.",
        icon: Award,
    },
];

export function FeaturesSection() {
    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mt-2 mb-6">
                            Empowering Students to Reach New Heights
                        </h2>
                        <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                            We believe in an education that goes beyond textbooks. Our holistic approach ensures that every child develops academically, socially, and emotionally.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-snug">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        {/* Placeholder for feature image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: 'url("/images/campus_science_lab.png")' }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
