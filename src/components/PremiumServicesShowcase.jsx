import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Database,
  Sparkles,
  Eye,
  MessageSquare,
  Mic,
  Code,
  ArrowRight,
  Check,
} from 'lucide-react';

const PremiumServicesShowcase = () => {
  const [activeService, setActiveService] = useState(0);

  const servicesData = [
    {
      route: '/solutions/content-moderation',
      icon: Database,
      title: 'Content Moderation',
      description:
        'Comprehensive content moderation pipelines for safe, compliant user-generated content.',
      highlights: [
        'Human-in-the-loop moderation workflows',
        'Multilingual policy enforcement',
        'Safety taxonomy & escalation handling',
        'High-throughput review pipelines',
      ],
    },
    {
      route: '/solutions/generative-ai',
      icon: Sparkles,
      title: 'Generative AI & LLM Services',
      description:
        'LLM fine-tuning, RLHF, and evaluation for enterprise use cases.',
      highlights: [
        'Custom fine-tuning workflows',
        'RLHF datasets & evaluations',
        'Prompt optimization',
        'Enterprise integrations',
      ],
    },
    {
      route: '/solutions/computer-vision',
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video annotation at production scale.',
      highlights: [
        'Object detection & tracking',
        'Semantic segmentation',
        'Scene understanding',
        'Production pipelines',
      ],
    },
    {
      route: '/solutions/nlp',
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Text annotation workflows for NLP systems.',
      highlights: [
        'Entity recognition',
        'Text classification',
        'Multilingual datasets',
        'Domain-specific labeling',
      ],
    },
    {
      route: '/solutions/speech-transcription',
      icon: Mic,
      title: 'Speech Transcription',
      description:
        'High-accuracy speech-to-text datasets with diarization support.',
      highlights: [
        'Accent & noise robustness',
        'Speaker diarization',
        'Domain vocabulary tuning',
        'Quality scoring',
      ],
    },
  ];

  const activeServiceData = servicesData[activeService];

  return (
    <section className="py-20 md:py-28 bg-[#F2F0EF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className="text-center mb-16"
>
  {/* Badge */}
  <motion.span
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -2 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="
      inline-block
      px-4 py-1.5 mb-4
      rounded-full
      bg-slate-100
      text-sm font-semibold
      text-slate-700
    "
  >
    Our Capabilities
  </motion.span>

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -3 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="
      text-4xl md:text-5xl
      font-extrabold
      text-slate-900
      mb-4
      tracking-tight
    "
  >
    Core AI Capabilities
  </motion.h2>

  {/* Subtext */}
  <motion.p
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -2 }}
    transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="
      text-lg
      text-slate-600
      max-w-2xl
      mx-auto
    "
  >
    System capabilities that structure and validate data for any AI use case.
  </motion.p>
</motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT — Service Selector */}
          <div className="space-y-3">
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              const isActive = idx === activeService;

              return (
                <motion.button
                  key={service.title}
                  onClick={() => setActiveService(idx)}
                  whileHover={{ x: 2 }}
                  className={`
                    w-full text-left p-5 rounded-xl transition-all
                    bg-[#F2F0EF]
                    border ${isActive ? 'border-blue-400/50' : 'border-slate-200'}
                    ${isActive ? 'shadow-[0_0_20px_rgba(59,130,246,0.25)]' : ''}
                    hover:border-blue-400/40
                    hover:shadow-[0_0_14px_rgba(59,130,246,0.18)]
                  `}
                >
                  <div className="flex gap-4">
                    <Icon className="w-6 h-6 mt-1 text-slate-700" />
                    <div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -1 }}
                        className="text-sm md:text-base font-semibold text-slate-900"
                      >
                        {service.title}
                      </motion.h3>
                      <p className="text-xs text-slate-600 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT — Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="
                  relative
                  p-8 md:p-10
                  rounded-2xl
                  bg-[#F2F0EF]
                  border border-blue-400/40
                  shadow-[0_0_28px_rgba(59,130,246,0.25)]
                "
              >
                {/* Soft neon halo */}
                <span className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl -z-10" />

                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-slate-200 flex items-center justify-center mb-4">
                    {React.createElement(activeServiceData.icon, {
                      className: 'w-7 h-7 text-slate-700',
                    })}
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl font-semibold text-slate-900 mb-3"
                  >
                    {activeServiceData.title}
                  </motion.h3>

                  <p className="text-slate-700 max-w-lg">
                    {activeServiceData.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {activeServiceData.highlights.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-sm text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to={activeServiceData.route}
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3
                    bg-slate-900
                    text-white
                    rounded-lg
                    hover:shadow-[0_0_18px_rgba(59,130,246,0.35)]
                    transition
                  "
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumServicesShowcase;
