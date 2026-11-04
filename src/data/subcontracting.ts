export const subcontractorApplicationUrl = "https://link.arclightpainting.com/widget/form/Q6xZk6j2VybZl0pnRBxj";
export const subcontractorTerms = {
  laborShare: 0.5,
  invoiceDays: 10,
  minimumExperienceYears: 3,
  travelMinutes: 45,
  communicationScore: 3,
  resumeRequired: true,
  applicationFee: 0,
  hrPhone: "14256298956",
  hrEmail: "ellaine@arclightpainting.com",
};

export type ContentLink = { label: string; href: string };
export type ContentBlock = { heading?: string; text?: string; items?: string[]; links?: ContentLink[] };
export type SubcontractorFAQ = { question: string; answer: string; content?: ContentBlock };
export type SubcontractorFAQGroup = { heading: string; faqs: SubcontractorFAQ[] };

export const subcontractorOpeningBlocks: ContentBlock[] = [
  { heading: "HOW YOU SERVE OUR FAMILY AND FRIENDS", text: 'As a Sub Team Leader, you bring Arclight\'s promises to life by leading each project with ownership, care, and clarity. You guide jobs through the execution stage while serving as the key point of communication between customers and crews. Your leadership ensures every detail meets our "above & beyond" standard, shapes the customer experience, and strengthens the Arclight brand.' },
  { heading: "YOUR POSITION IN THE COMPANY", items: ["Division: Production", "Reports to: Production Manager", "Level: Painter Level 5"] },
  { heading: "HOW YOU WILL LIVE OUR CORE VALUES", items: [
    "Family: You work shoulder-to-shoulder with your team and leadership to ensure everyone is safe, supported, and set up to win every day. You lead by example and build strong bonds.",
    "Friends: You treat customers with care and respect as if they were close friends trusting you with their home.",
    "Ownership: You take full ownership of your job site and make responsible decisions to move projects forward without needing constant oversight.",
    "Honesty: You communicate clearly, set realistic expectations, and take immediate action when problems arise, owning both mistakes and successes.",
  ] },
  { heading: "WHAT YOU'RE EXPECTED TO DELIVER" },
  { heading: "Safety", items: ["Follow and enforce all safety policies and directives", "Conduct risk assessments and weekly tailgate trainings", "Lead by example in maintaining safe, compliant job sites"] },
  { heading: "Quality Work", items: ["Review the Scope of Work and colors with the Estimator before launching jobs", "Complete the Pre-launch and Launch checklists to ensure jobs are set up for success", "Deliver defect-free, crisp, professional work", "Maintain clean job sites and label leftover materials"] },
  { heading: "Completed Jobs", items: ["Show up early, lead team huddles, and execute daily plans", "Manage tools, materials, and labor for optimal efficiency", "Maintain clean vans, submit accurate timesheets, and keep job reports updated", "Use sound judgment to solve problems and escalate when needed", "Complete the Closing Checklist"] },
  { heading: "Customer Satisfaction", items: ["Deliver amazing experiences by keeping customers informed, comfortable, and confident throughout the project", "Handle concerns with urgency and professionalism", "Conduct final walkthroughs with customers", "Ask for an online review at project completion"] },
  { heading: "HOW YOUR PERFORMANCE IS MEASURED", items: ["Hours Produced: number of billable hours you produced on the jobs you worked on", "Quality of Work Produced: total quality score (based on checklists completed) for jobs you worked on", "Jobs Completed: total number of jobs completed that you worked on", "Five-Star Reviews: total number of 5-star online reviews received for jobs you worked on"] },
  { heading: "WHO THRIVES IN THIS ROLE", items: ["Core Competencies: Leadership, communication, quality craftsmanship, accountability, customer service", "Team Fit: Respectful, proactive, steady, and coachable"] },
  { items: ["DISC Profile: High S/C (steady, detail-focused, consistent)", "MBTI: ISTJ, ESTJ, or ISFJ", "Working Genius: Galvanizing + Enablement (able to lead teams and move work forward)"] },
  { heading: "REQUIREMENTS", text: "We're looking for experienced, reliable professionals who take pride in their workmanship and can work directly on-site.", items: [
    `Relevant Experience: ${subcontractorTerms.minimumExperienceYears}+ years of professional experience in residential/commercial painting or your specialty trade, with leadership experience preferred.`,
    "License and Insurance: An active Contractor Registration, a valid business license, and required insurance.",
    "Certificate of Insurance: Arclight Painting listed as an Additional Insured (provided when onboarding as our subcontractor).",
    "Tools and Equipment: Your own vehicle, tools, and equipment appropriate for your trade.",
    `Communication Skills: Ability to communicate in English with customers and our team, with an average score of ${subcontractorTerms.communicationScore} on our internal Communication Scoring Guidelines.`,
    "Background Check: Willingness to complete a background check.",
    `Service Area: Ability to travel to job sites within a ${subcontractorTerms.travelMinutes}-minute travel time from Bothell, Washington.`,
    "Owner-Operator Involvement: The owner actively performs and works on-site with their crew rather than only managing operations.",
    "Crew Management: Focus on one crew and job site at a time, rather than managing multiple crews at different job sites simultaneously.",
  ] },
  { heading: "COMPLETE AS PART OF YOUR APPLICATION", links: [
    { label: "Team Fit Assessment →", href: "https://docs.google.com/forms/d/e/1FAIpQLSeA8TJyce0-Cc2ox5b0vQ4D4tnLxDgq_hHwB5mcPgko_P15wA/viewform" },
    { label: "Skills Assessment →", href: "https://docs.google.com/forms/d/e/1FAIpQLSdXQJL-3HeIDUJQDUK181hb1YcjyBenw8iXqc1169V4Q9IJJg/viewform" },
  ] },
];

