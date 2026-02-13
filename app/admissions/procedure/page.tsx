"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function AdmissionProcedurePage() {
    const criteria = [
        "Completion of enrollment/registration form which may be obtained from school office on payment.",
        "Completion and evaluation of an entrance exam.",
        "Payment of all dues at the time of admission.",
        "Records & references of previous school.",
        "Number of students currently enrolled in the desired class."
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/campus_main_building.webp')] bg-cover bg-center opacity-10" />

                <Container className="relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold tracking-wider uppercase"
                    >
                        Admission Procedure
                    </motion.h1>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 font-sans">
                <Container className="max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-medium text-gray-600 uppercase tracking-widest mb-4">Admission Procedure</h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-gray-600 leading-relaxed text-[15px] md:text-base font-medium"
                    >
                        <p>
                            The minimum age of admission for a child in Oxford school is two years and eight months (kindergarten). Following are the criterion that a child needs to fulfill for admission in Oxford school:
                        </p>

                        <ul className="space-y-3 pl-2">
                            {criteria.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" strokeWidth={3} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p>
                            Admission of the student is based on the above criteria only with the acceptance of the principal & parents.
                        </p>

                        <p className="border-t pt-6 mt-6 border-gray-100">
                            We grant admissions on the basis of merit only. Our admissions close, as soon as the vacancies are filled. In case of exceptional cases like transfer of residence, employment of parent etc . Admission maybe granted after the announcement of last date. Also, these special admissions are subject to availability of seats in the class, and passing of the entrance examination. The decisions of the school staff is final and reconsideration in any case will not be entertained.
                        </p>
                    </motion.div>

                    {/* Student Life & Dress Code Section */}
                    <div className="mt-24 space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Student Life & Dress Code</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Our students take pride in their identity. The Oxford School uniform represents a tradition of discipline, equality, and excellence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { src: "/images/uniform.webp", title: "School Uniform", desc: "Our uniform represents discipline, equality, and pride in our identity." },
                                { src: "/images/sports_activities_uniform.png", title: "Sports & Activities", desc: "Promoting physical fitness and teamwork through various sports." },
                                { src: "/images/library_reading_uniform.png", title: "Library & Reading", desc: "A quiet space for reading, research, and self-study." }
                            ].map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-md aspect-[4/5]"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white">
                                        <h4 className="font-bold text-lg mb-1">{img.title}</h4>
                                        <p className="text-xs text-white/80">{img.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
