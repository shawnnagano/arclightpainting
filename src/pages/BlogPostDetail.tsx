import { useLocation, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEOHead, { breadcrumbSchema, articleSchema } from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";

const BlogPostDetail = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const post = blogPosts.find((p) => p.slug === slug && p.content);

  if (!post || !post.content) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/${post.slug}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            url: `https://arclightpainting.com/${post.slug}`,
            author: {
              "@type": "Organization",
              name: "Arclight Painting",
            },
            publisher: {
              "@type": "Organization",
              name: "Arclight Painting",
              logo: {
                "@type": "ImageObject",
                url: "/images/wp-content/2020/09/ARCLIGHT-LOGO-long-version.png",
              },
            },
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/${post.slug}` },
          ]),
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[300px] md:min-h-[400px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${post.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:text-foreground prose-li:text-muted-foreground prose-img:rounded-xl prose-img:shadow-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <CTASection serviceName="House Painters" />
      <Footer />
    </div>
  );
};

export default BlogPostDetail;
