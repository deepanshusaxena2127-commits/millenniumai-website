import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, Award, Zap } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Democratizing AI technology and making it accessible to enterprises of all sizes',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Your success is our success. We build long-term partnerships, not just projects',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Uncompromising standards with 99.5% accuracy and rigorous quality controls',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Staying at the forefront of AI research and bringing cutting-edge solutions to market',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - MillenniumAi</title>
        <meta
          name="description"
          content="Learn about MillenniumAi's mission to deliver quality-driven, trusted AI solutions. Our expertise in AI/ML, data science, and enterprise solutions."
        />
      </Helmet>
      <div className="pt-20">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1695668548342-c0c1ad479aee)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.2,
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />

          <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Building the{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Future of AI
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                MillenniumAi is a quality-driven, trusted AI partner empowering enterprises to harness the full potential of artificial intelligence and machine learning.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a2e]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                At MillenniumAi, we believe that every organization deserves access to world-class AI capabilities. Our mission is to bridge the gap between cutting-edge AI research and practical business applications, delivering solutions that drive real, measurable value. We're committed to maintaining the highest standards of quality, security, and ethical AI practices in everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Expertise
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI/ML Engineering',
                  description: 'Advanced machine learning models, deep learning architectures, and neural network optimization',
                },
                {
                  title: 'Data Science',
                  description: 'Statistical analysis, predictive modeling, and data-driven decision making frameworks',
                },
                {
                  title: 'Enterprise Solutions',
                  description: 'Scalable, secure, and compliant AI systems designed for enterprise deployment',
                },
              ].map((expertise, index) => (
                <motion.div
                  key={expertise.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{expertise.title}</h3>
                  <p className="text-gray-300">{expertise.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;