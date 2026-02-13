import { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";

export const metadata: Metadata = {
    title: "Contact Us | The Oxford School, Burhanpur",
    description: "Get in touch with us. View our location, contact details, and office hours.",
};

export default function ContactPage() {
    return <ContactContent />;
}
