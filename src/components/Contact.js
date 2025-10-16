import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rahulkrvermalnct@gmail.com',
      href: 'mailto:rahulkrvermalnct@gmail.com',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'rahulkr-verma',
      href: 'https://www.linkedin.com/in/rahulkr-verma',
      gradient: 'from-blue-600 to-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'rahulkr-verma',
      href: 'https://github.com/rahulkr-verma',
      gradient: 'from-gray-800 to-gray-600',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14B8A6]/5 to-transparent dark:via-[#14B8A6]/10"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-block px-4 py-2 bg-gradient-to-r from-[#14B8A6] to-purple-500 text-white rounded-full">
            Let's Connect
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 gradient-text">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to turn your ideas into reality? I'm always excited to work on new projects and collaborate with amazing people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {info.label}
                      </div>
                      <div className="truncate group-hover:text-[#14B8A6] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Connect on social media
                </div>
                <div className="flex gap-3">
                  {contactInfo.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-[#14B8A6] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-[#14B8A6] transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-[#14B8A6] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-xl hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">
                    {submitted ? '✓ Message Sent Successfully!' : 'Send Message'}
                  </span>
                  {!submitted && <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
        
        {/* Enhanced Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200 shadow-lg"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-3 bg-white/80 px-6 py-3 rounded-full shadow-sm">
                <svg className="w-6 h-6 text-[#14B8A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-gray-700">Usually responds within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 px-6 py-3 rounded-full shadow-sm">
                <svg className="w-6 h-6 text-[#14B8A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-gray-700">Based in Bhopal, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}