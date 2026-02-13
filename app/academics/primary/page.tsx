"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Star, Theater, Activity, Palette, BookOpen, PenTool, Book, Globe, Calculator, FlaskConical } from "lucide-react";
import { AdmissionEnquiryForm } from "@/components/admissions/admission-enquiry-form";

export default function PrimaryPage() {
    return (
        <div className="bg-background min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/Todays%20work/home%20gallery/Converted_WebP/43.webp" alt="Primary School Students" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                </div>
                <Container className="relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-bold font-serif mb-4 text-white"
                    >
                        Primary
                    </motion.h1>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Building Foundations</h2>
                                <p className="text-lg text-foreground/80 leading-relaxed text-justify mb-6">
                                    The Primary years are crucial for laying the foundation of academic concepts and character development. Our curriculum is designed to be interactive and engaging, encouraging students to ask questions and seek answers.
                                </p>
                                <div className="bg-muted rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                                    <img src="/Todays%20work/home%20gallery/Converted_WebP/43.webp" alt="Primary School Students" className="w-full h-full object-cover" />
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <AdmissionEnquiryForm category="Primary" />
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                icon: "/images/primary/reading_learning.png",
                                title: "Interactive Learning",
                                description: "We encourage students to ask questions and seek answers through engaging classroom activities and discussions."
                            },
                            {
                                icon: "/images/primary/hands_on_learning.png",
                                title: "Hands-On Experience",
                                description: "Practical learning through experiments and projects helps students understand concepts better."
                            },
                            {
                                icon: "/images/primary/physical_education.png",
                                title: "Physical Development",
                                description: "Sports and physical activities are integral to building healthy minds and bodies."
                            },
                            {
                                icon: "/images/primary/creative_arts.png",
                                title: "Creative Expression",
                                description: "Art, music, and creative activities nurture imagination and self-expression."
                            }
                        ].map((feature, index) => (
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

            {/* Teaching Methodology Section */}
            <section className="py-16 bg-gray-50">
                <Container className="max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-widest mb-3">Teaching Methodology</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                    </div>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {[
                            "We believe in conceptual learning because that is how our students learn to use the education they get in real life. To eliminate weaknesses and bring out the best in our students, our teachers implement a proper teaching methodology that gives proper directions.",
                            "The logic behind every concept and formula is made clear to our students. So, at Oxford students never mug-up the syllabus, but rather have a proper understanding of it.",
                            "Oxford School has appointed highly-qualified faculty that helps students gain insights in every subject with detailed knowledge. This way we make sure that our students are always a step ahead of the competition."
                        ].map((text, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <Star className="h-5 w-5 text-secondary shrink-0 mt-1 fill-secondary" />
                                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Special Programs Section */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-widest mb-3">Special Programs</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-16 md:gap-32">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="p-4">
                                <Theater className="h-16 w-16 text-primary stroke-1" />
                            </div>
                            <span className="font-bold text-primary uppercase tracking-wide">Drama</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="p-4">
                                <Activity className="h-16 w-16 text-primary stroke-1" />
                            </div>
                            <span className="font-bold text-primary uppercase tracking-wide">Physical Education</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="p-4">
                                <PenTool className="h-16 w-16 text-primary stroke-1" />
                            </div>
                            <span className="font-bold text-primary uppercase tracking-wide">Art</span>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
