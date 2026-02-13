"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Smile, Heart, Star, Sun, Sprout, Recycle, Palette } from "lucide-react";
import { AdmissionEnquiryForm } from "@/components/admissions/admission-enquiry-form";

export default function PrePrimaryPage() {
    const features = [
        {
            icon: "/images/pre%20primary/play_based_learning.png",
            title: "Play-Based Learning",
            description: "We use play as a primary tool to develop cognitive, social, and emotional skills in a fun environment."
        },
        {
            icon: "/images/pre%20primary/nurturing_care.png",
            title: "Nurturing Care",
            description: "Our teachers provide a warm, home-like atmosphere where every child feels safe and loved."
        },
        {
            icon: "/images/pre%20primary/skill_development.png",
            title: "Skill Development",
            description: "Focus on fine motor skills, language development, and early numeracy through interactive activities."
        },
        {
            icon: "/images/pre%20primary/creative_expression.png",
            title: "Creative Expression",
            description: "Art, music, and dance are integral parts of our daily routine to spark imagination."
        }
    ];

    return (
        <div className="bg-background min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/Todays%20work/home%20gallery/Converted_WebP/41.webp" alt="Pre-Primary Kids" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                </div>
                <Container className="relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-bold font-serif mb-4 text-white"
                    >
                        Pre-Primary
                    </motion.h1>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Foundational Years</h2>
                            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                                Our Pre-Primary section is a vibrant space where curiosity is celebrated. We follow a child-centric curriculum that encourages exploration and discovery.
                            </p>
                            <ul className="space-y-2 text-foreground/80 mb-6">
                                <li className="flex items-center gap-2">✓ Montessori-inspired methodology</li>
                                <li className="flex items-center gap-2">✓ Safe and colorful play areas</li>
                                <li className="flex items-center gap-2">✓ Focus on emotional intelligence</li>
                            </ul>

                            <div className="bg-muted rounded-2xl h-64 flex items-center justify-center overflow-hidden mb-8 md:mb-0">
                                <img src="/Todays%20work/home%20gallery/Converted_WebP/41.webp" alt="Pre-Primary Activities" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        {/* Admission Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <AdmissionEnquiryForm category="Pre-Primary" />
                        </motion.div>
                    </div>

                    {/* Features Grid (Stashed logic) */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border text-center hover:shadow-lg transition-shadow">
                                <div className="w-40 h-40 mx-auto mb-6 relative">
                                    <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-primary">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                </Container>
            </section>

            {/* Special Programs Section (Upstream) */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-widest mb-3">Special Programs</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-16 md:gap-32">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="p-4 rounded-full border-2 border-primary">
                                <Palette className="h-10 w-10 text-primary" />
                            </div>
                            <span className="font-bold text-primary uppercase tracking-wide">Pottery</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="p-4 rounded-full border-2 border-primary">
                                <Sprout className="h-10 w-10 text-primary" />
                            </div>
                            <span className="font-bold text-primary uppercase tracking-wide">Gardening</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="p-4 rounded-full border-2 border-primary">
                                <Recycle className="h-10 w-10 text-primary" />
                            </div>
                            <span className="font-bold text-primary uppercase tracking-wide">Recycling</span>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
