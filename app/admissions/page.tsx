import { Metadata } from "next";
import { AdmissionsContent } from "@/components/admissions-content";

export const metadata: Metadata = {
    title: "Admissions | The Oxford School, Burhanpur",
    description: "Join our community. Review the admission process, eligibility criteria, and download application forms for the academic year 2026-27.",
};

export default function AdmissionsPage() {
    return <AdmissionsContent />;
}
