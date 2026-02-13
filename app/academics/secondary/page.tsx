"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { CheckCircle2, Star, Theater, Activity, PenTool } from "lucide-react";
import { AdmissionEnquiryForm } from "@/components/admissions/admission-enquiry-form";

export default function SecondaryPage() {
    return (
        <div className="bg-background min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/Todays%20work/home%20gallery/Converted_WebP/4.webp" alt="Secondary School Students" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                </div>
                <Container className="relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-bold font-serif mb-4 text-white"
                    >
                        Secondary
                    </motion.h1>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Preparing for Excellence</h2>
                                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                                    Our secondary curriculum focuses on academic rigor and holistic development. We prepare students for state and national level examinations while encouraging them to pursue their passions in sports, arts, and technology.
                                </p>
                                <div className="bg-muted/20 p-6 rounded-lg border-l-4 border-secondary">
                                    <h3 className="font-bold text-primary mb-2">Key Highlights</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                            <span className="text-foreground/80">Specialized subject teachers for depth of knowledge.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                            <span className="text-foreground/80">Advanced Science and Computer labs.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                            <span className="text-foreground/80">Career counseling and aptitude testing.</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-card shadow-sm border border-border rounded-xl overflow-hidden"
                                >
                                    <div className="h-40 bg-muted flex items-center justify-center overflow-hidden">
                                        <img src="/Todays%20work/home%20gallery/Converted_WebP/4.webp" alt="Practical Learning" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-bold text-lg mb-1">Practical Learning</h4>
                                        <p className="text-sm text-muted-foreground">Emphasis on experiments and real-world application of concepts.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-24"
                        >
                            <AdmissionEnquiryForm category="Secondary" />
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                icon: "/images/campus_science_lab.png",
                                title: "Advanced Laboratories",
                                description: "State-of-the-art science and computer labs for hands-on learning and experimentation."
                            },
                            {
                                icon: "/images/secondary/technology_learning.png",
                                title: "Technology Integration",
                                description: "Modern computer labs and digital learning tools prepare students for the future."
                            },
                            {
                                icon: "/Todays%20work/home%20gallery/Converted_WebP/4.webp",
                                title: "Resource Library",
                                description: "Extensive library with books, journals, and digital resources for in-depth research."
                            },
                            {
                                icon: "/images/campus_playground.png",
                                title: "Sports & Activities",
                                description: "Comprehensive sports facilities and extracurricular programs for holistic development."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border text-center hover:shadow-lg transition-shadow">
                                <div className="w-40 h-40 mx-auto mb-6 relative">
                                    <img src={feature.icon} alt={feature.title} className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-primary">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.description}</p>
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
