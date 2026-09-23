import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Seo, { breadcrumbSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { POSTS, postPath } from "../data/posts";

const articleLink = (p) => (p.isResourceLink && p.resourcePath ? p.resourcePath : postPath(p.slug));

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  return (
    <>
      <Seo
        title="Doctor Home Visit Mumbai Blog | Healthcare Guides | Doconnect"
        description="Practical guides on doctor home visits, elderly care, post-hospitalisation recovery and health education — written for Mumbai families by Doconnect."
        path="/blog"
        jsonLd={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">The Doconnect Blog</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Healthcare guides for Mumbai families
            </h1>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Practical, honest articles on home healthcare, elderly care and everyday health decisions. Educational
              content only — always consult a qualified doctor for medical advice about your situation.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <Link to={articleLink(POSTS[0])} data-testid={`blog-featured-${POSTS[0].slug}`}
              className="group grid lg:grid-cols-2 gap-0 rounded-3xl border border-slate-200/80 bg-white overflow-hidden hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.12)] hover:border-teal-300 transition-all duration-200">
              <div className="overflow-hidden">
                <img src={POSTS[0].image} alt={POSTS[0].imageAlt} className="h-64 lg:h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{POSTS[0].category}</p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug group-hover:text-teal-800">
                  {POSTS[0].title}
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{POSTS[0].excerpt}</p>
                <p className="mt-4 text-xs text-slate-500 flex items-center gap-3">
                  <span>{formatDate(POSTS[0].date)}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {POSTS[0].readTime}</span>
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                  Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.slice(1).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                <Link to={articleLink(p)} data-testid={`blog-card-${p.slug}`}
                  className="group block h-full rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_32px_-6px_rgba(13,148,136,0.12)] hover:border-teal-300 transition-all duration-200">
                  <div className="overflow-hidden">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-44 w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{p.category}</p>
                    <h2 className="mt-2 text-base font-semibold text-slate-900 leading-snug group-hover:text-teal-800">{p.title}</h2>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">{p.excerpt}</p>
                    <p className="mt-4 text-xs text-slate-500 flex items-center gap-3">
                      <span>{formatDate(p.date)}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime}</span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
