"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ApplyButtonProps extends ButtonProps {
    withIcon?: boolean;
}

export function ApplyButton({ withIcon, children, ...props }: ApplyButtonProps) {
    const scrollToForm = () => {
        const form = document.getElementById("application-form");
        if (form) {
            form.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Button onClick={scrollToForm} {...props}>
            {children}
            {withIcon && <ArrowRight size={16} className="ml-2" />}
        </Button>
    );
}
