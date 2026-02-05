import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Lock,
  Shield
} from 'lucide-react';

/* ===============================
   REUSABLE COMPONENTS
================================ */

const Breadcrumbs = ({ path = '/', title }) => {
  const segments = path.split('/').filter(Boolean);
  const section = segments[0] || 'home';

  return (
    <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 bg-white/70 px-3 py-1 rounded-full border backdrop-blur">
      <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
      <ChevronRight size={14} />
      <span className="capitalize">{section}</span>
      <ChevronRight size={14} />
      <span className="font-semibold text-slate-800 truncate max-w-[220px]">
        {title}
      </span>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-xl bg-white border hover:shadow-lg transition">
    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-slate-600">{desc}</p>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-slate-600">
        <CheckCircle2 size={16} className="text-blue-600 mt-1" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SectionWrapper = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-20"
  >
    <h2 className="text-3xl font-bold mb-8">{title}</h2>
    {children}
  </motion.div>
);

/* ===============================
   MAIN TEMPLATE
================================ */

const DynamicPageTemplate = ({
  pageTitle,
  metaDescription,
  heroSection,
  features = [],
  sections = [],
  howWeHelp,
  deliverables = [],
  outcomes = [],
  security = [],
  ctaText = "Start Your Project",
  type = "solution"
}) => {
  const ref = useRef(null);
  useScroll({ target: ref });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <div className="pt-20 bg-[#f8f9fa]" ref={ref}>

        {/* HERO */}
        <section className="py-24 bg-white border-b">
          <div className="max-w-7xl mx-auto px-6">
            <Breadcrumbs
              path={typeof window !== 'undefined' ? window.location.pathname : '/'}
              title={heroSection.title}
            />

            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                {type === 'solution' && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                    Enterprise AI Solution
                  </div>
                )}

                <h1 className="text-5xl font-extrabold mb-6">
                  {heroSection.title}
                </h1>

                <p className="text-xl text-slate-700 mb-4">
                  {heroSection.subtitle}
                </p>

                <p className="text-lg text-slate-600 mb-8 max-w-xl">
                  {heroSection.description}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <Link to="/contact">
                    <Button size="lg">{ctaText}</Button>
                  </Link>
                  <Link to="/company/leadership-advisors">
                    <Button variant="outline" size="lg">
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

        {/* CONTENT */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">

            {/* MAIN */}
            <div className="lg:col-span-8">

              {features.length > 0 && (
                <SectionWrapper title="Key Capabilities">
                  <div className="grid md:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                      <FeatureCard key={i} {...f} />
                    ))}
                  </div>
                </SectionWrapper>
              )}

              {howWeHelp && (
                <SectionWrapper title={howWeHelp.title || "How We Help"}>
                  <BulletList items={howWeHelp.points} />
                </SectionWrapper>
              )}

              {deliverables.length > 0 && (
                <SectionWrapper title="What We Deliver">
                  <BulletList items={deliverables} />
                </SectionWrapper>
              )}

              {outcomes.length > 0 && (
                <SectionWrapper title="Business Outcomes">
                  <BulletList items={outcomes} />
                </SectionWrapper>
              )}

              {sections.map((section, i) => (
                <SectionWrapper key={i} title={section.title}>
                  {/* Subtitle if present */}
                  {section.subtitle && (
                    <p className="text-lg text-slate-700 font-semibold mb-6 leading-relaxed">
                      {section.subtitle}
                    </p>
                  )}
                  
                  {/* Single content string */}
                  {section.content && !section.paragraphs && !section.subsections && (
                    <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  )}
                  
                  {/* Array of paragraphs */}
                  {section.paragraphs && (
                    <div className="space-y-6">
                      {section.paragraphs.map((paragraph, j) => (
                        <p key={j} className="text-lg text-slate-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                  
                  {/* Array of subsections */}
                  {section.subsections && (
                    <div className="space-y-8">
                      {section.subsections.map((subsection, j) => (
                        <div key={j} className="border-l-4 border-blue-200 pl-6">
                          <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {subsection.title}
                          </h3>
                          <p className="text-lg text-slate-600 leading-relaxed">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </SectionWrapper>
              ))}
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-4">
              <div className="p-8 bg-white border rounded-2xl shadow sticky top-28">

                <h3 className="text-xl font-bold mb-6">
                  Why MillenniumAI?
                </h3>

                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <Shield size={16} /> Enterprise-grade security
                  </li>
                  <li className="flex gap-3">
                    <Globe size={16} /> Global delivery teams
                  </li>
                  <li className="flex gap-3">
                    <Zap size={16} /> 99.5%+ QA accuracy
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={16} /> Dedicated project managers
                  </li>
                </ul>

                {security.length > 0 && (
                  <>
                    <div className="mt-8 pt-6 border-t">
                      <h4 className="font-semibold mb-4">
                        Security & Compliance
                      </h4>
                      <BulletList items={security} />
                    </div>
                  </>
                )}

                <div className="mt-8 pt-8 border-t">
                  <Link to="/contact">
                    <Button className="w-full">
                      Get a Custom Quote
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default DynamicPageTemplate;
