import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import TrustSection from '@/components/TrustSection';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>
          MillenniumAI | Enterprise AI Data Annotation & Generative AI Services
        </title>

        <meta
          name="description"
          content="MillenniumAI delivers enterprise-grade AI data annotation, Generative AI, NLP, computer vision, and ML engineering services—built for accuracy, security, and scalable production AI."
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.millenniumai.in/" />
      </Helmet>

      <main role="main" className="bg-white text-slate-900">

        {/* HERO (WHITE) */}
        <Hero />

        {/* CORE SERVICES (WHITE) */}
        <section className="py-24 bg-white">
          <Services />
        </section>

        {/* WHY MILLENNIUMAI (LIGHT) */}
        <section className="py-24 bg-[#f8f9fc]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#050516]">
              Why Leading AI Teams Choose MillenniumAI
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-lg">
              MillenniumAI partners with enterprises and high-growth AI teams to
              deliver production-ready datasets and AI engineering services with
              predictable quality, security, and scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality-First Execution',
                  desc:
                    'Multi-layer QA, expert validation, and continuous accuracy monitoring are embedded into every dataset we deliver.',
                },
                {
                  title: 'Enterprise-Scale Delivery',
                  desc:
                    'From pilot datasets to multi-million data pipelines, we deliver consistent quality with predictable SLAs.',
                },
                {
                  title: 'Security & Compliance',
                  desc:
                    'GDPR-aligned workflows, NDA-backed teams, and client-specific security controls.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-white border border-slate-200"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#050516]">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS / INDUSTRIES (WHITE) */}
        <section className="py-24 bg-white">
          <Solutions />
        </section>

        {/* DELIVERY PROCESS (LIGHT) */}
        <section className="py-24 bg-[#f8f9fc]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#050516]">
              Our AI Data & Engineering Delivery Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Use-Case Alignment',
                  desc:
                    'Define objectives, edge cases, accuracy thresholds, and KPIs before execution.',
                },
                {
                  title: 'Data Preparation',
                  desc:
                    'Domain-trained teams execute structured annotation workflows.',
                },
                {
                  title: 'Quality Assurance',
                  desc:
                    'Automated checks combined with expert human audits.',
                },
                {
                  title: 'Secure Delivery',
                  desc:
                    'Versioned datasets delivered securely with iteration loops.',
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="p-6 rounded-xl bg-white border border-slate-200"
                >
                  <div className="text-blue-600 font-bold mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2 text-[#050516]">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST CONTEXT (LIGHT) */}
        <section className="py-12 bg-white text-center text-slate-500">
          <div className="max-w-4xl mx-auto px-6 text-sm">
            Metrics and testimonials reflect anonymized enterprise and
            mid-market client engagements across regulated and non-regulated
            industries.
          </div>
        </section>

        {/* TRUST SECTION (LIGHT WRAPPER) */}
        <section className="py-24 bg-white">
          <TrustSection />
        </section>

        {/* FINAL CTA (KEEP GRADIENT – HIGH CONVERSION) */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Reliable AI at Scale?
            </h2>
            <p className="text-lg mb-10 opacity-90">
              Start with a discovery call. We help AI teams deploy
              production-ready AI systems without execution risk.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-black px-8 py-6">
                  Start a Discovery Call
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white px-8 py-6"
                >
                  View Capabilities
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default HomePage;
