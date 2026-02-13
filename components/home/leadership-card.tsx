import { motion } from "framer-motion";

interface LeadershipMediaProps {
    imageSrc: string;
    name: string;
}

export function LeadershipMedia({ imageSrc, name }: LeadershipMediaProps) {
    return (
        <div className="w-full relative flex justify-center">
            {/* Image Container with Floating Animation */}
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

                <div className="relative aspect-[3/4] bg-gradient-to-b from-gray-100 to-gray-200 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20">
                    <img
                        src={imageSrc}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
            </motion.div>
        </div>
    );
}

interface LeadershipInfoProps {
    name: string;
    role: string;
    quote: string;
}

export function LeadershipInfo({ name, role, quote }: LeadershipInfoProps) {
    return (
        <div className="w-full space-y-6">
            <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm font-semibold rounded-full">
                Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                {role}'s Message
            </h2>
            <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed border-l-4 border-secondary pl-6 py-2">
                "{quote}"
            </blockquote>
            <div className="pt-4">
                <h3 className="text-xl font-bold text-foreground">{name}</h3>
                <p className="text-muted-foreground">{role}, The Oxford School</p>
            </div>
        </div>
    );
}
