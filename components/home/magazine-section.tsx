"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { BookOpen, Camera } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { StoriesCarousel } from "@/components/home/stories-carousel";
import { MagazineCarousel } from "@/components/home/magazine-carousel";

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
        color: "bg-[#2563EB]", // Blue-600 variation for variety, but within theme if possible? Stick to brand.
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

export function MagazineSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <Section className="py-24 bg-secondary/10 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Publications</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mt-2 mb-4">
                        Student Magazines
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground">
                        Explore our collection of student booklets highlighting achievements, creativity, and academic progress across all grades.
                    </p>
                </div>

                {/* Magazine Carousel */}
                <div className="mb-20">
                    <MagazineCarousel />
                </div>

                {/* Campus Stories Carousel Section */}
                <div className="mt-32 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Campus Life</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mt-2 mb-4">
                            Stories & Highlights
                        </h2>
                        <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
                        <p className="mt-4 text-muted-foreground">
                            Catch the glimpse of our vibrant campus life, events, and student activities through our stories.
                        </p>
                    </div>

                    <StoriesCarousel />
                </div>

            </Container>
        </Section>
    );
}
