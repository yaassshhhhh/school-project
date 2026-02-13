import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SEO_BLOGS } from "@/lib/seo-content";
import { StructuredDataArticle } from "@/components/seo/structured-data-article";
import Link from "next/link";
import { ArrowLeft, Clock, User, ChevronRight } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

// 1. Generate Metadata dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = SEO_BLOGS.find((b) => b.slug === params.slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.description,
      publishedTime: blog.publishDate,
      modifiedTime: blog.modifiedDate,
      authors: [blog.author],
      url: `https://theoxfordschoolburhanpur.com/insights/${blog.slug}`,
    },
    alternates: {
      canonical: `/insights/${blog.slug}`
    }
  };
}

// 2. Generate Static Params for build time optimization
export function generateStaticParams() {
  return SEO_BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  const blog = SEO_BLOGS.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="font-sans text-[#0F2437]">
      {/* JSON-LD Schema */}
      <StructuredDataArticle blog={blog} />

      {/* Breadcrumb / Back Link */}
      <div className="mb-8">
        <Link href="/insights" className="inline-flex items-center text-[#7A2E1F] font-semibold hover:underline">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Knowledge Hub
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6 text-[#0F2437]">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 border-b border-gray-200 pb-8">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1 text-[#C9A24D]" />
            <span className="font-medium">{blog.author}</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-[#C9A24D]" />
            <time dateTime={blog.publishDate}>{blog.publishDate}</time>
          </div>
        </div>
      </header>

      <div className="lg:flex lg:gap-12">
        {/* Table of Contents (Sidebar on Desktop) */}
        <aside className="hidden lg:block w-1/4 shrink-0">
          <div className="sticky top-32 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-serif text-lg font-bold mb-4 text-[#7A2E1F]">On this page</h4>
            <nav className="space-y-3">
              {blog.toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-600 hover:text-[#C9A24D] transition-colors leading-relaxed"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-none prose prose-lg prose-headings:font-serif prose-headings:text-[#0F2437] prose-a:text-[#7A2E1F] prose-li:marker:text-[#C9A24D]">

          {/* Mobile TOC */}
          <div className="lg:hidden mb-10 p-5 bg-[#F6F1E7]/50 rounded-lg border border-[#C9A24D]/20">
            <h4 className="font-bold text-[#7A2E1F] mb-3">Table of Contents</h4>
            <nav className="space-y-2">
              {blog.toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="flex items-start text-sm text-gray-700">
                  <ChevronRight className="w-4 h-4 mr-1 mt-0.5 text-[#C9A24D] shrink-0" /> {item.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Dynamic Sections */}
          {blog.content.map((block, index) => {
            switch (block.type) {
              case 'h2':
                return <h2 key={index} id={block.id} className="text-3xl font-bold mt-12 mb-6 scroll-mt-32">{block.text}</h2>;

              case 'h3':
                return <h3 key={index} id={block.id} className="text-2xl font-bold mt-8 mb-4">{block.text}</h3>;

              case 'p':
                return <p key={index} className="text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: block.text?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') || '' }} />;

              case 'ul':
                return (
                  <ul key={index} className="space-y-3 mb-8 ml-4">
                    {block.items?.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="mr-3 text-[#C9A24D] text-xl leading-none">•</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                );

              case 'faq':
                return (
                  <div key={index} className="mt-8 space-y-4">
                    {block.questions?.map((q, i) => (
                      <div key={i} className="bg-white border text-left border-gray-100 rounded-lg p-6 shadow-sm">
                        <h4 className="font-bold text-lg text-[#0F2437] mb-2">{q.q}</h4>
                        <p className="text-gray-600">{q.a}</p>
                      </div>
                    ))}
                  </div>
                );

              default:
                return null;
            }
          })}

          {/* CTA at the bottom */}
          <div className="mt-16 p-8 bg-[#0F2437] rounded-2xl text-white text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Give Your Child the Oxford Advantage</h3>
            <p className="text-gray-300 mb-6">Admissions are open for the upcoming academic session. Secure your child&apos;s future today.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/admissions" className="px-6 py-3 bg-[#C9A24D] text-[#0F2437] font-bold rounded-md hover:bg-white transition-colors">
                Apply for Admission
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
