import React from 'react';
import { motion } from 'framer-motion';
import { Database, GitBranch, AlertTriangle, RotateCcw, CheckCircle2 } from 'lucide-react';

const TechnicalDataPipelines = () => {
  const capabilities = [
    {
      icon: Database,
      title: 'Golden Datasets for Model Training',
      description: 'Curated, production-quality datasets engineered for foundation model alignment, domain-specific fine-tuning, and transfer learning. Every dataset includes semantic annotations, confidence scores, and explicit failure categories.',
      details: [
        'Instruction-following datasets with human alignment scoring',
        'Multi-turn conversational datasets with reasoning chains',
        'Domain-specific corpora with expert validation',
        'Balanced representation across edge cases and rare scenarios'
      ]
    },
    {
      icon: CheckCircle2,
      title: 'Evaluation & Benchmark Datasets',
      description: 'Systematically designed evaluation frameworks that measure model performance across multiple dimensions. Golden-standard reference sets for regression testing and continuous quality monitoring across retraining cycles.',
      details: [
        'Multi-dimensional evaluation criteria (accuracy, safety, fairness, latency)',
        'Adversarial test sets for robustness validation',
        'Regulatory compliance checkpoints (HIPAA, SOX, GDPR)',
        'Performance regression detection across model versions'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Edge-Case Mining & Failure Taxonomy',
      description: 'Systematic identification and categorization of model failure modes. We maintain structured failure taxonomies that accelerate debugging, improve retraining prioritization, and enable predictive quality improvements.',
      details: [
        'Automated edge-case discovery through adversarial testing',
        'Failure taxonomy documentation with root cause analysis',
        'High-stakes scenario simulation (safety-critical contexts)',
        'Human-led exception mining for novel failure patterns'
      ]
    },
    {
      icon: RotateCcw,
      title: 'Continuous Retraining & Feedback Loops',
      description: 'Production-grade pipelines that support iterative model improvement. Feedback from deployed systems flows back into structured annotation, enabling models to evolve based on real-world performance and changing requirements.',
      details: [
        'RLHF (Reinforcement Learning from Human Feedback) pipelines',
        'Real-time performance monitoring and quality degradation alerts',
        'Continuous active learning for priority data collection',
        'Model versioning with A/B evaluation across cohorts'
      ]
    }
  ];

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
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm font-semibold text-slate-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Technical Architecture
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Enterprise AI & Generative Model Services
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Production-grade data pipelines engineered to support the complete model lifecycle—from initial training through continuous alignment and retraining. We deliver structured, versioned datasets with full traceability and human validation at every stage.
          </motion.p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
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
                  {capability.title}
                </motion.h3>

                {/* Description */}
                <p className="text-slate-600 mb-5 leading-relaxed">
                  {capability.description}
                </p>

                {/* Details List */}
                <div className="space-y-2">
                  {capability.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Supporting statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
        >
          <p className="text-slate-600 text-lg leading-relaxed">
            <span className="font-semibold text-slate-900">Technical Rigor Built In:</span> Every dataset is governed by strict versioning protocols, complete annotation guidelines, inter-rater agreement thresholds, and human validation checkpoints. We maintain immutable records of all decisions, enabling models to evolve predictably while maintaining full auditability for regulatory compliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalDataPipelines;
