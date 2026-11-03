# Project rules
- Keep subcontractor careers content and plain-text FAQ schema sourced from `src/data/subcontracting.ts` so displayed terms and search metadata stay aligned.
- Extend the service FAQ component through optional careers-only grouped/rich-answer inputs to preserve existing service-page presentation.
- Keep Team Leader opening content in its own data module and reuse the subcontractor content renderer so both careers dropdowns stay visually aligned without mixing their terms.
- Keep Team Member opening content and terms in its own data module, using the existing careers content renderer and Team Leader assessment links to maintain alignment without mixing role details.