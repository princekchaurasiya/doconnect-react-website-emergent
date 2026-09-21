import { Link } from "react-router-dom";
import {
  Stethoscope, Wind, Droplets, Syringe, Bandage, Thermometer, Droplet,
  HeartPulse, Activity, FlaskConical, Brain, ArrowRight,
} from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { SERVICES } from "../data/services";

const ICONS = { Wind, Droplets, Syringe, Bandage, Thermometer, Droplet, HeartPulse, Activity, FlaskConical, Brain, Stethoscope };

export default function Services() {
  return (
    <>
      <Seo
        title="Home Healthcare Services in Mumbai | Doconnect"
        description="Doctor home visits, nursing care, physiotherapy, IV fluid therapy, wound care, home lab testing and more — professional medical services at home across Mumbai."
        path="/services"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Our Services</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Home healthcare services in Mumbai
            </h1>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Doconnect brings medical care to your doorstep. Every service below is delivered at your home by
              qualified doctors and trained professionals, across Mumbai's western suburbs — 24 hours a day.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal>
              <Link to="/doctor-home-visit-mumbai" data-testid="services-page-card-home-visit"
                className="group block h-full rounded-2xl border border-teal-200 bg-teal-50/60 p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.15)] transition-all duration-200">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700 text-white">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-teal-800">Doctor for Home Visit</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Complete medical consultation at home — examination, diagnosis, treatment and follow-up planning.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                  View service <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </Reveal>
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] || Stethoscope;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                  <Link to={`/services/${s.slug}`} data-testid={`services-page-card-${s.slug}`}
                    className="group block h-full rounded-2xl border border-slate-200/80 bg-white p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.12)] hover:border-teal-300 transition-all duration-200">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-teal-800">{s.name}</h2>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                      View service <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand title="Not sure which service you need?" text="Describe the patient's condition on a quick call and our team will guide you to the right care." />
    </>
  );
}
