"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" } as any
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        } as any
    }
};

export function HeroSection() {
    return (
        <section className="relative min-h-[700px] flex items-center bg-primary text-white overflow-hidden py-20 lg:py-0">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#5d2318] to-primary opacity-90 transition-opacity duration-1000" />


            {/* Cinematic Noise / Grain Layer */}
            <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}>
            </div>

            {/* Background Pattern - Subtle & Professional */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}>
            </div>

            <Container className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-10 pt-12 lg:pt-0 max-w-4xl mx-auto flex flex-col items-center"
                >
                    <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 border border-secondary/50 rounded-full bg-black/20 backdrop-blur-sm">
                        <span className="text-secondary font-semibold tracking-wide text-xs uppercase">• Admissions Open 2026-27</span>
                    </motion.div>


                    <motion.div variants={fadeInUp} className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-white drop-shadow-lg">
                            The Oxford School
                        </h1>
                        <h2 className="text-xl md:text-3xl font-light text-secondary mb-8 tracking-wide">
                            Nurturing Excellence, Inspiring Growth
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto">
                            Empowering students with a holistic education that blends academic rigor with character building, preparing them to lead with confidence and integrity.
                        </p>
                    </motion.div>


                    <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 pt-8">
                        <Link href="/admissions/form">
                            <Button size="xl" className="font-bold bg-secondary text-primary hover:bg-secondary/90 px-10 h-14 text-lg transition-transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(201,162,77,0.3)]">
                                Apply Now
                            </Button>
                        </Link>
                        <Link href="#tv-intro">
                            <Button size="xl" variant="outline" className="font-medium border-white/20 text-white hover:bg-white/10 px-10 h-14 text-lg bg-transparent transition-transform hover:scale-105 duration-300">
                                School Tour
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
