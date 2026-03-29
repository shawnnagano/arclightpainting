import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Frank B.",
    text: "Arclight did an exceptional job painting the interior of our home. Very professional crew, clean work, and the results were stunning. Highly recommend!",
  },
  {
    name: "Katia S.",
    text: "We hired Arclight to paint the exterior of our house and couldn't be happier. They were thorough, communicative, and the quality was top notch.",
  },
  {
    name: "Donna D.",
    text: "From start to finish, Arclight exceeded our expectations. The team was courteous, on time, and delivered beautiful results. Will definitely use again!",
  },
  {
    name: "Lauren B.",
    text: "Amazing experience! The crew was friendly and professional. Our cabinets look brand new. Arclight truly goes above and beyond.",
  },
  {
    name: "Margie C.",
    text: "Arclight Painting transformed our home! Excellent attention to detail and great communication throughout the project. Five stars all around!",
  },
  {
    name: "Linda C.",
    text: "Wonderful work by the Arclight team. They were respectful of our home, finished on schedule, and the paint job is flawless. Thank you!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
          See Why Customers Love <span className="text-accent">Arclight</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don't just take our word for it — hear from homeowners across Bothell and the
          greater Seattle area.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{t.text}"
                </p>
                <p className="font-bold text-sm">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
