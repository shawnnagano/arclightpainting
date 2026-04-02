import React from "react";

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
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
    answer: <>Yes. We back our work with a <a href="/mission#satisfaction-guarantee" className="text-accent font-semibold hover:underline">100% Satisfaction Guarantee</a> and address any remaining touch-ups or concerns before the job is considered complete.</>,
  },
  {
    question: "How soon can you start?",
    answer: "Scheduling depends on the season, project size, and current workload. We will give you the most accurate timeline during your estimate.",
  },
  {
    question: "How long will my project take?",
    answer: "Project length depends on size, prep needs, repairs, and drying conditions. Before work begins, we provide a projected schedule so you know what to expect.",
  },
  {
    question: "Do you help with drywall repairs and prep work before painting?",
    answer: "Yes. We handle common prep work such as drywall repair, patching, sanding, scraping, caulking, and priming to help ensure a smooth, durable finish.",
  },
  {
    question: "Do you offer cabinet refinishing and popcorn ceiling removal?",
    answer: "Yes. We offer cabinet refinishing and popcorn ceiling removal and can include both in a detailed proposal based on your project goals.",
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
      question: "How soon can I use the room again?",
      answer: "Rooms are often usable shortly after surfaces are dry, but full cure takes longer. We will advise you on when it is safe to move furniture back, hang artwork, or clean painted surfaces.",
    },
    {
      question: "Will there be a strong odor?",
      answer: "Odor levels depend on the products used, ventilation, and the size of the project. We can recommend lower-odor products when that is a priority.",
    },
    {
      question: "Can you help me choose paint sheen?",
      answer: "Yes. We will guide you on flat, eggshell, satin, semi-gloss, and other finish options based on appearance, durability, and ease of cleaning.",
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
  ],
  "drywall-repair": [
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
      question: "How is one-day painting priced?",
      answer: "Pricing depends on the number of painters hired. One painter is $698 and two is $1,396.",
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
  ],
};
