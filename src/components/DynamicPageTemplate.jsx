import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Lock
} from 'lucide-react';

/* ===============================
   REUSABLE COMPONENTS
   =============================== */

const Breadcrumbs = ({ path = '/', title }) => {
  const segments = path.split('/').filter(Boolean);
  const section = segments[0] || 'home';

  return (
    <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 bg-white/50 w-fit px-3 py-1 rounded-full border border-slate-200 backdrop-blur-sm">
      <Link to="/" className="hover:text-blue-600 transition-colors font-medium">
        Home
      </Link>
      <ChevronRight size={14} className="text-slate-400" aria-hidden />
      <span className="capitalize font-medium">{section}</span>
      <ChevronRight size={14} className="text-slate-400" aria-hidden />
      <span className="text-slate-800 font-semibold truncate max-w-[200px]">
        {title}
      </span>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      <Icon size={24} aria-hidden />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const ContentSection = ({ title, content, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="mb-16 last:mb-0"
  >
    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
      {title}
    </h3>
    <div className="prose prose-slate prose-lg max-w-none text-slate-600">
      <p className="leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  </motion.div>
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
  ctaText = "Start Your Project",
  type = "solution"
}) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": pageTitle,
            "description": metaDescription,
            "url":
              typeof window !== 'undefined'
                ? window.location.href
                : '',
            "publisher": {
              "@type": "Organization",
              "name": "MillenniumAI"
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20 min-h-screen bg-[#f8f9fa]" ref={ref}>

        {/* HERO */}
        <section className="relative py-20 lg:py-32 overflow-hidden min-h-[60vh] flex items-center bg-white border-b border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60 pointer-events-none" />

          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
            <Breadcrumbs
              path={typeof window !== 'undefined' ? window.location.pathname : '/'}
              title={heroSection.title}
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-3xl">
                {type === 'solution' && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
                    Enterprise-Grade Solution
                  </div>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
                  {heroSection.title}
                </h1>

                <p className="text-xl text-slate-700 mb-6">
                  {heroSection.subtitle}
                </p>

                <p className="text-lg text-slate-600 mb-10 max-w-xl">
                  {heroSection.description}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <Link to="/contact">
                    <Button size="lg">
                      {ctaText}
                    </Button>
                  </Link>
                  <Link to="/company/leadership-advisors">
                    <Button variant="outline" size="lg">
                      Speak to an Expert
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block h-[500px] rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src={heroSection.heroImage}
                  alt={heroSection.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT + SIDEBAR */}
        <section className="py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">

            <div className="lg:col-span-8">
              {features.length > 0 && (
                <div className="mb-20">
                  <h2 className="text-3xl font-bold mb-8">
                    Key Capabilities
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                      <FeatureCard key={i} {...f} />
                    ))}
                  </div>
                </div>
              )}

              {sections.map((section, i) => (
                <ContentSection
                  key={i}
                  {...section}
                  index={i}
                />
              ))}
            </div>

            <div className="lg:col-span-4">
              <div className="p-8 rounded-2xl bg-white border shadow sticky top-28">
                <h3 className="text-xl font-bold mb-6">
                  Why MillenniumAI?
                </h3>
                <ul className="space-y-5 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <Lock size={16} aria-hidden /> NDA-Protected Engagements
                  </li>
                  <li className="flex gap-3">
                    <Globe size={16} aria-hidden /> Global Delivery Teams
                  </li>
                  <li className="flex gap-3">
                    <Zap size={16} aria-hidden /> 99.5%+ QA Accuracy
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={16} aria-hidden /> Dedicated Project Managers
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t">
                  <Link to="/contact">
                    <Button className="w-full">
                      Get a Custom Quote
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
