import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const engagementModels = [
  {
    name: 'Pilot & Proof of Concept',
    description:
      'Ideal for validating AI feasibility, data quality, and model performance before scaling.',
    features: [
      'Use-case validation & scoping',
      'Sample dataset creation',
      'Quality benchmarks & reporting',
      'Fixed timeline & clear deliverables',
    ],
    highlight: false,
  },
  {
    name: 'Dedicated AI Teams',
    description:
      'Best for organizations that require ongoing data annotation, QA, and AI engineering support.',
    features: [
      'Dedicated annotators & QA leads',
      'Domain-specific expertise',
      'Flexible scaling & SLAs',
      'Continuous delivery & iteration',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise AI Programs',
    description:
      'Designed for large-scale, multi-project AI initiatives with strict security and governance needs.',
    features: [
      'Multi-geo delivery model',
      'Enterprise security & compliance',
      'Custom workflows & tooling',
      'Executive reporting & governance',
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#17001a] to-[#08001a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Flexible Engagement Models
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our commercial models are tailored to your AI maturity, scale, and delivery requirements.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                model.highlight
                  ? 'bg-white/10 border-blue-500 shadow-2xl shadow-blue-500/20'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {model.highlight && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">
                    Most Chosen Model
                  </span>
                </div>
              )}

              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-white">
                  {model.name}
                </h3>
                <p className="mt-2 text-gray-400">
                  {model.description}
                </p>

                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact">
                <Button
                  className={`mt-8 w-full ${
                    model.highlight
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'border-white/20 hover:bg-white/10 text-white'
                  }`}
                  variant={model.highlight ? 'default' : 'outline'}
                >
                  Request a Consultation
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
