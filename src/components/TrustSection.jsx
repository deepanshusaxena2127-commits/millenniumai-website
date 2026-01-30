import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';
import { Shield, Award, Zap, Target, Clock, Lock } from 'lucide-react';

const trustMetrics = [
  {
    icon: Target,
    title: '99.5% Accuracy',
    description: 'Industry-leading precision in data annotation and model performance',
  },
  {
    icon: Clock,
    title: '24/7 Global Support',
    description: 'Round-the-clock expert assistance across all time zones with guaranteed response SLAs',
  },
  {
    icon: Zap,
    title: 'Massive Scale',
    description: '30K+ data points processed with enterprise-grade infrastructure',
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    description: 'Trusted by Fortune 500 companies and leading innovators',
  },
];

const testimonials = [
  {
    quote: 'MillenniumAi transformed our data labeling process. Their accuracy and speed are unmatched in the industry.',
    author: 'Dr. Sarah Chen',
    role: 'Chief AI Officer',
    company: 'TechVision Corp',
  },
  {
    quote: 'The computer vision solutions delivered by MillenniumAi exceeded our expectations. ROI was evident within 3 months.',
    author: 'Michael Rodriguez',
    role: 'VP of Engineering',
    company: 'AutoDrive Systems',
  },
  {
    quote: 'Outstanding NLP capabilities. Their team understood our domain-specific requirements perfectly.',
    author: 'Emily Thompson',
    role: 'Head of Data Science',
    company: 'FinanceAI Solutions',
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a2e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Quality-driven, security-first, and results-focused AI partner for your enterprise
          </p>
        </motion.div>

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
                <h3 className="text-xl font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-sm font-semibold text-gray-300">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10">
            <Clock className="w-6 h-6 text-blue-400" />
            <span className="text-sm font-semibold text-gray-300">24/7 Global Support</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10">
            <Lock className="w-6 h-6 text-blue-400" />
            <span className="text-sm font-semibold text-gray-300">NDA-Backed Engagements</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;