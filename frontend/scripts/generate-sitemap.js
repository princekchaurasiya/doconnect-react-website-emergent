/**
 * Regenerate public/sitemap.xml from app data (run from frontend/: node scripts/generate-sitemap.js)
 */
const fs = require("fs");
const path = require("path");

const DOMAIN = "https://www.doconnect.org";
const today = new Date().toISOString().slice(0, 10);

const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/about", priority: "0.7", changefreq: "monthly" },
  { loc: "/services", priority: "0.9", changefreq: "weekly" },
  { loc: "/doctor-home-visit-mumbai", priority: "0.9", changefreq: "weekly" },
  { loc: "/locations", priority: "0.8", changefreq: "weekly" },
  { loc: "/packages", priority: "0.7", changefreq: "monthly" },
  { loc: "/doctors", priority: "0.6", changefreq: "monthly" },
  { loc: "/blog", priority: "0.7", changefreq: "weekly" },
  { loc: "/resources/canada-patients-healthcare-india", priority: "0.75", changefreq: "monthly" },
  { loc: "/faq", priority: "0.6", changefreq: "monthly" },
  { loc: "/contact", priority: "0.9", changefreq: "monthly" },
  { loc: "/privacy-policy", priority: "0.2", changefreq: "yearly" },
  { loc: "/terms", priority: "0.2", changefreq: "yearly" },
  { loc: "/disclaimer", priority: "0.2", changefreq: "yearly" },
  { loc: "/cancellation-refund-policy", priority: "0.2", changefreq: "yearly" },
];

const serviceSlugs = [
  "nebulisation-at-home",
  "sugar-check-at-home",
  "injection-administration-at-home",
  "dressing-wound-care-at-home",
  "urgent-care-at-home",
  "iv-fluid-therapy-at-home",
  "nursing-care-at-home",
  "physiotherapy-at-home",
  "home-lab-testing",
  "mental-health-support-at-home",
];

const locationSlugs = [
  "doctor-home-visit-andheri-west",
  "doctor-home-visit-andheri",
  "doctor-home-visit-jogeshwari",
  "doctor-home-visit-goregaon",
  "doctor-home-visit-malad",
  "doctor-home-visit-ram-mandir",
  "doctor-home-visit-vile-parle",
];

const blogSlugs = [
  "doctor-home-visit-mumbai-when-good-option",
  "how-to-book-doctor-at-home-mumbai",
  "what-to-expect-during-doctor-home-visit",
  "home-healthcare-elderly-parents-mumbai",
  "doctor-home-visit-vs-clinic-visit",
  "what-to-keep-ready-before-doctor-home-visit",
  "fever-when-to-consult-doctor",
  "home-care-after-hospital-discharge",
  "blood-pressure-monitoring-at-home",
  "home-healthcare-options-senior-citizens-mumbai",
  "persistent-cough-when-medical-attention",
];

function urlEntry(loc, priority, changefreq) {
  return `  <url><loc>${DOMAIN}${loc}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

const urls = [
  ...staticPages.map((p) => urlEntry(p.loc, p.priority, p.changefreq)),
  ...serviceSlugs.map((s) => urlEntry(`/services/${s}`, "0.6", "monthly")),
  ...locationSlugs.map((s) => urlEntry(`/locations/${s}`, "0.7", "monthly")),
  ...blogSlugs.map((s) => urlEntry(`/blog/${s}`, "0.5", "monthly")),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const out = path.join(__dirname, "..", "public", "sitemap.xml");
fs.writeFileSync(out, xml, "utf8");
console.log(`Wrote ${urls.length} URLs to ${out}`);
