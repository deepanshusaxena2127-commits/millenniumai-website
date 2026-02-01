import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DynamicPageTemplate from '@/components/DynamicPageTemplate';
import { insightsContent } from '@/data/insightsContent';

/**
 * Dynamic Insights Page
 * Route: /insights/:slug
 *
 * Renders:
 * - Insights Hub
 * - Case Studies
 * - Blog
 *
 * Uses the shared DynamicPageTemplate
 * Falls back safely to /insights if slug is invalid
 */

const InsightsPage = () => {
  const { slug } = useParams();
  const content = insightsContent[slug];

  if (!content) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <DynamicPageTemplate
      {...content}
      type="insight"
      ctaText="Talk to an AI Expert"
    />
  );
};

export default InsightsPage;
