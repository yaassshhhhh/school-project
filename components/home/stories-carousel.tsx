"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Play, Pause, X, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const STORIES = [
    { id: 1, src: "/videos/story-1.mp4", alt: "Student Activities" },
    { id: 2, src: "/videos/story-2.mp4", alt: "Campus Life" },
    { id: 3, src: "/videos/story-3.mp4", alt: "School Events" },
    { id: 4, src: "/videos/story-4.mp4", alt: "Sports Day" },
    { id: 5, src: "/videos/story-5.mp4", alt: "Cultural Fest" },
    { id: 6, src: "/videos/story-6.mp4", alt: "Academic Excellence" },
];

export function StoriesCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Rotate carousel automatically
    useEffect(() => {
        if (!isAutoPlaying || isModalOpen) return;
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Rotate every 3 seconds
        return () => clearInterval(interval);
    }, [isAutoPlaying, activeIndex, isModalOpen]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % STORIES.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
    };

    const handleStoryClick = (index: number) => {
        if (index === activeIndex) {
            setIsModalOpen(true);
            setIsAutoPlaying(false);
        } else {
            setActiveIndex(index);
            setIsAutoPlaying(false);
            // Resume auto-play after interaction pause (optional)
            setTimeout(() => setIsAutoPlaying(true), 5000);
        }
    };

    const getStoryStyle = (index: number) => {
        const total = STORIES.length;
        // Calculate relative position to active index
        let diff = (index - activeIndex + total) % total;
        if (diff > total / 2) diff -= total;

        const isActive = diff === 0;
        const opacity = isActive ? 1 : Math.max(0.3, 1 - Math.abs(diff) * 0.3);
        const scale = isActive ? 1.1 : Math.max(0.8, 1 - Math.abs(diff) * 0.1);
        const zIndex = isActive ? 10 : 10 - Math.abs(diff);
        const xOffset = diff * 120; // Horizontal spacing
        const rotateY = diff * -15; // 3D rotation effect

        return {
            opacity,
            scale,
            zIndex,
            x: xOffset,
            rotateY,
            rotateZ: 0,
            filter: isActive ? 'none' : 'blur(2px) grayscale(50%)',
        };
    };

    return (
        <div className="relative py-20 overflow-hidden w-full flex flex-col items-center">

            {/* Carousel Container */}
            <div className="relative h-[500px] w-full max-w-5xl mx-auto perspective-1000 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                    {STORIES.map((story, index) => {
                        const style = getStoryStyle(index);
                        const isVisible = Math.abs((index - activeIndex + STORIES.length) % STORIES.length) <= 2 || Math.abs((index - activeIndex + STORIES.length) % STORIES.length) >= STORIES.length - 2;

                        // Only render if within visible range to improve performance
                        // Actually render all for smooth transition wrap-around, but hide off-screen via opacity if needed
                        // For circular wrap logic, we need to map indices carefully.
                        // Let's simplify: map indices to a continuous range centered on activeIndex

                        return (
                            <motion.div
                                key={story.id}
                                className={cn(
                                    "absolute top-10 w-[240px] h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 transition-all duration-500 cursor-pointer bg-black",
                                    index === activeIndex ? "border-secondary" : "border-white/10"
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
                                    stiffness: 100,
                                    damping: 20,
                                    mass: 1
                                }}
                                onClick={() => handleStoryClick(index)}
                                whileHover={{ scale: style.scale * 1.05 }}
                            >
                                <div className="absolute inset-0 bg-black/20 z-10" />
                                <video
                                    ref={el => {
                                        if (el) videoRefs.current[index] = el;
                                    }}
                                    src={story.src}
                                    className="w-full h-full object-cover"
                                    muted
                                    loop
                                    playsInline // Important for mobile
                                    // Auto-play the active one (muted)
                                    onLoadedMetadata={(e) => {
                                        // Ensure video is ready
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.play()}
                                    onMouseLeave={(e) => {
                                        if (index !== activeIndex) e.currentTarget.pause();
                                    }}
                                />
                                {index === activeIndex && (
                                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                        <div className="bg-black/40 p-4 rounded-full backdrop-blur-sm border border-white/20">
                                            <Play className="w-8 h-8 text-white fill-white" />
                                        </div>
                                    </div>
                                )}
                                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                                    <p className="text-white font-medium text-sm text-center">{story.alt}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex gap-4 mt-8 z-20">
                <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2 items-center">
                    {STORIES.map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                i === activeIndex ? "w-8 bg-secondary" : "w-2 bg-white/20 hover:bg-white/40 cursor-pointer"
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
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>


            {/* Full Screen Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-sm md:max-w-md aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 backdrop-blur-sm"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <video
                                src={STORIES[activeIndex].src}
                                className="w-full h-full object-cover"
                                autoPlay
                                controls
                                playsInline
                            />

                            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
                                <h3 className="text-white text-xl font-bold">{STORIES[activeIndex].alt}</h3>
                                <p className="text-white/70 text-sm mt-1">The Oxford School</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
