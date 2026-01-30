import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20"
    >
      <Quote className="w-10 h-10 text-purple-400 mb-4" />
      <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
      <div className="border-t border-white/10 pt-4">
        <p className="text-white font-semibold">{testimonial.author}</p>
        <p className="text-sm text-gray-400">{testimonial.role}</p>
        <p className="text-sm text-purple-400">{testimonial.company}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;