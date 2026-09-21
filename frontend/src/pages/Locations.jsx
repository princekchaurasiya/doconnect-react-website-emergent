import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { SITE } from "../data/site";
import { LOCATIONS, locationPath } from "../data/locations";

export default function Locations() {
  return (
    <>
      <Seo
        title="Doctor Home Visit Locations in Mumbai | Doconnect"
        description="Doconnect provides doctor home visits across Mumbai's western suburbs — Andheri, Jogeshwari, Goregaon, Malad, Vile Parle, Ram Mandir and nearby areas. Call 084248 45423."
        path="/locations"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }])]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Service Locations</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Doctor home visits across Mumbai
            </h1>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Doconnect is based in Andheri West and serves Mumbai's western suburbs with 24/7 doctor home visits
              and at-home medical services. Choose your area below for local details — or call{" "}
              <a href={SITE.phoneTel} className="font-semibold text-teal-700">{SITE.phoneDisplay}</a> to confirm
              coverage for your exact location.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={(i % 3) * 0.06}>
                <Link to={locationPath(l.slug)} data-testid={`location-card-${l.slug}`}
                  className="group block h-full rounded-2xl border border-slate-200/80 bg-white p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.12)] hover:border-teal-300 transition-all duration-200">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-teal-800">
                    Doctor Home Visit in {l.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">{l.intro}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {l.nearby.slice(0, 3).map((n) => (
                      <span key={n} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">{n}</span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    View area <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-teal-300 bg-teal-50/50 p-6 text-center">
                <h2 className="text-base font-semibold text-slate-900">Your area not listed?</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We cover many more pockets across the western suburbs. Call us and we will confirm availability honestly.
                </p>
                <a href={SITE.phoneTel} data-testid="locations-call-btn"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition-colors">
                  <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
