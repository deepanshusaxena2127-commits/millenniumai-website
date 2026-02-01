import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';
import { Shield, Award, Zap, Target, Clock, Lock } from 'lucide-react';

/* =========================
   TRUST METRICS (SAFE)
   ========================= */
const trustMetrics = [
  {
    icon: Target,
    title: '99.5%+ Accuracy',
    description:
      'Consistently achieved across production AI datasets through multi-layer quality assurance.',
  },
  {
    icon: Clock,
    title: '24/7 Global Delivery',
    description:
      'Distributed teams enabling continuous progress and predictable turnaround times.',
  },
  {
    icon: Zap,
    title: 'Enterprise-Scale Operations',
    description:
      'From pilot initiatives to multi-million data assets delivered reliably.',
  },
  {
    icon: Award,
    title: 'Proven Execution',
    description:
      'Trusted delivery partner for enterprise and high-growth AI organizations.',
  },
];

/* =========================
   TESTIMONIALS (ANONYMIZED)
   ========================= */
const testimonials = [
  {
    quote:
      'MillenniumAI significantly improved our data quality and reduced model iteration cycles. Their QA rigor and delivery discipline stood out during production scale.',
    author: 'Head of Machine Learning',
    role: 'Autonomous Systems',
    company: 'US-based AI Company',
  },
  {
    quote:
      'The team demonstrated strong NLP and annotation expertise, delivering datasets aligned precisely with our domain and compliance requirements.',
    author: 'Director of Data Science',
    role: 'Financial Services',
    company: 'European Enterprise',
  },
  {
    quote:
      'MillenniumAI operated as a true AI delivery partner. Their structured workflows and accuracy benchmarks made large-scale model training reliable.',
    author: 'AI Engineering Lead',
    role: 'Healthcare AI',
    company: 'Global Organization',
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a2e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Trust Us
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Quality-driven execution, security-aware workflows, and scalable AI delivery
            for enterprise teams.
          </p>
        </motion.div>

        {/* TRUST METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {metric.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* TESTIMONIALS HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What Our Clients Say
          </h3>
          <p className="text-sm text-gray-400">
            Testimonials are anonymized due to confidentiality and NDA obligations.
          </p>
        </motion.div>

        {/* TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.author}-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* COMPLIANCE & TRUST BADGES (SAFE) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-sm font-semibold text-gray-300">
              GDPR-Aligned Data Handling
            </span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10">
            <Clock className="w-6 h-6 text-blue-400" />
            <span className="text-sm font-semibold text-gray-300">
              24/7 Global Delivery
            </span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10">
            <Lock className="w-6 h-6 text-blue-400" />
            <span className="text-sm font-semibold text-gray-300">
              NDA-Backed Engagements
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustSection;
