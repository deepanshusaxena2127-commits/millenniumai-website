import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, CheckCircle2, Shield } from 'lucide-react';

const ProductionAiDeliveryProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const steps = [
    {
      number: '1',
      icon: Database,
      title: 'Data Intake & Risk Scoping',
      description:
        'Every dataset begins with secure ingestion and regulatory classification. We map compliance requirements—HIPAA, GDPR, SOX, DO-178C, industry-specific safety standards—before annotation begins. Risk profile, data sensitivity, and governance constraints are documented and reviewed.',
      details: [
        'Secure data ingestion with encryption and access controls',
        'Dataset classification by sensitivity and regulatory domain',
        'Compliance mapping to relevant standards and audit frameworks',
        'Risk profile documentation for governance review',
      ],
    },
    {
      number: '2',
      icon: Users,
      title: 'Domain-Trained Human Intelligence',
      description:
        'Annotation is performed by domain-trained specialists with deep expertise in your vertical—clinical expertise for healthcare, automotive safety knowledge for autonomous systems, financial regulatory understanding for fintech. Expert review layers catch ambiguity and escalate edge cases.',
      details: [
        'Specialists with domain certification and industry experience',
        'Structured annotation guidelines versioned with each dataset',
        'Expert review layers for quality gates and dispute resolution',
        'Escalation paths for ambiguous or safety-critical annotations',
      ],
    },
    {
      number: '3',
      icon: CheckCircle2,
      title: 'Continuous Quality & Edge-Case Control',
      description:
        'Multi-stage QA tracks inter-annotator agreement, identifies drift in annotation quality, and mines edge cases that model performance depends on. Real-time monitoring catches quality degradation before datasets are released. No dataset ships without documented QA validation.',
      details: [
        'Inter-annotator agreement scoring and operator calibration',
        'Automated edge-case mining for failure scenario coverage',
        'Multi-stage QA gates with documented pass/fail criteria',
        'Continuous drift monitoring and real-time quality alerts',
      ],
    },
    {
      number: '4',
      icon: Shield,
      title: 'Auditability, Versioning & Governance',
      description:
        'Complete dataset versioning, immutable annotation logs, and traceability enable regulatory review and long-term AI governance. Every annotation decision is logged with human justification. Audit-ready workflows support compliance inspections, incident response, and change management.',
      details: [
        'Dataset versioning with complete lineage and changelog',
        'Immutable annotation logs with decision justification',
        'Audit-ready export formats for regulatory compliance review',
        'Change management workflows with impact analysis',
      ],
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#F2F0EF]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
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
            How Production AI Is Delivered at MillenniumAi
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A governance-first operating model designed for regulated, real-world AI systems — not experiments.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="h-full p-6 lg:p-7 rounded-xl bg-white border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Step Number Badge */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <div className="pt-4 border-t border-slate-100">
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-slate-500 flex gap-2">
                          <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-20 p-8 lg:p-10 bg-white rounded-xl border border-slate-200"
        >
          <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
            <span className="font-bold text-slate-900">This is what production-grade AI data infrastructure looks like.</span> Not spreadsheets of metrics, not vanity numbers—but governance frameworks, documented accountability, and auditable workflows built for enterprises that deploy AI in regulated environments. Every step is designed for oversight, traceability, and compliance readiness.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionAiDeliveryProcess;
