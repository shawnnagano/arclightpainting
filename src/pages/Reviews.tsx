import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

type Review = {
  name: string;
  rating: number;
  text: string;
  date: string;
};

const reviews: Review[] = [
  { name: "Ajili Hodari", date: "a week ago", rating: 5, text: "Excellent painting with attention to detail. I highly recommend Arclight Painting for anyone looking for skilled professional painters!" },
  { name: "Dylan Martin", date: "2 weeks ago", rating: 5, text: "Great work as usual!" },
  { name: "Abby Cooper", date: "a month ago", rating: 5, text: "Shawn did an amazing job! His work was excellent and he was very helpful. I would highly recommend him. He painted our ceilings which was not an easy job." },
  { name: "Mckinsley Reynolds III", date: "2 months ago", rating: 5, text: "I am very satisfied with the workmanship. Very detailed and professional. I will recommend to friends and family." },
  { name: "Laura Johnson", date: "2 months ago", rating: 5, text: "Vicente and his team are great! Highly recommend!" },
];

const overallRating = 4.9;
const totalReviews = 269;

const Reviews = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with background image */}
      <section className="relative min-h-[350px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://arclightpainting.com/wp-content/uploads/2025/08/house-painting-service-company-near-me-in-bothell-wa-075.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <h1 className="text-4xl md:text-5xl font-black mb-2">
            Customer <span className="text-accent">Reviews</span>
          </h1>
          <div className="flex items-center gap-3 mt-6">
            <span className="text-5xl font-black">{overallRating.toFixed(1)}</span>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(overallRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{totalReviews} reviews</p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground max-w-lg">
            See what our clients have to say about their experience working with us—from quality to results, their words speak for themselves.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {review.profilePhoto ? (
                      <img src={review.profilePhoto} alt={review.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">
                          {review.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="Google" className="h-5 w-5 ml-auto" />
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
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
