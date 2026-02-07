import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '@/components/Hero';
import MillenniumAiProductionSystem from '@/components/MillenniumAiProductionSystem';
import PremiumServicesShowcase from '@/components/PremiumServicesShowcase';
import EnterpriseEngagementModels from '@/components/EnterpriseEngagementModels';
import PremiumValueProp from '@/components/PremiumValueProp';
import Solutions from '@/components/Solutions';
import PremiumTestimonials from '@/components/PremiumTestimonials';

const HomePage = () => {
  return (
    <>
      {/* =========================
          SEO / Metadata
         ========================= */}
      <Helmet>
        <title>MillenniumAi | Production AI Data & Enterprise AI Services</title>
        <meta
          name="description"
          content="MillenniumAi provides production-grade AI data pipelines, Generative AI services, and governed AI infrastructure for enterprises operating in regulated environments."
        />
      </Helmet>

      {/* =========================
          PAGE WRAPPER
         ========================= */}
      <main className="bg-[#F2F0EF] text-slate-900 overflow-hidden">
        {/* HERO */}
        <Hero />

        {/* SYSTEM */}
        <MillenniumAiProductionSystem />

        {/* SERVICES */}
        <PremiumServicesShowcase />

        {/* ENGAGEMENT MODELS */}
        <EnterpriseEngagementModels />

        {/* VALUE PROP */}
        <PremiumValueProp />

        {/* SOLUTIONS */}
        <Solutions />

        {/* TESTIMONIALS */}
        <PremiumTestimonials />
      </main>
    </>
  );
};

export default HomePage;
