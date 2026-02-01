import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Globe = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const size = 500;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = 180;

    let rotation = 0;

    // Pre-generate globe points (performance optimization)
    const points = Array.from({ length: 800 }).map(() => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      return { theta, phi };
    });

    const drawGlobe = () => {
      ctx.clearRect(0, 0, size, size);

      // Outer globe
      ctx.strokeStyle = '#667eea';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#667eea';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Points
      for (const point of points) {
        const x = radius * Math.sin(point.phi) * Math.cos(point.theta + rotation);
        const y = radius * Math.sin(point.phi) * Math.sin(point.theta + rotation);
        const z = radius * Math.cos(point.phi);

        if (z > 0) {
          const scale = (z + radius) / (2 * radius);
          const dotX = centerX + x;
          const dotY = centerY + y;
          const dotSize = 1 + scale * 1.5;
          const opacity = 0.3 + scale * 0.7;

          ctx.fillStyle = `rgba(102, 126, 234, ${opacity})`;
          ctx.beginPath();
          ctx.arc(dotX, dotY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rotation += shouldReduceMotion ? 0 : 0.003;
      animationRef.current = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <motion.div
      className="relative"
      animate={
        shouldReduceMotion
          ? undefined
          : { scale: [1, 1.02, 1] }
      }
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto"
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default Globe;
