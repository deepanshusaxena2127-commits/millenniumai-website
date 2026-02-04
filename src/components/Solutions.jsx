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
      'Medical image annotation and diagnostic support workflows',
      'Patient data analysis and predictive modeling',
      'Drug discovery and clinical research data preparation',
    ],
    outcomes: [
      'Faster diagnostic workflows',
      'Improved clinical insights',
      'Compliance-aware data handling',
    ],
  },
  {
    icon: TrendingUp,
    industry: 'Finance',
    useCases: [
      'Fraud detection and risk modeling datasets',
      'Market analysis and forecasting support',
      'Customer sentiment and behavioral analysis',
    ],
    outcomes: [
      'Improved fraud detection accuracy',
      'Real-time analytical insights',
      'Regulatory-aligned workflows',
    ],
  },
  {
    icon: ShoppingCart,
    industry: 'Retail',
    useCases: [
      'Demand forecasting and inventory optimization',
      'Personalized recommendation systems',
      'Customer behavior and churn analysis',
    ],
    outcomes: [
      'Revenue optimization opportunities',
      'Reduced inventory inefficiencies',
      'Enhanced customer experience',
    ],
  },
  {
    icon: Factory,
    industry: 'Manufacturing',
    useCases: [
      'Predictive maintenance and quality monitoring',
      'Supply chain data optimization',
      'Computer vision–based defect detection',
    ],
    outcomes: [
      'Reduced operational downtime',
      'Improved production efficiency',
      'Enhanced quality control',
    ],
  },
  {
    icon: Car,
    industry: 'Automotive',
    useCases: [
      'Autonomous and ADAS perception datasets',
      'Driver assistance and safety analytics',
      'Vehicle diagnostics and fleet intelligence',
    ],
    outcomes: [
      'Enhanced vehicle safety',
      'Improved operational efficiency',
      'Scalable AI deployment support',
    ],
  },
  {
    icon: Building2,
    industry: 'Government & Public Sector',
    useCases: [
      'Smart city data platforms and traffic analytics',
      'Public safety and surveillance data processing',
      'Citizen service automation and optimization',
    ],
    outcomes: [
      'Operational efficiency improvements',
      'Data-driven decision support',
      'Secure and privacy-aware systems',
    ],
  },
];

const Solutions = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Industry-Specific{' '}
            <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-lg text-slate-600">
            AI solutions tailored to industry-specific data, operational,
            and regulatory requirements.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution, index) => (
            <SolutionCard
              key={solution.industry}
              solution={solution}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;
