import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Guaranteed <span className="text-accent">Peace of Mind</span>
        </h2>

        <div className="max-w-3xl mx-auto mt-6 mb-8">
          <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border/50">
            <ShieldCheck className="h-10 w-10 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Your Peace of Mind Is Part of the Deal</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Arclight Painting, we don't just aim for satisfaction—we aim for delight. That's why we back every project with our <Link to="/mission#satisfaction-guarantee" className="text-accent font-semibold hover:underline">100% Satisfaction Guarantee</Link>.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center font-bold mt-8 max-w-2xl mx-auto">
          Your home deserves the <span className="text-accent">highest standard</span>. Your experience should be <span className="text-accent">hassle-free</span>. And your project isn't done until you're <span className="text-accent">truly satisfied</span>—GUARANTEED.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
