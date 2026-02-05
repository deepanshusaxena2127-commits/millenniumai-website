import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShieldCheck, Layers, Lock } from 'lucide-react';

const EnterpriseEngagementModels = () => {
  const models = [
    {
      title: 'Long-Term Production Partnerships',
      icon: Briefcase,
      description:
        'Designed for AI systems that operate continuously in live production environments.',
      points: [
        'Multi-quarter delivery programs',
        'Ongoing quality & governance oversight',
        'Dataset evolution aligned to model lifecycle',
      ],
    },
    {
      title: 'Regulated Dataset Programs',
      icon: ShieldCheck,
      description:
        'Fixed-scope, compliance-driven dataset delivery with formal acceptance.',
      points: [
        'Defined dataset specifications',
        'Formal QA sign-off & acceptance',
        'Audit-ready documentation',
      ],
    },
    {
      title: 'Elastic Capacity Models',
      icon: Layers,
      description:
        'Flexible delivery capacity without sacrificing consistency or control.',
      points: [
        'Scalable workforce allocation',
        'Predictable throughput',
        'SLA-backed performance',
      ],
    },
    {
      title: 'Confidential AI Environments',
      icon: Lock,
      description:
        'Dedicated, access-restricted setups for sensitive or proprietary data.',
      points: [
        'Isolated infrastructure',
        'Restricted access workflows',
        'Enhanced confidentiality controls',
      ],
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How Enterprises Engage With MillenniumAi
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Clear operating models designed for regulated organizations deploying AI at scale.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, idx) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-blue-600/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {model.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.points.map((point, i) => (
                    <li key={i} className="text-sm flex gap-2 text-slate-200">
                      <span className="text-blue-400 font-bold">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseEngagementModels;
