import type { ContentBlock } from "@/data/subcontracting";
import { teamLeaderOpeningBlocks } from "@/data/teamLeader";

export const teamMemberApplicationUrl = "https://link.arclightpainting.com/widget/form/gWvGAtmZ20X3MldL7DVe";
export const teamMemberTerms = {
  minimumPay: 23.18,
  maximumPay: 37.46,
  preferredExperienceYears: 3,
  painterLevel: 2,
  employmentType: "W2 / 1099",
};

export const teamMemberOpeningBlocks: ContentBlock[] = [
  {
    heading: "HOW YOU WILL LIVE OUR CORE VALUES",
    items: [
      "FAMILY: You support your team like family: you show up dependably, communicate clearly and help everyone around you succeed.",
      "FRIENDS: You treat customers with care and respect, as if they were close friends trusting you with their home.",
      "OWNERSHIP: You take pride in your part of every job and follow the plan your Team Leader sets, so the crew can focus on quality work without confusion.",
      "HONESTY: You work with integrity, track your time and progress openly and own your results. No drama, no blame.",
      "PASSION: You bring energy and purpose to every job, knowing that your excellence brings peace of mind to customers and teammates.",
    ],
  },
  {
    heading: "HOW YOU SERVE OUR FAMILY AND FRIENDS",
    text: "As a Team Member, you bring Arclight's promises to life by owning your work and supporting your Team Leader on every project. You deliver quality craftsmanship, work safely, communicate well and help create an exceptional customer experience. Your attention to detail, reliability, teamwork and commitment to our \"above & beyond\" standard help your Team Leader succeed and strengthen the Arclight brand on every job.",
  },
  {
    heading: "YOUR POSITION IN THE COMPANY",
    items: ["Division: Production", "Report to: Team Leader", `Type: ${teamMemberTerms.employmentType}`, `Level: Painter Level ${teamMemberTerms.painterLevel}`],
  },
  { heading: "WHAT YOU'RE EXPECTED TO DELIVER" },
  {
    heading: "Safety",
    items: ["Follow all safety policies and directives", "Take part in risk assessments and weekly tailgate trainings", "Lead by example in keeping job sites safe and compliant"],
  },
  {
    heading: "Quality Work",
    items: ["Understand the Scope of Work and colors before the job launches", "Support the Pre-launch and Launch checklists so jobs are set up for success", "Deliver defect-free, crisp, professional work", "Keep job sites clean and label leftover materials"],
  },
  {
    heading: "Completed Jobs",
    items: ["Show up early, take part in team huddles and carry out the daily plan", "Use tools, materials and time efficiently", "Keep vans clean, submit accurate timesheets and keep job reports updated", "Use sound judgment to solve problems, and escalate to your Team Leader when needed", "Help complete the Closing Checklist"],
  },
  {
    heading: "Customer Satisfaction",
    items: ["Deliver amazing experiences by keeping customers comfortable and confident throughout the project", "Handle concerns with urgency and professionalism, and loop in your Team Leader", "Support final walkthroughs with customers", "Help ask for an online review when the project is complete"],
  },
  {
    heading: "HOW YOUR PERFORMANCE IS MEASURED",
    items: ["Hours Produced: number of billable hours you produced on the jobs you worked on", "Quality of Work Produced: total quality score (based on completed checklists) for the jobs you worked on", "Jobs Completed: total number of completed jobs that you worked on", "Five-Star Reviews: total number of 5-star online reviews received for the jobs you worked on"],
  },
  {
    heading: "WHO THRIVES IN THIS ROLE",
    items: ["Core Competencies: Teamwork, communication, quality craftsmanship, accountability, customer service", `Preferred Experience: ${teamMemberTerms.preferredExperienceYears}+ years in residential/commercial painting`, "Team Fit: Respectful, proactive, steady and coachable", "DISC Profile: High S/C (steady, detail-focused, consistent)", "MBTI: ISTJ, ESTJ or ISFJ", "Working Genius: Galvanizing + Enablement (able to rally the team and move work forward)"],
  },
  {
    heading: "WHAT WE NEED YOU TO COMPLETE AS PART OF YOUR APPLICATION",
    links: teamLeaderOpeningBlocks.find(block => block.links)?.links,
  },
];