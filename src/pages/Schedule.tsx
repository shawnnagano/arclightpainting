import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Schedule = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", address: "", city: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Quote Request Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", address: "", city: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <section className="bg-primary py-16 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-background rounded-2xl shadow-2xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-black text-center mb-2">
              Get A <span className="text-accent">Fast</span> Quote!
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              For Immediate Assistance Call{" "}
              <a href="tel:14257571199" className="font-bold text-accent hover:underline">(425) 757-1199</a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Tell us about your project</Label>
                <Textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Describe what you'd like painted, approximate square footage, etc." />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg">
                Request My Free Quote
              </Button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Phone className="h-4 w-4" />
              <span>Or call us directly: <a href="tel:14257571199" className="font-bold text-accent">(425) 757-1199</a></span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
