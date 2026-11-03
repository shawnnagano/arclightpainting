import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SubcontractorContent } from "@/components/SubcontractorOpening";
import { teamLeaderApplicationUrl, teamLeaderOpeningBlocks } from "@/data/teamLeader";

const TeamLeaderOpening = () => {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary rounded-xl overflow-hidden">
      <h3>
        <Button variant="ghost" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="team-leader-opening-content" className="w-full h-auto whitespace-normal p-6 flex justify-between gap-4 text-left hover:bg-secondary rounded-xl">
          <span><span className="block text-lg font-bold text-foreground">Professional Team Leader Painter</span><span className="block text-muted-foreground text-sm font-normal">Bothell, WA · $36.80 – $48.41</span></span>
          {open ? <Minus className="text-accent shrink-0" /> : <Plus className="text-accent shrink-0" />}
        </Button>
      </h3>
      <motion.div id="team-leader-opening-content" initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.3 }} className="overflow-hidden" {...(open ? {} : { inert: "" })}>
        <div className="px-6 pb-6 space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <p className="min-w-0 text-2xl md:text-3xl font-bold text-foreground">BETTER PAINTING CAREER?<br />BETTER BOSS?<br /><span className="text-accent">BETTER PAY?</span></p>
              <Button asChild className="shrink-0 bg-accent hover:bg-accent/90 text-accent-foreground font-bold"><a href={teamLeaderApplicationUrl} target="_blank" rel="noopener noreferrer">Apply Now →</a></Button>
            </div>
            <p>LEAD WITH PURPOSE — Join Arclight as Our Next TEAM LEADER!</p>
          </div>
          {teamLeaderOpeningBlocks.map((block, index) => <SubcontractorContent key={index} block={block} />)}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamLeaderOpening;