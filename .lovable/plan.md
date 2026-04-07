

## Fix: Broken Logo Image

### Problem
The header logo (`src/components/Header.tsx` line 79) references `https://arclightpainting.com/wp-content/uploads/2020/09/ARCLIGHT-LOGO-long-version.png` — the old WordPress server. Now that DNS points to Lovable, this URL no longer resolves to the WordPress file.

### Solution
1. Download/obtain the logo image and save it locally as `src/assets/arclight-logo.png`
2. Update `src/components/Header.tsx` to import and use the local asset:
   - Add: `import arclightLogo from "@/assets/arclight-logo.png"`
   - Change the `src` attribute from the WordPress URL to `{arclightLogo}`

### Quick Check
Search the entire codebase for any other references to `arclightpainting.com/wp-content/` and replace those with local assets too, to prevent similar breakage.

