import { Link } from "react-router-dom";
import { Home, Phone } from "lucide-react";
import Seo from "../components/Seo";
import { SITE } from "../data/site";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Doconnect" description="The page you are looking for could not be found. Book a doctor home visit in Mumbai with Doconnect." path="/404" />
      <section className="bg-white py-24 sm:py-32" data-testid="not-found-page">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="font-heading text-7xl font-extrabold text-teal-100">404</p>
          <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            This page could not be found
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            The link may have moved or never existed. If you were looking to book a doctor home visit in Mumbai,
            we can help right away.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/" data-testid="notfound-home-btn"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition-colors">
              <Home className="h-4 w-4" /> Go to Homepage
            </Link>
            <a href={SITE.phoneTel} data-testid="notfound-call-btn"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 hover:border-teal-300 hover:text-teal-700 transition-colors">
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
