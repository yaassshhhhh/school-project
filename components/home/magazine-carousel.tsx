"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, BookOpen, Star, Sparkles } from "lucide-react"; // Added icons
import { cn } from "@/lib/utils";
import Link from "next/link";

const MAGAZINES = [
    {
        title: "Class 3 Booklet",
        file: "/PDF/Oxford_class3rd_booklet_20251206_154446_0000.pdf",
        color: "bg-[#7A2E1F]", // Oxford Maroon
        accent: "border-[#C9A24D]", // Oxford Gold
        year: "2025-26"
    },
    {
        title: "Class 4 Booklet",
        file: "/PDF/Oxford_class4th_booklet_20251208_210059_0000.pdf",
        color: "bg-[#0F2437]", // Oxford Navy Blue
        accent: "border-[#7A2E1F]", // Oxford Maroon
        year: "2025-26"
    },
    {
        title: "Class 5 Booklet",
        file: "/PDF/Oxford_class5th_booklet_20251126_130426_0000.pdf",
        color: "bg-[#0F2437]",
        accent: "border-[#C9A24D]",
        year: "2025-26"
    },
    {
        title: "Class 6 Booklet",
        file: "/PDF/Oxford_class6th_booklet_20251126_120819_0000.pdf",
        color: "bg-[#7A2E1F]",
        accent: "border-[#F6F1E7]", // Ivory White
        year: "2025-26"
    },
    {
        title: "Class 7 Booklet",
        file: "/PDF/Oxford_class7th_booklet_20260210_184351_0000_260210_185008.pdf",
        color: "bg-[#2563EB]", // Blue-600 variation
        accent: "border-[#C9A24D]",
        year: "2026-27"
    },
    {
        title: "Class 8 Booklet",
        file: "/PDF/Oxford_class8th_booklet_20251126_130316_0000.pdf",
        color: "bg-[#0F2437]",
        accent: "border-[#C9A24D]",
        year: "2025-26"
    },
    {
        title: "Class 9 Booklet",
        file: "/PDF/oxford_class9th_booklet_eco_20251126_130350_0000.pdf",
        color: "bg-[#7A2E1F]",
        accent: "border-[#0F2437]",
        year: "2025-26"
    },
    {
        title: "Class 10 Booklet",
        file: "/PDF/oxford_class10.1th_booklet_Googlespace.pdf",
        color: "bg-[#0F2437]",
        accent: "border-[#C9A24D]",
        year: "2025-26"
    },
];

