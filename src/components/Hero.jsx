import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">

      {/* Subtle ambient light gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-purple-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500"
        >
          Enterprise-Grade AI
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-5xl md:text-6xl font-extrabold leading-tight text-slate-900"
        >
          <span className="block">Enterprise-Grade AI</span>
          <span className="block text-gradient-hero">Solutions</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-lg text-slate-600"
        >
          MillenniumAI delivers enterprise-grade data and AI engineering services
          that enable reliable model training and production deployment.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-10 py-4 text-base font-semibold text-white hover:bg-blue-500 transition"
          >
            Talk to an Expert
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-full border px-10 py-4 text-base font-semibold hover:bg-slate-50 transition"
          >
            Explore Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
