"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabsProps {
    defaultValue: string;
    children: React.ReactNode;
    className?: string;
}

interface TabsListProps {
    children: React.ReactNode;
    className?: string;
}

interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

interface TabsContentProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

const TabsContext = React.createContext<{
    activeTab: string;
    setActiveTab: (value: string) => void;
} | null>(null);

export function Tabs({ defaultValue, children, className }: TabsProps) {
    const [activeTab, setActiveTab] = React.useState(defaultValue);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className={cn("w-full", className)}>{children}</div>
        </TabsContext.Provider>
    );
}

export function TabsList({ children, className }: TabsListProps) {
    return (
        <div className={cn("inline-flex h-12 items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-500", className)}>
            {children}
        </div>
    );
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error("TabsTrigger must be used within Tabs");

    const isActive = context.activeTab === value;

    return (
        <button
            data-state={isActive ? "active" : "inactive"}
            className={cn(
                "relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                isActive
                    ? "bg-white text-primary shadow-sm"
                    : "hover:bg-gray-200 hover:text-gray-700",
                className
            )}
            onClick={() => context.setActiveTab(value)}
        >
            {isActive && (
                <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-white rounded-md shadow-sm z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
            {children}
        </button>
    );
}

export function TabsContent({ value, children, className }: TabsContentProps) {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error("TabsContent must be used within Tabs");

    if (context.activeTab !== value) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={cn("mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2", className)}
        >
            {children}
        </motion.div>
    );
}
