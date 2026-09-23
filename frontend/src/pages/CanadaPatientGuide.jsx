import { Link } from "react-router-dom";
import {
  ChevronRight,
  Clock,
  Plane,
  HeartPulse,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Seo, { breadcrumbSchema, faqSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaBand, { EmergencyNote } from "../components/CtaBand";
import BookingForm from "../components/BookingForm";
import { SITE } from "../data/site";
import {
  CANADA_GUIDE_SEO,
  hero,
  trustPills,
  whyCanada,
  specialties,
  costRows,
  costDisclaimer,
  takeaways,
  visaSteps,
  visaLinks,
  flightRoutes,
  supportBullets,
  hospitalNote,
  doconnectBridge,
  introSection,
  countriesFootnote,
  author,
  relatedLinks,
  FAQ,
  tocSections,
} from "../data/canadaPatientGuide";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function CanadaPatientGuide() {
  const path = CANADA_GUIDE_SEO.path;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: hero.h1,
    description: CANADA_GUIDE_SEO.description,
    url: `${SITE.domain}${path}`,
    dateModified: CANADA_GUIDE_SEO.updated,
    publisher: { "@type": "Organization", name: "Doconnect", url: SITE.domain },
  };

  return (
    <>
      <Seo
        title={CANADA_GUIDE_SEO.title}
        description={CANADA_GUIDE_SEO.description}
        path={path}
        image={CANADA_GUIDE_SEO.image}
        jsonLd={[
          webPageSchema,
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/blog" },
            { name: "Canada patient guide", path },
          ]),
        ]}
      />

      <section className="bg-gradient-to-b from-teal-50/80 to-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-teal-700">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-teal-700">
              Resources
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-700 font-medium">Canada guide</span>
          </nav>

          <Reveal className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{hero.badge}</p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              {hero.h1}
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">{hero.subtitle}</p>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">{hero.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {trustPills.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-3 py-1.5 text-xs font-medium text-teal-800"
                >
                  <ShieldCheck className="h-3.5 w-3.5" /> {t}
                </span>
              ))}
            </div>
            <p className="mt-5 text-xs text-slate-500 flex items-center gap-3">
              <span>
                By <strong className="text-slate-700">{author.name}</strong>
              </span>
              <span>Updated {formatDate(CANADA_GUIDE_SEO.updated)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> 18 min read
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
            >
              Book Home Visit in Mumbai
            </Link>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-teal-300 transition-colors"
            >
              Call {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-teal-300 transition-colors"
            >
              WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <article className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <nav
              className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6"
              aria-label="Table of contents"
              data-testid="canada-guide-toc"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">On this page</p>
              <ol className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {tocSections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-sm text-teal-700 hover:underline font-medium">
                      {i + 1}. {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>

          <section id="intro" className="scroll-mt-24 mt-12">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">{introSection.h2}</h2>
              {introSection.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </Reveal>
          </section>

          <section id="why-canada" className="scroll-mt-24 mt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">{whyCanada.h2}</h2>
              {whyCanada.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {whyCanada.highlights.map((h) => (
                  <div key={h.title} className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                    <h3 className="text-sm font-semibold text-slate-900">{h.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{h.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="specialties" className="scroll-mt-24 mt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">Specialties & surgery areas</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Canadian patients often explore India for procedures where waits or costs are challenging at home.
                Common pathways include:
              </p>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {specialties.map((s) => (
                  <div
                    key={s.id}
                    className="rounded-2xl border border-slate-200/80 p-5 hover:border-teal-200 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <HeartPulse className="h-4 w-4 text-teal-600 mt-0.5 shrink-0" />
                      <h3 className="text-sm font-semibold text-slate-900">{s.label}</h3>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex gap-2 text-xs text-slate-600">
                          <span className="text-teal-600 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="costs" className="scroll-mt-24 mt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">Cost comparison (indicative)</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Costs in Canadian Dollars (CAD) and Indian Rupees (INR). Ranges are not quotes from Doconnect.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50">
                      <TableHead className="font-semibold text-slate-900">Procedure</TableHead>
                      <TableHead className="font-semibold text-slate-900">Canada private (CAD)</TableHead>
                      <TableHead className="font-semibold text-slate-900">India (CAD)</TableHead>
                      <TableHead className="font-semibold text-slate-900">India (INR)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {costRows.map((row) => (
                      <TableRow key={row.procedure}>
                        <TableCell className="font-medium text-slate-800">{row.procedure}</TableCell>
                        <TableCell className="text-slate-600">{row.canada}</TableCell>
                        <TableCell className="text-slate-600">{row.indiaCad}</TableCell>
                        <TableCell className="text-slate-600">{row.indiaInr}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                {costDisclaimer}{" "}
                <Link to="/disclaimer" className="text-teal-700 hover:underline font-medium">
                  Medical Disclaimer
                </Link>
                .
              </p>
            </Reveal>
          </section>

          <section id="takeaways" className="scroll-mt-24 mt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">{takeaways.h2}</h2>
              <ul className="mt-5 space-y-3">
                {takeaways.list.map((item) => (
                  <li key={item.slice(0, 50)} className="flex gap-2.5 text-slate-600 leading-relaxed text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          <CtaBand
            title="In Mumbai and need a doctor at home?"
            text="Doconnect supports Canadian visitors and NRIs with 24-hour doctor home visits across Mumbai."
          />

          <section id="visa" className="scroll-mt-24 mt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">Indian e-Medical Visa for Canadian citizens</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Canadian passport holders can often apply for an Indian e-Medical Visa online when eligible.
              </p>
              <ol className="mt-8 space-y-5">
                {visaSteps.map((v) => (
                  <li key={v.step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
                      {v.step}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{v.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{v.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <ul className="mt-6 flex flex-wrap gap-4">
                {visaLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:underline"
                    >
                      {l.label} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          <section id="flights" className="scroll-mt-24 mt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">Flights from Canada to India&apos;s medical hubs</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Direct and one-stop routes connect major Canadian cities to Delhi and Mumbai. Confirm schedules with
                airlines before booking medical travel.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {flightRoutes.map((f) => (
                  <div key={f.route} className="rounded-2xl border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 text-teal-700">
                      <Plane className="h-4 w-4" />
                      <h3 className="text-sm font-semibold text-slate-900">{f.route}</h3>
                    </div>
                    <p className="mt-2 text-xs text-slate-600">
                      <strong>Airlines:</strong> {f.airlines}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      <strong>Flight time:</strong> {f.time}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      <strong>Common specialties:</strong> {f.hub}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="support" className="scroll-mt-24 mt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">{supportBullets.h2}</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {supportBullets.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200/80 p-5">
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-500">{countriesFootnote}</p>
            </Reveal>
          </section>

          <section id="hospitals" className="scroll-mt-24 mt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">{hospitalNote.h2}</h2>
              {hospitalNote.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
              <ul className="mt-5 space-y-2">
                {hospitalNote.hospitalTypes.map((t) => (
                  <li key={t} className="flex gap-2.5 text-slate-600 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          <section id="mumbai-home" className="scroll-mt-24 mt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">{doconnectBridge.h2}</h2>
              {doconnectBridge.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="mt-6 flex flex-wrap gap-2">
                {doconnectBridge.services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-100 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </Reveal>
            <Reveal className="mt-10">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-slate-900">Book a home visit (Canadian / NRI enquiry)</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Mention Canada or NRI in your message. Service areas: Mumbai locations covered by Doconnect.
                </p>
                <div className="mt-6">
                  <BookingForm compact />
                </div>
              </div>
            </Reveal>
          </section>

          <section id="faq" className="scroll-mt-24 mt-14">
            <Reveal>
              <h2 className="text-2xl font-semibold text-slate-900">Frequently asked questions</h2>
              <div className="mt-5 space-y-3">
                {FAQ.map((f, i) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-5 open:border-teal-300 transition-colors"
                    data-testid={`canada-faq-${i}`}
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-slate-900 list-none">
                      {f.q}
                      <span className="text-teal-600 group-open:rotate-45 transition-transform text-lg leading-none">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </section>

          <Reveal className="mt-12">
            <EmergencyNote />
          </Reveal>

          <Reveal className="mt-10">
            <h2 className="text-lg font-semibold text-slate-900">Explore more on Doconnect</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:underline"
                >
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Author:{" "}
              <Link to={author.link} className="text-teal-700 hover:underline">
                {author.name}
              </Link>
            </p>
          </Reveal>

          <p className="mt-12 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-6">
            This guide is for general education only and is not medical, legal, or financial advice. Always consult
            qualified professionals about your health and travel plans.{" "}
            <Link to="/disclaimer" className="text-teal-700 hover:underline">
              Medical Disclaimer
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
