"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export function TvIntro() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Ensure initial state
        video.muted = isMuted;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => { });
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
        <section
            id="tv-intro"
            ref={containerRef}
            className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5 overflow-hidden"
        >
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Header */}
                    <div className="text-center mb-12 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-medium rounded-full text-sm mb-2"
                        >
                            Virtual Tour
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
                            Experience Life at The Oxford School
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                            A glimpse into our classrooms, campus, culture, and student life
                        </p>
                    </div>

                    {/* Simple Video Layout (Similar to InstagramReel) */}
                    {/* Changed from TV frame to simple rounded container */}
                    <div className="relative w-full max-w-5xl mx-auto group">

                        {/* Ambient Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
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
                                {/* Play/Pause Button */}
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
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
