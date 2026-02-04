import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import TrustSection from '@/components/TrustSection';

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

      {/* ✅ WHITE BACKGROUND LIKE INNER PAGES */}
      <main className="bg-white text-slate-900">

        {/* HERO */}
        <Hero />

        {/* SERVICES */}
        <Services />

        {/* WHY MILLENNIUMAI */}
        <section className="py-24 border-t">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
                  className="p-8 rounded-2xl border bg-white shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS */}
        <Solutions />

        {/* TRUST */}
        <TrustSection />

      </main>
    </>
  );
};

export default HomePage;
