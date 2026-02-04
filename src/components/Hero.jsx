import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* GRADIENT ORBS */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-5 text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Enterprise-Grade AI
          </span>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-slate-900">
            Enterprise-Grade AI{" "}
            <span className="block text-blue-600">Data & Engineering</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-slate-600">
            Reliable training data, scalable AI pipelines, and production-ready
            execution for Generative AI, Computer Vision, and NLP systems.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 transition"
            >
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/solutions"
              className="inline-flex items-center px-8 py-4 rounded-xl border border-slate-300 font-semibold text-slate-800 hover:bg-slate-50 transition"
            >
              Explore Services
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              ["99.5%", "QA Accuracy"],
              ["100+", "Enterprise Engagements"],
              ["24/7", "Global Delivery"],
              ["30K+", "Assets / Month"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-2xl font-bold text-slate-900">{value}</p>
                <p className="text-sm text-slate-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT VISUAL SYSTEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[420px] rounded-3xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-slate-200 shadow-xl backdrop-blur">

            {/* FLOATING NODES */}
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-3 h-3 rounded-full bg-blue-600"
                style={{
                  top: `${20 + i * 10}%`,
                  left: `${15 + i * 12}%`,
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
