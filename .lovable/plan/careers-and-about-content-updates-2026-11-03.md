# Careers and About content updates

## Changes
- Move the existing Vivid Vision section unchanged from Join Our Team to About, directly after Proven Experience, with `id="vivid-vision"`. Alternate the subsequent About section backgrounds.
- Preserve the first two openings exactly. Make Professional Subcontracting Painter expandable, with the supplied content, accessible Plus/Minus control, unrestricted animated height, and the application button at the end.
- Add the supplied grouped subcontractor FAQs immediately after Our Openings, using the service-page FAQ styling, subtitle, one-open-at-a-time behavior, accessible controls, and plain-text FAQPage schema alongside the breadcrumb.

## Scope and technical details
- Extend the shared FAQ component with optional grouped/rich answers and unrestricted height for the careers page only; preserve existing service-page presentation and behavior except the requested accessibility attributes.
- Keep routes, header/footer, images, canonical logic, and other page content unchanged.
- The supplied subcontractor compensation FAQ is an explicit exception to the general no-dollar-amount pricing FAQ rule.
- Verify compensation and qualification rules with focused tests; check expansion, links, FAQ schema, background alternation, and mobile layout in the preview.
- Briefly list changed files. Do not publish unless requested.