import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, CalendarCheck, MapPin, ChevronRight, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import Seo, { breadcrumbSchema, faqSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import { EmergencyNote } from "../components/CtaBand";
import { SITE, locationLocalSchema } from "../data/site";
import { LOCATIONS, locationPath } from "../data/locations";
import { SERVICES } from "../data/services";

export default function LocationDetail() {
  const { slug: rawSlug } = useParams();
  const slug = rawSlug?.replace(/^doctor-home-visit-/, "");
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return <Navigate to="/locations" replace />;
  const path = locationPath(loc.slug);
  const others = LOCATIONS.filter((l) => l.slug !== slug).slice(0, 4);

  return (
    <>
      <Seo
        title={loc.title}
        description={loc.metaDescription}
        path={path}
        jsonLd={[
          locationLocalSchema(loc, path),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: loc.name, path },
          ]),
          faqSchema(loc.faq),
        ]}
      />
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb" data-testid="breadcrumbs">
            <Link to="/" className="hover:text-teal-700">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/locations" className="hover:text-teal-700">Locations</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-700 font-medium">{loc.name}</span>
          </nav>
          <Reveal className="mt-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
              <Clock className="h-3.5 w-3.5" /> Available 24/7 in {loc.name}
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]" data-testid="location-heading">
              {loc.h1}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">{loc.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" data-testid="location-book-btn"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white hover:bg-teal-800 transition-colors">
                <CalendarCheck className="h-4 w-4" /> Book a Home Visit
              </Link>
              <a href={SITE.phoneTel} data-testid="location-call-btn"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-teal-300 hover:text-teal-700 transition-colors">
                <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="location-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-6 py-3.5 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <div className="mt-12 space-y-5">
            {loc.body.map((p, i) => (
              <Reveal key={i}>
                <p className="text-slate-600 leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Services available in {loc.name}</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              <li className="flex gap-2.5 rounded-xl border border-teal-200 bg-teal-50/60 px-4 py-3 text-sm text-slate-700">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-teal-600 shrink-0" />
                <Link to="/doctor-home-visit-mumbai" className="hover:text-teal-700 font-medium">Doctor home consultations</Link>
              </li>
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug} className="flex gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-teal-600 shrink-0" />
                  <Link to={`/services/${s.slug}`} className="hover:text-teal-700">{s.name}</Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Nearby areas we also serve</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {loc.nearby.map((n) => (
                <span key={n} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                  <MapPin className="h-3.5 w-3.5 text-teal-600" /> {n}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">FAQs — {loc.name}</h2>
            <div className="mt-5 space-y-3">
              {loc.faq.map((f, i) => (
                <details key={f.q} className="group rounded-2xl border border-slate-200/80 bg-white p-5 open:border-teal-300 transition-colors" data-testid={`location-faq-${i}`}>
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-slate-900 list-none">
                    {f.q}
                    <span className="text-teal-600 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <EmergencyNote />
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Other service areas</h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              {others.map((l) => (
                <Link key={l.slug} to={locationPath(l.slug)} data-testid={`nearby-location-${l.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-5 hover:border-teal-300 transition-colors">
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-teal-800">Doctor Home Visit in {l.name}</span>
                  <ArrowRight className="h-4 w-4 text-teal-700 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
