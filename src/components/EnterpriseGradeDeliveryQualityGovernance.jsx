import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Lock, BarChart3, GitBranch, AlertTriangle } from 'lucide-react';

const EnterpriseGradeDeliveryQualityGovernance = () => {
  const columns = [
    {
      title: 'Quality Systems',
      icon: CheckCircle2,
      items: [
        {
          subtitle: 'Multi-Stage QA',
          description: 'Systematic validation through peer review, expert assessment, and automated QA gates before dataset release.'
        },
        {
          subtitle: 'Inter-Annotator Agreement',
          description: 'Continuous measurement and calibration of annotation consistency. Real-time quality alerts for operator drift.'
        },
        {
          subtitle: 'Edge-Case Handling',
          description: 'Systematic identification and documentation of failure scenarios. Structured failure taxonomy for model improvement.'
        }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      items: [
        {
          subtitle: 'Secure Access Controls',
          description: 'Role-based workforce access with cryptographic audit logs. All data interactions tracked and immutable.'
        },
        {
          subtitle: 'Dataset Versioning',
          description: 'Complete lineage tracking from raw ingestion through annotation, QA, and deployment. Full change history.'
        },
        {
          subtitle: 'Audit Trails',
          description: 'Annotation logs, decision justification, and compliance documentation. Regulatory review ready.'
        }
      ]
    },
    {
      title: 'Scale & Reliability',
      icon: BarChart3,
      items: [
        {
          subtitle: 'Global Delivery',
          description: 'Distributed teams across timezones enabling 24/7 production operations without handoff delays.'
        },
        {
          subtitle: 'Production SLAs',
          description: 'Predictable delivery timelines with documented quality guarantees. Capacity assurances for enterprise workloads.'
        },
        {
          subtitle: 'Continuous Monitoring',
          description: 'Real-time performance tracking, quality degradation alerts, and automated incident response workflows.'
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#F2F0EF] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/3 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
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
            Enterprise-Grade Delivery, Quality & Governance
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Production infrastructure built for regulated environments. Quality systems, security controls, and reliability designed for mission-critical AI.
          </p>
        </motion.div>

        {/* Three-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
        >
          {columns.map((column, columnIndex) => {
            const ColumnIcon = column.icon;
            return (
              <motion.div
                key={columnIndex}
                variants={columnVariants}
                className="group relative"
              >
                {/* Column Container */}
                <div className="h-full p-8 lg:p-10 rounded-xl bg-gradient-to-br from-slate-50/50 to-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  {/* Column Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <ColumnIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {column.title}
                    </h3>
                  </div>

                  {/* Column Items */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="space-y-6"
                  >
                    {column.items.map((item, itemIndex) => (
                      <motion.div key={itemIndex} variants={itemVariants} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                        <h4 className="font-semibold text-slate-900 text-sm mb-2">
                          {item.subtitle}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-xl w-0 group-hover:w-full transition-all duration-500" />
                </div>
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
          className="mt-16 lg:mt-20 p-8 lg:p-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
        >
          <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
            <span className="font-bold text-slate-900">This is what production-grade AI infrastructure looks like.</span> Not spreadsheets of metrics, but governance frameworks, documented accountability, and auditable workflows built for enterprises that deploy AI in regulated environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseGradeDeliveryQualityGovernance;
