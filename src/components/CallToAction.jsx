import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CallToAction = ({
  text = "Let’s turn your AI initiatives into production-ready solutions."
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.p
      className="text-md text-white max-w-lg mx-auto text-center"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={shouldReduceMotion ? false : { opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {text}
    </motion.p>
  );
};

export default CallToAction;
