import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '@/components/Hero';
import SectionDivider from '@/components/SectionDivider';
import MillenniumAiProductionSystem from '@/components/MillenniumAiProductionSystem';
import PremiumServicesShowcase from '@/components/PremiumServicesShowcase';
import EnterpriseEngagementModels from '@/components/EnterpriseEngagementModels';
import PremiumValueProp from '@/components/PremiumValueProp';
import Solutions from '@/components/Solutions';
import PremiumTestimonials from '@/components/PremiumTestimonials';

const HomePage = () => {
  return (
    <>
      {/* SEO / Metadata */}
      <Helmet>
        <title>MillenniumAi | Production AI Data & Enterprise AI Services</title>
        <meta
          name="description"
          content="MillenniumAi provides production-grade AI data pipelines, Generative AI services, and governed AI infrastructure for enterprises operating in regulated environments."
        />
      </Helmet>

      <main className="bg-[#F2F0EF] text-slate-900 overflow-hidden">
        {/* =========================
            HERO — PRIMARY POSITIONING
           ========================= */}
        <Hero />

        <SectionDivider variant="gradient" />

        {/* =========================
            SYSTEM — HOW PRODUCTION AI RUNS
           ========================= */}
        <MillenniumAiProductionSystem />

        <SectionDivider variant="gradient" />

        {/* =========================
            CAPABILITIES — WHAT WE DO
           ========================= */}
        <PremiumServicesShowcase />

        <SectionDivider variant="gradient" />

        {/* =========================
            ENGAGEMENT MODELS — HOW WE WORK
           (REPLACES DELIVERY/SCALE DUPLICATION)
           ========================= */}
        <EnterpriseEngagementModels />

        <SectionDivider variant="gradient" />

        {/* =========================
            VALUE — WHY MILLENNIUMAI
           ========================= */}
        <PremiumValueProp />

        <SectionDivider variant="gradient" />

        {/* =========================
            INDUSTRIES — WHERE WE OPERATE
           ========================= */}
        <Solutions />

        <SectionDivider variant="gradient" />

        {/* =========================
            TRUST — SOCIAL PROOF
           ========================= */}
        <PremiumTestimonials />
      </main>
    </>
  );
};

export default HomePage;
