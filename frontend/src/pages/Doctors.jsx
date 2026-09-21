import { Link } from "react-router-dom";
import { Stethoscope, ShieldCheck, Clock, Phone, ArrowRight } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import Founder from "../components/Founder";
import CtaBand from "../components/CtaBand";
import { SITE } from "../data/site";
import { FOUNDER } from "../data/team";

const APPROACH = [
  { icon: ShieldCheck, title: "Verified qualifications", text: "Every doctor in the Doconnect network is verified for qualifications and registration before seeing patients." },
  { icon: Stethoscope, title: "Home-setting experience", text: "Our doctors are experienced in assessing and managing patients at home — with ICU and emergency care backgrounds." },
  { icon: Clock, title: "Matched to your need", text: "When you call, we match the right doctor to the patient's condition, location and urgency." },
];

export default function Doctors() {
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: FOUNDER.name,
    jobTitle: "General Practitioner",
    description: FOUNDER.bio,
    image: `${SITE.domain}${FOUNDER.photo}`,
    worksFor: { "@type": "MedicalBusiness", name: "Doconnect", url: SITE.domain },
  };

  return (
    <>
      <Seo
        title="Our Doctors | Dr. Anoop Jaiswar & Verified Doctor Network | Doconnect Mumbai"
        description="Meet Dr. Anoop Jaiswar, founder of Doconnect — a physician with 10+ years of clinical & ICU experience, felicitated by MCGM for COVID frontline service. Doctor home visits across Mumbai."
        path="/doctors"
        jsonLd={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Doctors", path: "/doctors" }]),
          doctorSchema,
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Our Doctors</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Doctor-led care, from our founder to your doorstep
            </h1>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Doconnect is founded and led by a physician who has spent over a decade in Mumbai's hospitals and ICUs.
              Every doctor in our network is verified, experienced in home settings, and matched to your patient's
              specific need.
            </p>
          </Reveal>
        </div>
      </section>

      <Founder />

      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">The wider Doconnect network</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Beyond our founding physician, Doconnect works with a verified network of doctors, nurses and
              physiotherapists across Mumbai's western suburbs.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPROACH.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{a.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">How a doctor is assigned to you</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              When you book, our coordination team notes the patient's condition, age, location and urgency. We then
              assign a doctor whose experience fits the requirement and who can reach you within a realistic window.
              You receive confirmation of the visit before the doctor arrives.
            </p>
            <div className="mt-6 flex flex-wrap gap-5">
              <Link to="/doctor-home-visit-mumbai" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all" data-testid="doctors-homevisit-link">
                How a home visit works <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={SITE.phoneTel} className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all" data-testid="doctors-call-btn">
                <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Speak to a doctor, at your home" text="Tell us the patient's condition and location — we will match the right doctor and confirm availability." />
    </>
  );
}
