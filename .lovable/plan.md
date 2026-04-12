

# Rewrite FAQ Answers for AEO-First Format

## Problem
17 FAQ answers across generalFAQ, service cost questions, and colorConsultationFAQ don't lead with a direct answer in the first sentence — hurting visibility in AI-generated answers and Google featured snippets.

## File to Edit
`src/data/faqData.ts` — rewrites only, no structural changes.

## Exact Rewrites

### generalFAQ

**Q7 — "How soon can you start?"**
> "Most projects can be scheduled within one to three weeks, depending on the season, project size, and current workload. We will give you the most accurate timeline during your estimate."

**Q8 — "How long will my project take?"**
> "Most interior painting projects take two to five days, and exterior projects may take three to seven days or more depending on size, prep, and weather. With PowerFlex™ Scheduling, we turn that into a clear, realistic plan — using accurate labor forecasting, smart crew sizing, and professional coordination built around your calendar."

**Q9 — "How do I choose the right paint colors?"**
> "Start with a ColorConfidence™ Consultation — a guided process that includes expert color selection, visual mockups of your real home, custom color matching, and on-site test patches when needed. You will also receive a full ColorConfidence™ Blueprint with your final color specs and placement plan, so you can choose confidently and paint beautifully."

**Q10 — "How much will painting my house cost?"**
> "The cost depends on the size of your home, the condition of the surfaces, and the scope of work involved. Every TrueQuote™ is built around your specific project with clear, itemized pricing and no hidden fees. Visit our Pricing Page for more details, or use our Pricing Calculator for a quick ballpark estimate."

### All 7 Service Cost Questions (interior, exterior, cabinet, drywall, pressure-washing, commercial, popcorn)
Replace the identical template with an AEO-first version per service:

> "The cost of [service] depends on the size of the project, the condition of the surfaces, and the scope of work involved. Every TrueQuote™ is itemized and scope-specific, so your price reflects exactly what is included — with no hidden fees. Visit our Pricing Page for more details, or use our Pricing Calculator for a quick ballpark estimate."

(Each uses the service-specific name: "interior painting," "exterior painting," "cabinet refinishing," "drywall repair," "pressure washing," "commercial painting," "popcorn ceiling removal.")

### colorConsultationFAQ

**Q1 — "How does ColorConfidence™ Consultation work?"**
> "You meet with our in-house colorist for a virtual or in-home session where we evaluate your space, discuss your goals, and guide you through expert color selection with visual mockups and test patches when needed. The result is a clear, confident color plan you can move forward with."

**Q3 — "Do I need an in-home consultation, or is virtual enough?"**
> "A virtual consultation is enough for most projects and provides expert guidance on color direction. An in-home consultation is ideal if you want hands-on support evaluating lighting, surroundings, and final choices in person."

**Q4 — "What if I already have a color in mind?"**
> "We can refine it. ColorConfidence™ helps you compare options, confirm undertones, and make sure your choice works beautifully in the space — even if you are starting with a strong idea."

**Q6 — "Will this help me avoid choosing the wrong color?"**
> "Yes. ColorConfidence™ is designed to reduce doubt and help you make informed, confident decisions before painting begins, so you avoid costly changes and color regret later."

**Q8 — "What happens after the consultation?"**
> "You receive a ColorConfidence™ Blueprint — a document with your final color specs, placement plan, and product recommendations. It gives your painter clearer direction and gives you a confident plan before the painting starts."

## Summary
- **17 answers rewritten** to lead with a direct response
- No questions changed — only answers
- No dollar amounts added
- All branded terms (TrueQuote™, PowerFlex™, ColorConfidence™) preserved
- Internal link phrases (Pricing Page, Pricing Calculator) preserved for the auto-linking system

