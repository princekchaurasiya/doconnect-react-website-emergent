# Doconnect — Website Redesign & SEO Build (PRD)

## Original Problem Statement
Transform the one-page Doconnect website (doconnect.org) into a large, professional, SEO-focused home healthcare website for Mumbai. Use docville.in only as an information-architecture reference. Preserve verified business info (Address: S-II C-1, BMC Colony, Anand Nagar, Andheri West, Mumbai 400053; Phone: 084248 45423; Open 24 hours; 5.0 Google rating). No fake reviews, doctors, prices or claims. White-dominant, minimal, fast, mobile-first. CTAs: Book Home Visit / Call / WhatsApp.

## User Personas
- Mumbai family member booking a doctor for an elderly parent
- Patient needing at-home procedures (injection, IV, dressing, nebulisation)
- Working professional needing convenient home consultation
- NRI / out-of-city children managing parents' care remotely

## Architecture
- Frontend: React 19 + react-router-dom v7 + Tailwind + framer-motion + lenis + react-helmet-async (per-page titles, meta, canonical, OG, JSON-LD)
- Backend: FastAPI + MongoDB (motor). POST /api/appointments stores booking/callback requests
- Content: data-driven files in src/data (site, services, locations, packages, faqs, posts, team) — component-based so new pages/articles/plans can be added by editing data only
- SEO assets: public/sitemap.xml, public/robots.txt (canonical domain doconnect.org)

## Implemented (July 2026)
- 10 core pages: Home, About, Services, Doctor Home Visit pillar, Locations index, Packages, Doctors, Blog, FAQ, Contact + 404
- 10 service landing pages (nebulisation, sugar check, injections, wound care, urgent care, IV therapy, nursing, physiotherapy, lab testing, mental health)
- 6 location pages with unique copy: Andheri West, Andheri, Jogeshwari, Goregaon, Malad, Ram Mandir, Vile Parle
- 10 original blog articles with TOC, FAQ, Article/Breadcrumb schema, internal links
- Booking form (patient name, mobile, email, location, service, date, time slot, message) → POST /api/appointments (MongoDB) with toast confirmation
- Meet Our Founder: Dr. Anoop Jaiswar (real photo + credentials) — reusable <Founder/> component on Home (compact), About, Doctors; Physician JSON-LD schema
- Plans: Essential Care / Complete Care subscription cards + Plan Inclusions grid + 4 flexible care arrangements (Get Pricing CTAs — no invented prices)
- Trust: Google Maps embed, Get Directions, Google Reviews link, 5.0 rating badge (honest), emergency safety notes
- Sticky mobile bottom bar: Call | WhatsApp | Book
- Legal pages: Privacy, Terms, Disclaimer, Cancellation & Refund

## Backlog
- P0: None blocking
- P1: Remaining 8 blog articles from topic list; more location pages (Bandra, Kandivali, Borivali, Powai, Juhu, Santacruz) once service areas confirmed; email notification on new booking (Resend)
- P2: Admin view for appointment requests (needs auth); doctor profile pages for wider network; real pricing once confirmed; Google Business review embed

## Notes
- Appointment requests stored in MongoDB `appointments` collection; no admin UI yet
- No user accounts / no auth in this build
- Verified: API health + appointment POST, booking form end-to-end, home/contact/location/blog/doctors/packages pages render with correct titles
