# toddkashdan.com

Static site, served by GitHub Pages at https://toddkashdan.com.

- `site/` is the site. Page bodies live in `site/_src/`, shared header and footer in `site/_parts/`. Run `site/_build.ps1` to rebuild the pages after editing them.
- `redirects/` sends old WordPress addresses (/about/, /books/, blog posts) to the matching new page or to Provoked on Substack.
- Every push to `main` deploys through `.github/workflows/deploy.yml`.
- The August 2026 Astro build is kept at tag `astro-august-2026`.
