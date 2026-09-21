import { Link } from "react-router-dom";
import { Phone, CalendarCheck } from "lucide-react";
import { SITE } from "../data/site";

export default function CtaBand({
  title = "Need a doctor at home?",
  text = "Call or WhatsApp Doconnect and we will confirm a doctor's availability for your location in Mumbai.",
}) {
  return (
    <section className="py-16 sm:py-20" data-testid="cta-band">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-teal-700 px-6 py-12 sm:px-12 text-center shadow-[0_12px_32px_-6px_rgba(13,148,136,0.25)]">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{title}</h2>
          <p className="mt-3 text-teal-50 max-w-xl mx-auto text-sm sm:text-base">{text}</p>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              data-testid="ctaband-book-btn"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal-800 hover:bg-teal-50 transition-colors"
            >
              <CalendarCheck className="h-4 w-4" /> Book a Home Visit
            </Link>
            <a
              href={SITE.phoneTel}
              data-testid="ctaband-call-btn"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="ctaband-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EmergencyNote() {
  return (
    <div
      className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 flex gap-3"
      data-testid="emergency-note"
    >
      <span className="text-rose-600 shrink-0 mt-0.5">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </span>
      <p className="text-sm text-rose-800 leading-relaxed">
        <strong className="font-semibold">Please note:</strong> For life-threatening emergencies, contact emergency
        medical services or visit the nearest emergency department immediately. Home visits are not a substitute for
        emergency care.
      </p>
    </div>
  );
}
