import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ variant = 'gradient' }) => {
  if (variant === 'gradient') {
    return (
      <div className="relative h-16 md:h-20 overflow-hidden">
        {/* Subtle gradient line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </motion.div>

        {/* Animated dot accent */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
        </motion.div>
      </div>
    );
  }

  if (variant === 'space') {
    return <div className="h-8 md:h-12" />;
  }

  return null;
};

export default SectionDivider;
