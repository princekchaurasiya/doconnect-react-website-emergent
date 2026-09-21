import { Link } from "react-router-dom";
import { BadgeCheck, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { FOUNDER } from "../data/team";

export default function Founder({ compact = false }) {
  if (compact) {
    return (
      <section className="py-16 sm:py-24 bg-white" data-testid="founder-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)]">
                  <img src={FOUNDER.photo} alt={FOUNDER.photoAlt} loading="lazy" className="w-full aspect-[4/5] object-cover object-top" data-testid="founder-photo" />
                </div>
                <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-slate-100 bg-white/95 backdrop-blur px-5 py-3.5 shadow-[0_12px_32px_-6px_rgba(15,23,42,0.12)]">
                  <p className="text-sm font-bold text-slate-900">{FOUNDER.name}</p>
                  <p className="text-xs text-teal-700 font-medium">{FOUNDER.role}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Meet Our Founder</p>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Led by a doctor who has treated Mumbai's toughest cases
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">{FOUNDER.bio}</p>
              <blockquote className="mt-6 border-l-4 border-teal-600 pl-5 text-slate-700 italic leading-relaxed">
                "{FOUNDER.quote}"
              </blockquote>
              <Link to="/doctors" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:gap-3 transition-all" data-testid="founder-read-more">
                Read Dr. Jaiswar's full profile <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-slate-50" data-testid="founder-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)]">
                <img src={FOUNDER.photo} alt={FOUNDER.photoAlt} loading="lazy" className="w-full aspect-[4/5] object-cover object-top" data-testid="founder-photo" />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-slate-100 bg-white/95 backdrop-blur px-5 py-4 shadow-[0_12px_32px_-6px_rgba(15,23,42,0.12)]">
                <p className="text-sm font-bold text-slate-900">{FOUNDER.name}</p>
                <p className="text-xs text-teal-700 font-medium">{FOUNDER.role}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Meet Our Founder</p>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">{FOUNDER.name}</h2>
            <ul className="mt-6 space-y-2.5">
              {FOUNDER.credentials.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <BadgeCheck className="h-5 w-5 mt-0 text-teal-600 shrink-0" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-600 leading-relaxed">{FOUNDER.bio}</p>
            <p className="mt-4 text-slate-600 leading-relaxed">{FOUNDER.story}</p>
            <blockquote className="mt-6 rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
              <p className="text-slate-800 italic leading-relaxed">"{FOUNDER.quote}"</p>
              <footer className="mt-3 text-sm font-semibold text-teal-800">— {FOUNDER.name}</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
