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
        <title>MillenniumAi | Enterprise AI, Data Annotation & Generative AI Services</title>
        <meta
          name="description"
          content="Enterprise-grade AI/ML services including data annotation, Generative AI, computer vision, NLP, speech AI, data engineering, and digital development. Trusted by global enterprises."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.millenniumai.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MillenniumAi" />
        <meta property="og:title" content="MillenniumAi | Enterprise AI & Data Annotation Services" />
        <meta
          property="og:description"
          content="High-quality AI data annotation and Generative AI services trusted by global enterprises."
        />
        <meta property="og:url" content="https://www.millenniumai.com/" />
        <meta property="og:image" content="https://www.millenniumai.com/og-image.jpg" />
      </Helmet>

      <main>
        {/* HERO */}
        <Hero />

        {/* SERVICES OVERVIEW */}
        <Services />

        {/* WHY MILLENNIUMAI */}
        <section className="py-24 bg-[#0a0a0f] text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Leading AI Teams Choose MillenniumAi
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
              MillenniumAi is built for organizations that take AI seriously.
              We partner with enterprises and high-growth AI teams to deliver
              reliable, scalable, and production-ready data and engineering
              solutions that directly improve model accuracy and business outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality-First Execution',
                  desc: 'Accuracy is engineered into every stage of our workflow through multi-layer QA, expert validation, and continuous quality monitoring.',
                },
                {
                  title: 'Enterprise-Scale Delivery',
                  desc: 'Our global delivery model supports rapid scaling across millions of data points without compromising consistency or turnaround time.',
                },
                {
                  title: 'Security & Compliance',
                  desc: 'We operate with enterprise-grade security, NDA-backed teams, controlled access, and governance-aligned data handling practices.',
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

        {/* PROCESS SECTION */}
        <section className="py-24 bg-[#0f0f16] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our AI Data & Engineering Delivery Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Requirement & Use-Case Analysis',
                  desc: 'We align on objectives, edge cases, success metrics, and quality benchmarks before execution begins.',
                },
                {
                  title: 'Data Preparation & Annotation',
                  desc: 'Domain-trained teams execute structured annotation workflows using proven tools and best practices.',
                },
                {
                  title: 'Multi-Level Quality Assurance',
                  desc: 'Automated checks, expert review, and continuous feedback loops ensure consistently high accuracy.',
                },
                {
                  title: 'Secure Delivery & Iteration',
                  desc: 'Versioned datasets are delivered securely with iterative improvements based on real-world model feedback.',
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

        {/* TRUST / CREDENTIALS */}
        <TrustSection />

        {/* FINAL CTA */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Reliable AI at Scale?
            </h2>
            <p className="text-lg mb-10 opacity-90">
              Whether you are training advanced models, scaling production AI,
              or enabling Generative AI systems, MillenniumAi provides the
              data quality, expertise, and execution discipline required to succeed.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-black px-8 py-6">
                  Talk to an AI Expert
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white px-8 py-6"
                >
                  Explore Our Services
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