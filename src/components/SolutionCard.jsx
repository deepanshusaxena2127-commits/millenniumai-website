import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const SolutionCard = ({ solution, index }) => {
  const Icon = solution.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative p-8 lg:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50 group-hover:to-indigo-50/50 transition-all duration-300 -z-10" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-blue-600" />
        </div>

        {/* Industry */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ y: -1 }}
          transition={{ duration: 0.3 }}
          className="text-xl font-bold text-slate-900 mb-1"
        >
          {solution.industry}
        </motion.h3>

        {/* Differentiator - Why we win */}
        {solution.differentiator && (
          <p className="text-sm font-semibold text-blue-700 mb-5 leading-relaxed bg-blue-50 px-3 py-2 rounded-lg border-l-2 border-blue-600">
            ✓ {solution.differentiator}
          </p>
        )}

        {/* Use cases */}
        <div className="mb-6 mt-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Use Cases
          </p>
          <ul className="space-y-2.5">
            {solution.useCases.map((useCase, i) => (
              <li key={`${solution.industry}-usecase-${i}`} className="flex items-start gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes */}
        <div className="mt-auto">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Typical Outcomes
          </p>
          <div className="flex flex-wrap gap-2">
            {solution.outcomes.map((outcome, i) => (
              <span
                key={`${solution.industry}-outcome-${i}`}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium"
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>

        {/* Accent line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-2xl w-0 group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default SolutionCard;
