import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const DifferentiationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const comparisons = [
    {
      category: 'Deployment Model',
      millenniumAi: 'Production-Grade Operations',
      millenniumAiDesc: 'Long-term partnerships with continuous dataset versioning, governance frameworks, and audit-ready operations built into every project.',
      typical: 'Project-Based Vendors',
      typicalDesc: 'Task completion model. Once project ends, relationship ends. No framework for ongoing governance or quality monitoring.',
      millenniumAiWins: true,
    },
    {
      category: 'Data Governance',
      millenniumAi: 'Comprehensive Lineage & Audit Trails',
      millenniumAiDesc: 'Dataset versioning, annotation lineage, change management, bias reviews, and immutable audit logs for regulatory compliance and risk management.',
      typical: 'No Traceability',
      typicalDesc: 'Minimal documentation. Data provenance unclear. No audit trail for decision justification. Risk exposure in regulated environments.',
      millenniumAiWins: true,
    },
    {
      category: 'Annotation Workforce',
      millenniumAi: 'Domain-Trained Expert Annotators',
      millenniumAiDesc: 'Specialized teams across healthcare, finance, automotive, and manufacturing. Deep domain knowledge ensures clinical-grade QA, regulatory understanding, and technical depth.',
      typical: 'Generic Labor Pools',
      typicalDesc: 'Crowdsourced or general annotators without domain expertise. High inter-annotator disagreement. Cannot handle complex, regulated use cases.',
      millenniumAiWins: true,
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl" />
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
            How MillenniumAi Is Different
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Enterprise AI data vendors fall into two categories: those built for quick projects, and those built for production. We're the latter.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {comparisons.map((comparison, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors">
                {/* Category Header */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-6 lg:px-8 py-4 border-b border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    {comparison.category}
                  </h3>
                </div>

                {/* Comparison Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* MillenniumAi Column */}
                  <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 bg-gradient-to-br from-blue-50/50 to-white">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-700" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-base">
                        {comparison.millenniumAi}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {comparison.millenniumAiDesc}
                    </p>
                  </div>

                  {/* Typical Vendor Column */}
                  <div className="p-6 lg:p-8 bg-slate-50/50">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center">
                        <X className="w-4 h-4 text-red-700" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-base">
                        {comparison.typical}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {comparison.typicalDesc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-20 p-8 lg:p-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
        >
          <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
            <span className="font-bold text-slate-900">MillenniumAi is built for enterprises that can't compromise on production quality, governance, and risk management.</span> We operate as a strategic partner, not a vendor. Your AI initiatives deserve infrastructure that scales with enterprise discipline, not project speed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
