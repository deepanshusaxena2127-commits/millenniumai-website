import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  // Staggered word animation variants
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
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const mainTitleWords = "Enterprise-Grade AI Solutions".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark pt-20">

      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
        <div 
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" 
        />
        {/* Abstract Glows */}
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
                variants={child}
                key={index}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-2xl"
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)',
                  letterSpacing: '-0.02em'
                }}
              >
                {word === "Solutions" ? (
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg" style={{
                     textShadow: '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(147, 51, 234, 0.4), 0 0 100px rgba(236, 72, 153, 0.2)'
                   }}>
                     {word}
                   </span>
                ) : word}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileInView={{ y: [0, -10, 0] }}
             className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-200 mt-4 tracking-tight drop-shadow-xl"
            style={{
              textShadow: '0 0 20px rgba(148, 163, 184, 0.4)',
              fontWeight: '300',
              letterSpacing: '0.02em'
            }}
          >
            for the Modern World
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileInView={{ scale: [0.95, 1] }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md"
          style={{
            textShadow: '0 0 15px rgba(100, 116, 139, 0.3)',
            lineHeight: '1.8'
          }}
        >
          MillenniumAi provides the enterprise-grade data infrastructure required to build reliable AI. From Generative AI & LLMs to Computer Vision and NLP, we deliver the high-fidelity training data that powers the world's most advanced models.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-7 text-lg rounded-full shadow-xl shadow-blue-600/20 transition-all duration-300 hover:scale-105"
            >
              Talk to an Expert
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <Link to="/services">
            <Button
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-7 text-lg rounded-full shadow-xl shadow-white/20 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Explore Services
            </Button>
          </Link>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: '99.5%', label: 'Accuracy Guarantee' },
            { value: '10+', label: 'Enterprise Partners' },
            { value: '24/7', label: 'Global Support' },
            { value: '30K+', label: 'Data Points/Month' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white uppercase tracking-wider group-hover:text-slate-300 transition-colors bg-primary-dark px-3 py-1 rounded-md inline-block">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom Gradient Fade to Content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;