import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Lock, Globe, Shield } from 'lucide-react';

const PremiumTestimonials = () => {
  const testimonials = [
    {
      quote:
        'MillenniumAI became an extension of our data science team. Their discipline around QA and delivery made scaling our model training reliable and predictable.',
      author: 'Senior ML Director',
      company: 'Tier-1 Autonomous Vehicle OEM',
      proof: 'Managing 2.5M+ autonomous perception datasets in production',
      avatar: '🚗',
    },
    {
      quote:
        'The level of expertise in domain-specific annotation was exceptional. They understood our requirements deeply and delivered datasets that immediately improved model performance.',
      author: 'VP of Data Science',
      company: 'Global Financial Services Enterprise',
      proof: 'Deployed across regulatory environments in 8 countries',
      avatar: '💰',
    },
    {
      quote:
        'Scale and speed without sacrificing quality—that\'s what impressed us. MillenniumAI managed massive data operations while maintaining our accuracy standards.',
      author: 'Chief Analytics Officer',
      company: 'Healthcare & Life Sciences Organization',
      proof: 'Processing HIPAA-compliant datasets supporting clinical AI initiatives',
      avatar: '🏥',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#F2F0EF] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/3 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Trusted by Enterprise Leaders
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how MillenniumAI delivers for the world's most demanding AI organizations
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative p-8 lg:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50 group-hover:to-indigo-50/50 transition-all duration-300 -z-10" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-200 mb-4 group-hover:text-blue-300 transition-colors" />

              {/* Quote text */}
              <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-start gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex-shrink-0 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-sm md:text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-600 font-medium mb-2">{testimonial.company}</p>
                  {testimonial.proof && (
                    <p className="text-xs text-slate-500 italic">✓ {testimonial.proof}</p>
                  )}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-2xl w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Neon Trust Pills */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }}
  className="mt-16 flex flex-wrap justify-center gap-6"
>
  {[
    { icon: Lock, title: 'GDPR-Aligned Data Handling' },
    { icon: Globe, title: '24/7 Global Delivery' },
    { icon: Shield, title: 'NDA-Backed Engagements' },
  ].map((trust) => {
    const TrustIcon = trust.icon;
    return (
      <motion.div
        key={trust.title}
        variants={{
          hidden: { opacity: 0, y: 8 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
          },
        }}
        className="
          relative
          inline-flex items-center gap-3
          px-6 py-3
          rounded-full
          bg-white
          border border-blue-400/40
          text-slate-900
          shadow-[0_0_0_1px_rgba(59,130,246,0.25),0_0_18px_rgba(59,130,246,0.25)]
        "
      >
        {/* Neon glow layer */}
        <span className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl -z-10" />

        <TrustIcon className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium whitespace-nowrap">
          {trust.title}
        </span>
      </motion.div>
    );
  })}
</motion.div>
      </div>
    </section>
  );
};

export default PremiumTestimonials;
