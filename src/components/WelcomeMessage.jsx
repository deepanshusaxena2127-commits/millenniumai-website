import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const WelcomeMessage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.p
      className="text-xl md:text-2xl text-white max-w-2xl mx-auto text-center leading-relaxed"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={shouldReduceMotion ? false : { opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      Welcome to <span className="font-semibold text-purple-300">MillenniumAi</span>.
      <br />
      We help enterprises build reliable, scalable, and production-ready AI systems
      through high-quality data, engineering expertise, and disciplined execution.
    </motion.p>
  );
};

export default WelcomeMessage;
