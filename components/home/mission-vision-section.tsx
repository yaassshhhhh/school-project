"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Target, Lightbulb } from "lucide-react";

const VISION = {
    title: "Our Vision",
    subtitle: "Fearless Pioneers",
    text: "The Oxford School envisions a generation of fearless pioneers defined not by their degrees, but by their intrinsic drive for perpetual growth and contribution. Our ultimate aspiration is to cultivate the Life-Long Learning Habit in every student, ensuring they are perpetually equipped to \"daily upgrade themselves until their final breath.\" We aim to forge citizens of profound self-worth and confidence, empowering every child to achieve the quality of a Great Speaker ready to lead dialogues, execute innovative ideas brilliantly, and shape the nation's future with clarity and conviction."
};

const MISSION = {
    title: "Our Mission",
    subtitle: "Skills-Centric Pedagogy",
    text: "Our Mission is to revolutionize education by establishing a Skills-Centric Pedagogical Model, moving definitively away from exam-only dependency. We are dedicated to the holistic development of essential competencies: Leadership, Effective Communication, Strategic Problem Solving, and Time Management. We achieve this through a rigorous curriculum that integrates UPSC/Competitive Exam Standards from Class VI, driven by the daily reading of articles and editorials. Recognizing that the ability to speak and present is the most powerful lever for lifelong success, we commit to leveraging cutting-edge tools, such as the new VR Public Speaking Lab."
};

export function MissionVisionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <Section className="py-24 bg-white relative overflow-hidden">
            {/* Minimalist Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60" />
            </div>

            <Container className="relative z-10">
                <div ref={containerRef} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-secondary/20 transform -rotate-2 rounded-3xl transition-transform duration-500 group-hover:rotate-0" />
                        <div className="relative bg-white border border-secondary/20 p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            {/* Icon Decoration */}
                            <div className="absolute -right-6 -top-6 w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-500">
                                <Lightbulb className="w-10 h-10 text-secondary" />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-secondary/10 p-3 rounded-xl text-secondary">
                                    <Lightbulb className="w-6 h-6" />
                                </span>
                                <h3 className="text-secondary font-bold tracking-wider uppercase text-sm">{VISION.subtitle}</h3>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 group-hover:text-secondary transition-colors duration-300">
                                {VISION.title}
                            </h2>

                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {VISION.text}
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative group mt-8 md:mt-0"
                    >
                        <div className="absolute inset-0 bg-primary/10 transform rotate-2 rounded-3xl transition-transform duration-500 group-hover:rotate-0" />
                        <div className="relative bg-primary text-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            {/* Icon Decoration */}
                            <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-500">
                                <Target className="w-10 h-10 text-white" />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-white/10 p-3 rounded-xl text-white">
                                    <Target className="w-6 h-6" />
                                </span>
                                <h3 className="text-white/80 font-bold tracking-wider uppercase text-sm">{MISSION.subtitle}</h3>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                {MISSION.title}
                            </h2>

                            <p className="text-white/90 leading-relaxed text-lg">
                                {MISSION.text}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
}
