import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Frank B",
    location: "Bothell, WA",
    category: "House Painting",
    text: "From the initial quote appointment to the final walk through, this company, Arclight Painting, was a pleasure to work with. They were courteous and very communicative by texts and emails regarding our project! Even when there were glitches, they made it right and solved the problems. We were very happy with their work and do not hesitate to recommend them for jobs! They repaired areas so they're better than they were before! So much more than just new paint!",
  },
  {
    name: "Katia S",
    location: "Bothell, WA",
    category: "House Painting",
    text: "Daniel and Mark did an amazing job on my kitchen cabinets and island. They are both very professional, details oriented, the job was done in a timely manner. Great team and great company! I will not hesitate to use them again for a future project. Thank you again.",
  },
  {
    name: "Donna D",
    location: "Bothell, WA",
    category: "House Painting",
    text: "This Company sets the standard for Customer Service, Quality and Craftmanship! From the initial contact to project completion Arclight Painting communicated the timeline and expectations. Daily they arrived on time, cleaned up job site and provided the details on what the next day would hold. Locally owned and experienced team members, wouldn't hesitate to have them back!! Thank you Arclight our Exterior looks wonderful!!",
  },
  {
    name: "Lauren B",
    location: "Bothell, WA",
    category: "House Painting",
    text: "Friends we trust recommended Arclight and we couldn't have been happier with the result. This is THE BEST experience we have had with having work done on our house in the 11 years we have lived here. From the careful and detailed quote to the daily interactions with the team, we felt like Arclight was our partners in making our vision for our house become reality. We love the result and feel so lucky to have worked with them!",
  },
  {
    name: "Margie C",
    location: "Bothell, WA",
    category: "House Painting",
    text: "This company is very professional and organized. I felt that I was in good hands, and I was in good hands. Sandor was very pleasant and his work was meticulous. This was a small job: painting a door and the trim on some new windows. I am planning to use this company for some interior painting, and when my house exterior is repainted, I will probably use them as well. They really lived up to their A+ rating with the Better Business Bureau.",
  },
  {
    name: "Linda C",
    location: "Bothell, WA",
    category: "House Painting",
    text: "Roberto and Julio restored our Tigerwood deck including replacing some boards. They did a wonderful job. They were prompt, professional and efficient. Excellent communication throughout the project. Our deck looks like new!",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="review" className="py-20 bg-secondary relative">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path className="fill-secondary" d="M1000,4.3V100H0V4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
          See Why Customers <span className="text-accent">Love Arclight</span>
        </h2>

        {/* Slider */}
        <div className="max-w-2xl mx-auto relative">
          <div className="bg-card rounded-xl p-8 md:p-10 border border-border/50 shadow-lg text-center">
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote icon */}
            <Quote className="h-8 w-8 text-accent/30 mx-auto mb-4" />

            {/* Category */}
            <p className="font-bold text-sm mb-3">{t.category}</p>

            {/* Text */}
            <p className="text-muted-foreground leading-relaxed mb-6">{t.text}</p>

            {/* Author */}
            <p className="font-bold">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.location}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous review">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-accent" : "bg-border"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next review">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Read All Reviews */}
        <div className="text-center mt-8">
          <a href="https://arclightpainting.com/reviews/">
            <Button variant="outline" className="font-semibold">
              Read All Reviews
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
