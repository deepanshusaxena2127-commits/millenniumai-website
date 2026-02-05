import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Shield, BarChart3, Lock, CheckCircle, Zap } from 'lucide-react';

const GovernanceRiskControls = () => {
  const controls = [
    {
      icon: GitBranch,
      title: 'Dataset Lineage & Versioning',
      description: 'Complete provenance tracking for every dataset. Every version documents changes, rationale, and impact on model behavior. Full traceability from raw data through annotation, QA, and deployment.',
      compliance: 'Enables regulatory audits, model card documentation, and compliance reporting'
    },
    {
      icon: BarChart3,
      title: 'Annotation Guideline Versioning',
      description: 'Structured documentation and version control of annotation standards. Changes are tracked with impact analysis across datasets. Guidelines evolve with model requirements while maintaining historical records.',
      compliance: 'Required for SOX, GDPR, and HIPAA audit trails'
    },
    {
      icon: Shield,
      title: 'Bias & Fairness Reviews',
      description: 'Systematic evaluation of datasets for demographic bias, representation gaps, and fairness concerns. Expert-led bias reviews with quantitative fairness metrics and actionable remediation recommendations.',
      compliance: 'Addresses AI transparency and fairness requirements (EU AI Act, EEOC guidance)'
    },
    {
      icon: Lock,
      title: 'Secure Workforce Access Controls',
      description: 'Role-based access control with cryptographic audit logs. Data access is restricted to cleared annotators, monitored for compliance, and logged with immutable records. All workforce changes tracked and auditable.',
      compliance: 'HIPAA, SOX, and GDPR workforce security requirements'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance & Continuous Monitoring',
      description: 'Real-time monitoring of annotation quality, inter-rater agreement, and consistency metrics. Automated alerts for quality degradation. Continuous calibration sessions to maintain human validator alignment.',
      compliance: 'Demonstrates operational excellence and risk mitigation'
    },
    {
      icon: Zap,
      title: 'Incident Response & Change Management',
      description: 'Formalized processes for responding to quality incidents, data issues, or validation failures. Change requests go through impact analysis, stakeholder approval, and post-change validation cycles.',
      compliance: 'Critical for regulated environments requiring documented change control'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/3 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
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
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm font-semibold text-slate-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            Governance & Risk Management
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Enterprise-Grade Delivery & Risk Controls
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            AI governance frameworks designed for regulated industries. We embed compliance, auditability, and risk management into every operational process—from data handling through model deployment.
          </motion.p>
        </motion.div>

        {/* Controls Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {controls.map((control) => {
            const Icon = control.icon;
            return (
              <motion.div
                key={control.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center mb-4 group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg font-bold text-slate-900 mb-3"
                >
                  {control.title}
                </motion.h3>

                {/* Description */}
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  {control.description}
                </p>

                {/* Compliance note */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-semibold text-indigo-700">
                    ✓ {control.compliance}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certification Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-10 rounded-2xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50/50 to-blue-50/50"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Compliance & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">Security & Data Protection</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
                  <span>SOC 2 Type II certification</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
                  <span>GDPR & CCPA compliant data handling</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
                  <span>End-to-end encryption with HSM</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">Industry-Specific Compliance</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
                  <span>HIPAA-compliant for healthcare data</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
                  <span>SOX controls for financial services</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
                  <span>DO-178C support for aviation</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Footer statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 text-lg leading-relaxed">
            MillenniumAI's governance framework goes beyond compliance checkboxes. We operationalize risk management, audit readiness, and regulatory excellence as core competitive advantages—enabling enterprise organizations to deploy AI systems with institutional confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernanceRiskControls;
