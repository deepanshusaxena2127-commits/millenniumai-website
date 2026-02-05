import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layers, CheckCircle2, Shield, Zap, ArrowRight } from 'lucide-react';

const MillenniumAiProductionSystem = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const systemStages = [
    {
      icon: Database,
      label: 'Raw Data',
      description: 'Ingestion, classification, compliance mapping',
      color: 'from-blue-100 to-blue-200',
      textColor: 'text-blue-700',
    },
    {
      icon: Layers,
      label: 'Structuring',
      description: 'Domain-trained annotation, expert review',
      color: 'from-indigo-100 to-indigo-200',
      textColor: 'text-indigo-700',
    },
    {
      icon: CheckCircle2,
      label: 'QA',
      description: 'Multi-stage validation, edge-case mining',
      color: 'from-cyan-100 to-cyan-200',
      textColor: 'text-cyan-700',
    },
    {
      icon: Shield,
      label: 'Governance',
      description: 'Versioning, audit trails, compliance ready',
      color: 'from-purple-100 to-purple-200',
      textColor: 'text-purple-700',
    },
    {
      icon: Zap,
      label: 'Production AI',
      description: 'Deployed, monitored, continuously improved',
      color: 'from-green-100 to-green-200',
      textColor: 'text-green-700',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#F2F0EF] overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            The MillenniumAi Production AI System
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            An integrated system architecture that takes raw data through structuring, quality validation, and governance to production-grade AI.
          </p>
        </motion.div>

        {/* System Flow - Horizontal Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-2"
        >
          {systemStages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="flex-1 flex flex-col relative">
                {/* Stage Card */}
                <div className="flex-1 p-6 lg:p-7 rounded-lg bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4 flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${stage.textColor}`} />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{stage.label}</h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 flex-grow">{stage.description}</p>
                </div>

                {/* Arrow to next stage (hidden on last) */}
                {index < systemStages.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0.4 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-slate-400"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                )}

                {/* Mobile arrow (vertical) */}
                {index < systemStages.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2">
                    <motion.div
                      initial={{ opacity: 0.4 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-slate-400 rotate-90"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20 p-8 lg:p-10 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200"
        >
          <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
            <span className="font-bold text-slate-900">MillenniumAi is infrastructure, not a service.</span> This system architecture is built into every engagement—transparent, measurable, and designed for long-term production deployment in regulated environments. Each stage feeds into the next. Each stage is auditable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MillenniumAiProductionSystem;
