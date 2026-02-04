import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600"
        >
          Enterprise-Grade AI
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Enterprise-Grade AI{" "}
          <span className="text-blue-600">Data & Engineering</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-slate-600"
        >
          Reliable training data, scalable AI pipelines, and production-ready
          execution for Generative AI, Computer Vision, and NLP systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-blue-500 transition"
          >
            Talk to an Expert
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-8 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: "99.5%", label: "QA Accuracy" },
            { value: "100+", label: "Enterprise Engagements" },
            { value: "24/7", label: "Global Delivery" },
            { value: "30K+", label: "Assets / Month" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-slate-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
