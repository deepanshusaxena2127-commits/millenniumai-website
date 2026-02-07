import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
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
    <section className="relative overflow-hidden pt-16 pb-28 md:pt-32 md:pb-40">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at 20% 30%, rgba(216,180,254,0.4) 0%, rgba(216,180,254,0.15) 35%, transparent 70%),
              radial-gradient(ellipse 900px 700px at 80% 20%, rgba(191,219,254,0.3) 0%, rgba(191,219,254,0.1) 40%, transparent 75%),
              radial-gradient(ellipse 850px 650px at 50% 100%, rgba(251,207,232,0.35) 0%, rgba(251,207,232,0.1) 45%, transparent 80%),
              linear-gradient(135deg, #f8f5fc 0%, #f5f8ff 50%, #fff5f9 100%)
            `,
          }}
        />
      </div>

      <div className="absolute inset-0 backdrop-blur-sm opacity-40" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center space-y-8"
        >
          {/* BADGE */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-300/50 shadow-sm"
          >
            <span className="text-sm font-semibold text-slate-700">
              Production AI Operating System
            </span>
          </motion.div>

          {/* HEADLINE (MOBILE FIXED) */}
          <motion.h1
            className="
              text-3xl sm:text-4xl md:text-6xl
              font-extrabold tracking-tight
              leading-tight
              whitespace-normal md:whitespace-normal
            "
          >
            Infrastructure for Production AI{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                in Regulated Environments
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-lg blur-md -z-10 opacity-[0.12]"
                animate={{ opacity: [0.1, 0.16, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            variants={subtextVariants}
            className="
              text-base sm:text-lg md:text-xl
              text-slate-700
              max-w-2xl
              leading-relaxed
            "
          >
            An operating system that structures raw data into production-grade datasets
            with complete governance, auditability, and traceability built in.
          </motion.p>

          {/* CTA */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full">
            <motion.div custom={0} variants={ctaVariants}>
              <Link
                to="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div custom={1} variants={ctaVariants}>
              <Link
                to="/solutions"
                className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 rounded-lg border-2 border-slate-300 font-semibold text-slate-800 hover:border-blue-600 hover:bg-blue-50 transition bg-white/50"
              >
                Enterprise Capabilities
              </Link>
            </motion.div>
          </motion.div>

          {/* TRUST GRID (MOBILE SPACING FIX) */}
          <motion.div
            custom={2}
            variants={ctaVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 pt-8 w-full max-w-3xl"
          >
            {[
              {
                title: 'SOC 2 & GDPR Compliant',
                desc: 'Audit trails, data isolation, encryption',
                color: 'green',
              },
              {
                title: 'Multi-Million Scale Operations',
                desc: '100+ enterprise clients, 1M+ datasets',
                color: 'blue',
              },
              {
                title: 'Human-in-the-Loop Governance',
                desc: 'Expert review, bias detection, alignment',
                color: 'purple',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/40 backdrop-blur-sm border border-white/20"
              >
                <div className={`w-5 h-5 rounded-full bg-${item.color}-500/20 flex items-center justify-center mt-0.5`}>
                  <div className={`w-2.5 h-2.5 rounded-full bg-${item.color}-600`} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
