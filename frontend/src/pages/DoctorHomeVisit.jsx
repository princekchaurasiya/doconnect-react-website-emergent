import { Link } from "react-router-dom";
import {
  Phone, CalendarCheck, CheckCircle2, ChevronRight, Clock, HeartPulse,
  Accessibility, Briefcase, Users, RefreshCcw, ArrowRight,
} from "lucide-react";
import Seo, { breadcrumbSchema, faqSchema } from "../components/Seo";
import Reveal, { MaskedLine } from "../components/Reveal";
import CtaBand, { EmergencyNote } from "../components/CtaBand";
import { SITE, IMAGES, ORGANIZATION_ID, MUMBAI_AREAS_SERVED } from "../data/site";
import { LOCATIONS, locationPath } from "../data/locations";

const WHO = [
  { icon: HeartPulse, title: "Elderly patients", text: "Seniors managing chronic conditions who find clinic travel exhausting or risky." },
  { icon: Accessibility, title: "Mobility-limited patients", text: "Bedridden patients and anyone for whom leaving home is painful or impractical." },
  { icon: Briefcase, title: "Working professionals", text: "People whose schedules make clinic hours and long queues unrealistic." },
  { icon: Users, title: "Families", text: "Households that want prompt medical attention at home for a loved one." },
  { icon: RefreshCcw, title: "Follow-up patients", text: "Anyone needing post-illness or post-hospitalisation review without another hospital trip." },
];

const CONDITIONS = [
  "Fever and infections",
  "Weakness and dehydration",
  "Abdominal pain needing assessment",
  "Chronic disease reviews (diabetes, BP)",
  "Post-hospitalisation follow-ups",
  "Wound and dressing evaluation",
  "Breathing discomfort (non-emergency)",
  "General health assessments",
];

const PAGE_FAQ = [
  { q: "What does a doctor home visit include?", a: "A Doconnect home visit includes a detailed history, physical examination, vital checks, diagnosis, treatment plan and prescription. Where prescribed, services like injections, IV fluids, nebulisation or dressing can be performed or scheduled." },
  { q: "How quickly can a doctor reach my home in Mumbai?", a: "It depends on your location and current availability. Areas near our Andheri West base usually get the fastest response. Call 084248 45423 for an honest, current estimate." },
  { q: "Can I book a home visit for my elderly parents if I live elsewhere?", a: "Yes. Many of our bookings come from family members living in other cities. We keep you informed before and after the visit." },
  { q: "What if the doctor says hospital care is needed?", a: "Our doctors will tell you clearly and help you understand the next step. Home visits never delay genuinely needed hospital care." },
  { q: "Are follow-up visits available?", a: "Yes. Follow-ups can be scheduled after the first visit, and recurring visits can be arranged for chronic or elderly patients." },
];

export default function DoctorHomeVisit() {
  return (
    <>
      <Seo
        title="Doctor Home Visit in Mumbai | Book a Doctor at Home | Doconnect"
        description="Book a doctor home visit in Mumbai with Doconnect. Qualified doctors at your doorstep, 24/7 availability, transparent pricing. Serving Andheri, Jogeshwari, Goregaon, Malad & more. Call 084248 45423."
        path="/doctor-home-visit-mumbai"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Doctor Home Visit Mumbai", path: "/doctor-home-visit-mumbai" },
          ]),
          faqSchema(PAGE_FAQ),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Doctor Home Visit in Mumbai",
            provider: { "@id": ORGANIZATION_ID },
            areaServed: MUMBAI_AREAS_SERVED.map((name) => ({
              "@type": "AdministrativeArea",
              name,
            })),
            description: "Professional doctor home visits across Mumbai — examination, diagnosis, treatment and follow-up care at your doorstep.",
          },
        ]}
      />
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb" data-testid="breadcrumbs">
            <Link to="/" className="hover:text-teal-700">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-700 font-medium">Doctor Home Visit Mumbai</span>
          </nav>
          <div className="mt-8">
            <MaskedLine delay={0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
                <Clock className="h-3.5 w-3.5" /> Open 24 hours
              </span>
            </MaskedLine>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]" data-testid="dhv-heading">
              <MaskedLine delay={0.15}>Doctor Home Visit in Mumbai</MaskedLine>
            </h1>
            <MaskedLine delay={0.3}>
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                A doctor home visit means a qualified doctor comes to you — examines the patient at home, explains
                the diagnosis in plain language, and starts a treatment plan on the spot. For anyone too unwell, too
                elderly, or too busy to travel, it is healthcare without the hardest part: getting there.
              </p>
            </MaskedLine>
            <MaskedLine delay={0.42}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" data-testid="dhv-book-btn"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white hover:bg-teal-800 transition-colors">
                  <CalendarCheck className="h-4 w-4" /> Book a Doctor Home Visit
                </Link>
                <a href={SITE.phoneTel} data-testid="dhv-call-btn"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-800 hover:border-teal-300 hover:text-teal-700 transition-colors">
                  <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                </a>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="dhv-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-7 py-3.5 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </MaskedLine>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)]">
              <img src={IMAGES.consult} alt={IMAGES.consultAlt} loading="lazy" className="w-full h-[340px] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Who benefits from a home visit?</h2>
            <div className="mt-8 space-y-5">
              {WHO.map((w) => (
                <div key={w.title} className="flex gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{w.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Conditions well suited to home consultation
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Home visits work best for conditions a doctor can properly assess and begin treating at home.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {CONDITIONS.map((c) => (
                <li key={c} className="flex gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-teal-600 shrink-0" /> {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">What happens during the visit</h2>
            <ol className="mt-6 space-y-4">
              {[
                "The doctor discusses symptoms, history and current medications with the patient and family.",
                "A physical examination follows — vitals and complaint-specific checks.",
                "The doctor explains the diagnosis and prescribes treatment, clearly and without jargon.",
                "If tests are needed, home sample collection is arranged. If a procedure is prescribed, it is performed or scheduled.",
                "Follow-up guidance is shared — including honest advice if hospital care is the better option.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white text-xs font-bold">{i + 1}</span>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1.5">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-14">
            <EmergencyNote />
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
            <div className="mt-6 space-y-3">
              {PAGE_FAQ.map((f, i) => (
                <details key={f.q} className="group rounded-2xl border border-slate-200/80 bg-white p-5 open:border-teal-300 transition-colors" data-testid={`dhv-faq-${i}`}>
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-slate-900 list-none">
                    {f.q}
                    <span className="text-teal-600 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Areas we serve in Mumbai</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {LOCATIONS.map((l) => (
                <Link key={l.slug} to={locationPath(l.slug)} data-testid={`dhv-location-${l.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors">
                  Doctor Home Visit {l.name}
                </Link>
              ))}
            </div>
            <Link to="/locations" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all">
              View all locations <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
