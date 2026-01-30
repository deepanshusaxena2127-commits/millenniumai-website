import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DynamicPageTemplate from '@/components/DynamicPageTemplate';
import { solutionsContent } from '@/data/solutionsContent';

const SolutionPage = () => {
  const { slug } = useParams();
  const content = solutionsContent[slug];

  if (!content) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <DynamicPageTemplate
      {...content}
      type="solution"
    />
  );
};

export default SolutionPage;