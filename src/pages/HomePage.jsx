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

      {/* Set a single consistent dark background for the homepage */}
      <main className="bg-gradient-to-b from-[#0a0a0f] to-[#1a0a2e] text-white">

        {/* HERO */}
        <Hero />

        {/* SERVICES */}
        <Services />

        {/* WHY MILLENNIUMAI */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Leading AI Teams Choose MillenniumAI
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
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
                  className="p-8 rounded-2xl border border-slate-700 bg-transparent shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS */}
        <Solutions />

        {/* DELIVERY PROCESS */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
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
              ].map((step) => (
                <div key={step.title} className="p-6 rounded-xl bg-transparent border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <TrustSection />

      </main>
    </>
  );
};

export default HomePage;
