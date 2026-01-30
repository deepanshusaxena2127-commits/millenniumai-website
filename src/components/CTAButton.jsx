import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTAButton = ({ children, onClick, variant = 'default', className = '', size = 'default' }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={onClick}
        variant={variant}
        size={size}
        className={`transition-all duration-300 ${className}`}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default CTAButton;