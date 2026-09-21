import { Link } from "react-router-dom";
import { Stethoscope, ShieldCheck, Clock, Phone, ArrowRight } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { SITE, IMAGES } from "../data/site";

const APPROACH = [
  { icon: ShieldCheck, title: "Verified qualifications", text: "Every doctor in the Doconnect network is verified for qualifications and registration before seeing patients." },
  { icon: Stethoscope, title: "Home-setting experience", text: "Our doctors are experienced in assessing and managing patients at home — including chronic, elderly and critically-ill-care backgrounds." },
  { icon: Clock, title: "Matched to your need", text: "When you call, we match the right doctor to the patient's condition, location and urgency." },
];

export default function Doctors() {
  return (
    <>
      <Seo
        title="Our Doctors | Verified Doctor Network in Mumbai | Doconnect"
        description="Doconnect connects you with verified, experienced doctors for home visits across Mumbai. Learn how our doctor network works and how we match the right doctor to you."
        path="/doctors"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Doctors", path: "/doctors" }])]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Our Doctors</p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                A verified doctor network, matched to your need
              </h1>
              <p className="mt-6 text-slate-600 leading-relaxed">
                Doconnect works with a network of qualified doctors who provide home consultations across Mumbai.
                Our medical professionals have hospital training — including experience caring for critically ill
                patients — and specialise in accurate diagnosis in a home setting.
              </p>
              <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50/60 p-6" data-testid="doctors-network-note">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong className="font-semibold text-slate-900">Individual doctor profiles are being updated.</strong>{" "}
                  Our verified doctor network is being refreshed on this page. In the meantime, contact Doconnect and
                  we will match the right doctor to your requirement — and share their details before the visit.
                </p>
                <a href={SITE.phoneTel} data-testid="doctors-call-btn"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 transition-colors">
                  <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)]">
                <img src={IMAGES.doctorTablet} alt={IMAGES.doctorTabletAlt} loading="lazy" className="w-full h-[380px] object-cover" />
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPROACH.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-slate-900">{a.title}</h2>
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
              You receive confirmation of the visit — and the doctor's details — before they arrive.
            </p>
            <Link to="/doctor-home-visit-mumbai" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all" data-testid="doctors-homevisit-link">
              How a home visit works <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Speak to a doctor, at your home" text="Tell us the patient's condition and location — we will match the right doctor and confirm availability." />
    </>
  );
}
