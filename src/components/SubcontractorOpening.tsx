import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { subcontractorApplicationUrl, subcontractorOpeningBlocks, type ContentBlock } from "@/data/subcontracting";

export const SubcontractorContent = ({ block }: { block: ContentBlock }) => (
  <div className="space-y-3">
    {block.heading && <h4 className="text-sm font-bold uppercase text-foreground">{block.heading}</h4>}
    {block.text && <p>{block.text}</p>}
    {block.items && <ul className="list-disc pl-6 space-y-2">{block.items.map(item => <li key={item}>{item}</li>)}</ul>}
    {block.links && <ul className="list-disc pl-6 space-y-2">{block.links.map(link => <li key={link.href}><a href={link.href} target={link.href.startsWith("https:") ? "_blank" : undefined} rel={link.href.startsWith("https:") ? "noopener noreferrer" : undefined} className="text-accent font-semibold hover:underline break-words">{link.label}</a></li>)}</ul>}
  </div>
);

const SubcontractorOpening = () => {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary rounded-xl overflow-hidden">
      <h3>
        <Button variant="ghost" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="subcontractor-opening-content" className="w-full h-auto whitespace-normal p-6 flex justify-between gap-4 text-left hover:bg-secondary rounded-xl">
          <span><span className="block text-lg font-bold text-foreground">Professional Subcontracting Painter</span><span className="block text-muted-foreground text-sm font-normal">Bothell, WA · $44.94 – $47.36</span></span>
          {open ? <Minus className="text-accent shrink-0" /> : <Plus className="text-accent shrink-0" />}
        </Button>
      </h3>
      <motion.div id="subcontractor-opening-content" initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.3 }} className="overflow-hidden" inert={open ? undefined : ""}>
        <div className="px-6 pb-6 space-y-6 text-muted-foreground leading-relaxed">
          <div><p className="text-2xl md:text-3xl font-bold text-foreground mb-3">Better painting career? Better boss? <span className="text-accent">Better pay?</span></p><p>Lead with purpose — join Arclight as our next Sub Team Leader!</p></div>
          {subcontractorOpeningBlocks.map((block, index) => <div key={index} className={!block.heading && block.items ? "pl-6" : undefined}><SubcontractorContent block={block} /></div>)}
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"><a href={subcontractorApplicationUrl} target="_blank" rel="noopener noreferrer">Apply Now →</a></Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SubcontractorOpening;