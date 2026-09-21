import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { SITE, NAV } from "../data/site";
import { SERVICES_NAV } from "../data/services";
import { LOCATIONS, locationPath } from "../data/locations";
import { Wordmark } from "./Header";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Wordmark />
            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-xs">
              Professional doctor home visits and at-home medical services across Mumbai. Open 24 hours.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5" data-testid="footer-rating">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-semibold text-slate-800">5.0 Google Rating</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Doconnect</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Doctor Home Visit", to: "/doctor-home-visit-mumbai" },
                { label: "Locations", to: "/locations" },
                { label: "Packages", to: "/packages" },
                { label: "Doctors", to: "/doctors" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-slate-600 hover:text-teal-700 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/doctor-home-visit-mumbai" className="text-slate-600 hover:text-teal-700 transition-colors">
                  Doctor Home Visit
                </Link>
              </li>
              {SERVICES_NAV.slice(0, 5).map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-slate-600 hover:text-teal-700 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Locations</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link to={locationPath(l.slug)} className="text-slate-600 hover:text-teal-700 transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Resources & Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/blog" className="text-slate-600 hover:text-teal-700 transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-slate-600 hover:text-teal-700 transition-colors">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-slate-600 hover:text-teal-700 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-600 hover:text-teal-700 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-slate-600 hover:text-teal-700 transition-colors">Medical Disclaimer</Link></li>
              <li><Link to="/cancellation-refund-policy" className="text-slate-600 hover:text-teal-700 transition-colors">Cancellation & Refunds</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 grid md:grid-cols-2 gap-6">
          <address className="not-italic text-sm text-slate-600 space-y-2" data-testid="footer-contact">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-teal-700 shrink-0" />
              <span>{SITE.addressFull}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-teal-700 shrink-0" />
              <a href={SITE.phoneTel} className="hover:text-teal-700 font-medium">{SITE.phoneDisplay}</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-teal-700 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-teal-700">{SITE.email}</a>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-teal-700 shrink-0" /> {SITE.hours}
            </p>
          </address>
          <p className="text-xs text-slate-500 leading-relaxed md:text-right">
            Doconnect provides doctor home visits and at-home medical services in Mumbai. For life-threatening
            emergencies, contact emergency medical services or visit the nearest emergency department immediately.
            <br />
            <span className="mt-2 block">© {new Date().getFullYear()} Doconnect. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
