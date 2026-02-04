import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navItems = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Company', path: '/company/inside-millenniumai' },
    { name: 'Insights', path: '/insights/insights-hub' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="
        fixed top-0 left-0 right-0 z-50
        bg-primary-dark
        border-b border-white/10
      "
    >
      {/* Increased vertical padding */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link to="/" className="flex items-center gap-3">
          {/* Logo mark (bigger) */}
          <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-blue-500" />
          </div>

          {/* Logo text (bigger) */}
          <span className="text-2xl font-semibold tracking-wide text-white">
            MillenniumAI
          </span>
        </Link>

        {/* ================= NAV ================= */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
                text-base font-medium
                text-gray-300
                hover:text-white
                transition-colors
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ================= CTA ================= */}
        <Link to="/contact">
          <Button
            className="
              bg-blue-600 hover:bg-blue-500
              text-white font-semibold
              px-6 py-2.5
              text-base
              rounded-lg
            "
          >
            Contact Us
          </Button>
        </Link>

      </div>
    </motion.header>
  );
};

export default Header;
