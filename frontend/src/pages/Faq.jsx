import { Link } from "react-router-dom";
import Seo, { breadcrumbSchema, faqSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { FAQS } from "../data/faqs";

export default function Faq() {
  return (
    <>
      <Seo
        title="FAQs — Doctor Home Visit in Mumbai | Doconnect"
        description="Answers to common questions about booking a doctor home visit in Mumbai — areas covered, pricing, 24/7 availability, follow-ups and more. Doconnect."
        path="/faq"
        jsonLd={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]),
          faqSchema(FAQS),
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Help Centre</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Frequently asked questions
            </h1>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Everything families usually ask before booking a doctor home visit with Doconnect. Need something
              specific? <Link to="/contact" className="font-semibold text-teal-700 hover:underline">Contact us</Link>.
            </p>
          </Reveal>
          <div className="mt-12 space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.03, 0.3)}>
                <details className="group rounded-2xl border border-slate-200/80 bg-white p-5 open:border-teal-300 transition-colors" data-testid={`faq-page-item-${i}`}>
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm sm:text-base font-semibold text-slate-900 list-none">
                    {f.q}
                    <span className="text-teal-600 group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Still have a question?" text="Call or WhatsApp us — a real person from our Mumbai team will answer." />
    </>
  );
}
