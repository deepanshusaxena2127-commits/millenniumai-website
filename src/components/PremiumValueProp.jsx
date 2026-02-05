import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, TrendingUp, Lock, Award } from 'lucide-react';

const PremiumValueProp = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    {
      icon: Award,
      title: 'Production-Grade Quality',
      description: 'Multi-layer QA with 99.5%+ accuracy. Expert validation and continuous monitoring across every dataset.',
      benefits: ['Expert human validation', 'ML-assisted QA', 'Compliance-aligned'],
    },
    {
      icon: TrendingUp,
      title: 'Enterprise-Scale Delivery',
      description: 'From pilot datasets to multi-million data pipelines. Predictable SLAs, reliable execution at any scale.',
      benefits: ['Predictable SLAs', 'Infinite scalability', 'Team capacity guarantee'],
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'GDPR-aligned workflows, NDA-backed teams, and secure delivery environments for enterprise data.',
      benefits: ['SOC 2 certified', 'Data isolation', 'Audit-ready processes'],
    },
    {
      icon: Zap,
      title: '24/7 Global Operations',
      description: 'Distributed delivery teams across time zones. Continuous progress on your most critical projects.',
      benefits: ['Around-the-clock support', 'Timezone coverage', 'No handoff delays'],
    },
    {
      icon: Shield,
      title: 'Proven Execution',
      description: 'Trusted by 100+ enterprises. Domain expertise across AI verticals with proven delivery track record.',
      benefits: ['100+ enterprise clients', 'Industry verticals', 'Proven outcomes'],
    },
    {
      icon: CheckCircle2,
      title: 'Dedicated Partnership',
      description: 'Assigned account teams, custom workflows, and transparent communication. You\'re a priority, not a ticket.',
      benefits: ['Dedicated account team', 'Custom workflows', 'Direct escalation path'],
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#F2F0EF] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 mb-6"
          >
            <span className="w-2 h-2 rounded-full text-slate-900" />
            <span className="text-sm font-semibold text-slate-900">Why Leaders Choose MillenniumAi</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Enterprise-Grade AI{' '}
            <span className="text-slate-900">
              Delivery at Scale
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Built for enterprises that demand predictable quality, security, and scale. MillenniumAi delivers production-grade AI data and engineering services with the discipline enterprises require.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 lg:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50 group-hover:to-indigo-50/50 transition-all duration-300 -z-10" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold text-slate-900 mb-3"
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <p className="text-slate-600 mb-5 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-slate-700 group-hover:text-blue-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-2xl w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 p-12 lg:p-16 rounded-2xl bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5 border border-blue-200/50 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

          <motion.div variants={itemVariants} className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready to transform your AI data strategy?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
              Talk to our team about how MillenniumAi can accelerate your AI initiatives with enterprise-grade data and delivery.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-600 text-white font-bold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
            >
              Schedule a Consultation
              <Zap className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumValueProp;
