"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurCampusPage() {
    const facilityImages = [
        { src: "/Todays work/home gallery/mainbuilding.webp", title: "Main Campus Building" },
        { src: "/Todays work/home gallery/hassan24.webp", title: "Central Library" },
        { src: "/images/our-campus/compute.webp", title: "Modern Computer Lab" },
        { src: "/Todays work/home gallery/hassan22.webp", title: "Science Laboratories" },
        { src: "/Todays work/home gallery/hassan5.webp", title: "Sports Complex" },
        { src: "/images/our-campus/auditorium.webp", title: "Auditorium" },
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero.webp')] bg-cover bg-center opacity-20" />
                <Container className="relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-serif mb-4"
                    >
                        Our Campus
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100px" }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-secondary mx-auto"
                    />
                </Container>
            </section>

            {/* Description Section */}
            <section className="py-16 md:py-24">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 tracking-wide">
                            BEST SCHOOL IN BURHANPUR
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                            <p>
                                The Oxford school is built on a massive 72 acre campus in Zirigram. We proudly claim that we have selected one of the best locations for our school. The campus is made to look beautiful from every angle you look at it.
                            </p>
                            <p>
                                We are concerned about the welfare of every child, it is clear from every feature that we added to the campus. Oxford provides a secure, happy and healthy environment of unparalleled opportunities for our students.
                            </p>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Gallery Section */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-2">GALLERY</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facilityImages.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group bg-muted"
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white font-bold font-serif text-lg">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Closing Section */}
            <section className="py-16 md:py-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <p className="text-xl md:text-2xl font-serif italic text-primary/90">
                            "Last but not the least, we provide a caring and accepting atmosphere for each and every student at our school."
                        </p>
                    </motion.div>
                </Container>
            </section>
        </div>
    );
}
