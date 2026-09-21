import { Link } from "react-router-dom";
import {
  Phone, CalendarCheck, Star, Clock, Home as HomeIcon, HeartHandshake, MapPin,
  Stethoscope, Wind, Droplets, Syringe, Bandage, Thermometer, Droplet, HeartPulse,
  Activity, FlaskConical, Brain, ShieldCheck, ArrowRight, CheckCircle2,
} from "lucide-react";
import Seo, { faqSchema, breadcrumbSchema } from "../components/Seo";
import Reveal, { MaskedLine } from "../components/Reveal";
import MapSection from "../components/MapSection";
import CtaBand, { EmergencyNote } from "../components/CtaBand";
import { SITE, TRUST_STRIP, TESTIMONIALS, IMAGES } from "../data/site";
import { SERVICES } from "../data/services";
import { LOCATIONS, locationPath } from "../data/locations";
import { PACKAGES } from "../data/packages";
import { FAQS } from "../data/faqs";
import { POSTS, postPath } from "../data/posts";

const ICONS = { Wind, Droplets, Syringe, Bandage, Thermometer, Droplet, HeartPulse, Activity, FlaskConical, Brain, Stethoscope };

const WHY = [
  { icon: HomeIcon, title: "Care without travel", text: "A qualified doctor examines the patient at home — no traffic, no queues, no waiting rooms." },
  { icon: ShieldCheck, title: "Professional consultation", text: "Our doctors are experienced in assessing and managing patients in a home setting." },
  { icon: CalendarCheck, title: "Easy booking", text: "Call, WhatsApp or use the booking form. Our team confirms availability and pricing upfront." },
  { icon: MapPin, title: "Local Mumbai service", text: "Based in Andheri West, serving the western suburbs with realistic arrival estimates." },
  { icon: HeartHandshake, title: "Transparent communication", text: "Clear findings, honest advice — including telling you when hospital care is the right choice." },
  { icon: Clock, title: "Open 24 hours", text: "Nights, weekends and holidays. Health problems do not keep office hours; neither do we." },
];

