import { defineConfig } from "astro/config";

// TEMPORARY preview config: base is set to the repo name so this
// previews correctly at https://pem725.github.io/toddkashdan-site/,
// which needs every internal link prefixed with the repo path.
//
// ⚠️ BEFORE THE REAL DNS CUTOVER: delete the `base` line below (site
// alone is correct for the custom domain, since it will be served from
// the domain root) and redeploy. Leaving `base` set after DNS moves
// will break every link on the live toddkashdan.com.
export default defineConfig({
  site: "https://toddkashdan.com",
  base: "/toddkashdan-site",
});
