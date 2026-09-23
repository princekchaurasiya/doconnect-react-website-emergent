import { Helmet } from "react-helmet-async";
import { SITE, localBusinessSchema, IMAGES, GEO_COORDINATES } from "../data/site";

export default function Seo({
  title,
  description,
  path = "/",
  jsonLd = [],
  image = IMAGES.hero,
  noindex = false,
}) {
  const url = `${SITE.domain}${path}`;
  const schemas = [localBusinessSchema, ...jsonLd];
  const geoPosition = `${GEO_COORDINATES.latitude};${GEO_COORDINATES.longitude}`;
  const icbm = `${GEO_COORDINATES.latitude}, ${GEO_COORDINATES.longitude}`;
  return (
    <Helmet htmlAttributes={{ lang: "en-IN" }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Andheri West, Mumbai" />
      <meta name="geo.position" content={geoPosition} />
      <meta name="ICBM" content={icbm} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Doconnect" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE.domain}${item.path}`,
  })),
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
