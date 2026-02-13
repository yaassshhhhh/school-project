"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { LeadershipMedia, LeadershipInfo } from "./leadership-card";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const LEADERSHIP_DATA = [
    {
        name: "Mr. Mayank Kamrani",
        role: "Director",
        quote: "The Oxford School, Burhanpur, is built upon a profound and enduring philosophy: Future success is not determined by a single examination, but by the habits cultivated daily. Our vision extends far beyond achieving high scores; it is about forging individuals who are continuously self-improving, confident, and committed to \"daily self-upgrade until their last breath\"",
        imageSrc: "/images/director.jpg",
    },
    {
        name: "Mrs. Shilpa Jadwani",
        role: "Principal",
        quote: "We recognize a critical gap in conventional schooling: While students master written exams after 12 years of practice, they often falter in high-stakes personal interactions, such as college entrance interviews. This nervousness stems from a lack of practice and, crucially, content. When they go on vacation, they engage their families in discussions about current events and policies, demonstrating a well-rounded awareness that elevates their thinking and confidence. Our students are not just studying; they are becoming informed thinkers.",
        imageSrc: "/images/principal.jpg",
    },
    {
        name: "Mr. Milan Wankhede",
        role: "Vice Principal",
        quote: "We believe in holistic development of mind, body, and spirit—fostering confidence, integrity, and a sense of belonging in every child.",
        imageSrc: "/images/director.jpg", // Placeholder
    },
];

export function LeadershipSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play logic
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % LEADERSHIP_DATA.length);
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    // Navigate to specific slide
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <Section className="relative overflow-hidden space-y-24">
            <Container>
                <div
                    className="flex flex-col lg:flex-row gap-12 items-center py-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Fixed Media Side - Always on Left */}
                    <div className="w-full lg:w-1/2 relative flex justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                <LeadershipMedia
                                    imageSrc={LEADERSHIP_DATA[currentIndex].imageSrc}
                                    name={LEADERSHIP_DATA[currentIndex].name}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dynamic Content Side */}
                    <div className="w-full lg:w-1/2 min-h-[400px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full"
                            >
                                <LeadershipInfo
                                    name={LEADERSHIP_DATA[currentIndex].name}
                                    role={LEADERSHIP_DATA[currentIndex].role}
                                    quote={LEADERSHIP_DATA[currentIndex].quote}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Dots */}
                        <div className="flex justify-start gap-3 mt-8">
                            {LEADERSHIP_DATA.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={cn(
                                        "rounded-full transition-all duration-300",
                                        index === currentIndex
                                            ? "bg-primary w-8 h-3"
                                            : "bg-gray-300 w-3 h-3 hover:bg-primary/50"
                                    )}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
