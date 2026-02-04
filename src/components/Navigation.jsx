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
    ],
  },
  company: {
    title: 'Company',
    path: '/company',
    items: [
      { name: 'Inside MillenniumAi', path: '/company/inside-millenniumai', desc: 'Who We Are & How We Operate' },
      { name: 'Leadership', path: '/company/leadership-advisors', desc: 'Executive Team & Advisors' },
      { name: 'Security & Trust', path: '/company/security-data-protection', desc: 'Enterprise Security & Compliance' },
      { name: 'Careers', path: '/company/careers', desc: 'Join Our Global Team' },
    ],
  },
  insights: {
    title: 'Insights',
    path: '/insights',
    items: [
      { name: 'Insights Hub', path: '/insights/insights-hub', desc: 'AI Research & Thought Leadership' },
      { name: 'Case Studies', path: '/insights/case-studies', desc: 'Real-World AI Outcomes' },
      { name: 'Blog', path: '/insights/blog', desc: 'Engineering Perspectives' },
    ],
  },
};

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const LOGO_URL =
    'https://horizons-cdn.hostinger.com/c99918c0-b1b7-4786-81d6-2c876c6d4f20/1e70a00fd108bb574c8ec686e511ee18.png';

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#050516] border-b border-white/10"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO_URL} alt="MillenniumAI" className="h-9 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center">
          {Object.entries(navData).map(([key, section]) => (
            <div
              key={key}
              className="relative px-4 py-3"
              onMouseEnter={() => setActiveDropdown(key)}
            >
              <button className="flex items-center gap-1 text-sm text-slate-300 hover:text-white">
                {section.title}
                <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {activeDropdown === key && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] pt-4"
                  >
                    <div className="bg-[#0a0a0f] border border-white/10 rounded-xl p-6 grid grid-cols-2 gap-4">
                      {section.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="p-3 rounded-lg hover:bg-white/5"
                        >
                          <div className="text-sm font-semibold text-white flex items-center gap-2">
                            {item.name}
                            <ChevronRight size={14} />
                          </div>
                          <div className="text-xs text-slate-400 mt-1">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                      <div className="col-span-2 pt-2 border-t border-white/5 text-right">
                        <Link to={section.path} className="text-xs text-blue-400 inline-flex gap-1">
                          View all {section.title} <ExternalLink size={12} />
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
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-500">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
