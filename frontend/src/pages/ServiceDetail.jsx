import { useParams, Link, Navigate } from "react-router-dom";
import {
  Stethoscope, Wind, Droplets, Syringe, Bandage, Thermometer, Droplet,
  HeartPulse, Activity, FlaskConical, Brain, CheckCircle2, Phone, CalendarCheck, ArrowRight, ChevronRight,
} from "lucide-react";
import Seo, { breadcrumbSchema, faqSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import { EmergencyNote } from "../components/CtaBand";
import { SITE } from "../data/site";
import { SERVICES } from "../data/services";
import { LOCATIONS, locationPath } from "../data/locations";

const ICONS = { Wind, Droplets, Syringe, Bandage, Thermometer, Droplet, HeartPulse, Activity, FlaskConical, Brain, Stethoscope };

function List({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
          <CheckCircle2 className="h-4 w-4 mt-0.5 text-teal-600 shrink-0" /> {item}
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }) {
  return (
    <Reveal>
      <section className="border-t border-slate-100 pt-10 mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">{title}</h2>
        <div className="mt-5">{children}</div>
      </section>
    </Reveal>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const Icon = ICONS[service.icon] || Stethoscope;
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${service.name} in Mumbai | Doconnect`}
        description={`${service.tagline} Book ${service.name.toLowerCase()} in Mumbai with Doconnect — open 24 hours. Call 084248 45423.`}
        path={`/services/${service.slug}`}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          faqSchema(service.faq),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            provider: { "@type": "MedicalBusiness", name: "Doconnect", telephone: "+918424845423" },
            areaServed: "Mumbai",
            description: service.tagline,
          },
        ]}
      />
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb" data-testid="breadcrumbs">
            <Link to="/" className="hover:text-teal-700">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-teal-700">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-700 font-medium">{service.name}</span>
          </nav>
          <Reveal className="mt-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              {service.name} in Mumbai
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">{service.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" data-testid="service-book-btn"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white hover:bg-teal-800 transition-colors">
                <CalendarCheck className="h-4 w-4" /> Book a Home Visit
              </Link>
              <a href={SITE.phoneTel} data-testid="service-call-btn"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-teal-300 hover:text-teal-700 transition-colors">
                <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="service-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-6 py-3.5 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Section title="Who this service is for">
            <List items={service.whoFor} />
          </Section>

          <Section title="What happens during the visit">
            <List items={service.during} />
          </Section>

          <Section title="What to keep ready">
            <List items={service.keepReady} />
          </Section>

          <Section title="Benefits of getting this care at home">
            <List items={service.benefits} />
          </Section>

          <Section title="When hospital care may be required instead">
            <p className="text-sm text-slate-600 leading-relaxed">{service.emergency}</p>
            <div className="mt-5"><EmergencyNote /></div>
          </Section>

          <Section title="How to book">
            <p className="text-sm text-slate-600 leading-relaxed">
              Booking takes one minute. Call <a href={SITE.phoneTel} className="font-semibold text-teal-700">{SITE.phoneDisplay}</a>,
              message us on <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700">WhatsApp</a>,
              or use our <Link to="/contact" className="font-semibold text-teal-700">online booking form</Link>. Share the patient's
              condition and your location in Mumbai, and our team will confirm availability and pricing upfront.
            </p>
          </Section>

          <Section title="Frequently asked questions">
            <div className="space-y-3">
              {service.faq.map((f, i) => (
                <details key={f.q} className="group rounded-2xl border border-slate-200/80 bg-white p-5 open:border-teal-300 transition-colors" data-testid={`service-faq-${i}`}>
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-slate-900 list-none">
                    {f.q}
                    <span className="text-teal-600 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Section>

          <Section title="Related services">
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} to={`/services/${r.slug}`} data-testid={`related-service-${r.slug}`}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-5 hover:border-teal-300 transition-colors">
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-teal-800">{r.name}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                    View <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </Section>

          <Section title="Available across Mumbai">
            <div className="flex flex-wrap gap-2.5">
              {LOCATIONS.map((l) => (
                <Link key={l.slug} to={locationPath(l.slug)}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors">
                  {l.name}
                </Link>
              ))}
              <Link to="/doctor-home-visit-mumbai"
                className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100 transition-colors">
                Doctor Home Visit Mumbai
              </Link>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}
