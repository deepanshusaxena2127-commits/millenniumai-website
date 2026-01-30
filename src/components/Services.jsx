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
    description: 'High-quality labeled data for training your machine learning models with precision and consistency.',
    benefits: ['99.5% accuracy', 'Scalable workforce', 'Multi-domain expertise'],
  },
  {
    icon: Sparkles,
    title: 'Generative AI Solutions',
    description: 'Custom LLMs, prompt engineering, and AI content generation tailored to your business needs.',
    benefits: ['Custom model training', 'Enterprise integration', 'Ethical AI practices'],
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Advanced image and video analysis for object detection, recognition, and scene understanding.',
    benefits: ['Real-time processing', 'Edge deployment', 'Industry-specific models'],
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Transform text data into actionable insights with sentiment analysis, entity recognition, and more.',
    benefits: ['Multilingual support', 'Domain adaptation', 'Context-aware processing'],
  },
  {
    icon: Mic,
    title: 'Speech AI',
    description: 'Speech recognition, synthesis, and voice analytics for seamless human-machine interaction.',
    benefits: ['Accent adaptation', 'Low latency', 'Custom voice models'],
  },
  {
    icon: Server,
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure to power your AI/ML initiatives at scale.',
    benefits: ['Cloud-native solutions', 'Real-time processing', 'Data quality assurance'],
  },
  {
    icon: Code,
    title: 'Digital Development Services',
    description: 'End-to-end software development from AI-powered web apps to enterprise solutions.',
    benefits: ['Full-stack expertise', 'Agile methodology', 'Continuous deployment'],
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a2e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-300">
            Comprehensive AI/ML solutions designed to accelerate your digital transformation journey
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