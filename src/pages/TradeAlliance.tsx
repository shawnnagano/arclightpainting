import { useEffect, useState, type FormEvent } from "react";
import SEOHead from "@/components/SEOHead";
import { z } from "zod";
import { ArrowRight, BadgePercent, CheckCircle2, ClipboardList, Handshake, Home, ShieldCheck } from "lucide-react";
import TradeAllianceDirectory from "@/components/TradeAllianceDirectory";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import exteriorPhoto from "@/assets/exterior-painting-dark-craftsman-home-after.webp";
import veteranBadge from "@/assets/sba-veteran-owned-business-badge.webp";
import bbbBadge from "@/assets/bbb-accredited-business-badge-clean.png";

// GoHighLevel "Trade Alliance Form" — INLINE layout (converted from the sticky-sidebar embed).
const GHL_FORM_ID = "vbK5LJr8EIXFYGn1X6YB";
const GHL_IFRAME_ID = `inline-${GHL_FORM_ID}`;
const GHL_FORM_SRC = `https://link.arclightpainting.com/widget/form/${GHL_FORM_ID}`;
const GHL_EMBED_SCRIPT = "https://link.arclightpainting.com/js/form_embed.js";

const savings = "Save 5% when you hire an Arclight Trade Alliance partner.";
const services = ["Roofing", "Electrical", "General Contracting / Remodeling", "Gutters", "Drywall", "Wallpaper / Wallcovering", "Other / Not sure"] as const;
const timingOptions = ["As soon as possible", "Within 1 month", "1-3 months", "Just planning"] as const;
const benefits = [
  { icon: ShieldCheck, title: "Hand-Picked, Not Random", text: "We only recommend pros we've worked beside. Real people we know, not names from a search result." },
  { icon: Home, title: "One Call, Many Trades", text: "Skip the endless searching and bad reviews. Start with a team that already knows good people." },
  { icon: Handshake, title: "Same Standard as Arclight", text: "Honest, clean, and respectful of your home. The same care you'd expect from us." },
  { icon: BadgePercent, title: "5% Savings", text: "A thank-you for keeping it local. Good work, good neighbors, and a little more in your pocket." },
];
const steps = [
  { icon: ClipboardList, title: "Tell Us What You Need", text: "Pick the service and share a few details about your project." },
  { icon: Handshake, title: "We Connect You", text: "We introduce you to the right Alliance partners that match your needs." },
  { icon: BadgePercent, title: "Save 5%", text: "Mention the Arclight Trade Alliance when you hire them." },
];
const schema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  phone: z.string().trim().regex(/^[+()\d\s.\-]+$/, "Enter a valid phone number").refine(value => value.replace(/\D/g, "").length >= 7, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  city: z.string().trim().min(1, "City or ZIP is required").max(100),
  service: z.enum(services, { errorMap: () => ({ message: "Please choose a service" }) }),
  other: z.string().trim().max(500),
}).refine(value => value.service !== "Other / Not sure" || value.other.length > 0, { path: ["other"], message: "Tell us what you need" });

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
const FindButton = () => <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 whitespace-normal h-auto min-h-11" onClick={() => scrollTo("find-a-pro")}>Find a Trusted Pro <ArrowRight className="h-4 w-4 shrink-0" /></Button>;

function GhlFormEmbed() {
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = GHL_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <iframe
    src={GHL_FORM_SRC}
    style={{ width: "100%", height: "100%", border: "none", borderRadius: 8, minHeight: 1000 }}
    id={GHL_IFRAME_ID}
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Trade Alliance Form"
    data-height="1000"
    data-layout-iframe-id={GHL_IFRAME_ID}
    data-form-id={GHL_FORM_ID}
    title="Trade Alliance Form"
  />;
}

/** ROLLBACK ONLY — original preview-only form, not rendered. Swap <GhlFormEmbed /> for <LegacyHomeownerForm /> to restore. */
export function LegacyHomeownerForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", service: "", other: "", timing: "", details: "", painting: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const set = (key: Exclude<keyof typeof form, "painting">, value: string) => setForm(current => ({ ...current, [key]: value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach(issue => { next[String(issue.path[0])] ??= issue.message; });
      setErrors(next);
      requestAnimationFrame(() => document.getElementById(`pro-${Object.keys(next)[0]}`)?.focus());
      return;
    }
    setErrors({});
    setSubmitted(true);
  };
  const error = (key: string) => errors[key] ? <p id={`error-${key}`} className="mt-1 text-sm text-destructive" role="alert">{errors[key]}</p> : null;
  const field = (key: "name" | "phone" | "email" | "city" | "other", label: string, type = "text", autoComplete?: string) => <div>
    <Label htmlFor={`pro-${key}`}>{label} <span className="text-accent">*</span></Label>
    <Input id={`pro-${key}`} type={type} autoComplete={autoComplete} required value={form[key]} onChange={event => set(key, event.target.value)} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `error-${key}` : undefined} className="mt-2" />
    {error(key)}
  </div>;

  return submitted ? <div role="status" className="py-8"><CheckCircle2 className="mb-4 h-12 w-12 text-accent" /><p className="text-xl font-semibold">Thanks! We'll connect you with the right Alliance partner within 2 business days.</p></div> : <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-5">
    {field("name", "Full Name", "text", "name")}{field("phone", "Phone", "tel", "tel")}{field("email", "Email", "email", "email")}{field("city", "City or ZIP", "text", "address-level2")}
    <div className="sm:col-span-2"><Label htmlFor="pro-service">What service do you need? <span className="text-accent">*</span></Label><Select value={form.service} onValueChange={value => set("service", value)} required><SelectTrigger id="pro-service" className="mt-2" aria-invalid={!!errors.service} aria-describedby={errors.service ? "error-service" : undefined}><SelectValue placeholder="Select a service" /></SelectTrigger><SelectContent>{services.map(service => <SelectItem key={service} value={service}>{service}</SelectItem>)}</SelectContent></Select>{error("service")}</div>
    {form.service === "Other / Not sure" && <div className="sm:col-span-2">{field("other", "Tell us what you need")}</div>}
    <div className="sm:col-span-2"><Label htmlFor="pro-timing">When do you need it?</Label><Select value={form.timing} onValueChange={value => set("timing", value)}><SelectTrigger id="pro-timing" className="mt-2"><SelectValue placeholder="Select a timeframe" /></SelectTrigger><SelectContent>{timingOptions.map(timing => <SelectItem key={timing} value={timing}>{timing}</SelectItem>)}</SelectContent></Select></div>
    <div className="sm:col-span-2"><Label htmlFor="pro-details">Project details <span className="font-normal text-muted-foreground">(optional)</span></Label><Textarea id="pro-details" rows={4} maxLength={4000} value={form.details} onChange={event => set("details", event.target.value)} className="mt-2" /></div>
    <div className="sm:col-span-2 flex items-start gap-3"><Checkbox id="pro-painting" checked={form.painting} onCheckedChange={value => setForm(current => ({ ...current, painting: value === true }))} /><Label htmlFor="pro-painting" className="leading-relaxed -mt-1">I'm also interested in a painting quote from Arclight</Label></div>
    <Button type="submit" size="lg" className="sm:col-span-2 w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2 whitespace-normal h-auto min-h-11">Connect Me With a Pro <ArrowRight className="h-4 w-4 shrink-0" /></Button>
  </form>;
}

