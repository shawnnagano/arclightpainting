export interface FAQItem {
  question: string;
  answer: string;
}

export const generalFAQ: FAQItem[] = [
  {
    question: "What painting services does Arclight Painting offer?",
    answer: "Arclight Painting offers interior painting, exterior painting, cabinet refinishing, drywall repair, pressure washing, commercial painting, one-day painting service, and popcorn ceiling removal. We handle everything from simple repaints to more involved projects that require repairs and detailed preparation.",
  },
  {
    question: "Are you licensed, bonded, and insured?",
    answer: "Yes. Arclight Painting is licensed, bonded, and insured so you can move forward with confidence knowing your project is in professional hands.",
  },
  {
    question: "Do you offer free estimates or fixed-price quotes?",
    answer: "Yes. We provide free estimates and detailed written proposals. Once your scope is approved, the estimate becomes a fixed-price agreement.",
  },
  {
    question: "Why do painting quotes vary so much?",
    answer: "Quotes vary because not every painter includes the same preparation, materials, workmanship, warranty, or insurance coverage. Lower bids often leave out important steps that affect how the final result looks and how long it lasts.",
  },
  {
    question: "What is included in your painting process?",
    answer: "Our process includes a detailed estimate, surface protection, project-specific prep, the proper primer and paint system, daily cleanup, and a final walkthrough. The exact scope depends on your project, but the goal is always a smooth process and lasting results.",
  },
  {
    question: "Do you stand behind your work?",
    answer: "Yes. We back our work with a 100% Satisfaction Guarantee, and we verify the final result through a walkthrough based on PCA™ Quality Inspection. Every project is independently inspected by our Quality Supervisor according to Painting Contractors of America Industry Standards, and if anything falls short, we document it and correct it before the job is considered complete. For added peace of mind, we also include our 5-Year FreshStart™ Touch-Up Plan.",
  },
  {
    question: "How soon can you start?",
    answer: "Scheduling depends on the season, project size, and current workload. We will give you the most accurate timeline during your estimate.",
  },
  {
    question: "How long will my project take?",
    answer: "Project length depends on the size and scope of the work, the amount of prep and repairs needed, and drying conditions. With PowerFlex™ Scheduling, we turn that into a clear, realistic plan, using accurate labor forecasting tied to your TrueQuote™, smart crew sizing, and professional coordination built around your calendar. That means clear expectations, daily updates, on-time arrival, and a project that stays on track from start to finish.",
  },
  {
    question: "How do I choose the right paint colors?",
    answer: "Color regret is real, which is why our ColorConfidence™ Consultation is designed to make the process easier and more certain. We guide you through the decision with a virtual consultation with our in-house colorist, visual mockups of your real home, custom color matching, and on-site test patches when needed. You will also receive a full ColorConfidence™ Blueprint with your final color specs and placement plan, so you can choose confidently and paint beautifully.",
  },
  {
    question: "How much will painting my house cost?",
    answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Your price is based on labor, paint and materials, and the full scope of work. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
  },
];

