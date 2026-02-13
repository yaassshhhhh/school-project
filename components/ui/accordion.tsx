"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AccordionContextType {
    value?: string | string[]
    onValueChange: (value: string) => void
    type: "single" | "multiple"
    collapsible?: boolean
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined)

interface AccordionProps {
    type?: "single" | "multiple"
    collapsible?: boolean
    defaultValue?: string | string[]
    value?: string | string[]
    onValueChange?: (value: string | string[]) => void
    children: React.ReactNode
    className?: string
}

function Accordion({
    type = "single",
    collapsible = false,
    defaultValue,
    value: controlledValue,
    onValueChange,
    children,
    className,
}: AccordionProps) {
    const [internalValue, setInternalValue] = React.useState<string | string[] | undefined>(
        defaultValue
    )

    const value = controlledValue !== undefined ? controlledValue : internalValue

    const handleValueChange = React.useCallback(
        (itemValue: string) => {
            if (type === "single") {
                const newValue = value === itemValue && collapsible ? "" : itemValue
                setInternalValue(newValue)
                if (onValueChange) onValueChange(newValue)
            } else {
                // multiple support mock - though not strictly needed for the task
                const current = Array.isArray(value) ? value : []
                const newValue = current.includes(itemValue)
                    ? current.filter((v) => v !== itemValue)
                    : [...current, itemValue]
                setInternalValue(newValue)
                if (onValueChange) onValueChange(newValue)
            }
        },
        [type, value, collapsible, onValueChange]
    )

    return (
        <AccordionContext.Provider
            value={{ value, onValueChange: handleValueChange, type, collapsible }}
        >
            <div className={className}>{children}</div>
        </AccordionContext.Provider>
    )
}

interface AccordionItemProps {
    value: string
    className?: string
    children: React.ReactNode
}

const AccordionItemContext = React.createContext<{ value: string } | undefined>(undefined)

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ className, value, children, ...props }, ref) => (
        <AccordionItemContext.Provider value={{ value }}>
            <div ref={ref} className={cn("border-b border-border/50", className)} {...props}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    )
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ className, children, ...props }, ref) => {
        const accordionContext = React.useContext(AccordionContext)
        const itemContext = React.useContext(AccordionItemContext)

        if (!accordionContext || !itemContext) {
            throw new Error("AccordionTrigger must be used within AccordionItem and Accordion")
        }

        const isOpen =
            accordionContext.type === "single"
                ? accordionContext.value === itemContext.value
                : Array.isArray(accordionContext.value) &&
                accordionContext.value.includes(itemContext.value)

        return (
            <div className="flex">
                <button
                    ref={ref}
                    className={cn(
                        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:text-primary hover:underline text-left [&[data-state=open]>svg]:rotate-180",
                        className
                    )}
                    data-state={isOpen ? "open" : "closed"}
                    onClick={() => accordionContext.onValueChange(itemContext.value)}
                    {...props}
                >
                    {children}
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground" />
                </button>
            </div>
        )
    }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ className, children, ...props }, ref) => {
        const accordionContext = React.useContext(AccordionContext)
        const itemContext = React.useContext(AccordionItemContext)

        if (!accordionContext || !itemContext) {
            throw new Error("AccordionContent must be used within AccordionItem and Accordion")
        }

        const isOpen =
            accordionContext.type === "single"
                ? accordionContext.value === itemContext.value
                : Array.isArray(accordionContext.value) &&
                accordionContext.value.includes(itemContext.value)

        return (
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div
                            ref={ref}
                            className={cn("pb-4 pt-0", className)}
                            {...props}
                        >
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
