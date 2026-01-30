import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Solutions from '@/components/Solutions';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SolutionsPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions & Services | MillenniumAi</title>
        <meta
          name="description"
          content="Enterprise-grade AI solutions including Generative AI, NLP, Computer Vision, Content Moderation, Document Processing, and Speech AI—tailored for global industries."
        />
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
                Enterprise AI{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                MillenniumAi delivers enterprise-grade AI solutions designed to
                accelerate innovation, improve decision-making, and enable
                scalable, production-ready AI systems across industries.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0"
                >
                  Talk to an AI Expert
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* SOLUTIONS GRID (UNCHANGED COMPONENT) */}
        <Solutions />

        {/* SOLUTIONS OVERVIEW */}
        <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a2e]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for Real-World AI at Scale
              </h2>

              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                From data preparation and model training to deployment and
                governance, MillenniumAi supports the full AI lifecycle with
                precision, scalability, and enterprise-grade quality controls.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Domain-Specific Expertise',
                  description:
                    'Our teams combine AI expertise with deep industry knowledge to deliver solutions that align with real-world business challenges.',
                },
                {
                  title: 'Scalable & Secure Delivery',
                  description:
                    'Enterprise-ready workflows, global delivery capabilities, and robust security practices ensure consistent performance at scale.',
                },
                {
                  title: 'Quality-Driven Execution',
                  description:
                    'Multi-layer quality assurance, human-in-the-loop validation, and continuous improvement ensure reliable AI outcomes.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE SECTION */}
        <section className="py-20 bg-[#0a0a0f]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Enterprises Choose MillenniumAi
              </h2>

              <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
                We partner with enterprises, AI-first companies, and technology
                leaders to build AI systems that are accurate, compliant, and
                ready for long-term scale.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Start Your AI Project
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default SolutionsPage;