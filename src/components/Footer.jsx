import React from 'react';
import { Link } from 'react-router-dom';
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-slate-300 pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pb-16">

          {/* BRAND + HQ */}
          <div>
            <Link to="/" className="text-xl font-semibold text-white tracking-wide mb-5 block">
              MillenniumAI
            </Link>

            <p className="text-slate-400 leading-relaxed mb-6">
              Blueprinting the mind of machines. We deliver ground-truth data for
              the world’s most advanced AI systems through precision annotation
              and RLHF.
            </p>

            <div className="flex items-start gap-3 mt-6">
              <MapPin className="w-5 h-5 text-blue-500 mt-1" />
              <div className="text-sm text-slate-400 leading-relaxed">
                E-20, Second Floor,Sector 3<br />
                Noida, Uttar Pradesh 201301, India.<br />
              </div>
            </div>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Generative AI', path: '/solutions/generative-ai' },
                { name: 'Computer Vision', path: '/solutions/computer-vision' },
                { name: 'NLP Services', path: '/solutions/nlp' },
                { name: 'Content Moderation', path: '/solutions/content-moderation' },
                { name: 'Audio & Speech', path: '/solutions/speech-transcription' },
              ].map(item => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>

            <div className="space-y-5 text-sm">

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <p className="text-slate-400 text-xs">GENERAL</p>
                  <a
                    href="mailto:info@millenniumai.in"
                    className="text-white hover:text-blue-400"
                  >
                    info@millenniumai.in
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-purple-500 mt-1" />
                <div>
                  <p className="text-slate-400 text-xs">SALES</p>
                  <a
                    href="mailto:sales@millenniumai.in"
                    className="text-white hover:text-blue-400"
                  >
                    sales@millenniumai.in
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-green-500 mt-1" />
                <div className="space-y-1">
                  <p className="text-white">+91 7053 171 752</p>
                  <p className="text-white">+91 7291 874 970</p>
                </div>
              </div>

            </div>
          </div>

          {/* STAY UPDATED */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Stay Updated
            </h4>

            <p className="text-slate-400 mb-5 text-sm">
              Get the latest AI data trends delivered to your inbox.
            </p>

            <div className="flex items-center gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex gap-4 text-slate-400">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-5 h-5 hover:text-white transition cursor-pointer"
                />
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p className="text-slate-500">
            © {year} MillenniumAI. All rights reserved.
          </p>

          <div className="flex gap-6 text-slate-500">
            <Link to="/company/security-data-protection" className="hover:text-white">
              Privacy & Security
            </Link>
            <Link to="/company/ai-quality-governance" className="hover:text-white">
              Quality Standards
            </Link>
            <Link to="/company/partnerships" className="hover:text-white">
              Partnerships
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
