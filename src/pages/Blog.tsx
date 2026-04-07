import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import BlueprintSection from "@/components/BlueprintSection";
import CTASection from "@/components/CTASection";

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const Blog = () => {
  return (
    <>
      <SEOHead
        title="Painting Tips & Insights Blog | Arclight Painting Bothell, WA"
        description="Expert painting tips, color inspiration, and home improvement insights from Arclight Painting — the #1-rated painting company in Bothell, WA."
        canonical="/blog"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[400px] md:min-h-[450px] overflow-hidden flex items-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/blog-hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] uppercase tracking-tight mb-4">
              Arclight <span className="text-accent">Painting</span> Blog
            </h1>
            <p className="text-xl md:text-2xl font-semibold">
              Tips, insights, and inspiration for your next painting project.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post, i) => {
                const isInternal = !!post.content;
                const CardWrapper = isInternal ? Link : "a";
                const cardProps = isInternal
                  ? { to: `/${post.slug}` }
                  : { href: post.externalUrl, target: "_blank", rel: "noopener noreferrer" };

                return (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <CardWrapper
                      {...(cardProps as any)}
                      className="group block bg-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-tight">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                        <span className="inline-block mt-3 text-accent font-semibold text-sm">
                          Read More →
                        </span>
                      </div>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <BlueprintSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
