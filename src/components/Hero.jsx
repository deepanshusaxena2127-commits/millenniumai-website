import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ---------- Reusable Brand Dot (Intentional Color Variety) ---------- */
const BrandDot = ({ tone = 'blue' }) => {
  const tones = {
    green: 'bg-emerald-500/20 text-emerald-600',
    blue: 'bg-blue-500/20 text-blue-600',
    purple: 'bg-purple-500/20 text-purple-600',
  };

  return (
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${tones[tone]}`}
    >
      <div className="w-2.5 h-2.5 rounded-full bg-current" />
    </div>
  );
};

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
      {/* ---------- Background ---------- */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at 20% 30%, rgba(216,180,254,.4) 0%, rgba(216,180,254,.15) 35%, transparent 70%),
              radial-gradient(ellipse 900px 700px at 80% 20%, rgba(191,219,254,.3) 0%, rgba(191,219,254,.1) 40%, transparent 75%),
              radial-gradient(ellipse 850px 650px at 50% 100%, rgba(251,207,232,.35) 0%, rgba(251,207,232,.1) 45%, transparent 80%),
              linear-gradient(135deg, #f8f5fc 0%, #f5f8ff 50%, #fff5f9 100%)
            `,
          }}
        />

        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,.2), transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,.15), transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <motion.div
          className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,.15), transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ y: [0, -40, 0], x: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="absolute inset-0 backdrop-blur-sm opacity-40" />

      {/* ---------- Content ---------- */}
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-300/50 shadow-sm"
          >
            <span className="text-sm font-semibold text-slate-700">
              Production AI Operating System
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Infrastructure for Production AI{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                in Regulated Environments
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-lg blur-md -z-10 opacity-[0.12]"
                animate={{ opacity: [0.1, 0.16, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={subtextVariants}
            className="text-lg md:text-xl text-slate-700 max-w-2xl"
          >
            An operating system that structures raw data into production-grade
            datasets with complete governance, auditability, and traceability.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
  {/* PRIMARY CTA */}
  <motion.div custom={0} variants={ctaVariants}>
    <Link
      to="/contact"
      className="
        inline-flex items-center justify-center
        h-12
        px-8
        rounded-lg
        bg-blue-600 text-white
        font-semibold
        leading-none
        shadow-lg
        hover:bg-blue-700 hover:shadow-xl
        transition
      "
    >
      Get Started
      <ArrowRight className="w-5 h-5 ml-2 shrink-0" />
    </Link>
  </motion.div>

  {/* SECONDARY CTA */}
  <motion.div custom={1} variants={ctaVariants}>
    <Link
      to="/solutions"
      className="
        inline-flex items-center justify-center
        h-12
        px-8
        rounded-lg
        border-2 border-slate-300
        font-semibold
        leading-none
        text-slate-800
        bg-white/50
        hover:border-blue-600 hover:bg-blue-50
        transition
      "
    >
      Enterprise Capabilities
    </Link>
  </motion.div>
</motion.div>
          {/* Credibility Cards */}
          <motion.div
            custom={2}
            variants={ctaVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 w-full max-w-3xl"
          >
            <div className="flex gap-3 p-4 rounded-lg bg-white/40 backdrop-blur-sm border border-white/20">
              <BrandDot tone="green" />
              <div>
                <p className="font-semibold text-sm">SOC 2 & GDPR Compliant</p>
                <p className="text-xs text-slate-600 mt-1">
                  Audit trails, data isolation, encryption
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 rounded-lg bg-white/40 backdrop-blur-sm border border-white/20">
              <BrandDot tone="blue" />
              <div>
                <p className="font-semibold text-sm">
                  Multi-Million Scale Operations
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  100+ enterprise clients, 1M+ datasets
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 rounded-lg bg-white/40 backdrop-blur-sm border border-white/20">
              <BrandDot tone="purple" />
              <div>
                <p className="font-semibold text-sm">
                  Human-in-the-Loop Governance
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Expert review, bias detection, alignment
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
