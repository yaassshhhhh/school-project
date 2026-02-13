"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button
                className="relative h-10 w-10 rounded-lg border border-border/40 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5"
                aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative h-10 w-10 rounded-lg border border-border/40 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:scale-105 active:scale-95"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <Sun className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100 text-oxford-gold transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 text-oxford-gold transition-all dark:rotate-0 dark:scale-100" />
        </button>
    )
}
