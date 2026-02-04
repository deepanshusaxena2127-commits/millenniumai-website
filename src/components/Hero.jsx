import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0b1020] to-[#1a0a2e]" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center text-white">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-400"
        >
          Enterprise-Grade AI
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          <span className="block">Enterprise-Grade AI</span>
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Solutions
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-lg md:text-xl text-gray-300"
        >
          MillenniumAI delivers enterprise-grade data and AI engineering services
          that enable reliable model training and production deployment. From
          Generative AI and LLMs to Computer Vision and NLP, we support AI teams
          with high-quality, scalable training data and execution discipline.
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
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-10 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition"
          >
            Talk to an Expert
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-10 py-4 text-base font-semibold text-white hover:bg-white/10 transition"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-12 max-w-5xl mx-auto"
        >
          {[
            { value: "99.5%", label: "QA Accuracy" },
            { value: "100+", label: "Enterprise Engagements" },
            { value: "24/7", label: "Global Delivery" },
            { value: "30K+", label: "Assets / Month" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