export const serviceFAQs: Record<string, FAQItem[]> = {
  "interior-painting": [
    {
      question: "What does interior painting usually include?",
      answer: "Interior painting may include walls, ceilings, trim, doors, closets, and other painted surfaces, depending on the scope of work. Your estimate will clearly explain what is included.",
    },
    {
      question: "Do I need to move furniture before interior painting?",
      answer: "We ask customers to remove fragile items, valuables, electronics, and small décor. Larger furniture can often be moved and protected as part of the project, depending on the room and scope.",
    },
    {
      question: "Do you protect floors, furniture, and fixtures?",
      answer: "Yes. Protecting non-painted surfaces is a standard part of professional interior painting. We use drop cloths, masking, plastic, and other protection methods as needed.",
    },
    {
      question: "Can you repair nail holes, dents, cracks, and drywall damage before painting?",
      answer: "Yes. Minor wall repair and patching can often be included. Larger drywall repairs can also be addressed and will be listed in the estimate if needed.",
    },
    {
      question: "How long does interior painting take?",
      answer: "It depends on the number of rooms, the amount of prep work, drying conditions, and whether ceilings, trim, or doors are included. We provide a project timeline before work begins.",
    },
    {
      question: "After painting a room, how long should I wait before sleeping in it?",
      answer: "With standard latex paint and good ventilation, most rooms are safe to sleep in after 24 hours. Low-VOC and zero-VOC paints can cut that wait to just a few hours. Oil-based paints take longer — 48 to 72 hours is recommended. Factors like humidity, airflow, and the number of coats also affect dry time and air quality. We always recommend keeping windows open and fans running to speed things up. For a deeper dive, check out our blog: How Long After Painting Can I Sleep in the Room? 4 Expert Tips.",
    },
    {
      question: "Can you help me choose paint sheen?",
      answer: "Yes. We will guide you on flat, eggshell, satin, semi-gloss, and other finish options based on appearance, durability, and ease of cleaning.",
    },
    {
      question: "How much does interior painting cost?",
      answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Your interior painting price is based on labor, paint and materials, and the full scope of work. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
    },
  ],
  "exterior-painting": [
    {
      question: "What does exterior painting usually include?",
      answer: "Exterior painting may include siding, trim, fascia, soffits, doors, shutters, garages, fences, outbuildings, and other exterior surfaces depending on the project scope.",
    },
    {
      question: "Do you pressure wash before exterior painting?",
      answer: "In many cases, yes. Exterior surfaces often need washing to remove dirt, chalking, mildew, and loose material before paint can properly adhere.",
    },
    {
      question: "What prep work is included for exterior painting?",
      answer: "Prep may include washing, scraping, sanding, spot priming, caulking, minor wood repair, stucco patching, and protection of landscaping and adjacent surfaces. The exact scope depends on the condition of the home.",
    },
    {
      question: "Do you paint stucco, wood, fiber cement, and previously painted siding?",
      answer: "Yes. We work on a variety of exterior surfaces and recommend the appropriate preparation and coating system for each one.",
    },
    {
      question: "How long does exterior paint last?",
      answer: "That depends on the substrate, exposure to sun and moisture, previous coatings, product choice, and the quality of preparation. A properly prepared paint job will generally last much longer than a rushed one.",
    },
    {
      question: "What time of year is best for exterior painting?",
      answer: "Exterior painting is best completed during favorable weather conditions that support proper adhesion, curing, and durability. Scheduling depends on temperature, moisture, and forecast conditions.",
    },
    {
      question: "What happens if it rains during my exterior project?",
      answer: "We plan carefully around the weather. If conditions are not right for proper application or drying, we adjust the schedule rather than compromise the result.",
    },
    {
      question: "Can you paint fences, decks, detached garages, and sheds too?",
      answer: "Yes. Those surfaces can often be included as part of a broader exterior project or quoted separately.",
    },
    {
      question: "How much does exterior painting cost?",
      answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Your exterior painting price is based on labor, paint and materials, and the full scope of work. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
    },
  ],
  "cabinet-refinishing": [
    {
      question: "What is cabinet refinishing?",
      answer: "Cabinet refinishing is the process of updating the appearance of existing cabinets by cleaning, preparing, priming, and applying a new finish rather than replacing the cabinets entirely.",
    },
    {
      question: "Are my cabinets good candidates for refinishing?",
      answer: "Many cabinets are, especially if the cabinet boxes and doors are structurally sound. If cabinets are severely damaged, poorly built, or failing, replacement or refacing may make more sense.",
    },
    {
      question: "What is the difference between refinishing, repainting, and refacing?",
      answer: "Refinishing typically refers to renewing the existing cabinet surface. Repainting focuses on changing the color or finish. Refacing involves replacing doors, drawer fronts, or exterior skins while keeping the cabinet boxes.",
    },
    {
      question: "How durable is cabinet refinishing?",
      answer: "When cabinets are properly cleaned, prepared, primed, and coated with cabinet-grade products, the finish can be very durable. Proper curing and normal care are important to long-term performance.",
    },
    {
      question: "Do you remove the doors and drawer fronts?",
      answer: "In many cases, yes. Removing doors and drawer fronts often helps produce a cleaner, more consistent finish.",
    },
    {
      question: "How long will my kitchen or bathroom be out of service?",
      answer: "That depends on the scope, drying time, and curing requirements. We will explain the expected downtime before work begins.",
    },
    {
      question: "Can you change dark cabinets to light colors or vice versa?",
      answer: "Yes, in many cases. Significant color changes may require additional preparation, priming, and coats to achieve a clean, durable result.",
    },
    {
      question: "Can you update hardware too?",
      answer: "Hardware replacement or reinstall can often be included, depending on the project.",
    },
    {
      question: "How much does cabinet refinishing cost?",
      answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Your cabinet refinishing price is based on labor, paint and materials, and the full scope of work. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
    },
  ],
  "drywall-repairs": [
    {
      question: "What kinds of drywall damage can you repair?",
      answer: "We can often address nail holes, dents, stress cracks, minor water damage, small holes, seam issues, and other common wall and ceiling defects.",
    },
    {
      question: "Can you match my existing wall or ceiling texture?",
      answer: "In many cases, yes. Texture matching depends on the existing finish, the size of the repair, lighting conditions, and the surrounding surface.",
    },
    {
      question: "Do I need drywall repair or full replacement?",
      answer: "That depends on the extent of the damage. Small to moderate issues can often be repaired, while larger damaged areas may require replacement.",
    },
    {
      question: "Will the repair show after painting?",
      answer: "Our goal is to make repairs blend as cleanly as possible. In many cases, the best visual result comes from priming and painting the full wall or ceiling plane rather than only the patched area.",
    },
    {
      question: "Do you paint after drywall repair?",
      answer: "Yes, drywall repair can be paired with priming and painting as part of the overall scope.",
    },
    {
      question: "How long does drywall repair take?",
      answer: "That depends on the size of the repair, the number of coats required, drying time, sanding, texture matching, and painting needs.",
    },
    {
      question: "Is drywall repair messy?",
      answer: "It can create dust, but we take steps to contain and clean the work area as much as possible.",
    },
    {
      question: "How much does drywall repair cost?",
      answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Your drywall repair price is based on labor, paint and materials, and the full scope of work. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
    },
  ],
  "pressure-washing": [
    {
      question: "What surfaces can you pressure wash?",
      answer: "Pressure washing may be appropriate for driveways, walkways, patios, some siding, fences, and other exterior surfaces. The correct method depends on the material and condition.",
    },
    {
      question: "What is the difference between pressure washing and soft washing?",
      answer: "Pressure washing uses stronger water pressure, while soft washing uses lower pressure with cleaning solutions for more delicate surfaces. We choose the method based on what is safest and most effective.",
    },
    {
      question: "Will pressure washing damage my home?",
      answer: "It can if done incorrectly. Using the wrong pressure or technique can damage paint, wood, siding, or force water where it should not go. Proper methods matter.",
    },
    {
      question: "How often should I pressure wash my home?",
      answer: "That depends on the surface, local conditions, exposure to dirt or mildew, and your maintenance goals.",
    },
    {
      question: "Do you use cleaning solutions?",
      answer: "When needed, yes. Product choice depends on the surface and the type of buildup being removed.",
    },
    {
      question: "Is pressure washing recommended before exterior painting?",
      answer: "Often, yes. Clean surfaces are an important part of proper paint preparation.",
    },
    {
      question: "How much does pressure washing cost?",
      answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Your pressure washing price is based on labor, paint and materials, and the full scope of work. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
    },
  ],
  "commercial-painting": [
    {
      question: "What types of commercial properties do you paint?",
      answer: "We work on a variety of commercial spaces, which may include offices, retail spaces, tenant improvements, common areas, light industrial properties, and other business environments.",
    },
    {
      question: "Can you work around business hours?",
      answer: "Yes. Depending on the project, commercial work can often be scheduled in phases, after hours, or on weekends to reduce disruption.",
    },
    {
      question: "Can you work in occupied spaces?",
      answer: "Yes. Occupied commercial painting requires careful planning, communication, protection, and cleanup, and we account for that in the project plan.",
    },
    {
      question: "Are you insured for commercial painting work?",
      answer: "Yes. We carry the proper insurance and operate professionally to support commercial clients and property managers.",
    },
    {
      question: "Can you handle larger or multi-phase projects?",
      answer: "Yes. Scope, staffing, access, and schedule are addressed during the estimating and planning phases.",
    },
    {
      question: "Do you offer maintenance repainting for commercial properties?",
      answer: "Yes. Maintenance painting can help commercial properties stay clean, consistent, and protected over time.",
    },
    {
      question: "How much does commercial painting cost?",
      answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Your commercial painting price is based on labor, paint and materials, and the full scope of work. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
    },
  ],
  "painter-for-a-day": [
    {
      question: "What is one-day painting service?",
      answer: "Our Painter-for-a-Day service is designed for projects that can be completed efficiently in a single day with the right scope, crew size, and planning.",
    },
    {
      question: "What kinds of projects qualify for one-day painting?",
      answer: "Smaller, well-defined scopes are the best fit, such as a single room, accent walls, touch-ups, or selected trim and door work.",
    },
    {
      question: "How much can you realistically complete in one day?",
      answer: "That depends on the amount of preparation, the complexity of the surfaces, drying conditions, and whether ceilings, trim, or doors are included.",
    },
    {
      question: "Does one-day painting mean lower quality?",
      answer: "No. Quality depends on proper planning, realistic scope, surface preparation, and having the right crew for the job.",
    },
    {
      question: "How much does one-day painting service cost?",
      answer: "Our Painter-for-a-Day service is priced by the number of painters hired. One painter is $698, and two painters are $1,396. This service works best for smaller, well-defined projects that can be completed in a single day. If your project looks like it may need more than one day, visit our Pricing Page to learn more about full-project pricing or get a TrueQuote™.",
    },
    {
      question: "How should I prepare for one-day service?",
      answer: "We will outline any needed paint or area prep before the appointment so the crew can begin efficiently and stay productive throughout the day.",
    },
  ],
  "popcorn-ceiling-removal": [
    {
      question: "What is popcorn ceiling removal?",
      answer: "Popcorn ceiling removal is the process of removing textured acoustic ceiling material to create a flatter, more updated appearance.",
    },
    {
      question: "Do all popcorn ceilings need to be removed?",
      answer: "Not always. Some ceilings can remain in place if they are in good condition and if asbestos abatement is not desired. In other cases, removal, skim coating, or covering may be better options.",
    },
    {
      question: "Is popcorn ceiling removal messy?",
      answer: "It can be. Proper containment, floor protection, masking, and cleanup are important parts of the process.",
    },
    {
      question: "Will the ceiling need repairs after removal?",
      answer: "Yes. Popcorn texture can hide joints, patches, and surface imperfections. After removal, ceilings need repair, skim coating, sanding, texturing, and priming before they can be painted.",
    },
    {
      question: "Can you paint the ceiling after removal?",
      answer: "Yes. Priming and painting are often part of the finishing process after the texture is removed and the surface is repaired.",
    },
    {
      question: "How long does popcorn ceiling removal take?",
      answer: "That depends on the square footage, the condition of the ceiling, the amount of repair required, and the finish level desired afterward. However, due to the number of steps in the process, it is a minimum of three days.",
    },
    {
      question: "Should I test older popcorn ceilings for asbestos before removal?",
      answer: "If the ceiling is older, testing for asbestos may be appropriate before disturbing the material. We can discuss that during the estimate process.",
    },
    {
      question: "How much does popcorn ceiling removal cost?",
      answer: "Every TrueQuote™ is built around the true scope of your project, with clear, itemized pricing and no hidden fees. Your popcorn ceiling removal price is based on labor, paint and materials, and the full scope of work. Visit our Pricing Page for more details. We also have a Pricing Calculator that you can use to get a ballpark estimate.",
    },
  ],
};

