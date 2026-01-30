import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServiceCard = ({ service, index, isLastCard }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className={`group relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm ${
        isLastCard ? 'lg:col-span-3' : ''
      }`}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className={`relative z-10 ${isLastCard ? 'flex items-center gap-8' : ''}`}>
        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <Icon className="w-7 h-7 text-white" />
        </div>

        <div className={isLastCard ? 'flex-1' : ''}>
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {service.description}
          </p>

          <div className={isLastCard ? 'flex gap-6' : 'space-y-2'}>
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;