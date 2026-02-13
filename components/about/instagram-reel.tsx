"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Volume2, VolumeX, Play, Pause, GraduationCap, Trophy, Users, Palette, Sparkles, BookOpen } from "lucide-react";

export function InstagramReel() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(1);

    // Parallax effect for background elements
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const floatY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Ensure initial state matches
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
    }

    // Floating Badge Component
    const FloatingBadge = ({ icon: Icon, label, className, delay }: { icon: any, label: string, className?: string, delay: number }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className={`absolute hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-white/40 z-20 ${className}`}
            style={{ y: floatY }}
        >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Icon className="w-5 h-5" />
            </div>
            <span className="font-serif font-semibold text-primary/90 text-sm whitespace-nowrap">{label}</span>
        </motion.div>
    );

    return (
        <section ref={containerRef} className="py-16 md:py-24 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-10 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
                />
                <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-secondary/20 rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-primary/20 rounded-full" />
            </div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center"
                >
                    {/* Header */}
                    <div className="mb-10 space-y-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-medium rounded-full text-sm mb-2"
                        >
                            Campus Life
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
                            Life at Oxford School
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                            A glimpse into learning, leadership, and joyful experiences at Oxford School
                        </p>
                    </div>

                    <div className="relative w-full max-w-4xl mx-auto flex justify-center items-center">
                        {/* Left Side Floating Elements */}
                        <div className="absolute left-0 top-0 bottom-0 w-1/3 hidden md:block pointer-events-none">
                            <FloatingBadge
                                icon={GraduationCap}
                                label="Academic Excellence"
                                className="top-10 left-0"
                                delay={0.3}
                            />
                            <FloatingBadge
                                icon={Palette}
                                label="Creative Arts"
                                className="bottom-20 right-10"
                                delay={0.5}
                            />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-10 w-16 h-16 border-2 border-dashed border-secondary/30 rounded-full opacity-50"
                            />
                        </div>

                        {/* Right Side Floating Elements */}
                        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:block pointer-events-none">
                            <FloatingBadge
                                icon={Trophy}
                                label="Sports & Athletics"
                                className="top-20 right-0"
                                delay={0.4}
                            />
                            <FloatingBadge
                                icon={Users}
                                label="Leadership"
                                className="bottom-10 left-10"
                                delay={0.6}
                            />
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-1/3 right-10"
                            >
                                <Sparkles className="w-8 h-8 text-secondary/40" />
                            </motion.div>
                        </div>

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
                                    src="/images/whyoxford.mp4"
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
                                            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg"
                                        >
                                            <Play className="w-6 h-6 text-white ml-1 fill-current" />
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
