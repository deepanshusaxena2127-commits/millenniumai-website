import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DynamicPageTemplate from '@/components/DynamicPageTemplate';
import { industriesContent } from '@/data/industriesContent';

const IndustryPage = () => {
  const { slug } = useParams();
  const content = industriesContent[slug];

  if (!content) {
    return <Navigate to="/solutions" replace />; // Redirect to solutions as a fallback
  }

  return (
    <DynamicPageTemplate
      {...content}
      type="industry"
    />
  );
};

export default IndustryPage;