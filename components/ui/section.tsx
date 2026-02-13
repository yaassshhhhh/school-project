import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "muted" | "brand";
}

export const Section = forwardRef<HTMLElement, SectionProps>(({
    className,
    variant = "default",
    children,
    ...props
}, ref) => {
    return (
        <section
            ref={ref}
            className={cn(
                "py-16 md:py-24",
                {
                    "bg-background": variant === "default",
                    "bg-muted/30": variant === "muted",
                    "bg-primary text-primary-foreground": variant === "brand",
                },
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
});

Section.displayName = "Section";
