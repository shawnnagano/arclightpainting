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
  { name: "Ajili Hodari", date: "Mar 28, 2026", rating: 5, text: "Excellent painting with attention to detail. I highly recommend Arclight Painting for anyone looking for skilled professional painters!" },
  { name: "Dylan Martin", date: "Mar 13, 2026", rating: 5, text: "Great work as usual!" },
  { name: "Abby Cooper", date: "Feb 26, 2026", rating: 5, text: "Shawn did an amazing job! His work was excellent and he was very helpful. I would highly recommend him. He painted our ceilings which was not an easy job." },
  { name: "Mckinsley Reynolds III", date: "Jan 17, 2026", rating: 5, text: "I am very satisfied with the workmanship. Very detailed and professional. I will recommend to friends and family." },
  { name: "Laura Johnson", date: "Jan 13, 2026", rating: 5, text: "Vicente and his team are great! Highly recommend!" },
  { name: "Scott Miller", date: "Aug 4, 2025", rating: 5, text: "Sandor Kovacs was committed to doing a great job. He had an attention to detail in every aspect of the job from prep to clean up. We are very pleased with the outcome and will definitely ask for him again." },
  { name: "M S", date: "Jul 31, 2025", rating: 5, text: "Jennifer came out right away and was very thorough. Much of the communication was via text and email and response and followup was good. Ricardo and his painting team were excellent and took care in making the outside of our home look like new. We highly recommend Arclight for your painting needs." },
  { name: "Leslie W", date: "Jul 30, 2025", rating: 5, text: "We hired Arclight to paint the exterior of our house. Not only did they do a fantastic job but the people (Daniel, Shawn and Otneil) were so kind and considerate; really a pleasure to work with. Communication was excellent for the duration of the work and included daily email updates of what was completed that day and what they would work on the next day. When the job was completed, they did a walkthrough to identify any places to touchup or change. The entire jobsite was clean after they left." },
  { name: "Margie Calvert", date: "Jul 24, 2025", rating: 5, text: "This company is very professional and organized. I felt that I was in good hands, and I was in good hands. Sandor was very pleasant and his work was meticulous. This was a small job: painting a door and the trim on some new windows. I am planning to use this company for some interior painting, and when my house exterior is repainted, I will probably use them as well. They really lived up to their A+ rating with the Better Business Bureau." },
  { name: "Stephen McCallister", date: "Jul 6, 2025", rating: 5, text: "Arclight painted our house and stained our deck and a long fence. The job was completed well and looks great. The process wasn't without a bump along the way, after a couple days the crew working on the house literally disappeared. Jennifer, co-owner stopped by the house to explain they weren't employed with Arclight any more and a different crew was redirected to complete the job. They did a great job, even working the morning of the 4th of July to get it done in a reasonable time. Communication with Arclight was good through the whole process and I would be happy to use them again. Some times the best test of customer service is when something goes wrong and you get to see how a company recovers from the problem. In our case, Arclight passed that test with flying colors." },
  { name: "Gary Sharp", date: "Jun 27, 2025", rating: 4, text: "Our job was scheduled and performed in a hurry, which Arclight accommodated well. The exterior contractor was exceptional—Roberto was very diligent and dedicated to a high level of service. He was one of the best tradesmen I have ever witnessed in fact. There was an issue with communication between the crew and the office regarding what was to be done, but they did follow through nicely to make sure we were happy." },
  { name: "Lila Johnson", date: "Jun 19, 2025", rating: 5, text: "We are extremely satisfied with the painting of the exterior of our home. Your crew was very professional and answered all of our questions and concerns. We will definitely recommend you to any of our friends who are looking to paint their homes." },
  { name: "Valery Spivey", date: "Jun 19, 2025", rating: 5, text: "Roberto and his assistant did an absolutely amazing job! Our job took a few more hours than Roberto anticipated, because of some additional services that we asked for, but they were so good and provided services with a smile. I was very comfortable having them in my home, even when I was working. They were also very kind to our three dogs, even when they would occasionally serenade them with the song of their people (aka whining and barking)." },
  { name: "neljbo", date: "Jun 11, 2025", rating: 5, text: "Painting of 3 sides of my house went really well! The sales process was comfortable. Jennifer worked and educated me on paint colors, brands and sheens and dealt with numerous modifications of the original plan of what I wanted done. Carlos took it from there and coordinated all the prep, repair and painting. He was responsive to all my questions, and provided me daily feedback on what had been completed and what was left to do. Carlos was quick to respond to touch ups and get that completed the same day I sent it to him. Will use them for a couple more things I want to get done later this year." },
  { name: "Frank B", date: "2025", rating: 5, text: "From the initial quote appointment to the final walk through, this company, Arclight Painting, was a pleasure to work with. They were courteous and very communicative by texts and emails regarding our project! Even when there were glitches, they made it right and solved the problems. We were very happy with their work and do not hesitate to recommend them for jobs! They repaired areas so they're better than they were before! So much more than just new paint!" },
  { name: "Katia S", date: "2025", rating: 5, text: "Daniel and Mark did an amazing job on my kitchen cabinets and island. They are both very professional, details oriented, the job was done in a timely manner. Great team and great company! I will not hesitate to use them again for a future project. Thank you again." },
  { name: "Donna D", date: "2025", rating: 5, text: "This Company sets the standard for Customer Service, Quality and Craftsmanship! From the initial contact to project completion Arclight Painting communicated the timeline and expectations. Daily they arrived on time, cleaned up job site and provided the details on what the next day would hold. Locally owned and experienced team members, wouldn't hesitate to have them back!! Thank you Arclight our Exterior looks wonderful!!" },
  { name: "Lauren B", date: "2025", rating: 5, text: "Friends we trust recommended Arclight and we couldn't have been happier with the result. This is THE BEST experience we have had with having work done on our house in the 11 years we have lived here. From the careful and detailed quote to the daily interactions with the team, we felt like Arclight was our partners in making our vision for our house become reality. We love the result and feel so lucky to have worked with them! Ion and his team did the painting and Angel and his team removed the paint on the eaves and stained them (a truly grueling job). Remarkable work all around!" },
  { name: "Linda C", date: "2025", rating: 5, text: "Roberto and Julio restored our Tigerwood deck including replacing some boards. They did a wonderful job. They were prompt, professional and efficient. Excellent communication throughout the project. Our deck looks like new!" },
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
              <p className="text-sm text-muted-foreground">{totalReviews} reviews on Google</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">
                      {review.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
