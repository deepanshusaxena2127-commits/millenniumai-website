import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';
import { Shield, Award, Zap, Target, Clock, Lock } from 'lucide-react';

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
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why <span className="text-blue-600">Trust Us</span>
          </h2>
          <p className="text-lg text-slate-600">
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-slate-200 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {metric.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* TESTIMONIALS HEADER */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-2">
            What Our Clients Say
          </h3>
          <p className="text-sm text-slate-500">
            Testimonials are anonymized due to confidentiality and NDA obligations.
          </p>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* COMPLIANCE BADGES */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {[
            { icon: Shield, text: 'GDPR-Aligned Data Handling' },
            { icon: Clock, text: '24/7 Global Delivery' },
            { icon: Lock, text: 'NDA-Backed Engagements' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-lg border border-slate-200 bg-slate-50"
              >
                <Icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
