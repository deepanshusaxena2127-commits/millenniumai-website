import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  CheckCircle2,
  Zap,
  Globe,
  Lock,
  ShieldCheck,
} from 'lucide-react';

/* ===============================
   REUSABLE COMPONENTS
   =============================== */

const Breadcrumbs = ({ path = '/', title }) => {
  const segments = path.split('/').filter(Boolean);
  const section = segments[0] || 'home';

  return (
    <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 bg-white/70 w-fit px-3 py-1 rounded-full border border-slate-200 backdrop-blur">
      <Link to="/" className="hover:text-blue-600 font-medium">
        Home
      </Link>
      <ChevronRight size={14} />
      <span className="capitalize font-medium">{section}</span>
      <ChevronRight size={14} />
      <span className="font-semibold text-slate-800 truncate max-w-[220px]">
        {title}
      </span>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const SectionBlock = ({ title, children }) => (
  <section className="mb-20">
    <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
    {children}
  </section>
);

/* ===============================
   MAIN TEMPLATE
   =============================== */

const DynamicPageTemplate = ({
  pageTitle,
  metaDescription,
  heroSection,
  features = [],
  sections = [],

  /* NEW – OPTIONAL ENHANCEMENTS */
  howWeHelp,
  deliverables,
  outcomes,
  security,

  ctaText = 'Start Your Project',
  type = 'solution',
}) => {
  const ref = useRef(null);
  useScroll({ target: ref });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: pageTitle,
            description: metaDescription,
            publisher: {
              '@type': 'Organization',
              name: 'MillenniumAi',
            },
          })}
        </script>
      </Helmet>

      <div className="pt-20 bg-[#f8f9fa]" ref={ref}>
        {/* ================= HERO ================= */}
        <section className="py-24 bg-white border-b">
          <div className="max-w-7xl mx-auto px-6">
            <Breadcrumbs
              path={typeof window !== 'undefined' ? window.location.pathname : '/'}
              title={heroSection.title}
            />

            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                {type === 'solution' && (
                  <span className="inline-block mb-6 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                    Enterprise AI Solution
                  </span>
                )}

                <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
                  {heroSection.title}
                </h1>

                <p className="text-xl text-slate-700 mb-4">
                  {heroSection.subtitle}
                </p>

                <p className="text-lg text-slate-600 mb-10 max-w-xl">
                  {heroSection.description}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <Link to="/contact">
                    <Button size="lg">{ctaText}</Button>
                  </Link>
                  <Link to="/company/leadership-advisors">
                    <Button size="lg" variant="outline">
                      Speak to an Expert
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block h-[480px] rounded-2xl overflow-hidden border">
                <img
                  src={heroSection.heroImage}
                  alt={heroSection.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
            {/* MAIN CONTENT */}
            <div className="lg:col-span-8">
              {/* FEATURES */}
              {features.length > 0 && (
                <SectionBlock title="Key Capabilities">
                  <div className="grid md:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                      <FeatureCard key={i} {...f} />
                    ))}
                  </div>
                </SectionBlock>
              )}

              {/* HOW WE HELP */}
              {howWeHelp && (
                <SectionBlock title={howWeHelp.title || 'How We Help'}>
                  <ul className="space-y-4 text-slate-700">
                    {howWeHelp.points.map((p, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="text-blue-600" size={20} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </SectionBlock>
              )}

              {/* DELIVERABLES */}
              {deliverables && (
                <SectionBlock title="What We Deliver">
                  <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
                    {deliverables.map((d, i) => (
                      <li key={i} className="flex gap-3">
                        <ShieldCheck size={18} className="text-green-600" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </SectionBlock>
              )}

              {/* LONG FORM CONTENT */}
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </motion.div>
              ))}

              {/* OUTCOMES */}
              {outcomes && (
                <SectionBlock title="Enterprise Outcomes">
                  <ul className="space-y-4 text-slate-700">
                    {outcomes.map((o, i) => (
                      <li key={i} className="flex gap-3">
                        <Zap size={18} className="text-purple-600" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </SectionBlock>
              )}

              {/* SECURITY */}
              {security && (
                <SectionBlock title="Security & Compliance">
                  <ul className="space-y-4 text-slate-700">
                    {security.map((s, i) => (
                      <li key={i} className="flex gap-3">
                        <Lock size={18} className="text-slate-800" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </SectionBlock>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 p-8 rounded-2xl bg-white border shadow">
                <h3 className="text-xl font-bold mb-6">Why MillenniumAi</h3>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <Lock size={16} /> NDA-Protected Engagements
                  </li>
                  <li className="flex gap-3">
                    <Globe size={16} /> Global Delivery Teams
                  </li>
                  <li className="flex gap-3">
                    <Zap size={16} /> 99.5%+ Accuracy Benchmarks
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={16} /> Dedicated Project Management
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t">
                  <Link to="/contact">
                    <Button className="w-full">Get a Custom Quote</Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default DynamicPageTemplate;
