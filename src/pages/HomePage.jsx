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

      <main className="bg-white text-[#050516]">

        {/* HERO (Already Light – KEEP AS IS) */}
        <Hero />

        {/* SERVICES (LIGHT SECTION) */}
        <section className="bg-white">
          <Services />
        </section>

        {/* WHY MILLENNIUMAI */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Leading AI Teams Choose MillenniumAI
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-lg">
              MillenniumAI partners with enterprises and high-growth AI teams to
              deliver production-ready datasets and AI engineering services.
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
                    'GDPR-aligned workflows, NDA-backed teams, controlled access, and enterprise security standards.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
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

        {/* SOLUTIONS / INDUSTRIES (LIGHT) */}
        <section className="bg-white">
          <Solutions />
        </section>

        {/* DELIVERY PROCESS */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our AI Data & Engineering Delivery Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Use-Case Alignment',
                  desc:
                    'Define objectives, edge cases, KPIs, and security requirements.',
                },
                {
                  title: 'Data Preparation',
                  desc:
                    'Domain-trained teams execute structured annotation workflows.',
                },
                {
                  title: 'Multi-Level QA',
                  desc:
                    'Automated checks, expert audits, and feedback loops.',
                },
                {
                  title: 'Secure Delivery',
                  desc:
                    'Version-controlled datasets with continuous iteration.',
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <div className="text-blue-600 font-bold text-sm mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST SECTION (LIGHT VERSION) */}
        <section className="bg-white">
          <TrustSection />
        </section>

        {/* FINAL CTA (KEEP DARK FOR CONTRAST) */}
        <section className="py-24 bg-[#050516] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Reliable AI at Scale?
            </h2>
            <p className="text-lg mb-10 opacity-90">
              Start with a pilot or discovery call. We help AI teams deploy
              production-ready AI systems with confidence.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-[#050516] px-8 py-6">
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
