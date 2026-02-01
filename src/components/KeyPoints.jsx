import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const keyPointsData = [
  {
    title: 'Enterprise AI Execution',
    description:
      'At MillenniumAi, we help organizations move from experimentation to production AI. Our teams deliver high-quality datasets, model-ready pipelines, and engineering support that power reliable, real-world AI systems.',
    imageUrl:
      'https://horizons-cdn.hostinger.com/c99918c0-b1b7-4786-81d6-2c876c6d4f20/5f8a1873bfcd65ae6654eace280036fd.png',
    imageAlt:
      'Advanced AI system visualization representing enterprise AI execution and automation',
    imagePosition: 'right',
  },
  {
    title: 'Data-Driven Model Performance',
    description:
      'We specialize in transforming raw data into high-fidelity training assets for computer vision, NLP, speech, and generative AI models—improving accuracy, robustness, and time-to-production.',
    imageUrl:
      'https://horizons-cdn.hostinger.com/c99918c0-b1b7-4786-81d6-2c876c6d4f20/bb4216292594321b0f30a95be6aa5118.png',
    imageAlt:
      'AI engineer analyzing data pipelines and model performance dashboards',
    imagePosition: 'left',
  },
  {
    title: 'Global AI Delivery at Scale',
    description:
      'With a distributed delivery model and security-first workflows, MillenniumAi supports AI programs across geographies—scaling from pilot projects to millions of data assets with consistent quality and governance.',
    imageUrl:
      'https://horizons-cdn.hostinger.com/c99918c0-b1b7-4786-81d6-2c876c6d4f20/d48f15222bf2d42fc15d68d07966ebbd.png',
    imageAlt:
      'Global AI collaboration network illustrating distributed delivery and enterprise scale',
    imagePosition: 'right',
  },
];

const KeyPointImage = ({ imageUrl, imageAlt }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-md h-80 rounded-2xl p-2 bg-white/5 shadow-2xl shadow-blue-500/10 overflow-hidden"
    >
      <motion.div className="w-full h-full" style={{ y }}>
        <img
          className="w-full h-full object-cover rounded-lg scale-[1.3]"
          alt={imageAlt}
          src={imageUrl}
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none"></div>
    </div>
  );
};

const KeyPoints = () => {
  const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.35,
        duration: 1.1,
      },
    },
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#08001a] to-[#17001a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
        {keyPointsData.map((point, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div
              className={`space-y-6 ${
                point.imagePosition === 'left' ? 'lg:order-last' : ''
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                {point.title}
              </h2>
              <p className="text-lg text-gray-400 max-w-lg">
                {point.description}
              </p>
            </div>

            <div className="flex justify-center items-center">
              <KeyPointImage
                imageUrl={point.imageUrl}
                imageAlt={point.imageAlt}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KeyPoints;
