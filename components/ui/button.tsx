import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
                outline: "border-2 border-primary text-primary hover:bg-primary/5",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                sm: "h-9 px-4 text-sm",
                md: "h-11 px-6 text-base",
                lg: "h-14 px-8 text-lg font-semibold",
                xl: "h-16 px-10 text-xl font-bold",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, isLoading, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {asChild ? children : (
                    <>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {children}
                    </>
                )}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
