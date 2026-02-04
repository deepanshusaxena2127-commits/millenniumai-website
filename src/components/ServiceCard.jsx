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
        group overflow-hidden rounded-2xl
        bg-white border border-slate-200
        shadow-sm hover:shadow-xl transition-all duration-300
        ${isLastCard ? 'lg:col-span-3' : ''}
      `}
    >
      {/* ===== HEADER STRIP ===== */}
      <div className="relative h-20 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center px-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* ===== BODY ===== */}
      <div className={`p-8 ${isLastCard ? 'flex gap-10 items-start' : ''}`}>
        <div className={isLastCard ? 'flex-1' : ''}>
          {/* Title */}
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Benefits */}
          <div className={isLastCard ? 'flex flex-wrap gap-6' : 'space-y-3'}>
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
