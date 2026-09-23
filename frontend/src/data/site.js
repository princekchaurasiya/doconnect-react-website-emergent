export const SITE = {
  name: "Doconnect",
  domain: "https://www.doconnect.org",
  tagline: "Doctor Home Visit in Mumbai",
  phoneDisplay: "084248 45423",
  phoneIntl: "+918424845423",
  phoneTel: "tel:+918424845423",
  whatsapp:
    "https://wa.me/918424845423?text=" +
    encodeURIComponent(
      "Hello Doconnect, I would like to book a doctor home visit in Mumbai."
    ),
  email: "info@doconnect.org",
  addressLine1: "S-II C-1, BMC Colony, Anand Nagar,",
  addressLine2: "Andheri West, Mumbai, Maharashtra 400053",
  addressFull:
    "S-II C-1, BMC Colony, Anand Nagar, Andheri West, Mumbai, Maharashtra 400053",
  hours: "Open 24 hours",
  rating: "5.0",
  ratingNote: "Google rating",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Doconnect+Home+Visit+Doctor+Andheri+West+Mumbai",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "S-II C-1, BMC Colony, Anand Nagar, Andheri West, Mumbai, Maharashtra 400053"
    ),
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "S-II C-1, BMC Colony, Anand Nagar, Andheri West, Mumbai, Maharashtra 400053"
    ) +
    "&output=embed",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctor Home Visit", to: "/doctor-home-visit-mumbai" },
  { label: "Locations", to: "/locations" },
  { label: "Packages", to: "/packages" },
  { label: "Doctors", to: "/doctors" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const TIME_SLOTS = [
  "08:00 - 10:00 am",
  "10:00 - 12:00 pm",
  "12:00 - 02:00 pm",
  "02:00 - 04:00 pm",
  "04:00 - 06:00 pm",
  "06:00 - 08:00 pm",
  "08:00 - 10:00 pm",
  "10:00 - 12:00 am",
];

export const TRUST_STRIP = [
  { title: "Available 24/7", text: "Day or night, our team is reachable." },
  { title: "Doctor Home Visits", text: "Qualified doctors at your doorstep." },
  { title: "Convenient At-Home Care", text: "No travel, no clinic queues." },
  { title: "Mumbai Service Area", text: "Serving suburbs across Mumbai." },
];

export const TESTIMONIALS = [
  {
    name: "Ramesh Dhoklam",
    text: "Everything was arranged quickly and easily. The customer service was excellent, and I got the help I needed without delay.",
  },
  {
    name: "Prince Chaurasiya",
    text: "The booking process was straightforward. I secured my appointments without any issues. Highly satisfied!",
  },
  {
    name: "Shashank Sinha",
    text: "I was impressed by the care and professionalism shown by Doconnect. They were always available to answer my questions and ensure everything went smoothly.",
  },
  {
    name: "Jayesh Patel",
    text: "I had a fantastic experience with Doconnect! Booking a doctor for a home visit was quick, and arranging lab tests was hassle-free.",
  },
  {
    name: "Vijay Gore",
    text: "The Doconnect team was incredibly helpful. Their service exceeded my expectations, and I highly recommend it for anyone needing medical assistance.",
  },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70",
  heroAlt:
    "Doconnect doctor consulting a patient during a home visit in Mumbai",
  elderly:
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1000&q=70",
  elderlyAlt: "Doctor checking blood pressure of an elderly patient at home",
  stethoscope:
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1000&q=70",
  stethoscopeAlt: "Stethoscope and medical equipment prepared for a home visit",
  consult:
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1000&q=70",
  consultAlt: "Doctor in a friendly consultation with a patient",
  nurse:
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=70",
  nurseAlt: "Nursing professional providing care",
  lab: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=70",
  labAlt: "Laboratory sample testing",
  physio:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=70",
  physioAlt: "Physiotherapy exercise guidance",
  mumbai:
    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=70",
  mumbaiAlt: "Mumbai city skyline, Doconnect service area",
  care:
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=70",
  careAlt: "Caring hands supporting an elderly person",
  doctorTablet:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=70",
  doctorTabletAlt: "Doctor reviewing patient records on a laptop",
};

/** Verified office location — Anand Nagar, Andheri West */
export const GEO_COORDINATES = {
  latitude: 19.1136,
  longitude: 72.8697,
};

export const MUMBAI_AREAS_SERVED = [
  "Andheri West",
  "Andheri",
  "Jogeshwari",
  "Goregaon",
  "Malad",
  "Ram Mandir",
  "Vile Parle",
  "Mumbai",
];

export const ORGANIZATION_ID = `${SITE.domain}/#organization`;
export const WEBSITE_ID = `${SITE.domain}/#website`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Physician"],
  "@id": ORGANIZATION_ID,
  name: "Doconnect | Doctor home visit Mumbai",
  alternateName: "Doconnect Home Healthcare",
  url: SITE.domain,
  image: IMAGES.hero,
  logo: IMAGES.hero,
  telephone: "+918424845423",
  email: SITE.email,
  description:
    "Doctor home visits and at-home medical care in Mumbai. Open 24 hours. Based in Andheri West.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "S-II C-1, BMC Colony, Anand Nagar",
    addressLocality: "Andheri West",
    addressRegion: "Maharashtra",
    postalCode: "400053",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO_COORDINATES.latitude,
    longitude: GEO_COORDINATES.longitude,
  },
  hasMap: SITE.directionsUrl,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: MUMBAI_AREAS_SERVED.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  medicalSpecialty: ["PrimaryCare", "HomeHealth"],
  sameAs: [SITE.googleReviewsUrl],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+918424845423",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Marathi"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  },
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.domain,
  name: "Doconnect",
  description: "Doctor home visit and home healthcare in Mumbai — 24/7.",
  inLanguage: "en-IN",
  publisher: { "@id": ORGANIZATION_ID },
};

/** Local landing pages — reinforces Mumbai neighbourhood SEO */
export function locationLocalSchema(loc, path) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.domain}${path}#local`,
    name: `Doconnect — Doctor Home Visit in ${loc.name}`,
    url: `${SITE.domain}${path}`,
    telephone: "+918424845423",
    email: SITE.email,
    description: loc.metaDescription,
    address: localBusinessSchema.address,
    geo: localBusinessSchema.geo,
    areaServed: {
      "@type": "Place",
      name: `${loc.name}, Mumbai, Maharashtra, India`,
    },
    parentOrganization: { "@id": ORGANIZATION_ID },
  };
}