export default function TradeAlliance() {
  return <div className="min-h-screen bg-background text-foreground">
    <SEOHead
      title="Trade Alliance | Trusted Home Service Pros | Arclight Painting"
      description="Need a roofer, electrician or contractor you can trust? Get matched with a vetted Arclight Trade Alliance partner near Bothell and save 5%."
      canonical="/trade-alliance"
    />
    <Header />
    <main>
      <section className="relative isolate overflow-hidden">
        <img src={exteriorPhoto} alt="A finished Arclight exterior painting project in the Bothell area" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/20" />
        <div className="container relative mx-auto px-4 py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase text-accent">Arclight Trade Alliance · For Homeowners</p>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1.08]">Your Whole-Home Team, <span className="text-accent">Already Vetted</span></h1>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed">Need a roofer, electrician or contractor you can actually trust? Tap the Arclight Trade Alliance and save 5%.</p>
            <div className="mt-8 flex flex-wrap gap-3"><FindButton /><Button size="lg" variant="outline" className="bg-background/90" onClick={() => scrollTo("how-it-works")}>How It Works</Button></div>
            <p className="mt-8 font-semibold">Good People know <span className="text-accent">Good People</span></p>
          </div>
        </div>
      </section>

      <section className="border-y border-accent/25 bg-accent/5 py-6">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <BadgePercent className="h-10 w-10 shrink-0 text-accent" />
          <div><p className="text-lg md:text-xl font-bold">Save <span className="text-accent">5%</span> when you hire an Arclight Trade Alliance partner.</p></div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl md:text-4xl font-bold">Why Homeowners <span className="text-accent">Love the Alliance</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-lg border border-border bg-card p-6"><Icon className="mb-5 h-9 w-9 text-accent" /><h3 className="mb-3 text-xl font-bold">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-32 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold">How It <span className="text-accent">Works</span></h2>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map(({ icon: Icon, title, text }, index) => <div key={title} className="text-center"><div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary"><Icon className="h-8 w-8 text-accent" /><span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">{index + 1}</span></div><h3 className="mb-3 text-xl font-bold">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="find-a-pro" className="scroll-mt-32 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div><h2 className="text-3xl md:text-4xl font-bold mb-4">Find a <span className="text-accent">Trusted Pro</span></h2><p className="text-muted-foreground leading-relaxed mb-8">Your next home project starts with a good connection. Tell us what you have in mind—we'll help you find the right people.</p><aside className="rounded-lg border-2 border-accent bg-accent/5 p-6"><BadgePercent className="mb-3 h-10 w-10 text-accent" /><p className="text-xl font-bold">{savings}</p></aside></div>
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <GhlFormEmbed />
            </div>
          </div>
        </div>
      </section>

      <TradeAllianceDirectory />

      <section className="border-b border-border bg-secondary py-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div><h2 className="text-2xl font-bold">Rooted Here. <span className="text-accent">Trusted Here.</span></h2><p className="mt-2 text-sm text-muted-foreground">Arclight Painting · Veteran-owned. Community-minded.</p></div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              { src: bbbBadge, alt: "Arclight Painting: BBB Accredited Business" },
              { src: "/images/bothell-kenmore-chamber-of-commerce-logo.webp", alt: "Arclight Painting: Bothell-Kenmore Chamber member" },
              { src: veteranBadge, alt: "Arclight Painting: SBA-certified veteran-owned business" },
            ].map(badge => <div key={badge.alt} className="flex h-28 w-40 items-center justify-center rounded-lg border border-border bg-card p-3 shadow-sm">
              <img src={badge.src} alt={badge.alt} loading="lazy" className="h-20 w-32 object-contain" />
            </div>)}
          </div>
        </div>
      </section>

    </main>
    <Footer />
  </div>;
}