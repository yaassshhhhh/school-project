"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import Link from "next/link";

export function DirectorMessage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(1);

    // Parallax effect for background elements
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const floatY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = isMuted;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => {
                            console.log("Autoplay blocked or waiting for interaction");
                        });
                        setIsPlaying(true);
                    } else {
                        video.pause();
                        setIsPlaying(false);
                    }
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(video);

        return () => {
            observer.unobserve(video);
        };
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            const newMutedState = !isMuted;
            videoRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
            if (!newMutedState && volume === 0) {
                setVolume(1);
                videoRef.current.volume = 1;
            }
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            if (newVolume === 0) {
                setIsMuted(true);
                videoRef.current.muted = true;
            } else if (isMuted) {
                setIsMuted(false);
                videoRef.current.muted = false;
            }
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <Section ref={containerRef} className="relative overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Video Side */}
                    <div className="w-full lg:w-1/2 relative flex justify-center">
                        {/* Video Container with Floating Animation */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 6,
                                ease: "easeInOut"
                            }}
                            className="relative w-full max-w-sm mx-auto group z-10"
                        >
                            {/* Phone-like Frame / Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative aspect-[9/16] bg-black rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    src="/images/principle.mp4"
                                    muted={isMuted}
                                    loop
                                    playsInline
                                    onClick={togglePlay}
                                />

                                {/* Gradient Overlay for Controls */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                                {/* Controls */}
                                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20">
                                    {/* Play/Pause Indicator */}
                                    <button
                                        onClick={togglePlay}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 border border-white/10"
                                        aria-label={isPlaying ? "Pause video" : "Play video"}
                                    >
                                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                                    </button>

                                    {/* Volume Control Group */}
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/10 hover:bg-white/30 transition-all duration-300 group/volume">
                                        <button
                                            onClick={toggleMute}
                                            className="text-white hover:scale-110 transition-transform"
                                            aria-label={isMuted ? "Unmute video" : "Mute video"}
                                        >
                                            {isMuted || volume === 0 ? (
                                                <VolumeX className="w-5 h-5" />
                                            ) : (
                                                <Volume2 className="w-5 h-5" />
                                            )}
                                        </button>

                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.05"
                                            value={isMuted ? 0 : volume}
                                            onChange={handleVolumeChange}
                                            className="w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300 h-1.5 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                                        />
                                    </div>
                                </div>

                                {/* Center Play Button Overlay (only when paused) */}
                                {!isPlaying && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] cursor-pointer"
                                        onClick={togglePlay}
                                    >
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg group-hover:bg-white/30 transition-colors"
                                        >
                                            <Play className="w-6 h-6 text-white ml-1 fill-current" />
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm font-semibold rounded-full">
                            Leadership
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                            Director's Message
                        </h2>
                        <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed border-l-4 border-secondary pl-6 py-2">
                            "The Oxford School, Burhanpur, is built upon a profound and enduring philosophy: Future success is not determined by a single examination, but by the habits cultivated daily. Our vision extends far beyond achieving high scores; it is about forging individuals who are continuously self-improving, confident, and committed to &quot;daily self-upgrade until their last breath&quot;"
                        </blockquote>
                        <div className="pt-4">
                            <h3 className="text-xl font-bold text-foreground">Mr. Mayank Kamrani</h3>
                            <p className="text-muted-foreground">Director, The Oxford School</p>
                        </div>
                        <div className="pt-4">
                            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                <Link href="/about">Read More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
