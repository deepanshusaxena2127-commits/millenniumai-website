import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  const mainTitleWords = 'Enterprise-Grade AI Solutions'.split(' ');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark pt-20">
      {/* Parallax Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="mb-6 overflow-hidden">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-3 gap-y-1"
          >
            {mainTitleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={child}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white"
                whileHover={{ scale: 1.05, y: -5 }}
                style={{ letterSpacing: '-0.02em' }}
              >
                {word === 'Solutions' ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-200 mt-4 tracking-tight"
          >
            for the Modern World
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          MillenniumAI delivers enterprise-grade data and AI engineering services
          that enable reliable model training and production deployment. From
          Generative AI and LLMs to Computer Vision and NLP, we support AI teams
          with high-quality, scalable training data and execution discipline.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-7 text-lg rounded-full"
            >
              Talk to an Expert
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <Link to="/services">
            <Button
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-7 text-lg rounded-full font-semibold"
            >
              Explore Services
            </Button>
          </Link>
        </motion.div>

        {/* Trust Metrics (SAFE) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: '99.5%+', label: 'QA Accuracy' },
            { value: '10+', label: 'Enterprise Engagements' },
            { value: '24/7', label: 'Global Delivery' },
            { value: '30K+', label: 'Assets Processed Monthly' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;
