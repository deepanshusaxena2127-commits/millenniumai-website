import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Services from '@/components/Services';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

/**
 * Services Landing Page
 * Route: /services
 *
 * Purpose:
 * - High-level overview of all MillenniumAI services
 * - Acts as a gateway to individual solution pages
 * - Conversion-focused CTA
 */

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>AI & ML Services | MillenniumAI</title>
        <meta
          name="description"
          content="Comprehensive AI & ML services including data annotation, Generative AI, computer vision, NLP, speech AI, data engineering, and full-stack AI development."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.millenniumai.in/services" />
      </Helmet>

      <div className="pt-20">

        {/* HERO */}
        <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a2e]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                From data annotation to full-stack AI development, we deliver
                enterprise-grade services designed for accuracy, security, and
                production scale.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* SERVICES GRID (SHARED COMPONENT) */}
        <Services />

        {/* FINAL CTA */}
        <section className="py-20 bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0f]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>

              <p className="text-lg text-gray-300 mb-8">
                Talk to our AI experts and discover how MillenniumAI can help
                you deploy reliable, scalable, and secure AI systems.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0"
                >
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ServicesPage;
