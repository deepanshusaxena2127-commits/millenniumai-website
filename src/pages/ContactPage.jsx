import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import SectionDivider from "@/components/SectionDivider";

const SERVICES = [
  "Generative AI & LLM Services",
  "AI/ML Data Annotation",
  "Computer Vision",
  "Natural Language Processing",
  "Speech Transcription",
  "Content Moderation",
  "Document Processing",
  "Full-Stack Development",
];

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  company: "",
  service: "",
  phone: "",
  message: "",
};

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Form validation failed",
        description: "Please correct the highlighted fields and try again.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent successfully ",
        description: "Our AI experts will reach out within 24 hours.",
      });
      setFormData(INITIAL_FORM_STATE);
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | MillenniumAi</title>
        <meta
          name="description"
          content="Contact MillenniumAi to discuss AI, ML, and enterprise data solutions. Our experts help you build scalable, production-ready AI systems."
        />
      </Helmet>

      <main className="bg-[#edf2f7] text-slate-900 overflow-hidden">
        <section className="relative overflow-hidden pt-20 pb-20 md:pb-28">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0" style={{
              background: `
                radial-gradient(ellipse 800px 600px at 20% 20%, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.04) 35%, transparent 70%),
                radial-gradient(ellipse 900px 700px at 80% 50%, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0.03) 40%, transparent 75%)
              `,
            }} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900"
              >
                Let's{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Connect
                </span>
              </motion.h1>
              <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Talk to our AI experts and explore how MillenniumAi can accelerate your AI journey.
              </p>
            </motion.div>
          </div>
        </section>

        <SectionDivider variant="gradient" />

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1 space-y-8"
              >
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                  >
                    Get in Touch
                  </motion.h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Share your requirements and we'll help you design a tailored AI solution.
                  </p>
                </div>

                <div className="space-y-6">
                  <InfoItem 
                    icon={Mail} 
                    title="Email" 
                    lines={["info@millenniumai.in", "sales@millenniumai.in"]} 
                  />
                  <InfoItem 
                    icon={Phone} 
                    title="Phone" 
                    lines={["+91 7291874970", "+91 7053171752"]} 
                  />
                  <InfoItem
                    icon={MapPin}
                    title="Headquarters"
                    lines={[
                      "E-20, 2nd Floor, Sector 3",
                      "Noida, Uttar Pradesh 201301, India",
                    ]}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                      label="Full Name" 
                      name="name" 
                      value={formData.name} 
                      error={errors.name} 
                      onChange={handleChange} 
                    />
                    <InputField 
                      label="Email Address" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      error={errors.email} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                      label="Company" 
                      name="company" 
                      value={formData.company} 
                      error={errors.company} 
                      onChange={handleChange} 
                    />
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Service Interest *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <ErrorText text={errors.service} />}
                    </div>
                  </div>

                  <InputField 
                    label="Phone (Optional)" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required={false}
                  />

                  <TextAreaField 
                    label="Message" 
                    name="message" 
                    value={formData.message} 
                    error={errors.message} 
                    onChange={handleChange} 
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ y: -2 }}
                    className="w-full py-4 px-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <SectionDivider variant="gradient" />

        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
              >
                Why Partner with MillenniumAI?
              </motion.h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We deliver production-grade AI solutions with enterprise-level quality and support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "99.5% QA Accuracy",
                  description: "Multi-layer quality assurance with expert human validation across every dataset",
                  icon: CheckCircle,
                },
                {
                  title: "24/7 Global Support",
                  description: "Timezone-spanning teams and round-the-clock delivery capabilities",
                  icon: Phone,
                },
                {
                  title: "Enterprise Security",
                  description: "GDPR-aligned, NDA-backed, and SOC 2 certified for complete data protection",
                  icon: Mail,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-bold text-slate-900 mb-3"
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const InfoItem = ({ icon: Icon, title, lines }) => (
  <motion.div
    whileHover={{ x: 4 }}
    className="flex gap-4 group"
  >
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-300">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="font-bold text-slate-900 mb-1">{title}</p>
      {lines.map((line) => (
        <p key={line} className="text-slate-600 text-sm">{line}</p>
      ))}
    </div>
  </motion.div>
);

const InputField = ({ label, error, required, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-900 mb-2">
      {label} {required !== false && "*"}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 font-medium placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
    {error && <ErrorText text={error} />}
  </div>
);

const TextAreaField = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-900 mb-2">
      {label} *
    </label>
    <textarea
      {...props}
      rows={5}
      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 font-medium placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      placeholder="Tell us about your project requirements..."
    />
    {error && <ErrorText text={error} />}
  </div>
);

const ErrorText = ({ text }) => (
  <p className="mt-1.5 text-sm font-medium text-red-600">{text}</p>
);

export default ContactPage;
