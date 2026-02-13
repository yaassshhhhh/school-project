"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DISCLOSURE_DOCUMENTS } from "@/lib/disclosure-data";


interface NavItem {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
}

const navLinks: NavItem[] = [
    { href: "/", label: "Home" },
    {
        href: "/about",
        label: "About Us",
        children: [
            { label: "Why Oxford", href: "/about/why-oxford" },
            { label: "Our Campus", href: "/about/our-campus" },
        ]
    },
    {
        href: "/academics",
        label: "Academics",
        children: [
            { label: "Pre-Primary", href: "/academics/pre-primary" },
            { label: "Primary", href: "/academics/primary" },
            { label: "Secondary", href: "/academics/secondary" },
            { label: "High Secondary", href: "/academics/high-secondary" },
        ]
    },
    {
        href: "/admissions",
        label: "Admissions",
        children: [
            { label: "Admission Procedure", href: "/admissions/procedure" },
            { label: "Admission Form", href: "/admissions/form" },
        ]
    },
    { href: "/transfer-certificate", label: "Transfer Certificates" },
    { href: "/gallery", label: "Home Gallery" },
    { href: "/contact", label: "Contact" },
    {
        href: "#",
        label: "Mandatory Disclosure",
        children: DISCLOSURE_DOCUMENTS.map(doc => ({
            label: doc.title,
            href: `/mandatory-disclosure/${doc.slug}`
        }))
    },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setHoveredLink(null);
        setOpenMobileDropdown(null);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/98 backdrop-blur-md shadow-md border-b border-secondary/20"
                    : "bg-background/95 backdrop-blur-sm border-b border-secondary/10"
            )}
            onMouseLeave={() => setHoveredLink(null)}
        >
            {/* Main Navbar Container */}
            <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo Section */}
                    <Link
                        href="/"
                        className="flex items-center shrink-0 z-50"
                        aria-label="The Oxford School Home"
                    >
                        <div className="relative h-12 w-12 transition-transform duration-300 hover:scale-105">
                            <img
                                src="/images/logo.webp"
                                alt="The Oxford School Logo"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav
                        className="hidden lg:flex items-center gap-4 h-full flex-1 justify-center"
                        role="navigation"
                        aria-label="Main navigation"
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative h-full flex items-center"
                                onMouseEnter={() => setHoveredLink(link.label)}
                            >
                                <Link
                                    href={link.children ? "#" : link.href}
                                    className={cn(
                                        "text-[12px] font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-200 relative flex items-center gap-1 px-2 py-2",
                                        "hover:text-[#C9A24D] focus:text-[#C9A24D] focus:outline-none focus:ring-2 focus:ring-[#C9A24D]/30 rounded",
                                        pathname.startsWith(link.href) && link.href !== "/"
                                            ? "text-[#C9A24D]"
                                            : "text-[#7A2E1F]"
                                    )}
                                    onClick={(e) => link.children && e.preventDefault()}
                                    aria-haspopup={link.children ? "true" : undefined}
                                    aria-expanded={link.children && hoveredLink === link.label ? "true" : "false"}
                                >
                                    {link.label}
                                    {link.children && (
                                        <ChevronDown
                                            suppressHydrationWarning
                                            className={cn(
                                                "h-3 w-3 transition-transform duration-200",
                                                hoveredLink === link.label && "rotate-180"
                                            )}
                                        />
                                    )}
                                </Link>

                                {/* Desktop Dropdown Menu */}
                                {link.children && hoveredLink === link.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-1 w-56 bg-background border border-secondary/20 shadow-xl rounded-lg overflow-hidden z-50"
                                    >
                                        <div className="py-1">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className={cn(
                                                        "block px-4 py-2.5 text-sm font-medium transition-all duration-150",
                                                        "hover:bg-[#C9A24D]/10 hover:text-[#7A2E1F] hover:pl-5",
                                                        pathname === child.href
                                                            ? "bg-[#C9A24D]/10 text-[#7A2E1F] border-l-4 border-[#C9A24D]"
                                                            : "text-[#0F2437]"
                                                    )}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Section */}
                    <div className="flex items-center gap-3 shrink-0">
                        {/* Desktop CTA + Theme Toggle */}
                        <div className="hidden lg:flex items-center gap-3">

                            <Link href="/admissions/form">
                                <button
                                    className="bg-[#C9A24D] hover:bg-[#B8923D] text-[#7A2E1F] font-bold uppercase tracking-wide shadow-md hover:shadow-lg transition-all duration-300 px-5 py-2.5 rounded-md text-sm"
                                >
                                    Apply Now
                                </button>
                            </Link>
                        </div>

                        {/* Mobile CTA + Theme Toggle + Hamburger */}
                        <div className="flex lg:hidden items-center gap-2">

                            <Link href="/admissions/form">
                                <button
                                    className="bg-[#C9A24D] hover:bg-[#B8923D] text-[#7A2E1F] font-bold uppercase tracking-wide shadow-md px-3 py-2 rounded-md text-xs"
                                >
                                    Apply
                                </button>
                            </Link>
                            <button
                                className="p-2 text-[#7A2E1F] hover:text-[#C9A24D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A24D]/30 rounded"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label={isOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isOpen}
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-background border-t border-secondary/20 shadow-xl overflow-y-auto max-h-[calc(100vh-64px)]"
                    >
                        <div className="px-4 sm:px-6 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.label} className="border-b border-[#C9A24D]/10 last:border-0">
                                    {/* Mobile Nav Link */}
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={link.children ? "#" : link.href}
                                            className={cn(
                                                "flex-1 text-base font-semibold py-3 px-3 rounded-md transition-all duration-200",
                                                "hover:bg-[#C9A24D]/10 hover:text-[#7A2E1F]",
                                                pathname === link.href && !link.children
                                                    ? "text-[#C9A24D] bg-[#C9A24D]/10"
                                                    : "text-[#0F2437]"
                                            )}
                                            onClick={(e) => {
                                                if (link.children) {
                                                    e.preventDefault();
                                                    setOpenMobileDropdown(
                                                        openMobileDropdown === link.label ? null : link.label
                                                    );
                                                }
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                        {link.children && (
                                            <button
                                                className="p-3 text-[#7A2E1F] hover:text-[#C9A24D] transition-colors"
                                                onClick={() => setOpenMobileDropdown(
                                                    openMobileDropdown === link.label ? null : link.label
                                                )}
                                                aria-label={`Toggle ${link.label} submenu`}
                                            >
                                                <ChevronDown
                                                    suppressHydrationWarning
                                                    className={cn(
                                                        "h-5 w-5 transition-transform duration-200",
                                                        openMobileDropdown === link.label && "rotate-180"
                                                    )}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Submenu */}
                                    <AnimatePresence>
                                        {link.children && openMobileDropdown === link.label && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="pl-4 pb-2 space-y-1 bg-[#F6F1E7]/50 rounded-md ml-3 border-l-4 border-[#C9A24D]"
                                            >
                                                {link.children.map(child => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={cn(
                                                            "block text-sm font-medium py-2.5 px-4 rounded-md transition-all duration-150",
                                                            "hover:bg-white hover:text-[#7A2E1F] hover:pl-5",
                                                            pathname === child.href
                                                                ? "text-[#C9A24D] bg-white"
                                                                : "text-[#0F2437]/80"
                                                        )}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
