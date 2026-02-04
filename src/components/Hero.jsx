	pcimport { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-28 flex items-center">
      
      {/* ===============================
          Background Structure
         =============================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left glow */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-200/40 blur-3xl" />
        
        {/* Right glow */}
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-purple-200/40 blur-3xl" />

        {/* Soft grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ===============================
          Content
         =============================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground"
          >
            Enterprise-Grade AI
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900"
          >
            <span className="block">Enterprise-Grade AI</span>
            <span className="block text-gradient-hero">Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed"
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
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 flex flex-col sm:flex-row gap-5"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-xl hover:opacity-90 transition"
            >
              Talk to an Expert
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-10 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-12 w-full max-w-5xl"
          >
            <div>
              <p className="text-4xl font-bold text-slate-900">99.5%</p>
              <p className="mt-2 text-sm text-muted-foreground">QA Accuracy</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">100+</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Enterprise Engagements
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">24/7</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Global Delivery
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">30K+</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Assets Processed / Month
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ===============================
          Bottom Fade (section transition)
         =============================== */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