const STEPS = [
  { n: "01", title: "Book", text: "Call, WhatsApp or submit the booking form with the patient's condition and location." },
  { n: "02", title: "Get Matched", text: "Our team confirms your requirement, doctor availability and a clear arrival estimate." },
  { n: "03", title: "Doctor Visits", text: "The doctor examines the patient at home, explains the findings and begins treatment." },
  { n: "04", title: "Follow Up", text: "Tests, procedures and follow-up visits are coordinated so care continues smoothly." },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Doconnect | Doctor Home Visit in Mumbai | Doctor at Home"
        description="Book a doctor home visit in Mumbai with Doconnect. Qualified doctors, 24/7 availability, transparent pricing. Serving Andheri, Jogeshwari, Goregaon, Malad and more."
        path="/"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }])]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white" data-testid="hero-section">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-50 blur-3xl opacity-70" />
          <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-sky-50 blur-3xl opacity-60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <MaskedLine delay={0.05}>
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
                  <Clock className="h-3.5 w-3.5" /> Open 24 hours · Mumbai
                </span>
              </MaskedLine>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]" data-testid="hero-heading">
                <MaskedLine delay={0.15}>Doctor Home Visits</MaskedLine>
                <MaskedLine delay={0.28}>in Mumbai, <span className="text-teal-700">When You</span></MaskedLine>
                <MaskedLine delay={0.41}>Need Care at Home</MaskedLine>
              </h1>
              <MaskedLine delay={0.55}>
                <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Get professional medical care at home without the hassle of travelling to a clinic or waiting in
                  long queues. Book a qualified doctor for a convenient home consultation in Mumbai.
                </p>
              </MaskedLine>
              <MaskedLine delay={0.68}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" data-testid="hero-book-btn"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white hover:bg-teal-800 transition-colors shadow-[0_12px_32px_-6px_rgba(13,148,136,0.3)]">
                    <CalendarCheck className="h-4 w-4" /> Book a Home Visit
                  </Link>
                  <a href={SITE.phoneTel} data-testid="hero-call-btn"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 hover:border-teal-300 hover:text-teal-700 transition-colors">
                    <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                  </a>
                </div>
              </MaskedLine>
              <MaskedLine delay={0.8}>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <span className="inline-flex items-center gap-2 text-sm text-slate-700" data-testid="hero-rating">
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <strong className="text-slate-900">5.0</strong>
                    </span>
                    Google Rating
                  </span>
                  <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-teal-700 hover:underline" data-testid="hero-reviews-link">
                    See our Google profile
                  </a>
                </div>
              </MaskedLine>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.3} className="relative">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)]">
                  <img src={IMAGES.hero} alt={IMAGES.heroAlt} className="w-full h-[380px] sm:h-[440px] object-cover" fetchpriority="high" data-testid="hero-image" />
                </div>
                <div className="absolute -bottom-5 left-5 right-5 sm:right-auto rounded-2xl border border-slate-100 bg-white/95 backdrop-blur px-5 py-4 shadow-[0_12px_32px_-6px_rgba(15,23,42,0.12)]">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600" />
                    </span>
                    Doctors available now
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Andheri West · Jogeshwari · Goregaon · Malad & more</p>
                </div>
              </Reveal>
            </div>
          </div>
          {/* Trust strip */}
          <Reveal delay={0.2} className="mt-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" data-testid="trust-strip">
              {TRUST_STRIP.map((t) => (
                <div key={t.title} className="rounded-2xl border border-slate-200/80 bg-white p-5 hover:border-teal-300 transition-colors">
                  <p className="text-sm font-semibold text-slate-900">{t.title}</p>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-slate-100 bg-slate-50 py-3 overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex gap-10 whitespace-nowrap text-sm font-medium text-slate-500">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-10 shrink-0">
              {["Doctor Home Visit", "Open 24 Hours", "Andheri West", "Jogeshwari", "Goregaon", "Malad", "Vile Parle", "Ram Mandir", "Nursing Care", "Home Lab Testing", "IV Fluid Therapy", "Physiotherapy at Home"].map((w) => (
                <span key={w + copy} className="inline-flex items-center gap-10">
                  {w} <span className="h-1 w-1 rounded-full bg-teal-500 inline-block" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE */}
      <section className="py-16 sm:py-24 bg-white" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Why Choose Doconnect?</p>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Healthcare that comes to you, built on trust
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We bring professional medical consultation to your doorstep — with transparent communication and honest
              guidance at every step.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.12)] hover:border-teal-300 transition-all duration-200">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{w.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-slate-50" data-testid="how-it-works-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">How Doconnect Works</p>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              From your call to the doctor's knock, in four steps
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white p-6">
                  <span className="font-heading text-4xl font-extrabold text-teal-100">{s.n}</span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-24 bg-white" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Our Services</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Medical care at your doorstep
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                From doctor consultations to wound care, IV therapy and home lab testing — professional services
                delivered at home across Mumbai.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all" data-testid="services-view-all">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal>
              <Link to="/doctor-home-visit-mumbai" data-testid="service-card-doctor-home-visit"
                className="group block h-full rounded-2xl border border-teal-200 bg-teal-50/60 p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.15)] transition-all duration-200">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700 text-white">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-teal-800">Doctor for Home Visit</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Full medical consultation at home — examination, diagnosis, treatment plan and follow-up guidance.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                  Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </Reveal>
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] || Stethoscope;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                  <Link to={`/services/${s.slug}`} data-testid={`service-card-${s.slug}`}
                    className="group block h-full rounded-2xl border border-slate-200/80 bg-white p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.12)] hover:border-teal-300 transition-all duration-200">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-teal-800">{s.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                      Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-16 sm:py-24 bg-slate-50" data-testid="locations-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Service Areas</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Serving Mumbai's western suburbs
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Doconnect is based in Andheri West and provides doctor home visits across the western suburbs.
                Explore your area for local details, or call us to confirm coverage for your exact location.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {LOCATIONS.map((l) => (
                  <Link key={l.slug} to={locationPath(l.slug)} data-testid={`location-chip-${l.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors">
                    <MapPin className="h-3.5 w-3.5 text-teal-600" /> {l.name}
                  </Link>
                ))}
              </div>
              <Link to="/locations" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all" data-testid="locations-view-all">
                View all locations <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)]">
                <img src={IMAGES.mumbai} alt={IMAGES.mumbaiAlt} loading="lazy" className="w-full h-[320px] sm:h-[400px] object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="py-16 sm:py-24 bg-white" data-testid="packages-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Care Packages</p>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Simple care arrangements for every need
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Transparent plans built around how often you need care. Pricing is shared on a quick call — no hidden charges.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.12)] hover:border-teal-300 transition-all duration-200">
                  <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{p.audience}</p>
                  <ul className="mt-4 space-y-2">
                    {p.includes.slice(0, 3).map((inc) => (
                      <li key={inc} className="flex gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-teal-600 shrink-0" /> {inc}
                      </li>
                    ))}
                  </ul>
                  <a href={SITE.phoneTel} data-testid={`package-pricing-${p.slug}`}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2.5 text-sm font-semibold text-teal-700 hover:bg-teal-100 transition-colors">
                    Get Pricing
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link to="/packages" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all" data-testid="packages-view-all">
              Compare packages in detail <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-slate-50" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Patient Experiences</p>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              What patients say about Doconnect
            </h2>
            <div className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3" data-testid="google-rating-badge">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <p className="text-sm text-slate-800">
                <strong>5.0 Google Rating</strong> —{" "}
                <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700 hover:underline">
                  view our Google Business profile
                </a>
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="h-full rounded-2xl border border-slate-200/80 bg-white p-6">
                  <blockquote className="text-sm text-slate-700 leading-relaxed">"{t.text}"</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-slate-900">— {t.name}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-16 sm:py-24 bg-white" data-testid="blog-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Health Guides</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                From the Doconnect blog
              </h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all" data-testid="blog-view-all">
              View all articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {POSTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to={postPath(p.slug)} data-testid={`blog-card-${p.slug}`}
                  className="group block h-full rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.12)] hover:border-teal-300 transition-all duration-200">
                  <div className="overflow-hidden">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-44 w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{p.category}</p>
                    <h3 className="mt-2 text-base font-semibold text-slate-900 leading-snug group-hover:text-teal-800">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-16 sm:py-24 bg-slate-50" data-testid="faq-preview-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">FAQs</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Common questions, honest answers
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {FAQS.slice(0, 5).map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group rounded-2xl border border-slate-200/80 bg-white p-5 open:border-teal-300 transition-colors" data-testid={`faq-item-${i}`}>
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-slate-900 list-none">
                    {f.q}
                    <span className="text-teal-600 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all" data-testid="faq-view-all">
              Read all FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <MapSection />

      <section className="pb-4 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmergencyNote />
        </div>
      </section>

      <CtaBand />

      <script type="application/ld+json" style={{ display: "none" }}>
        {JSON.stringify(faqSchema(FAQS.slice(0, 6)))}
      </script>
    </>
  );
}
