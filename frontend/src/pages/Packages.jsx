import { Link } from "react-router-dom";
import { CheckCircle2, Phone, Info } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { SITE } from "../data/site";
import { PACKAGES, PRICING_NOTE } from "../data/packages";

export default function Packages() {
  return (
    <>
      <Seo
        title="Home Healthcare Packages & Plans in Mumbai | Doconnect"
        description="Doconnect care packages — Basic Care, Family Care, Senior Care and Preventive Care plans for home healthcare in Mumbai. Transparent pricing on call: 084248 45423."
        path="/packages"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Packages", path: "/packages" }])]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Packages & Plans</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Care packages built around your needs
            </h1>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Whether you need an occasional consultation or ongoing care for an elderly parent, Doconnect offers
              structured care arrangements. Every package is customised to the patient — and priced transparently
              before anything begins.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <div className="flex gap-3 rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4" data-testid="pricing-note">
              <Info className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
              <p className="text-sm text-sky-900 leading-relaxed">{PRICING_NOTE}</p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-8 flex flex-col hover:border-teal-300 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.12)] transition-all duration-200" data-testid={`package-card-${p.slug}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">{p.name}</h2>
                      <p className="mt-1.5 text-sm text-slate-600">{p.audience}</p>
                    </div>
                    <span className="rounded-full bg-teal-50 border border-teal-200/60 px-3 py-1 text-[11px] font-semibold text-teal-700 whitespace-nowrap">
                      {p.validity}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-teal-600 shrink-0" /> {inc}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4">{p.note}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a href={SITE.phoneTel} data-testid={`package-call-${p.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition-colors">
                      <Phone className="h-4 w-4" /> Get Pricing
                    </a>
                    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-testid={`package-whatsapp-${p.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors">
                      Talk to a Care Coordinator
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">How packages work</h2>
            <ol className="mt-5 space-y-3">
              {[
                "Call or WhatsApp us and describe the patient's needs.",
                "A care coordinator suggests the right arrangement and shares transparent pricing.",
                "Visits are scheduled around the patient's routine, with reminders before each visit.",
                "The plan adjusts as the patient's needs change — no rigid lock-ins.",
              ].map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white text-xs font-bold">{i + 1}</span>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">{s}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Find the right care arrangement" text="A two-minute call is all it takes to understand which package fits your family — and what it costs." />
    </>
  );
}
