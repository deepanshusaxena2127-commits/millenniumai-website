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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-sm"
    >
      {/* Hover overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-white" aria-hidden="true" />
        </div>

        {/* Industry */}
        <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-purple-400 transition-colors duration-300">
          {solution.industry}
        </h3>

        {/* Use cases */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-400 mb-3">
            Use Cases
          </p>
          <ul className="space-y-2" role="list">
            {solution.useCases.map((useCase, i) => (
              <li key={`${solution.industry}-usecase-${i}`} className="flex items-start gap-2">
                <ArrowRight
                  className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-300">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes */}
        <div>
          <p className="text-sm font-semibold text-gray-400 mb-3">
            Typical Outcomes
          </p>
          <div className="flex flex-wrap gap-2">
            {solution.outcomes.map((outcome, i) => (
              <span
                key={`${solution.industry}-outcome-${i}`}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300"
              >
                <Check className="w-3 h-3" aria-hidden="true" />
                {outcome}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionCard;
