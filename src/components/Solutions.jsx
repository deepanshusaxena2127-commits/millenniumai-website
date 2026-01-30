import React from 'react';
import { motion } from 'framer-motion';
import SolutionCard from '@/components/SolutionCard';
import {
  Heart,
  TrendingUp,
  ShoppingCart,
  Factory,
  Car,
  Building2,
} from 'lucide-react';

const solutionsData = [
  {
    icon: Heart,
    industry: 'Healthcare',
    useCases: [
      'Medical image analysis and diagnostic assistance',
      'Patient data management and predictive analytics',
      'Drug discovery and clinical trial optimization',
    ],
    outcomes: ['30% faster diagnosis', 'Improved patient outcomes', 'HIPAA compliant'],
  },
  {
    icon: TrendingUp,
    industry: 'Finance',
    useCases: [
      'Fraud detection and risk assessment',
      'Algorithmic trading and market prediction',
      'Customer sentiment analysis and personalization',
    ],
    outcomes: ['95% fraud detection rate', 'Real-time insights', 'Regulatory compliance'],
  },
  {
    icon: ShoppingCart,
    industry: 'Retail',
    useCases: [
      'Demand forecasting and inventory optimization',
      'Personalized product recommendations',
      'Customer behavior analysis and churn prediction',
    ],
    outcomes: ['25% increase in sales', 'Reduced inventory costs', 'Enhanced CX'],
  },
  {
    icon: Factory,
    industry: 'Manufacturing',
    useCases: [
      'Predictive maintenance and quality control',
      'Supply chain optimization',
      'Defect detection with computer vision',
    ],
    outcomes: ['40% less downtime', 'Cost reduction', 'Zero-defect production'],
  },
  {
    icon: Car,
    industry: 'Automotive',
    useCases: [
      'Autonomous vehicle perception systems',
      'Driver assistance and safety features',
      'Vehicle diagnostics and fleet management',
    ],
    outcomes: ['Enhanced safety', 'Reduced accidents', 'Optimized operations'],
  },
  {
    icon: Building2,
    industry: 'Government/Public Sector',
    useCases: [
      'Smart city infrastructure and traffic management',
      'Public safety and surveillance systems',
      'Citizen services automation and optimization',
    ],
    outcomes: ['Improved efficiency', 'Cost savings', 'Better citizen services'],
  },
];

const Solutions = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Industry-Specific{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Tailored AI solutions designed for your industry's unique challenges and opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution, index) => (
            <SolutionCard key={solution.industry} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;