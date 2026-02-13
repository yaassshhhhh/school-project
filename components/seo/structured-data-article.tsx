import { BlogPost } from "@/lib/seo-content";

export function StructuredDataArticle({ blog }: { blog: BlogPost }) {
    // 1. Article Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog.title,
        "description": blog.description,
        "image": blog.image.startsWith("http") ? blog.image : `https://theoxfordschoolburhanpur.com${blog.image}`, // Fallback url
        "author": {
            "@type": "Organization",
            "name": blog.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "The Oxford School, Burhanpur",
            "logo": {
                "@type": "ImageObject",
                "url": "https://theoxfordschoolburhanpur.com/logo.png" // Replace with actual logo URL if available
            }
        },
        "datePublished": blog.publishDate,
        "dateModified": blog.modifiedDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://theoxfordschoolburhanpur.com/insights/${blog.slug}`
        }
    };

    // 2. FAQ Schema (if FAQs exist)
    const faqSection = blog.content.find(c => c.type === 'faq');
    let faqSchema = null;

    if (faqSection && faqSection.questions) {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSection.questions.map(q => ({
                "@type": "Question",
                "name": q.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.a
                }
            }))
        };
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
        </>
    );
}
