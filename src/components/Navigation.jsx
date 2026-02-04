import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navData = {
  solutions: {
    title: 'Solutions',
    path: '/solutions',
    items: [
      { name: 'Generative AI', path: '/solutions/generative-ai', desc: 'LLM Training & RLHF' },
      { name: 'NLP', path: '/solutions/nlp', desc: 'Text Analysis & Extraction' },
      { name: 'Computer Vision', path: '/solutions/computer-vision', desc: 'Image & Video Annotation' },
      { name: 'Content Moderation', path: '/solutions/content-moderation', desc: 'Trust & Safety at Scale' },
      { name: 'Document Processing', path: '/solutions/document-processing', desc: 'OCR & Data Extraction' },
      { name: 'Speech Transcription', path: '/solutions/speech-transcription', desc: 'Audio Intelligence' },
      { name: 'Full-Stack Development', path: '/solutions/full-stack-development', desc: 'Enterprise Engineering' },
    ],
  },
  industries: {
    title: 'Industries',
    path: '/industries',
    items: [
      { name: 'Healthcare', path: '/industries/healthcare-life-sciences', desc: 'Clinical AI & Medical Data' },
      { name: 'Autonomous Mobility', path: '/industries/autonomous-mobility', desc: 'ADAS & Sensor Intelligence' },
      { name: 'Fintech', path: '/industries/fintech', desc: 'Fraud & Risk Analytics' },
      { name: 'Insurance', path: '/industries/insurance-analytics', desc: 'Claims & Underwriting AI' },
      { name: 'Retail & Tech', path: '/industries/retail-consumer-tech', desc: 'Personalization & Demand AI' },
      { name: 'Logistics', path: '/industries/logistics-supply-chain', desc: 'Routing & Supply Forecasting' },
      { name: 'Robotics', path: '/industries/robotics-automation', desc: 'Vision & Autonomous Control' },
      { name: 'Security', path: '/industries/security-surveillance-ai', desc: 'Threat Detection & Video AI' },
      { name: 'Agriculture', path: '/industries/smart-agriculture', desc: 'Precision Farming AI' },
      { name: 'Real Estate', path: '/industries/real-estate-technology', desc: 'Property & Market Analytics' },
      { name: 'Geospatial', path: '/industries/geospatial-intelligence', desc: 'Satellite & Spatial Data' },
      { name: 'Digital Commerce', path: '/industries/digital-commerce', desc: 'Search & Recommendation AI' },
    ],
  },
  company: {
    title: 'Company',
    path: '/company',
    items: [
      { name: 'Inside MillenniumAi', path: '/company/inside-millenniumai', desc: 'Who We Are & How We Operate' },
      { name: 'Leadership', path: '/company/leadership-advisors', desc: 'Executive Team & Advisors' },
      { name: 'Global Delivery', path: '/company/global-delivery-model', desc: 'Scalable Worldwide Operations' },
      { name: 'Security & Trust', path: '/company/security-data-protection', desc: 'Enterprise Security & Compliance' },
      { name: 'Quality Governance', path: '/company/ai-quality-governance', desc: 'AI Quality, Ethics & Control' },
      { name: 'Partnerships', path: '/company/partnerships', desc: 'Strategic Technology Alliances' },
      { name: 'Careers', path: '/company/careers', desc: 'Join Our Global Team' },
    ],
  },
  insights: {
    title: 'Insights',
    path: '/insights',
    items: [
      { name: 'Insights Hub', path: '/insights/insights-hub', desc: 'AI Research & Thought Leadership' },
      { name: 'Case Studies', path: '/insights/case-studies', desc: 'Real-World AI Outcomes' },
      { name: 'Blog', path: '/insights/blog', desc: 'Engineering & Data Perspectives' },
    ],
  },
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();

  const LOGO_URL =
    'https://horizons-cdn.hostinger.com/c99918c0-b1b7-4786-81d6-2c876c6d4f20/1e70a00fd108bb574c8ec686e511ee18.png';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileSection = (key) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? 'bg-primary-dark backdrop-blur-xl border-b border-white/5 py-2'
            : 'bg-transparent py-4'
          : 'bg-primary-dark py-4'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50" aria-label="MillenniumAi Home">
          <img src={LOGO_URL} alt="MillenniumAi Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center">
          {Object.entries(navData).map(([key, section]) => (
            <div
              key={key}
              className="relative px-4 py-3"
              onMouseEnter={() => setActiveDropdown(key)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white"
                aria-haspopup="true"
                aria-expanded={activeDropdown === key}
              >
                {section.title}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    activeDropdown === key ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === key && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[640px] pt-4"
                  >
                    <div className="bg-[#0a0a0f] border border-slate-800 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-4">
                      {section.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="p-3 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <div className="text-slate-200 text-sm font-semibold flex items-center gap-2">
                            {item.name}
                            <ChevronRight size={14} />
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                      <div className="col-span-2 pt-2 border-t border-white/5 flex justify-end">
                        <Link to={section.path} className="text-xs text-blue-400 flex items-center gap-1">
                          View All {section.title} <ExternalLink size={12} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block z-50">
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-6">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden ml-auto text-white p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-[60px] bg-[#0a0a0f] z-40 overflow-y-auto"
          >
            <div className="p-6 space-y-4 pb-20">
              {Object.entries(navData).map(([key, section]) => (
                <div key={key} className="border-b border-white/10 pb-4">
                  <button
                    onClick={() => toggleMobileSection(key)}
                    className="w-full flex justify-between items-center py-2 text-lg text-slate-200"
                  >
                    {section.title}
                    <ChevronDown
                      className={`transition-transform ${
                        mobileExpanded[key] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileExpanded[key] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-2 mt-2 space-y-1"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-3 text-sm text-slate-400 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="font-medium text-slate-300">{item.name}</div>
                            <div className="text-xs text-slate-500">{item.desc}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-blue-600 text-white py-6 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
