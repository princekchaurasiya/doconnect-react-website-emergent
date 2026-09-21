import { useParams, Link, Navigate } from "react-router-dom";
import { Clock, ChevronRight, ArrowRight, Phone } from "lucide-react";
import Seo, { breadcrumbSchema, faqSchema } from "../components/Seo";
import Reveal from "../components/Reveal";
import { EmergencyNote } from "../components/CtaBand";
import { SITE } from "../data/site";
import { POSTS, postPath } from "../data/posts";
import { LOCATIONS, locationPath } from "../data/locations";

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const path = postPath(post.slug);
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updated,
    author: { "@type": "Organization", name: "Doconnect Editorial Team", url: SITE.domain },
    publisher: { "@type": "Organization", name: "Doconnect", url: SITE.domain },
    mainEntityOfPage: `${SITE.domain}${path}`,
  };

  return (
    <>
      <Seo
        title={`${post.title} | Doconnect Blog`}
        description={post.metaDescription}
        path={path}
        image={post.image}
        jsonLd={[
          articleSchema,
          faqSchema(post.faq),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <article className="bg-white py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb" data-testid="breadcrumbs">
            <Link to="/" className="hover:text-teal-700">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-teal-700">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-700 font-medium truncate max-w-[180px]">{post.title}</span>
          </nav>

          <Reveal className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{post.category}</p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]" data-testid="post-heading">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500" data-testid="post-meta">
              <span>By <strong className="text-slate-700">Doconnect Editorial Team</strong></span>
              <span>Published {formatDate(post.date)}</span>
              <span>Updated {formatDate(post.updated)}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <div className="rounded-3xl overflow-hidden border border-slate-200">
              <img src={post.image} alt={post.imageAlt} className="w-full h-64 sm:h-80 object-cover" data-testid="post-image" />
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <nav className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6" aria-label="Table of contents" data-testid="post-toc">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">In this article</p>
              <ol className="mt-3 space-y-2">
                {post.sections.map((s, i) => (
                  <li key={s.h2}>
                    <a href={`#section-${i}`} className="text-sm text-teal-700 hover:underline font-medium">
                      {i + 1}. {s.h2}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#post-faq" className="text-sm text-teal-700 hover:underline font-medium">
                    {post.sections.length + 1}. Frequently asked questions
                  </a>
                </li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-10 space-y-10">
            {post.sections.map((s, i) => (
              <Reveal key={s.h2}>
                <section id={`section-${i}`} className="scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">{s.h2}</h2>
                  {s.paragraphs?.map((p, j) => (
                    <p key={j} className="mt-4 text-slate-600 leading-relaxed">{p}</p>
                  ))}
                  {s.list && (
                    <ul className="mt-4 space-y-2.5">
                      {s.list.map((item) => (
                        <li key={item} className="flex gap-2.5 text-slate-600 leading-relaxed text-[15px]">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12" >
            <section id="post-faq" className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Frequently asked questions</h2>
              <div className="mt-5 space-y-3">
                {post.faq.map((f, i) => (
                  <details key={f.q} className="group rounded-2xl border border-slate-200/80 bg-white p-5 open:border-teal-300 transition-colors" data-testid={`post-faq-${i}`}>
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-slate-900 list-none">
                      {f.q}
                      <span className="text-teal-600 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal className="mt-12">
            <div className="rounded-3xl bg-teal-700 px-6 py-10 sm:px-10 text-center" data-testid="post-cta">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Need a doctor at home in Mumbai?</h2>
              <p className="mt-3 text-teal-50 text-sm sm:text-base max-w-md mx-auto">
                Doconnect is open 24 hours. Book a home visit or talk to our team right away.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <Link to="/contact" data-testid="post-book-btn"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal-800 hover:bg-teal-50 transition-colors">
                  Book a Home Visit
                </Link>
                <a href={SITE.phoneTel} data-testid="post-call-btn"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                  <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <EmergencyNote />
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900">Related reading</h2>
            <div className="mt-5 grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} to={postPath(r.slug)} data-testid={`related-post-${r.slug}`}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-5 hover:border-teal-300 transition-colors">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-teal-700">{r.category}</p>
                  <h3 className="mt-2 text-sm font-semibold text-slate-900 leading-snug group-hover:text-teal-800">{r.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                    Read <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900">Doconnect services near you</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link to="/doctor-home-visit-mumbai" className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100 transition-colors">
                Doctor Home Visit Mumbai
              </Link>
              {LOCATIONS.slice(0, 5).map((l) => (
                <Link key={l.slug} to={locationPath(l.slug)}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors">
                  {l.name}
                </Link>
              ))}
            </div>
          </Reveal>

          <p className="mt-12 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-6">
            This article is for general education only and is not medical advice, diagnosis or treatment. Always
            consult a qualified doctor about your specific health situation.
          </p>
        </div>
      </article>
    </>
  );
}
