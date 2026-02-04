import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    /**
     * pt-28 reserves space for the fixed header
     * so nothing visually overlaps it
     */
    <section className="relative overflow-hidden bg-background pt-28">

      {/* Background gradients (CLIPPED BELOW HEADER) */}
      <div className="pointer-events-none absolute inset-x-0 top-28 bottom-0">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-purple-200/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-center">
        
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground"
        >
          Enterprise-Grade AI
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl"
        >
          <span className="block">Enterprise-Grade AI</span>
          <span className="block text-gradient-hero">Solutions</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-slate-600"
        >
          MillenniumAI delivers enterprise-grade data and AI engineering services
          that enable reliable model training and production deployment. From
          Generative AI and LLMs to Computer Vision and NLP, we support AI teams
          with high-quality, scalable training data and execution discipline.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
          >
            Talk to an Expert
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-8 text-center sm:grid-cols-4"
        >
          <div>
            <p className="text-3xl font-bold text-slate-900">99.5%</p>
            <p className="mt-1 text-sm text-muted-foreground">QA Accuracy</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">100+</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Enterprise Engagements
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">24/7</p>
            <p className="mt-1 text-sm text-muted-foreground">Global Delivery</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">30K+</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Assets Processed / Month
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
