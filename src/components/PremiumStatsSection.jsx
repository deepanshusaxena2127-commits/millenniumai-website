import React from 'react';
import { motion } from 'framer-motion';

const PremiumStatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const stats = [
    {
      value: '99.5%',
      label: 'Inter-Annotator Agreement',
      description: 'Validated QA through continuous multi-reviewer consensus on production datasets',
      details: 'Operator drift detection & real-time calibration',
      gradient: 'bg-blue-950',
    },
    {
      value: '100+',
      label: 'Enterprise Deployments',
      description: 'Regulated industries including healthcare, autonomous, finance, government',
      details: 'HIPAA, SOX, GDPR, DO-178C compliant',
      gradient: 'bg-blue-950',
    },
    {
      value: '24/7',
      label: 'Audit-Ready Operations',
      description: 'Complete dataset versioning, audit trails, and change logs for regulatory review',
      details: 'Immutable records with human decision justification',
      gradient: 'bg-blue-950',
    },
    {
      value: '1M+',
      label: 'Datasets in Production',
      description: 'Continuous QA monitoring with real-time performance tracking and regression detection',
      details: 'Automated alerts for quality drift and model degradation',
      gradient: 'bg-blue-950',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#F2F0EF] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Regulatory-Grade Operational Proof
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Enterprise-grade metrics that survive regulatory scrutiny. Dataset versioning, audit trails, and continuous governance frameworks built for mission-critical AI systems.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Gradient background card */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur`}
              />

              {/* Card */}
              <div className="relative p-8 md:p-10 rounded-2xl bg-white border border-slate-200 group-hover:border-slate-300 shadow-sm group-hover:shadow-lg transition-all duration-300">
                {/* Top accent */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 rounded-full bg-gradient-to-r ${stat.gradient}`}
                />

                {/* Main stat value */}
                <div className="mb-4">
                  <p className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </p>
                </div>

                {/* Label */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg font-bold text-slate-900 mb-2"
                >
                  {stat.label}
                </motion.h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stat.description}
                </p>

                {/* Details/Governance info */}
                {stat.details && (
                  <p className="text-xs text-slate-500 leading-relaxed mt-3 pt-3 border-t border-slate-200 italic">
                    {stat.details}
                  </p>
                )}

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${stat.gradient} rounded-b-2xl group-hover:w-full transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            MillenniumAI operates under frameworks designed for regulated enterprises. Every dataset is versioned, every annotation decision is logged, and every quality metric is auditable. Our commitment to governance and transparency enables organizations to deploy AI systems with confidence in highly regulated environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumStatsSection;
