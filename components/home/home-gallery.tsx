"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { X, ZoomIn, Download } from "lucide-react";
import Image from "next/image";

export function HomeGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleDownload = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedImage) return;

        const link = document.createElement('a');
        link.href = selectedImage;
        link.download = selectedImage.split('/').pop() || 'gallery-image.webp';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Generate array of 45 images
    // Paths are relative to public folder
    const images = Array.from({ length: 45 }, (_, i) => ({
        id: i + 1,
        src: `/Todays%20work/home%20gallery/Converted_WebP/${i + 1}.webp`,
        alt: `Campus Gallery Image ${i + 1}`
    }));

    // Helper to split images into columns for masonry effect
    // Simple distribution logic
    const distributeImages = (items: typeof images, columns: number) => {
        const cols: typeof images[] = Array.from({ length: columns }, () => []);
        items.forEach((item, index) => {
            cols[index % columns].push(item);
        });
        return cols;
    };

    // 3 columns for desktop, 2 for tablet, 1 for mobile (handled by CSS flex/grid usually, 
    // but for true masonry we often need column arrays or CSS columns. 
    // CSS columns is easiest for simple masonry).

    return (
        <section className="py-16 md:py-24 bg-secondary/5">
            <Container>
                <div className="text-center mb-12 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium rounded-full text-sm mb-2"
                    >
                        Our Gallery
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold text-primary"
                    >
                        Life at The Oxford School
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70 max-w-2xl mx-auto"
                    >
                        Capturing moments of learning, joy, and excellence.
                    </motion.p>
                </div>

                {/* CSS Columns Masonry */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "100px" }}
                            transition={{ delay: Math.min(index * 0.05, 0.5), duration: 0.5 }}
                            className="break-inside-avoid mb-4 group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <div className="relative w-full aspect-auto">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    loading={index < 8 ? "eager" : "lazy"}
                                    priority={index < 4}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                />
                            </div>

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                    <ZoomIn className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </Container>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <div className="absolute top-4 right-4 flex items-center gap-2">
                            <button
                                className="p-2 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full backdrop-blur-sm"
                                onClick={handleDownload}
                                title="Download Image"
                            >
                                <Download className="w-6 h-6" />
                            </button>
                            <button
                                className="p-2 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full backdrop-blur-sm"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Gallery Preview"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