const specialtyItems = ["Drywall repair and installation", "Popcorn ceiling removal and repair", "Carpentry and related repairs", "Flooring installation", "Other specialty services that complement our painting projects"];
const documentItems = ["Business license information", "Proof of insurance and a Certificate of Insurance (COI) naming Arclight Painting as an additional insured", "W-9 form", "Subcontractor agreement", "References from previous customers", "Background check and relevant skills assessment"];
const applicationLinks = [
  { label: "Painting Subcontractor Application", href: subcontractorApplicationUrl },
  { label: "Specialty Subcontractor Application", href: "https://docs.google.com/forms/d/e/1FAIpQLSdXXhxWGcYbv2Jef0geVv3_nv03_bhGJyk7jsYYDWBH7EU8Vw/viewform" },
];

export const subcontractorFAQGroups: SubcontractorFAQGroup[] = [
  { heading: "About the Opportunity", faqs: [
    { question: "What is Arclight Painting looking for in a subcontractor?", answer: "Experienced owner-operators who deliver quality work and lead their crew on-site. We work with painting subcontractors and specialty trades that complement our projects, such as carpentry, flooring, and drywall repair." },
    { question: "Where is Arclight Painting located?", answer: `We're based in Bothell, Washington. Projects are within a ${subcontractorTerms.travelMinutes}-minute travel time from Bothell, and subcontractors must be able to travel to job sites in that area.` },
    { question: "What qualifications do you require?", answer: `The full list is in the Professional Subcontracting Painter opening above: ${subcontractorTerms.minimumExperienceYears}+ years of experience, an active contractor registration, business license and insurance, your own vehicle and equipment, English communication, a background check, and working on-site with one crew at a time within ${subcontractorTerms.travelMinutes} minutes of Bothell.` },
    { question: "What specialty services are you looking for?", answer: "Depending on our project needs, we may consider specialists in: drywall repair and installation; popcorn ceiling removal and repair; carpentry and related repairs; flooring installation; other specialty services that complement our painting projects.", content: { text: "Depending on our project needs, we may consider specialists in:", items: specialtyItems } },
    { question: "Do you accept individual contractors without a crew?", answer: "We prefer owner-operators who lead their own crew, but if you work independently, we'll review your experience to see whether it's a fit." },
    { question: "Do you accept companies managing multiple crews at different job sites?", answer: "No. We want subcontractors directly involved in the work, so the owner should be on-site with one crew at a time." },
  ] },
  { heading: "Projects and Work Arrangements", faqs: [
    { question: "What types of projects do you offer?", answer: "Interior and exterior painting for residential and commercial properties, plus related specialty work based on customer needs. Availability depends on demand and our current workload." },
    { question: "Is there a guaranteed amount of work?", answer: "No. Project volume depends on customer demand, scheduling, and the type of work needed." },
    { question: "How do subcontractors work with Arclight Painting?", answer: "We assign projects based on the services needed, project requirements, and your availability." },
  ] },
  { heading: "Payment and Compensation", faqs: [
    { question: "How does your payment arrangement work?", answer: `Typically a ${subcontractorTerms.laborShare * 100}/${(1 - subcontractorTerms.laborShare) * 100} split of the total labor cost. For example, on a $10,000 labor total, you receive $${(10000 * subcontractorTerms.laborShare).toLocaleString("en-US")}. Compensation is confirmed before you accept each project.` },
    { question: "Who provides the materials?", answer: "You purchase materials upfront and are reimbursed when the project is complete. Budgets and material needs are set per project." },
    { question: "When do I get paid?", answer: `Net ${subcontractorTerms.invoiceDays}: within ${subcontractorTerms.invoiceDays} days of submitting your invoice, once the project is complete and the customer has signed the Completion Satisfaction Form.` },
  ] },
  { heading: "Application and Onboarding", faqs: [
    { question: "How do I apply?", answer: `Complete the application that matches your trade: Painting Subcontractor Application (${subcontractorApplicationUrl}) or Specialty Subcontractor Application (${applicationLinks[1].href}). Both open in a new tab.`, content: { text: "Complete the application that matches your trade:", links: applicationLinks } },
    { question: "What documents do I need to provide?", answer: "We may request: business license information; proof of insurance and a Certificate of Insurance (COI) naming Arclight Painting as an additional insured; W-9 form; subcontractor agreement; references from previous customers; background check and relevant skills assessment.", content: { text: "We may request:", items: documentItems } },
    { question: "What happens after I submit my application?", answer: "We review your experience and qualifications. If you're a fit, we'll contact you about next steps, which may include an interview, assessments, reference checks, and onboarding." },
    { question: "Is there an application fee?", answer: subcontractorTerms.applicationFee === 0 ? "There is no application fee." : `The application fee is $${subcontractorTerms.applicationFee}.` },
  ] },
  { heading: "Before You Apply", faqs: [
    { question: "Can you tell me more before I complete the application?", answer: `Of course. Contact Ellaine, our HR Officer, at 425-629-8956 or ${subcontractorTerms.hrEmail}.`, content: { text: "Of course. Contact Ellaine, our HR Officer, at", links: [{ label: "425-629-8956", href: `tel:${subcontractorTerms.hrPhone}` }, { label: subcontractorTerms.hrEmail, href: `mailto:${subcontractorTerms.hrEmail}` }] } },
    { question: "Do I need to attach a resume?", answer: subcontractorTerms.resumeRequired ? "Yes. A resume is required for all subcontractor applicants." : "No. A resume is optional." },
    { question: "What if I don't qualify as a subcontractor?", answer: "We may be able to set up a Trade Alliance partnership instead: a free referral partnership where we refer suitable projects and customers to each other." },
  ] },
];