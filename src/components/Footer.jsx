import React from 'react';
import { Link } from 'react-router-dom';
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  ShieldCheck,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'Generative AI', path: '/solutions/generative-ai' },
      { name: 'NLP', path: '/solutions/nlp' },
      { name: 'Computer Vision', path: '/solutions/computer-vision' },
      { name: 'Content Moderation', path: '/solutions/content-moderation' },
      { name: 'Document Processing', path: '/solutions/document-processing' },
      { name: 'Speech Transcription', path: '/solutions/speech-transcription' },
      { name: 'Full-Stack Development', path: '/solutions/full-stack-development' },
    ],
    industries: [
      { name: 'Healthcare & Life Sciences', path: '/industries/healthcare-life-sciences' },
      { name: 'Autonomous Mobility', path: '/industries/autonomous-mobility' },
      { name: 'Fintech & Banking', path: '/industries/fintech' },
      { name: 'Retail & Consumer Tech', path: '/industries/retail-consumer-tech' },
      { name: 'Security & Surveillance', path: '/industries/security-surveillance-ai' },
      { name: 'Geospatial Intelligence', path: '/industries/geospatial-intelligence' },
    ],
    company: [
      { name: 'About Us', path: '/company/inside-millenniumai' },
      { name: 'Leadership', path: '/company/leadership-advisors' },
      { name: 'Global Delivery', path: '/company/global-delivery-model' },
      { name: 'Careers', path: '/company/careers' },
      { name: 'Security & Data Protection', path: '/company/security-data-protection' },
      { name: 'Contact', path: '/contact' },
    ],
    insights: [
      { name: 'Insights Hub', path: '/insights/insights-hub' },
      { name: 'Case Studies', path: '/insights/case-studies' },
      { name: 'Blog', path: '/insights/blog' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Mail, href: 'mailto:info@millenniumai.in', label: 'Email' },
  ];

  return (
    <footer className="bg-primary-dark border-t border-white/10 pt-20 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="text-xl font-semibold tracking-wide text-white mb-6 block">
              MillenniumAI
            </Link>

            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed text-base">
              MillenniumAI delivers enterprise-grade AI data and engineering
              services, supporting global AI teams with secure, scalable,
              and quality-driven execution.
            </p>

            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 text-slate-400"
                  >
                    <Icon className="w-5 h-5" aria-hidden />
                  </a>
                );
              })}
            </div>

            <div className="space-y-3 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 mt-1" aria-hidden />
                <span>
                  UGF 02 Krishna Enclave, Govindpuram, Ghaziabad,
                  Uttar Pradesh 201002, India
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <a href="mailto:info@millenniumai.in" className="hover:text-white transition-colors">
                  info@millenniumai.in
                </a>
                <a href="mailto:hr@millenniumai.in" className="hover:text-white transition-colors">
                  hr@millenniumai.in
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key} className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-6 text-base capitalize">
                {key}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} MillenniumAI. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <ShieldCheck size={14} aria-hidden />
              <span>GDPR-Aligned & NDA-Backed Operations</span>
            </div>
            <Link to="/company/security-data-protection" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/company/security-data-protection" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