export function MagazineCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Rotate carousel automatically
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Rotate every 3 seconds
        return () => clearInterval(interval);
    }, [isAutoPlaying, activeIndex]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % MAGAZINES.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + MAGAZINES.length) % MAGAZINES.length);
    };

    const getCardStyle = (index: number) => {
        const total = MAGAZINES.length;
        let diff = (index - activeIndex + total) % total;
        if (diff > total / 2) diff -= total;

        const isActive = diff === 0;
        const opacity = isActive ? 1 : Math.max(0.4, 1 - Math.abs(diff) * 0.3);
        const scale = isActive ? 1.15 : Math.max(0.85, 1 - Math.abs(diff) * 0.1); // Increased scale
        const zIndex = isActive ? 10 : 10 - Math.abs(diff);
        const xOffset = diff * 140; // Spacing increased for better visibility
        const rotateY = diff * -25; // 3D rotation increased for more depth

        return {
            opacity,
            scale,
            zIndex,
            x: xOffset,
            rotateY,
            filter: isActive ? 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))' : 'blur(1px) grayscale(30%)', // Enhanced drop shadow and blur
        };
    };

    return (
        <div className="relative py-20 overflow-hidden w-full flex flex-col items-center">
            {/* Ambient Background Glow matching active item */}
            <div
                className="absolute inset-0 transition-colors duration-1000 ease-in-out opacity-20 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at center, ${MAGAZINES[activeIndex].color.replace('bg-[', '').replace(']', '')} 0%, transparent 70%)`
                }}
            />

            {/* Carousel Container */}
            <div className="relative h-[550px] w-full max-w-6xl mx-auto perspective-1000 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                    {MAGAZINES.map((mag, index) => {
                        const style = getCardStyle(index);
                        const isVisible = Math.abs((index - activeIndex + MAGAZINES.length) % MAGAZINES.length) <= 3 || Math.abs((index - activeIndex + MAGAZINES.length) % MAGAZINES.length) >= MAGAZINES.length - 3;

                        return (
                            <motion.div
                                key={index}
                                className={cn(
                                    "absolute top-8 w-[280px] h-[400px] rounded-r-2xl rounded-l-lg shadow-2xl transition-all duration-700 cursor-pointer bg-white overflow-hidden border border-white/10",
                                    index === activeIndex ? "ring-2 ring-white/50 ring-offset-2 ring-offset-black/5" : ""
                                )}
                                animate={{
                                    x: style.x,
                                    scale: style.scale,
                                    zIndex: style.zIndex,
                                    opacity: style.opacity,
                                    rotateY: style.rotateY,
                                    filter: style.filter,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 20,
                                    mass: 1.1
                                }}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                                whileHover={{ scale: style.scale * 1.05, y: -10 }}
                            >
                                <Link href={mag.file} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                    <div className={`w-full h-full relative overflow-hidden rounded-r-2xl rounded-l-lg`}>

                                        {/* Realistic Book Effects */}
                                        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-20" />
                                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/30 z-30" />
                                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-black/20 to-transparent z-20" /> // Page edge look

                                        {/* Cover Content */}
                                        <div className={`absolute inset-0 ${mag.color} text-white p-7 flex flex-col justify-between border-t border-white/10`}>

                                            {/* Header */}
                                            <div className="space-y-3 relative z-10">
                                                <div className="flex justify-between items-start">
                                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg">
                                                        <BookOpen className="w-7 h-7 text-white" />
                                                    </div>
                                                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/10">
                                                        <span className="text-[10px] font-bold tracking-widest uppercase">Oxford</span>
                                                    </div>
                                                </div>

                                                <div className="pt-2">
                                                    <p className="text-xs uppercase tracking-[0.2em] opacity-80 font-medium text-white/90">Curriculum</p>
                                                    <h3 className="text-3xl font-serif font-bold leading-none drop-shadow-lg mt-1">
                                                        {mag.title.split(' ')[0]} <span className="text-secondary block text-5xl mt-1 gradient-text">{mag.title.split(' ')[1]}</span>
                                                    </h3>
                                                    <div className="h-1 w-12 bg-secondary/80 mt-3 rounded-full" />
                                                </div>
                                            </div>

                                            {/* Decorative Background Elements */}
                                            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat mix-blend-overlay" />
                                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                                            <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl mix-blend-overlay" />

                                            {/* Footer */}
                                            <div className="relative z-10 border-t border-white/10 pt-5 flex justify-between items-end">
                                                <div>
                                                    <p className="text-[10px] opacity-70 uppercase tracking-wider font-semibold">Academic Session</p>
                                                    <p className="font-bold text-lg font-serif">{mag.year}</p>
                                                </div>
                                                <div className="bg-white text-primary p-3 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                                    <ArrowIcon />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex gap-6 mt-2 z-20 items-center">
                <button
                    onClick={handlePrev}
                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-primary hover:text-secondary backdrop-blur-md transition-all border border-black/5 hover:scale-110 active:scale-95"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2 items-center bg-black/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/50">
                    {MAGAZINES.map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-500",
                                i === activeIndex ? "w-8 bg-secondary" : "w-1.5 bg-primary/20 hover:bg-primary/40 cursor-pointer"
                            )}
                            onClick={() => {
                                setActiveIndex(i);
                                setIsAutoPlaying(false);
                            }}
                        />
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-primary hover:text-secondary backdrop-blur-md transition-all border border-black/5 hover:scale-110 active:scale-95"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}

function ArrowIcon() {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    )
}
