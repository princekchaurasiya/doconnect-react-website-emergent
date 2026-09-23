import { Phone, Mail, MapPin, Clock, Star, Navigation } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import BookingForm from "../components/BookingForm";
import { EmergencyNote } from "../components/CtaBand";
import { SITE, ORGANIZATION_ID } from "../data/site";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Doconnect | Book a Doctor Home Visit in Mumbai"
        description="Book a doctor home visit in Mumbai with Doconnect. Call 084248 45423 (open 24 hours), WhatsApp us, or request a callback through our appointment form."
        path="/contact"
        jsonLd={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${SITE.domain}/contact`,
            name: "Contact Doconnect — Doctor home visit Mumbai",
            description:
              "Book a doctor home visit in Mumbai. Call 084248 45423, WhatsApp, or use the appointment form.",
            mainEntity: { "@id": ORGANIZATION_ID },
          },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Contact & Booking</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Schedule an appointment
            </h1>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Request a callback through the form, or reach us instantly by phone or WhatsApp. Doconnect is open
              24 hours — a real person from our Mumbai team will respond.
            </p>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-5 gap-10">
            <Reveal className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
                <h2 className="text-xl font-semibold text-slate-900">Request a Doctor Home Visit</h2>
                <p className="mt-2 text-sm text-slate-500">
                  Fill the form and our care coordinator will call you back to confirm availability and pricing.
                </p>
                <div className="mt-6">
                  <BookingForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2 space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6" data-testid="contact-info-card">
                <h2 className="text-base font-semibold text-slate-900">Reach us directly</h2>
                <div className="mt-5 space-y-4 text-sm">
                  <a href={SITE.phoneTel} data-testid="contact-phone"
                    className="flex items-center gap-3 rounded-xl bg-teal-700 px-4 py-3.5 text-white font-semibold hover:bg-teal-800 transition-colors">
                    <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                  </a>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp"
                    className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3.5 text-green-700 font-semibold hover:bg-green-100 transition-colors">
                    WhatsApp Us
                  </a>
                  <p className="flex items-start gap-3 text-slate-700 pt-1">
                    <Mail className="h-4 w-4 mt-0.5 text-teal-700 shrink-0" />
                    <a href={`mailto:${SITE.email}`} className="hover:text-teal-700">{SITE.email}</a>
                  </p>
                  <p className="flex items-start gap-3 text-slate-700">
                    <Clock className="h-4 w-4 mt-0.5 text-teal-700 shrink-0" /> {SITE.hours}
                  </p>
                  <p className="flex items-start gap-3 text-slate-700" data-testid="contact-address">
                    <MapPin className="h-4 w-4 mt-0.5 text-teal-700 shrink-0" />
                    <span>{SITE.addressLine1}<br />{SITE.addressLine2}</span>
                  </p>
                  <p className="flex items-center gap-3 text-slate-700" data-testid="contact-rating">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400 shrink-0" />
                    <span><strong>5.0</strong> Google Rating —{" "}
                      <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700 hover:underline">
                        view profile
                      </a>
                    </span>
                  </p>
                  <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" data-testid="contact-directions"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:underline">
                    <Navigation className="h-4 w-4" /> Get directions
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200" data-testid="contact-map">
                <iframe
                  title="Doconnect on Google Maps — Andheri West, Mumbai"
                  src={SITE.mapEmbed}
                  className="w-full h-64"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <EmergencyNote />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
