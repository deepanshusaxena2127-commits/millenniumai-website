import React, { forwardRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTAButton = forwardRef(
  (
    {
      children,
      onClick,
      variant = 'default',
      className = '',
      size = 'default',
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();

    return (
      <motion.div
        whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
      >
        <Button
          ref={ref}
          onClick={onClick}
          variant={variant}
          size={size}
          className={`transition-all duration-300 ${className}`}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

CTAButton.displayName = 'CTAButton';

export default CTAButton;
