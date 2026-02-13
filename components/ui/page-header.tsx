import { Container } from "@/components/ui/container";

interface PageHeaderProps {
    title: string;
    description?: string;
    image?: string;
}

export function PageHeader({
    title,
    description,
    image = "/images/campus_main_building.webp" // Default backup
}: PageHeaderProps) {
    return (
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

            <Container className="relative z-10 text-center space-y-4 pt-12">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-md">
                    {title}
                </h1>
                {description && (
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                        {description}
                    </p>
                )}
                {/* Decorative Line */}
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-6" />
            </Container>
        </section>
    );
}
