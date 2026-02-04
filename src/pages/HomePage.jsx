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
        <title>MillenniumAI | Enterprise AI Data & Generative AI Services</title>
        <meta
          name="description"
          content="Enterprise-grade AI data annotation, Generative AI, NLP, computer vision, and ML engineering services."
        />
      </Helmet>

      <main className="bg-white">

        {/* HERO (already light) */}
        <Hero />

        {/* SERVICES (already fixed) */}
        <Services />

        {/* WHY MILLENNIUMAI */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#050516] mb-6">
              Why Leading AI Teams Choose MillenniumAI
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-lg">
              MillenniumAI partners with enterprises and AI-first companies to
              deliver production-grade datasets and AI engineering services with
              predictable quality and scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality-First Execution',
                  desc:
                    'Multi-layer QA, expert validation, and continuous accuracy monitoring across every dataset.',
                },
                {
                  title: 'Enterprise-Scale Delivery',
                  desc:
                    'From pilot datasets to multi-million data pipelines with predictable SLAs.',
                },
                {
                  title: 'Security & Compliance',
                  desc:
                    'GDPR-aligned workflows, NDA-backed teams, and secure delivery environments.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-[#050516] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS (white now) */}
        <Solutions />

        {/* DELIVERY PROCESS */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#050516] mb-16">
              Our AI Data & Engineering Delivery Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Use-Case Alignment',
                  desc: 'Define objectives, accuracy targets, and success KPIs.',
                },
                {
                  title: 'Data Preparation',
                  desc: 'Domain-trained teams execute structured annotation.',
                },
                {
                  title: 'Multi-Level QA',
                  desc: 'Automated checks and expert audits ensure quality.',
                },
                {
                  title: 'Secure Delivery',
                  desc: 'Versioned datasets delivered securely and iteratively.',
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="text-blue-600 font-bold mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#050516] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST SECTION (white version) */}
        <TrustSection />

        {/* FINAL CTA */}
        <section className="py-24 bg-slate-50 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#050516] mb-6">
              Ready to Build Reliable AI at Scale?
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Start with a discovery call and deploy production-ready AI systems
              with confidence.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="px-8 py-6">
                  Start a Discovery Call
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="px-8 py-6">
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
