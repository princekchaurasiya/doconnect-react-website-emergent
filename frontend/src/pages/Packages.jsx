import { CheckCircle2, Phone, Info, Star } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { SITE } from "../data/site";
import { PACKAGES, PLANS, PLAN_INCLUSIONS, PRICING_NOTE } from "../data/packages";

export default function Packages() {
  return (
    <>
      <Seo
        title="Home Healthcare Packages & Plans in Mumbai | Doconnect"
        description="Doconnect care plans — doctor home visits, nurse visits, 24x7 doctor on call, home lab tests and a dedicated care coordinator. Transparent pricing on call: 084248 45423."
        path="/packages"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Packages", path: "/packages" }])]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Packages & Plans</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Choose a plan that fits your family's needs
            </h1>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Doconnect brings dependable healthcare home — doctor visits, nurse support, 24x7 doctor access and a
              dedicated care coordinator who keeps your family informed. Every step of care is managed under one
              trusted team.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <div className="flex gap-3 rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4" data-testid="pricing-note">
              <Info className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
              <p className="text-sm text-sky-900 leading-relaxed">{PRICING_NOTE}</p>
            </div>
          </Reveal>

          {/* SUBSCRIPTION PLANS */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.slug} delay={i * 0.08}>
                <div
                  data-testid={`plan-card-${plan.slug}`}
                  className={`relative h-full rounded-3xl border p-7 sm:p-8 flex flex-col transition-all duration-200 ${
                    plan.recommended
                      ? "border-teal-600 bg-white shadow-[0_20px_50px_-12px_rgba(13,148,136,0.2)]"
                      : "border-slate-200/80 bg-white hover:border-teal-300"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3.5 left-7 inline-flex items-center gap-1.5 rounded-full bg-teal-700 px-3.5 py-1.5 text-xs font-semibold text-white">
                      <Star className="h-3.5 w-3.5 fill-white" /> Most chosen
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-slate-900">{plan.name}</h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{plan.tagline}</p>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-teal-600 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <a href={SITE.phoneTel} data-testid={`plan-call-${plan.slug}`}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                        plan.recommended
                          ? "bg-teal-700 text-white hover:bg-teal-800"
                          : "border border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100"
                      }`}>
                      <Phone className="h-4 w-4" /> Get Pricing
                    </a>
                    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-testid={`plan-whatsapp-${plan.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors">
                      Talk to Us
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* PLAN INCLUSIONS */}
          <Reveal className="mt-16">
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-7 sm:p-10" data-testid="plan-inclusions">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Plan Inclusions</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Hospital-level care, managed at home
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
                From medical checkups and diagnostics to post-hospitalisation recovery and priority scheduling,
                every step of care is coordinated by one team that knows your family's history.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {PLAN_INCLUSIONS.map((inc) => (
                  <li key={inc} className="flex gap-2.5 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-teal-600 shrink-0" /> {inc}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-slate-500 italic">
                Transparent pricing. No hidden charges. Just honest care.
              </p>
            </div>
          </Reveal>

          {/* CARE ARRANGEMENTS */}
          <Reveal className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Or pick a flexible care arrangement
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
              Not every family needs a monthly plan. These arrangements adapt to how often you actually need care.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 flex flex-col hover:border-teal-300 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.12)] transition-all duration-200" data-testid={`package-card-${p.slug}`}>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                    <span className="rounded-full bg-teal-50 border border-teal-200/60 px-2.5 py-1 text-[10px] font-semibold text-teal-700 whitespace-nowrap">
                      {p.validity}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.audience}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-teal-600 shrink-0" /> {inc}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-3">{p.note}</p>
                  <a href={SITE.phoneTel} data-testid={`package-call-${p.slug}`}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2.5 text-sm font-semibold text-teal-700 hover:bg-teal-100 transition-colors">
                    <Phone className="h-4 w-4" /> Get Pricing
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">How plans work</h2>
            <ol className="mt-5 space-y-3">
              {[
                "Call or WhatsApp us and describe the patient's needs.",
                "A care coordinator suggests the right plan and shares transparent pricing.",
                "The first doctor visit is scheduled promptly, and your care coordinator stays in touch.",
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
      <CtaBand title="Not sure which plan fits?" text="A two-minute call with our care coordinator is all it takes — honest advice, transparent pricing." />
    </>
  );
}
