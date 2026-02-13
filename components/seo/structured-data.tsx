import Script from 'next/script';
import { SCHOOL_INFO } from '@/lib/constants';

interface StructuredDataProps {
    type?: 'organization' | 'local-business' | 'educational' | 'breadcrumb';
    breadcrumbs?: { name: string; url: string }[];
}

export function StructuredData({ type = 'organization', breadcrumbs }: StructuredDataProps) {
    const baseUrl = 'https://theoxfordschoolburhanpur.com';

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "School",
        "@id": baseUrl,
        "name": "The Oxford School, Burhanpur",
        "alternateName": ["Oxford School Burhanpur", "TOS Burhanpur"],
        "url": baseUrl,
        "logo": `${baseUrl}/images/logo.webp`,
        "image": `${baseUrl}/images/school-building.jpg`, // Placeholder, assuming this exists or will exist
        "description": "The Oxford School is the best co-ed CBSE English medium school in Burhanpur, offering holistic education from Nursery to Class 12.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Naval Nagar, ZIRI",
            "addressLocality": "Burhanpur",
            "addressRegion": "Madhya Pradesh",
            "postalCode": "450331",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.3000", /* Updated to generic Burhanpur center or specific if known. Using previous approx or strategy's */
            "longitude": "76.2269"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9243944355",
            "contactType": "Admissions",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
            SCHOOL_INFO.social.facebook,
            SCHOOL_INFO.social.instagram
        ],
        "founder": {
            "@type": "Organization",
            "name": "Mahakaushal Education Society"
        },
        "foundingDate": "2002",
        "email": SCHOOL_INFO.email,
        "telephone": SCHOOL_INFO.phone,
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "14:30"
            }
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "The Oxford School, Burhanpur",
        "image": `${baseUrl}/images/logo.webp`,
        "@id": baseUrl,
        "url": baseUrl,
        "telephone": "+91-9243944355",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Naval Nagar, ZIRI",
            "addressLocality": "Burhanpur",
            "addressRegion": "MP",
            "postalCode": "450331",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.3089,
            "longitude": 76.2269
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "16:00"
        }
    };

    const breadcrumbSchema = breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${baseUrl}${crumb.url}`
        }))
    } : null;

    const getSchema = () => {
        switch (type) {
            case 'local-business':
                return localBusinessSchema;
            case 'breadcrumb':
                return breadcrumbSchema;
            case 'educational':
            case 'organization':
            default:
                return organizationSchema;
        }
    };

    const schema = getSchema();

    if (!schema) return null;

    return (
        <Script
            id={`structured-data-${type}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
