"use client";

import { Container } from "@/components/ui/container";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
    { label: "Years of Excellence", value: 24, suffix: "+" },
    { label: "Expert Teachers", value: 50, suffix: "+" },
    { label: "Students Enrolled", value: 1200, suffix: "+" },
    { label: "Pass Percentage", value: 100, suffix: "%" },
];

export function StatsSection() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <section className="py-20 bg-primary text-white">
            <Container>
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2 p-4 rounded-lg bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-bold font-serif text-secondary">
                                {inView ? (
                                    <CountUp end={stat.value} duration={2.5} separator="," />
                                ) : "0"}
                                <span className="text-secondary">{stat.suffix}</span>
                            </div>
                            <div className="text-sm md:text-base font-medium text-primary-foreground/80 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
