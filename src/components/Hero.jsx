import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* ===== Animated background grid ===== */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.25]" />

      {/* ===== Animated gradient orbs ===== */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-purple-200/40 blur-3xl"
      />

      {/* ===== Content ===== */}
      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-28">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-5 text-sm font-semibold tracking-widest uppercase text-blue-600"
        >
          Enterprise-Grade AI
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Enterprise-Grade AI{" "}
          <span className="relative inline-block text-blue-600">
            Data & Engineering
            <span className="absolute -bottom-2 left-0 h-1 w-full bg-blue-200 rounded-full" />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-center text-lg text-slate-600 leading-relaxed"
        >
          Reliable training data, scalable AI pipelines, and production-ready
          execution for Generative AI, Computer Vision, and NLP systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-4 text-base font-semibold text-white shadow-xl hover:bg-blue-500 transition"
          >
            Talk to an Expert
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-10 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { value: "99.5%", label: "QA Accuracy" },
            { value: "100+", label: "Enterprise Engagements" },
            { value: "24/7", label: "Global Delivery" },
            { value: "30K+", label: "Assets / Month" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-sm hover:shadow-md transition"
            >
              <p className="text-3xl font-bold text-slate-900">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
