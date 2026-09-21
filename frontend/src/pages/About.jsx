import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, MapPin, ShieldCheck, Clock } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { IMAGES } from "../data/site";

const VALUES = [
  { icon: HeartHandshake, title: "Patients first", text: "Every decision — from scheduling to treatment advice — is made around what is right for the patient, not what is convenient for us." },
  { icon: ShieldCheck, title: "Honest guidance", text: "If a patient needs a hospital, we say so. If a test is unnecessary, we say that too. Trust is built on honest advice." },
  { icon: MapPin, title: "Local and reachable", text: "We are a Mumbai service based in Andheri West. When you call, you speak to a local team that knows your area." },
  { icon: Clock, title: "Always available", text: "Illness does not follow a schedule. Our lines stay open 24 hours, every day of the year." },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Doconnect | Home Healthcare Service in Mumbai"
        description="Doconnect brings professional doctor home visits and at-home medical care to families across Mumbai. Learn about our approach to convenient, honest home healthcare."
        path="/about"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]}
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">About Doconnect</p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Healthcare that comes home
              </h1>
              <p className="mt-6 text-slate-600 leading-relaxed">
                Doconnect exists for a simple reason: for many patients, the hardest part of seeing a doctor is not
                the consultation — it is everything around it. The travel, the waiting, the exhaustion. We remove
                that burden by bringing qualified doctors to your home in Mumbai.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Whether it is an elderly parent managing diabetes, a patient recovering after surgery, or a sudden
                fever at midnight, our team connects you with doctors who are experienced in assessing and treating
                patients in a home setting — including care for chronic, elderly and bedridden patients.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Based in Andheri West and open 24 hours, we serve Mumbai's western suburbs with doctor home visits,
                nursing care, physiotherapy, home lab testing and procedure support such as injections, IV fluids and
                wound care.
              </p>
              <div className="mt-8">
                <Link to="/doctor-home-visit-mumbai" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all" data-testid="about-homevisit-link">
                  Learn about our doctor home visit service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)]">
                <img src={IMAGES.elderly} alt={IMAGES.elderlyAlt} className="w-full h-[380px] object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">How we work</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our process is deliberately simple. You call, WhatsApp or book online. Our coordination team confirms
              your requirement, the doctor's availability and the visit charge — upfront. The doctor visits at the
              scheduled time, examines the patient thoroughly, and explains the findings in plain language. Where
              follow-up is needed, we schedule it before we leave.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Our commitment to transparent communication
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              We do not make exaggerated claims, and we do not hide information. Pricing is shared before a visit is
              confirmed. Findings are explained honestly. And when home care is not the right answer — when a patient
              needs a hospital — we say so clearly, because that honesty is what keeps patients safe.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Talk to the Doconnect team" text="Questions about whether a home visit is right for your situation? Call us — we are happy to guide you honestly." />
    </>
  );
}
