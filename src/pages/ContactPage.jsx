import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

/* ===============================
   CONSTANTS
================================ */

const SERVICES = [
  'AI/ML Data Annotation',
  'Generative AI Solutions',
  'Computer Vision',
  'Natural Language Processing',
  'Speech & Audio AI',
  'Data Engineering',
  'Digital Product Development',
];

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  company: '',
  service: '',
  phone: '',
  message: '',
};

/* ===============================
   COMPONENT
================================ */

const ContactPage = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ===============================
     VALIDATION
  ================================ */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ===============================
     HANDLERS
  ================================ */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Form validation failed',
        description: 'Please correct the highlighted fields and try again.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulated submission (replace with API later)
    setTimeout(() => {
      toast({
        title: 'Message sent successfully 🚀',
        description: 'Our AI experts will reach out within 24 hours.',
      });

      setFormData(INITIAL_FORM_STATE);
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  /* ===============================
     RENDER
  ================================ */

  return (
    <>
      <Helmet>
        <title>Contact Us | MillenniumAi</title>
        <meta
          name="description"
          content="Contact MillenniumAi to discuss AI, ML, and enterprise data solutions. Our experts help you build scalable, production-ready AI systems."
        />
      </Helmet>

      <div className="pt-20">

        {/* ================= HERO ================= */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1676573411058-8054a4d2bc10)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.15,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Let’s{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Talk to our AI experts and explore how MillenniumAi can accelerate your AI journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a0a2e]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">

            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-10">
                Share your requirements and we’ll help you design a tailored AI solution.
              </p>

              <div className="space-y-6">
                <InfoItem icon={Mail} title="Email" lines={['info@millenniumai.in', 'sales@millenniumai.in']} />
                <InfoItem icon={Phone} title="Phone" lines={['+91 7291874970', '+91 7053171752']} />
                <InfoItem
                  icon={MapPin}
                  title="Headquarters"
                  lines={[
                    'UGF 02 Krishna Enclave, Govindpuram',
                    'Ghaziabad, Uttar Pradesh 201002, India',
                  ]}
                />
              </div>
            </motion.div>

            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <InputField label="Full Name" name="name" value={formData.name} error={errors.name} onChange={handleChange} />
              <InputField label="Email Address" name="email" type="email" value={formData.email} error={errors.email} onChange={handleChange} />
              <InputField label="Company" name="company" value={formData.company} error={errors.company} onChange={handleChange} />

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#0a0a0f]">
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && <ErrorText text={errors.service} />}
              </div>

              <InputField label="Phone (Optional)" name="phone" value={formData.phone} onChange={handleChange} />

              <TextAreaField label="Message" name="message" value={formData.message} error={errors.message} onChange={handleChange} />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {isSubmitting ? 'Sending…' : <><Send className="mr-2" /> Send Message</>}
              </Button>
            </motion.form>

          </div>
        </section>
      </div>
    </>
  );
};

/* ===============================
   SMALL COMPONENTS
================================ */

const InfoItem = ({ icon: Icon, title, lines }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <Icon className="text-white" />
    </div>
    <div>
      <p className="text-white font-semibold mb-1">{title}</p>
      {lines.map((line) => (
        <p key={line} className="text-gray-400">{line}</p>
      ))}
    </div>
  </div>
);

const InputField = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">
      {label} *
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
    />
    {error && <ErrorText text={error} />}
  </div>
);

const TextAreaField = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">
      {label} *
    </label>
    <textarea
      {...props}
      rows={5}
      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white resize-none"
    />
    {error && <ErrorText text={error} />}
  </div>
);

const ErrorText = ({ text }) => (
  <p className="mt-1 text-sm text-red-400">{text}</p>
);

export default ContactPage;
