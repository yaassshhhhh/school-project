import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Changed Playfair_Display to EB_Garamond
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Oxford School - Best CBSE School in Burhanpur | English Medium",
    template: "%s | The Oxford School Burhanpur"
  },
  description: "Admissions Open! Join The Oxford School, the best CBSE English medium school in Burhanpur. Holistic education, safety & discipline for your child. Apply Now!",
  keywords: [
    "Best School in Burhanpur",
    "CBSE School Burhanpur",
    "English Medium School Burhanpur",
    "Top 10 Schools in Burhanpur",
    "Nursery School Burhanpur",
    "Higher Secondary School Burhanpur",
    "Naval Nagar School",
    "Mahakaushal Education Society",
    "Conseptual Learning School",
    "Safe School Burhanpur"
  ],
  authors: [{ name: "The Oxford School, Burhanpur" }],
  creator: "The Oxford School, Burhanpur",
  publisher: "The Oxford School, Burhanpur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    title: "The Oxford School - Best CBSE School in Burhanpur",
    description: "Admissions Open! Join The Oxford School, the best CBSE English medium school in Burhanpur. Holistic education, safety & discipline for your child.",
    siteName: "The Oxford School, Burhanpur",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "The Oxford School Burhanpur - Best CBSE School in Burhanpur, Madhya Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Oxford School - Best CBSE School in Burhanpur",
    description: "Admissions Open! Join The Oxford School, the best CBSE English medium school in Burhanpur.",
    images: [SITE_CONFIG.ogImage],
    creator: "@oxfordschool",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE", // Placeholder for actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          playfair.variable,
          "font-sans antialiased bg-background text-foreground flex flex-col min-h-screen"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange={false}
        >
          <StructuredData type="organization" />
          <Navbar />
          <main className="flex-grow pt-32">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
