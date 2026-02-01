import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import TrustSection from '@/components/TrustSection';
import { Link } from 'react-router-dom';
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
          content="MillenniumAI delivers enterprise-grade AI data annotation, Generative AI, NLP, computer vision, and ML engineering services. Built for accuracy, security, and scalable production AI."
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.millenniumai.in/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MillenniumAI" />
        <meta
          property="og:title"
          content="Enterprise AI Data Annotation & Generative AI Services | MillenniumAI"
        />
        <meta
          property="og:description"
          content="Enterprise-focused AI data annotation and Generative AI services designed for accuracy, governance, and scale."
        />
        <meta property="og:url" content="https://www.millenniumai.in/" />
        <meta property="og:image" content="https://www.millenniumai.in/og-image.jpg" />
      </Helmet>

      <main>
        {/* HERO */}
        <Hero />

        {/* SERVICES */}
        <Services />

        {/* WHY MILLENNIUMAI */}
        <section className="py-24 bg-[#0a0a0f] text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Leading AI Teams Choose MillenniumAI
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
              MillenniumAI partners with enterprises and high-growth AI teams to
              deliver production-ready datasets and AI engineering services.
              Our engagement model focuses on improving model accuracy,
              accelerating deployment, and reducing execution risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality-First Execution',
                  desc: 'Multi-layer QA, expert validation, and continuous accuracy monitoring are embedded into every dataset we deliver.',
                },
                {
                  title: 'Enterprise-Scale Delivery',
                  desc: 'From pilot datasets to multi-million data pipelines, we deliver consistent quality with predictable SLAs and timelines.',
                },
                {
                  title: 'Security & Compliance-Aware',
                  desc: 'Our workflows follow GDPR-aligned data handling practices, NDA-backed teams, controlled access, and client-specific security requirements.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS / INDUSTRIES */}
        <Solutions />

        {/* PROCESS */}
        <section className="py-24 bg-[#0f0f16] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our AI Data & Engineering Delivery Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Use-Case & Success Alignment',
                  desc: 'We define objectives, edge cases, accuracy thresholds, security needs, and delivery KPIs before execution begins.',
                },
                {
                  title: 'Data Preparation & Annotation',
                  desc: 'Domain-trained teams execute structured annotation workflows using proven tools and standardized guidelines.',
                },
                {
                  title: 'Multi-Level Quality Assurance',
                  desc: 'Automated checks, expert audits, and feedback loops ensure consistently high-quality production datasets.',
                },
                {
                  title: 'Secure Delivery & Iteration',
                  desc: 'Version-controlled datasets are delivered securely with continuous iteration based on real-world model feedback.',
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-blue-400 font-bold text-lg mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST CONTEXT (IMPORTANT FOR ENTERPRISE BUYERS) */}
        <section className="py-12 bg-[#0a0a0f] text-center text-gray-400">
          <div className="max-w-4xl mx-auto px-6 text-sm">
            Metrics and testimonials below reflect anonymized enterprise and
            mid-market client engagements across regulated and non-regulated
            industries.
          </div>
        </section>

        {/* TRUST / CREDENTIALS */}
        <TrustSection />

        {/* FINAL CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Reliable AI at Scale?
            </h2>
            <p className="text-lg mb-10 opacity-90">
              Start with a pilot or discovery call. We help AI teams validate
              data quality, scale confidently, and deploy production-ready AI
              systems without execution risk.
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
