import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DynamicPageTemplate from '@/components/DynamicPageTemplate';
import { insightsContent } from '@/data/insightsContent';

const InsightsPage = () => {
  const { slug } = useParams();
  const content = insightsContent[slug];

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <DynamicPageTemplate
      {...content}
      type="insight"
    />
  );
};

export default InsightsPage;