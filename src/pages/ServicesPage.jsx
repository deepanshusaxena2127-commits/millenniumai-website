import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Services from '@/components/Services';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - MillenniumAi</title>
        <meta
          name="description"
          content="Comprehensive AI/ML services including data annotation, generative AI, computer vision, NLP, speech AI, data engineering, and digital development."
        />
      </Helmet>
      <div className="pt-20">
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
                From data annotation to full-stack AI development, we provide end-to-end solutions that drive real business value
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

        <Services />

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
                Let's discuss how our AI solutions can accelerate your digital transformation
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