import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Lock
} from 'lucide-react';

/* ===============================
   REUSABLE COMPONENTS
   =============================== */

const Breadcrumbs = ({ path, title }) => (
  <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 bg-white/50 w-fit px-3 py-1 rounded-full border border-slate-200 backdrop-blur-sm">
    <Link to="/" className="hover:text-blue-600 transition-colors font-medium">
      Home
    </Link>
    <ChevronRight size={14} className="text-slate-400" />
    <span className="capitalize font-medium">{path.split('/')[1]}</span>
    <ChevronRight size={14} className="text-slate-400" />
    <span className="text-slate-800 font-semibold truncate max-w-[200px]">{title}</span>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const ContentSection = ({ title, content, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-16 last:mb-0"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
        {title}
      </h3>
      <div className="prose prose-slate prose-lg max-w-none text-slate-600">
        <p className="leading-relaxed whitespace-pre-line">{content}</p>
      </div>
    </motion.div>
  );
};

/* ===============================
   MAIN TEMPLATE
   =============================== */

const DynamicPageTemplate = ({
  pageTitle,
  metaDescription,
  heroSection,
  features = [],
  sections = [],
  ctaText = "Start Your Project",
  type = "solution"
}) => {
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        {/* Basic Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": pageTitle,
            "description": metaDescription,
            "url": window.location.href,
            "publisher": {
              "@type": "Organization",
              "name": "MillenniumAi",
              "logo": "https://horizons-cdn.hostinger.com/c99918c0-b1b7-4786-81d6-2c876c6d4f20/1e70a00fd108bb574c8ec686e511ee18.png"
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20 min-h-screen bg-[#f8f9fa]" ref={ref}>


        {/* ===============================
            HERO SECTION
           =============================== */}
        <section className="relative py-20 lg:py-32 overflow-hidden min-h-[60vh] flex items-center bg-white border-b border-slate-200">
          
          {/* Subtle Grid Pattern Background */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-soft-light z-0 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 z-0 opacity-60"></div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
            <Breadcrumbs path={window.location.pathname} title={heroSection.title} />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                {type === 'solution' && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-6 shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                    </span>
                    Enterprise Grade Solution
                  </div>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                  {heroSection.title}
                </h1>

                <p className="text-xl md:text-2xl text-slate-700 font-medium mb-6 leading-snug">
                  {heroSection.subtitle}
                </p>
                
                <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                  {heroSection.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-14 text-lg font-semibold shadow-lg shadow-blue-500/20 rounded-full">
                      {ctaText}
                    </Button>
                  </Link>
                  {type !== 'contact' && (
                    <Link to="/company/leadership-advisors">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 h-14 px-8 rounded-full font-medium"
                      >
                        Speak to an Expert
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="relative hidden lg:block h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
               >
                 <img 
                   src={heroSection.heroImage} 
                   alt={heroSection.title}
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* ===============================
            CORE CONTENT GRID
           =============================== */}
        <section className="py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">

            {/* LEFT COLUMN: MAIN CONTENT */}
            <div className="lg:col-span-8">
              
              {/* Features Grid (If Present) */}
              {features.length > 0 && (
                <div className="mb-20">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                    Key Capabilities
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                      <FeatureCard key={i} {...f} />
                    ))}
                  </div>
                </div>
              )}

              {/* Dynamic Content Sections */}
              <div>
                {sections.map((section, index) => (
                  <ContentSection 
                    key={index} 
                    title={section.title} 
                    content={section.content} 
                    index={index} 
                  />
                ))}
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-28">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Why MillenniumAi?
                </h3>
                <ul className="space-y-5">
                  {[
                    { icon: Lock, text: "NDA-Protected Engagements & IP Ownership" },
                    { icon: Globe, text: "Global Delivery Across 4 Continents" },
                    { icon: Zap, text: "99.5% Accuracy Guarantee" },
                    { icon: CheckCircle2, text: "Dedicated Project Managers" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="mt-0.5 p-1 rounded-full bg-blue-50 text-blue-600">
                        <item.icon size={16} />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="text-sm text-slate-500 mb-4 font-medium">
                    Ready to scale your AI operations?
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 font-semibold shadow-lg">
                      Get a Custom Quote
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Related Links Box */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                 <h4 className="font-bold text-slate-900 mb-4">Explore More</h4>
                 <ul className="space-y-3 text-sm font-medium text-slate-600">
                   <li><Link to="/solutions/generative-ai" className="hover:text-blue-600 flex items-center gap-2"><ArrowRight size={12}/> Generative AI Services</Link></li>
                   <li><Link to="/industries/healthcare-life-sciences" className="hover:text-blue-600 flex items-center gap-2"><ArrowRight size={12}/> Healthcare Solutions</Link></li>
                   <li><Link to="/company/security-data-protection" className="hover:text-blue-600 flex items-center gap-2"><ArrowRight size={12}/> Security Overview</Link></li>
                 </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ===============================
            FINAL CTA
           =============================== */}
        <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
          {/* Abstract shapes/grain for visual interest */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Accelerate Your AI Roadmap
            </h2>
            <p className="text-slate-300 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Join 10+ enterprises building the future with MillenniumAi's trusted, scalable data infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 border-0 shadow-lg px-8 py-6 text-lg font-bold"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                 <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/30 hover:bg-white/10 text-white px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                 >
                   View All Services
                 </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default DynamicPageTemplate;