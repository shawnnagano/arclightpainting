import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Star } from "lucide-react";

const reviews = [
  { name: "Ajili Hodari", date: "Mar 28, 2026", rating: 5, text: "Excellent painting with attention to detail. I highly recommend Arclight Painting for anyone looking for skilled professional painters!" },
  { name: "Dylan Martin", date: "Mar 13, 2026", rating: 5, text: "Great work as usual!" },
  { name: "Abby Cooper", date: "Feb 26, 2026", rating: 5, text: "Shawn did an amazing job! His work was excellent and he was very helpful. I would highly recommend him. He painted our ceilings which was not an easy job." },
  { name: "Mckinsley Reynolds III", date: "Jan 17, 2026", rating: 5, text: "I am very satisfied with the workmanship. Very detailed and professional. I will recommend to friends and family." },
  { name: "Laura Johnson", date: "Jan 13, 2026", rating: 5, text: "Vicente and his team are great! Highly recommend!" },
  { name: "Scott Miller", date: "Aug 4, 2025", rating: 5, text: "Sandor Kovacs was committed to doing a great job. He had an attention to detail in every aspect of the job from prep to clean up. We are very pleased with the outcome and will definitely ask for him again." },
  { name: "M S", date: "Jul 31, 2025", rating: 5, text: "Jennifer came out right away and was very thorough. Ricardo and his painting team were excellent and took care in making the outside of our home look like new. We highly recommend Arclight for your painting needs." },
  { name: "Leslie W", date: "Jul 30, 2025", rating: 5, text: "We hired Arclight to paint the exterior of our house. Not only did they do a fantastic job but the people were so kind and considerate; really a pleasure to work with." },
  { name: "Margie Calvert", date: "Jul 24, 2025", rating: 5, text: "This company is very professional and organized. Sandor was very pleasant and his work was meticulous. They really lived up to their A+ rating with the Better Business Bureau." },
  { name: "Lila Johnson", date: "Jun 19, 2025", rating: 5, text: "We are extremely satisfied with the painting of the exterior of our home. Your crew was very professional and answered all of our questions and concerns." },
  { name: "Valery Spivey", date: "Jun 19, 2025", rating: 5, text: "Roberto and his assistant did an absolutely amazing job! They were so good and provided services with a smile. I was very comfortable having them in my home." },
  { name: "neljbo", date: "Jun 11, 2025", rating: 5, text: "Painting of 3 sides of my house went really well! Jennifer educated me on paint colors, brands and sheens. Carlos coordinated all the prep, repair and painting. Will use them again." },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-2">
            Customer <span className="text-accent">Reviews</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-5xl font-black">5.00</span>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm opacity-80">269 reviews</p>
            </div>
          </div>
          <p className="mt-4 opacity-80 max-w-lg mx-auto">
            See what our clients have to say about their experience working with us—from quality to results, their words speak for themselves.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">
                      {review.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <img
                    src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                    alt="Google"
                    className="h-5 w-5 ml-auto"
                  />
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
