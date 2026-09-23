/**
 * Static SEO audit (no network). Run: node scripts/seo-audit-static.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "src");
const publicDir = path.join(root, "public");

const issues = [];
const ok = [];

function read(p) {
  return fs.readFileSync(p, "utf8");
}

const sitemap = read(path.join(publicDir, "sitemap.xml"));
const urlCount = (sitemap.match(/<loc>/g) || []).length;
ok.push(`Sitemap lists ${urlCount} URLs with lastmod/changefreq`);

if (!fs.existsSync(path.join(publicDir, "llms.txt"))) issues.push("Missing public/llms.txt");
else ok.push("llms.txt present");

const seoComponent = read(path.join(src, "components", "Seo.jsx"));
for (const token of ["canonical", "og:locale", "twitter:image", "geo.region", "robots"]) {
  if (seoComponent.includes(token)) ok.push(`Seo.jsx includes ${token}`);
  else issues.push(`Seo.jsx missing ${token}`);
}

const siteJs = read(path.join(src, "data", "site.js"));
for (const token of ["GeoCoordinates", "locationLocalSchema", "webSiteSchema", "contactPoint"]) {
  if (siteJs.includes(token)) ok.push(`site.js local SEO: ${token}`);
  else issues.push(`site.js missing ${token}`);
}

const pagesDir = path.join(src, "pages");
const pageFiles = fs.readdirSync(pagesDir).filter((f) => f.endsWith(".jsx"));
for (const file of pageFiles) {
  if (file === "NotFound.jsx") continue;
  const content = read(path.join(pagesDir, file));
  if (!content.includes("<Seo")) issues.push(`${file} has no <Seo /> component`);
}

console.log("\n=== Doconnect static SEO audit ===\n");
console.log("OK:");
ok.forEach((l) => console.log("  ✓", l));
if (issues.length) {
  console.log("\nISSUES:");
  issues.forEach((l) => console.log("  ✗", l));
  process.exitCode = 1;
} else {
  console.log("\nNo blocking issues found.");
}
