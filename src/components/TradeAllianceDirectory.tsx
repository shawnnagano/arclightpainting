import { useState } from "react";
import { ExternalLink, Minus, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { visibleAllianceCompanies, companyLinkLabel } from "@/data/tradeAllianceCompanies";

export default function TradeAllianceDirectory() {
  const [openCompany, setOpenCompany] = useState("");

  return <section id="alliance-directory" className="bg-secondary py-16 scroll-mt-32">
    <div className="container mx-auto max-w-5xl px-4">
      <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold">Meet the Trades <span className="text-accent">in Our Alliance</span></h2>
      <p className="mb-8 text-center text-muted-foreground">Local people. Trusted connections. A team for the home you love.</p>
      <Accordion type="single" collapsible value={openCompany} onValueChange={setOpenCompany} className="space-y-3">
        {visibleAllianceCompanies.map(company => <AccordionItem key={company.id} id={`company-${company.id}`} value={company.id} className="scroll-mt-32 overflow-hidden rounded-lg border border-border bg-card">
          <AccordionTrigger className="group gap-4 px-5 py-5 text-left hover:no-underline [&>svg]:hidden md:px-6">
            <span className="min-w-0 flex-1"><span className="block break-words text-xl md:text-2xl font-bold">{company.name}</span><span className="mt-1 block text-sm font-normal text-muted-foreground">{company.trade}{company.location ? ` · ${company.location}` : ""}</span></span>
            <span className="shrink-0 text-accent" aria-hidden="true">{openCompany === company.id ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}</span>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-6 md:px-6 motion-reduce:transition-none">
            <div className="grid gap-6 border-t border-border pt-6 sm:grid-cols-[180px_minmax(0,1fr)]">
              <div className="flex min-h-28 items-center justify-center rounded-md bg-background p-4">
                <img src={company.logo} alt={`${company.name} logo`} loading="lazy" className="h-24 w-full max-w-44 object-contain" />
              </div>
              <div className="min-w-0"><p className="text-base leading-relaxed text-muted-foreground">{company.description}</p>
                {company.website && <Button asChild variant="link" className="mt-3 h-auto whitespace-normal px-0 text-accent"><a href={company.website} target="_blank" rel="noopener noreferrer">{companyLinkLabel(company.website)} <ExternalLink className="h-4 w-4" /><span className="sr-only"> for {company.name} (opens in a new tab)</span></a></Button>}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>)}
      </Accordion>
    </div>
  </section>;
}