export const pricingFAQ: FAQItem[] = [
  {
    question: "How much does it cost to paint a house in Bothell?",
    answer: "The cost of house painting in Bothell varies based on the size of your home, the condition of the surfaces, and the scope of work. Every TrueQuote™ is itemized and scope-specific, so your price reflects exactly what is included — with no hidden fees.",
  },
  {
    question: "Do you offer free painting estimates?",
    answer: "Yes, we offer free painting estimates. We provide a detailed written proposal that outlines scope of work, preparation, materials, and pricing. Once approved, it becomes a fixed-price agreement — no surprises.",
  },
  {
    question: "What is included in a TrueQuote™?",
    answer: "A TrueQuote™ includes a surface analysis, labor forecasting, material specifications, and a detailed scope of work. Every line item is explained so you understand exactly what you are paying for and why.",
  },
  {
    question: "Why do painting prices vary so much between companies?",
    answer: "Painting prices vary because not every company includes the same level of preparation, materials, insurance, or warranty coverage. A lower bid often means reduced scope — fewer coats, less prep, or no warranty — which can cost more in the long run.",
  },
  {
    question: "Can I use your pricing calculator to get an instant estimate?",
    answer: "Yes. Our Pricing Calculator gives you a ballpark estimate in minutes based on project type, size, and scope. When you are ready for exact pricing, schedule a free TrueQuote™ consultation for a detailed, fixed-price proposal.",
  },
];

export const colorConsultationFAQ: FAQItem[] = [
  {
    question: "How does ColorConfidence™ Consultation work?",
    answer: "Our ColorConfidence™ Consultation is designed to take the stress and second-guessing out of choosing colors. Depending on your needs, we guide you through expert color selection, visual clarity, and a plan you can move forward with confidently.",
  },
  {
    question: "How much does ColorConfidence™ Consultation cost?",
    answer: "A 30-minute virtual consultation is free and included with any painting project. A 60-minute in-home consultation is $195. Each option is tailored to your needs and designed to help bring out the full potential of your home.",
  },
  {
    question: "Do I need an in-home consultation, or is virtual enough?",
    answer: "That depends on the level of support you want. A virtual consultation is a great fit for many projects and is often enough to create clarity and direction. An in-home consultation is ideal if you want more hands-on guidance, help evaluating lighting and surroundings in person, or support making final decisions with greater confidence.",
  },
  {
    question: "What if I already have a color in mind?",
    answer: "That is a great starting point. ColorConfidence™ is not just for people starting from scratch, it is also for homeowners who want to refine an idea, compare options, confirm undertones, or make sure the final choice works beautifully in the space.",
  },
  {
    question: "Can you help if I am deciding between several colors?",
    answer: "Yes. That is one of the main reasons this service exists. We help narrow the options, reduce overwhelm, and guide you toward the choice that fits your home, lighting, style, and goals best.",
  },
  {
    question: "Will this help me avoid choosing the wrong color?",
    answer: "That is exactly the goal. ColorConfidence™ is designed to reduce doubt and help you make informed, confident decisions before painting begins, so you can avoid costly changes and color regret later.",
  },
  {
    question: "Can you help match existing paint colors in my home?",
    answer: "Yes. Our expert colorist will evaluate the current paint or finish and guide you toward the best match. We consider paint type, brand, sheen, tinting, and fading, because even a strong color match can look different once it is applied. That is why on-site test patches are so valuable, they let you see how the color actually reads in your home before making a final decision.",
  },
  {
    question: "What happens after the consultation?",
    answer: "You leave with a ColorConfidence™ Blueprint which provides clearer direction to your painter and a more confident plan for your project. The goal is not just to give you ideas, but to help you make decisions you feel good about before the painting starts.",
  },
];
