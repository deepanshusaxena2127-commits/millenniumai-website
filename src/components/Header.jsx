import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Company', path: '/company/inside-millenniumai' },
    { name: 'Insights', path: '/insights/insights-hub' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 right-0 z-50
        px-6 py-4
        border-b border-white/10
        transition-all duration-300
        ${
          isHome
            ? 'bg-white/70 backdrop-blur-xl'
            : 'bg-primary-dark'
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-blue-600" />
          </div>
          <span
            className={`text-xl font-semibold tracking-wide ${
              isHome ? 'text-slate-900' : 'text-white'
            }`}
          >
            MillenniumAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                isHome
                  ? 'text-slate-600 hover:text-blue-600'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5">
              Contact Us
            </Button>
          </Link>
        </div>

      </div>
    </motion.header>
  );
};

export default Header;
