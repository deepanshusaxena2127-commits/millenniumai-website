import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServiceCard = ({ service, index, isLastCard }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className={`
        group relative p-8 rounded-2xl
        bg-white
        border border-slate-200
        shadow-sm hover:shadow-xl
        transition-all duration-300
        ${isLastCard ? 'lg:col-span-3' : ''}
      `}
    >
      {/* Subtle hover overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

        <div className={`relative z-10 ${isLastCard ? 'flex items-start gap-8' : ''}`}>
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mb-6 flex-shrink-0">
          <Icon className="w-7 h-7 text-white" aria-hidden="true" />
        </div>

        <div className={isLastCard ? 'flex-1' : ''}>
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-semibold text-slate-900 mb-3"
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <p className="text-slate-600 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Benefits */}
          <div className={isLastCard ? 'flex gap-6 flex-wrap' : 'space-y-3'}>
            {service.benefits.map((benefit, i) => (
              <div
                key={`${service.title}-benefit-${i}`}
                className="flex items-center gap-2"
              >
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-slate-600">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
