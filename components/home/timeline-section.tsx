"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Trophy } from "lucide-react";


const curriculum = [
    {
        title: "PRE-PRIMARY",
        image: "/Todays work/home gallery/Converted_WebP/41.webp",
        description: "Children are quick learners at tender ages. We Stimulate curiosity and imagination in the Pre Nursery, Nursery, Jr.Kg, and Sr.Kg students. This way we encourage academic and a holistic development from an early age. At this stage, we focus on engaging the child through creative teaching methods.",
        color: "bg-primary",
    },
    {
        title: "PRIMARY",
        image: "/Todays work/home gallery/Converted_WebP/43.webp",
        description: "From Grade I –V, the grasping power of students is at its peak. So, we familiarize students with higher learning concepts and knowledge assimilation to develop rigorous academic habits and hone their skill sets. Practical learning is emphasized as we believe in 'Learning through practice'.",
        color: "bg-primary",
    },
    {
        title: "SECONDARY",
        image: "/Todays work/home gallery/Converted_WebP/4.webp",
        description: "We believe that expanding the horizons of learning and mastery of advanced concepts happens from classes VI to X. We hold special programs that prepare our students for the world. We provide multiple platforms to our students for a better learning experience.",
        color: "bg-primary",
    },
    {
        title: "HIGHER SECONDARY",
        image: "/Todays work/home gallery/Converted_WebP/6.webp",
        description: "Preparing for a real-life career starts from classes XI to XII. We help students identify their best skills and help them select a career accordingly.",
        color: "bg-primary",
    },
];

export function TimelineSection() {
    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-4 uppercase tracking-wider">
                        Curriculum
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {curriculum.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`${item.color} text-primary-foreground p-6 rounded-lg flex flex-col h-full hover:shadow-xl transition-shadow`}
                        >
                            <div className="h-48 mb-6 bg-muted rounded-lg overflow-hidden relative shadow-md">
                                {/* Using generated artifacts */}
                                <img src={item.image} alt={item.title} className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center border-b border-primary-foreground/20 pb-4">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-center font-light text-primary-foreground/90">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
