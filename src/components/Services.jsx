import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import {
  Database,
  Sparkles,
  Eye,
  MessageSquare,
  Mic,
  Server,
  Code,
} from 'lucide-react';

const servicesData = [
  {
    icon: Database,
    title: 'AI/ML Data Annotation',
    description:
      'High-quality, production-ready labeled data to support reliable model training and evaluation across AI use cases.',
    benefits: [
      '99.5%+ QA accuracy',
      'Scalable annotation workforce',
      'Multi-domain expertise',
    ],
  },
  {
    icon: Sparkles,
    title: 'Generative AI & LLM Services',
    description:
      'LLM fine-tuning, prompt engineering, and evaluation workflows designed to align models with business objectives.',
    benefits: [
      'LLM fine-tuning & customization',
      'Enterprise system integration',
      'Human-in-the-loop validation',
    ],
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description:
      'Image and video annotation and analysis for object detection, tracking, segmentation, and scene understanding.',
    benefits: [
      'Production-scale pipelines',
      'Edge & cloud deployment support',
      'Industry-specific CV models',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description:
      'Text data annotation and NLP workflows including classification, entity recognition, and semantic analysis.',
    benefits: [
      'Multilingual datasets',
      'Domain-adapted annotation',
      'Context-aware labeling',
    ],
  },
  {
    icon: Mic,
    title: 'Speech AI',
    description:
      'Speech and audio data services including transcription, intent tagging, and voice analytics.',
    benefits: [
      'Accent & language coverage',
      'Low-latency workflows',
      'Custom speech datasets',
    ],
  },
  {
    icon: Server,
    title: 'Data Engineering',
    description:
      'Robust data pipelines and infrastructure to support AI training, validation, and deployment at scale.',
    benefits: [
      'Cloud-native architectures',
      'Real-time & batch processing',
      'Data quality monitoring',
    ],
  },
  {
    icon: Code,
    title: 'Digital Development Services',
    description:
      'End-to-end development of AI-powered web and enterprise applications integrated with ML workflows.',
    benefits: [
      'Full-stack development',
      'Agile delivery model',
      'Deployment & integration support',
    ],
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Our <span className="text-blue-600">Services</span>
          </motion.h2>
          <p className="text-lg text-slate-600">
            Enterprise-focused AI data, engineering, and development services
            designed to support scalable and production-ready AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isLastCard={index === servicesData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
