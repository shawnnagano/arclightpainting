## Scope

Single file: `scripts/generate-redirects.mjs`. Replace the error-reporting block (lines 85–89) with grouped, categorized output. No other changes anywhere.

## Change

Replace this block:

```js
if (errors.length) {
  console.error(`Redirect generation failed fast with ${errors.length} issue(s):`);
  console.error(errors.join("\n"));
  process.exit(1);
}
```

With a reporter that:

1. Categorizes each existing error string into a tag by pattern matching on substrings already produced upstream:
   - `[schema]` — "must be", "are required", "must start with", "must contain an array", "entry must be an object"
   - `[self-loop]` — "points to itself"
   - `[duplicate]` — "duplicate redirect source"
   - `[param-mismatch]` — "missing route parameter"
   - `[unknown-target]` — "is not an indexable SEO route"
   - `[cycle]` — "redirect cycle detected"
   - `[other]` — fallback
2. Groups errors by source path when the error string starts with a `/source:` prefix; entry-numbered errors group under their `entry N` label.
3. Prints a header with total count and per-category counts, e.g.:
   ```
   --- Redirect generation failed: 5 issue(s) ---
   Categories: 2 schema, 1 cycle, 2 unknown-target
   ```
4. Prints each group with its source/label as a sub-header, then bullet lines `  - [tag] message`.
5. Prints a remediation footer:
   ```
   --- Fix in redirect-map.json. Internal destinations must exist as routes in scripts/seo-routes.mjs. ---
   ```
6. `process.exit(1)` unchanged.

## Out of scope

- No new validation rules
- No changes to validation logic, success path, generated `_redirects` output, or any other file
- No "preview generated redirects" feature
- No dependencies added

## After applying

Stop. Hold for confirmation that the two manual GitHub steps are complete:
1. Production environment with required reviewer configured in repo Settings → Environments
2. `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` added as repository secrets