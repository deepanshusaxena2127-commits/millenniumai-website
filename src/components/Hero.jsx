import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      
      {/* subtle background accents */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-purple-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-28 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600"
        >
          Enterprise-Grade AI
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Enterprise-Grade AI{" "}
          <span className="relative inline-block text-blue-600">
            Data & Engineering
            <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-blue-200/70" />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600"
        >
          Reliable training data, scalable AI pipelines, and production-ready
          execution for Generative AI, Computer Vision, and NLP systems.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-9 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition"
          >
            Talk to an Expert
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-9 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            { value: "99.5%", label: "QA Accuracy" },
            { value: "100+", label: "Enterprise Engagements" },
            { value: "24/7", label: "Global Delivery" },
            { value: "30K+", label: "Assets / Month" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white px-6 py-6 shadow-sm"
            >
              <p className="text-3xl font-bold text-slate-900">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
