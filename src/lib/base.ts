// Astro's BASE_URL doesn't reliably carry a trailing slash (it matches
// whatever was set in astro.config.mjs verbatim). Every page here does
// `base + "some/path/"` by hand, so a missing separator silently glues
// the two together, e.g. "/toddkashdan-sitewell-being-lab/" instead of
// "/toddkashdan-site/well-being-lab/". Normalize once, here, so no page
// has to get this right on its own.
export const base = import.meta.env.BASE_URL.replace(/\/+$/, "") + "/";
