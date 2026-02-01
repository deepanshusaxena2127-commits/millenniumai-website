import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const features = [
  { stat: '99.5%+', description: 'QA Accuracy Across Production Datasets' },
  { stat: 'Millions', description: 'Data Assets Processed for AI Training' },
  { stat: '24/7', description: 'Global Delivery & Support Coverage' }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const Features = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 bg-[#08001a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={`${feature.stat}-${index}`}
              initial={shouldReduceMotion ? false : 'offscreen'}
              whileInView={shouldReduceMotion ? false : 'onscreen'}
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-5xl md:text-6xl font-light text-white">
                {feature.stat}
              </h2>
              <p className="mt-2 text-lg text-gray-400 max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
