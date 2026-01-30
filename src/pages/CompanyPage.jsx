import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DynamicPageTemplate from '@/components/DynamicPageTemplate';
import { companyContent } from '@/data/companyContent';

const CompanyPage = () => {
  const { slug } = useParams();
  const content = companyContent[slug];

  if (!content) {
    return <Navigate to="/about" replace />;
  }

  return (
    <DynamicPageTemplate
      {...content}
      type="company"
    />
  );
};

export default CompanyPage;