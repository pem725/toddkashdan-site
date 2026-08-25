import { defineConfig } from "astro/config";

// Deployed via GitHub Pages behind the custom domain toddkashdan.com
// (see public/CNAME). site/base reflect the custom domain, not the
// github.io project-pages path, since DNS will point straight at it.
export default defineConfig({
  site: "https://toddkashdan.com",
});
