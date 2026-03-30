import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Top 10 Questions to Ask Your Local Commercial Painters",
    excerpt: "Hiring local commercial painters is a strategic decision. These 10 essential questions help you assess experience, transparency, and quality before committing.",
    image: "https://arclightpainting.com/wp-content/uploads/2026/01/local-commercial-painters-300x169.jpg",
    slug: "local-commercial-painters",
    externalUrl: "https://arclightpainting.com/local-commercial-painters/",
  },
  {
    title: "How to Paint a Room: A Step-by-Step Guide for a Polished Finish",
    excerpt: "Learning how to paint a room the right way goes beyond applying color to the walls. This step-by-step guide explains everything you need to know.",
    image: "https://arclightpainting.com/wp-content/uploads/2026/01/how-to-paint-a-room-300x169.jpg",
    slug: "how-to-paint-a-room",
    externalUrl: "https://arclightpainting.com/how-to-paint-a-room/",
  },
  {
    title: "Essential Commercial Painting Cost Insights: What Businesses Need To Know",
    excerpt: "A commercial painting cost varies based on building size, surface preparation, paint systems, and operational considerations.",
    image: "https://arclightpainting.com/wp-content/uploads/2026/01/commercial-painting-cost-300x169.jpg",
    slug: "commercial-painting-cost",
    externalUrl: "https://arclightpainting.com/commercial-painting-cost/",
  },
  {
    title: "Bad Paint Job: Why Interior Painting Quality Matters for Your Home",
    excerpt: "A bad paint job reflects missed steps, not bad luck. This article explains how preparation, product selection, and proper application make all the difference.",
    image: "https://arclightpainting.com/wp-content/uploads/2026/01/bad-paint-job-300x169.jpg",
    slug: "bad-paint-job",
    externalUrl: "https://arclightpainting.com/bad-paint-job/",
  },
  {
    title: "Small House Color Ideas to Make Every Room Feel Brighter, Bigger, and More Stylish",
    excerpt: "Transform your compact spaces with the right small house color ideas. From crisp whites and light greys to soft blues, discover colors that open up any room.",
    image: "https://arclightpainting.com/wp-content/uploads/2025/12/small-house-color-ideas-300x169.png",
    slug: "small-house-color-ideas",
    externalUrl: "https://arclightpainting.com/small-house-color-ideas/",
  },
  {
    title: "5 Types of Commercial Painting Services to Boost Curb Appeal, Branding, and Property Value",
    excerpt: "Understanding the types of commercial painting services available helps business owners improve curb appeal, reinforce branding, and protect long-term property value.",
    image: "https://arclightpainting.com/wp-content/uploads/2025/12/types-of-commercial-painting-services-300x169.jpg",
    slug: "types-of-commercial-painting-services",
    externalUrl: "https://arclightpainting.com/types-of-commercial-painting-services/",
  },
  {
    title: "The Power of Color Psychology in Commercial Painting: How It Impacts Your Business",
    excerpt: "Color plays a powerful role in shaping how people think, feel, and behave inside your business. Learn how to use color psychology to your advantage.",
    image: "https://arclightpainting.com/wp-content/uploads/2025/11/arclight-painting-5-300x169.jpg",
    slug: "color-psychology-in-commercial-painting",
    externalUrl: "https://arclightpainting.com/color-psychology-in-commercial-painting/",
  },
  {
    title: "Protect Your Investment: Peeling Paint in Commercial Buildings and How to Fix It",
    excerpt: "Peeling paint in commercial buildings is more than a cosmetic issue — it's a warning sign. Learn the causes and professional solutions.",
    image: "https://arclightpainting.com/wp-content/uploads/2025/11/arclight-painting-6-300x169.jpg",
    slug: "peeling-paint-in-commercial-buildings",
    externalUrl: "https://arclightpainting.com/peeling-paint-in-commercial-buildings/",
  },
  {
    title: "How Long After Painting Can I Sleep in the Room? 4 Expert Tips",
    excerpt: "Wondering how long after painting can I sleep in the room? Get expert tips for a healthier space after a fresh paint job.",
    image: "https://arclightpainting.com/wp-content/uploads/2025/10/how-long-after-painting-can-i-sleep-in-the-room-300x206.png",
    slug: "how-long-after-painting-can-i-sleep-in-the-room",
    externalUrl: "https://arclightpainting.com/how-long-after-painting-can-i-sleep-in-the-room/",
  },
];

const Blog = () => {
  return (
    <>
      <SEOHead
        title="Painting Tips & Insights Blog | Arclight Painting Bothell, WA"
        description="Expert painting tips, color inspiration, and home improvement insights from Arclight Painting — the #1-rated painting company in Bothell, WA."
        canonical="/blog"
        structuredData={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              Arclight Painting Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/80"
            >
              Tips, insights, and inspiration for your next painting project.
            </motion.p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <motion.a
                  key={post.slug}
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
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
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
