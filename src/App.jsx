import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Lazy load core pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const SolutionsPage = lazy(() => import('@/pages/SolutionsPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));

// Lazy load dynamic page components
const SolutionPage = lazy(() => import('@/pages/SolutionPage'));
const IndustryPage = lazy(() => import('@/pages/IndustryPage'));
const CompanyPage = lazy(() => import('@/pages/CompanyPage'));
const InsightsPage = lazy(() => import('@/pages/InsightsPage'));

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-hidden bg-[#f8f9fa] text-slate-900">
        <Navigation />
        <main>
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-blue-600">Loading...</div>}>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Dynamic Routes */}
              <Route path="/solutions/:slug" element={<SolutionPage />} />
              <Route path="/industries/:slug" element={<IndustryPage />} />
              <Route path="/company/:slug" element={<CompanyPage />} />
              <Route path="/insights/:slug" element={<InsightsPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;