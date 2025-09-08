import React, { useState } from 'react';
import ContactFormPopup from './ContactFormPopup';

const Contact = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const socialLinks = [
    {
      name: "Email",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "mailto:rahulkrvermalnct@gmail.com",
      text: "rahulkrvermalnct@gmail.com",
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      link: "https://www.linkedin.com/in/rahulkr-verma/",
      text: "linkedin.com/in/rahulkr-verma",
      gradient: "from-neon-pink to-neon-blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b dark:from-dark-card dark:to-dark-bg from-light-card to-light-bg relative overflow-hidden">
      <ContactFormPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-32 h-32 border border-neon-purple rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 border border-neon-pink rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-neon-blue rounded-full animate-pulse delay-2000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="gradient-text">Let's Build Something Great Together</span>
          </h2>
          <p className="text-xl dark:text-gray-400 text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to turn your ideas into reality? I'm always excited to work on new projects and collaborate with amazing people.
          </p>
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative dark:bg-dark-card bg-light-card rounded-2xl p-8 card-hover border dark:border-gray-800 border-gray-300 hover:border-neon-purple/50 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${social.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {social.icon}
                  </div>
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 dark:text-white text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-neon-pink group-hover:bg-clip-text transition-all duration-300">
                    {social.name}
                  </h3>
                  <p className="dark:text-gray-400 text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                    {social.text}
                  </p>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-purple/20 via-neon-pink/20 to-neon-blue/20 blur-xl"></div>
                </div>
              </a>
            ))}
          </div>
          {/* CTA Button */}
          <div className="mb-16">
            <button
              className="btn-gradient px-12 py-6 rounded-full text-white font-bold text-xl glow-effect hover:scale-105 transition-transform duration-300"
              onClick={() => setPopupOpen(true)}
            >
              Get in Touch
            </button>
          </div>
          {/* Additional Info */}
          <div className="dark:bg-dark-card bg-light-card rounded-2xl p-8 border dark:border-gray-800 border-gray-300">
            <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">Let's Connect</h3>
            <p className="dark:text-gray-400 text-gray-600 mb-6">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 dark:text-gray-400 text-gray-600">
                <svg className="w-5 h-5 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Usually responds within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2 dark:text-gray-400 text-gray-600">
                <svg className="w-5 h-5 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Based in Bhopal, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
