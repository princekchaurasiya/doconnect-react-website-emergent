import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X, CalendarCheck } from "lucide-react";
import { NAV, SITE } from "../data/site";

export function Wordmark() {
  return (
    <Link to="/" className="flex items-baseline gap-1 select-none" data-testid="wordmark-link">
      <span className="font-heading text-2xl font-extrabold tracking-tight text-slate-900">
        Do
        <span className="text-teal-700">connect</span>
      </span>
      <span className="h-2 w-2 rounded-full bg-teal-600 translate-y-[-2px]" aria-hidden="true" />
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const main = NAV.filter((n) =>
    ["/", "/about", "/services", "/doctor-home-visit-mumbai", "/locations", "/packages", "/blog", "/contact"].includes(n.to)
  );
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md" data-testid="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Wordmark />
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {main.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "text-teal-700 bg-teal-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={SITE.phoneTel}
              data-testid="header-call-btn"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
            >
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
            <Link
              to="/contact"
              data-testid="header-book-btn"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
            >
              <CalendarCheck className="h-4 w-4" /> Book Home Visit
            </Link>
          </div>
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-testid="mobile-menu-toggle"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white" data-testid="mobile-menu">
          <nav className="max-w-7xl mx-auto px-4 py-3 grid gap-1" aria-label="Mobile">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={() =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium ${
                    location.pathname === n.to
                      ? "text-teal-700 bg-teal-50"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href={SITE.phoneTel}
              data-testid="mobile-menu-call-btn"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
