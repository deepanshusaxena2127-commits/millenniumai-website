import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const headlineVariants = {
    hidden: { opacity: 0, y: 30, x: -10 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const subtextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.5 + i * 0.15, ease: 'easeOut' },
    }),
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-32 md:pt-32 md:pb-40">
      {/* SOFT MULTI-COLOR GRADIENT BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient with pastel purple, blue, pink tones */}
        <div className="absolute inset-0" style={{
          background: 
            radial-gradient(
              ellipse 800px 600px at 20% 30%,
              rgba(216, 180, 254, 0.4) 0%,
              rgba(216, 180, 254, 0.15) 35%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 900px 700px at 80% 20%,
              rgba(191, 219, 254, 0.3) 0%,
              rgba(191, 219, 254, 0.1) 40%,
              transparent 75%
            ),
            radial-gradient(
              ellipse 850px 650px at 50% 100%,
              rgba(251, 207, 232, 0.35) 0%,
              rgba(251, 207, 232, 0.1) 45%,
              transparent 80%
            ),
            linear-gradient(
              135deg,
              #f8f5fc 0%,
              #f5f8ff 50%,
              #fff5f9 100%
            )
          ,
        }} />

        {/* Animated soft blur overlays for depth */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <motion.div
          className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ y: [0, -40, 0], x: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Frosted glass overlay for text readability */}
      <div className="absolute inset-0 backdrop-blur-sm opacity-40" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-300/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-sm font-semibold text-slate-700">Production AI Operating System</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 className="whitespace-nowrap lg:whitespace-normal text-5xl md:text-6xl font-extrabold tracking-tight">
  Infrastructure for Production AI{" "}
  <span className="relative inline-block">
    <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      in Regulated Environments
    </span>
    {/* Stripe-style ambient glow */}
    <motion.div
      className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-lg blur-md -z-10 opacity-[0.12]"
      animate={{ opacity: [0.10, 0.16, 0.10] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    />
  </span>
</motion.h1>
          {/* Subheadline */}
          <motion.p
            variants={subtextVariants}
            className="text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed"
          >
            An operating system that structures raw data into production-grade datasets with complete governance, auditability, and traceability built in. MillenniumAi powers AI systems in healthcare, autonomous vehicles, financial services, and government.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.div
              custom={0}
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              custom={1}
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-slate-300 font-semibold text-slate-800 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 backdrop-blur-sm bg-white/50"
              >
                Enterprise Capabilities
              </Link>
            </motion.div>
          </motion.div>

          {/* Credibility Bullets */}
          <motion.div
            custom={2}
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 w-full max-w-3xl"
          >
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/40 backdrop-blur-sm border border-white/20">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
              </div>
              <div>
                <p className="font-semibold text-sm text-slate-900">SOC 2 & GDPR Compliant</p>
                <p className="text-xs text-slate-600 mt-1">Audit trails, data isolation, encryption</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/40 backdrop-blur-sm border border-white/20">
              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-sm text-slate-900">Multi-Million Scale Operations</p>
                <p className="text-xs text-slate-600 mt-1">100+ enterprise clients, 1M+ datasets</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/40 backdrop-blur-sm border border-white/20">
              <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-sm text-slate-900">Human-in-the-Loop Governance</p>
                <p className="text-xs text-slate-600 mt-1">Expert review, bias detection, alignment</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
