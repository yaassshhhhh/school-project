import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SCHOOL_INFO } from "@/lib/constants";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 relative bg-white rounded-full p-1 flex items-center justify-center">
                                <img src="/images/logo.webp" alt="Logo" className="object-contain w-full h-full" />
                            </div>
                            <span className="text-xl font-bold font-serif">{SCHOOL_INFO.name}</span>
                        </div>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            Empowering students to become creative, confident, and compassionate leaders of tomorrow.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href={`mailto:${SCHOOL_INFO.email}`} className="text-primary-foreground/70 hover:text-secondary transition-colors"><Mail size={20} /></a>
                            <a href={SCHOOL_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-secondary transition-colors"><Facebook size={20} /></a>
                            <a href={SCHOOL_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-secondary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-secondary">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link href="/academics" className="hover:text-secondary transition-colors">Academics</Link></li>
                            <li><Link href="/admissions" className="hover:text-secondary transition-colors">Admissions</Link></li>
                            <li><Link href="/careers" className="hover:text-secondary transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Mandatory Disclosure */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-secondary">Compliance</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/mandatory-disclosure" className="hover:text-secondary transition-colors">Mandatory Disclosure</Link></li>
                            <li><Link href="/transfer-certificate" className="hover:text-secondary transition-colors">Transfer Certificates</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-secondary transition-colors">Terms of Use</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-secondary">Get in Touch</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                                <a
                                    href={SCHOOL_INFO.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-secondary transition-colors"
                                >
                                    {SCHOOL_INFO.address}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-secondary shrink-0" />
                                <span>{SCHOOL_INFO.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-secondary shrink-0" />
                                <span>{SCHOOL_INFO.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
                    <p>&copy; {currentYear} {SCHOOL_INFO.name}. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
