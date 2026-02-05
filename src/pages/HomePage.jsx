import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/SectionDivider';
import MillenniumAiProductionSystem from '@/components/MillenniumAiProductionSystem';
import PremiumServicesShowcase from '@/components/PremiumServicesShowcase';
import EnterpriseGradeDeliveryQualityGovernance from '@/components/EnterpriseGradeDeliveryQualityGovernance';
import PremiumValueProp from '@/components/PremiumValueProp';
import Solutions from '@/components/Solutions';
import PremiumTestimonials from '@/components/PremiumTestimonials';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>MillenniumAi | Enterprise AI Data & Generative AI Services</title>
        <meta
          name="description"
          content="Production-ready AI data annotation, Generative AI, computer vision, NLP, and ML engineering services for enterprise organizations."
        />
      </Helmet>

      <main className="bg-[#F2F0EF] text-slate-900 overflow-hidden">
        {/* HERO SECTION - Premium entrance */}
        <Hero />

        {/* DIVIDER */}
        <SectionDivider variant="gradient" />

        {/* PRODUCTION SYSTEM - System architecture flow */}
        <MillenniumAiProductionSystem />

        {/* DIVIDER */}
        <SectionDivider variant="gradient" />

        {/* CORE AI CAPABILITIES - System capabilities, not services */}
        <PremiumServicesShowcase />

        {/* DIVIDER */}
        <SectionDivider variant="gradient" />

        {/* ENTERPRISE-GRADE DELIVERY, QUALITY & GOVERNANCE - Merged infrastructure layer */}
        <EnterpriseGradeDeliveryQualityGovernance />

        {/* DIVIDER */}
        <SectionDivider variant="gradient" />

        {/* VALUE PROPOSITION - Why choose us */}
        <PremiumValueProp />

        {/* DIVIDER */}
        <SectionDivider variant="gradient" />

        {/* INDUSTRY SOLUTIONS - Vertical coverage */}
        <Solutions />

        {/* DIVIDER */}
        <SectionDivider variant="gradient" />

        {/* SOCIAL PROOF - Testimonials and trust */}
        <PremiumTestimonials />
      </main>
    </>
  );
};

export default HomePage;
