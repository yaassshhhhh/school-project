"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Bell } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const newsItems = [
    {
        title: "Annual Sports Day Celebration",
        date: "Jan 15, 2026",
        category: "Events",
        description: "Join us for a day of athletic excellence and team spirit at the school grounds."
    },
    {
        title: "CBSE Board Exam Preparations",
        date: "Feb 01, 2026",
        category: "Academic",
        description: "Special coaching classes for Class X and XII students entering the final phase."
    },
    {
        title: "Science Exhibition Winners",
        date: "Dec 20, 2025",
        category: "Achievements",
        description: "Our students bagged the first prize at the District Level Science Exhibition."
    }
];

export function NewsEvents() {
    return (
        <Section variant="muted">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                            <Bell className="w-4 h-4" />
                            <span>Latest Updates</span>
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-foreground">News & Happenings</h2>
                    </div>
                    <Button variant="outline" className="gap-2" asChild>
                        <Link href="/news">
                            View All News <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, idx) => (
                        <div key={idx} className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-start">
                                    <span className={cn(
                                        "px-2 py-1 text-xs font-semibold rounded uppercase tracking-wider",
                                        item.category === 'Events' && "bg-blue-100 text-blue-700",
                                        item.category === 'Academic' && "bg-purple-100 text-purple-700",
                                        item.category === 'Achievements' && "bg-green-100 text-green-700",
                                    )}>
                                        {item.category}
                                    </span>
                                    <div className="flex items-center text-muted-foreground text-sm">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {item.date}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    {item.description}
                                </p>
                                <div className="pt-2">
                                    <span className="text-primary text-sm font-medium inline-flex items-center group-hover:underline underline-offset-4">
                                        Read More <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
