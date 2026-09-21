import { MapPin, Phone, Navigation, Star, Clock } from "lucide-react";
import { SITE } from "../data/site";
import Reveal from "./Reveal";

export default function MapSection() {
  return (
    <section className="py-16 sm:py-24 bg-white" data-testid="map-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Find Doconnect</p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            A real Mumbai address, one call away
          </h2>
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-stretch">
          <Reveal className="rounded-2xl overflow-hidden border border-slate-200 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] min-h-[320px]">
            <iframe
              title="Doconnect location on Google Maps — Andheri West, Mumbai"
              src={SITE.mapEmbed}
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="google-map-embed"
            />
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Doconnect — Doctor Home Visit in Mumbai</h3>
              <p className="mt-4 flex items-start gap-2.5 text-sm text-slate-700" data-testid="map-address">
                <MapPin className="h-4 w-4 mt-0.5 text-teal-700 shrink-0" />
                <span>{SITE.addressLine1}<br />{SITE.addressLine2}</span>
              </p>
              <p className="mt-3 flex items-center gap-2.5 text-sm text-slate-700">
                <Phone className="h-4 w-4 text-teal-700 shrink-0" />
                <a href={SITE.phoneTel} className="font-medium hover:text-teal-700">{SITE.phoneDisplay}</a>
              </p>
              <p className="mt-3 flex items-center gap-2.5 text-sm text-slate-700">
                <Clock className="h-4 w-4 text-teal-700 shrink-0" /> {SITE.hours}
              </p>
              <p className="mt-3 flex items-center gap-2.5 text-sm text-slate-700" data-testid="map-rating">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400 shrink-0" />
                <span><strong>5.0</strong> Google Rating</span>
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" data-testid="map-directions-btn"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition-colors">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a href={SITE.phoneTel} data-testid="map-call-btn"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="map-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors">
                WhatsApp
              </a>
              <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" data-testid="map-reviews-btn"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-amber-300 hover:text-amber-700 transition-colors">
                <Star className="h-4 w-4" /> Google Reviews
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
