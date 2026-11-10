# Project rules
- Gate Trade Alliance through `src/lib/tradeAlliancePreview.ts` and the existing NotFound page so its launch flag and hostname rules stay independently testable without altering SEO discovery.
- Keep the Trade Alliance company directory in a dedicated data module and renderer; verified official assets and links stay separate from layout, and unverified company details must never be guessed.
- Resolve Trade Alliance logo asset pointers against the published Lovable asset origin because Cloudflare Pages cannot serve the relative asset endpoint; SEO audits exempt only those published image sources, not page links or metadata.
- Keep subcontractor careers content and plain-text FAQ schema sourced from `src/data/subcontracting.ts` so displayed terms and search metadata stay aligned.
- Extend the service FAQ component through optional careers-only grouped/rich-answer inputs to preserve existing service-page presentation.
- Keep Team Leader opening content in its own data module and reuse the subcontractor content renderer so both careers dropdowns stay visually aligned without mixing their terms.
- Keep Team Member opening content and terms in its own data module, using the existing careers content renderer and Team Leader assessment links to maintain alignment without mixing role details.