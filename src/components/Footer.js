import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src="https://i.pinimg.com/736x/37/01/8d/37018d100a9698e4b67fade656dee2cb.jpg" alt="Rahul Verma Logo" className="w-12 h-12 object-contain rounded-full" loading="lazy" />
              <span className="text-xl font-semibold text-gray-900 leading-none tracking-tight">Rahul Verma</span>
            </div>
            <p className="text-gray-600 mb-4">
              Digital Engineer & Designer passionate about creating innovative solutions that blend technology with creativity.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:rahulkrvermalnct@gmail.com"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rahulkr-verma/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-none tracking-tight">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((link, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1 font-semibold leading-none tracking-tight"
                  >
                    {link}
                    <svg className="w-3.5 h-3.5 text-gray-400 inline-block ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" /></svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-none tracking-tight">Get in Touch</h3>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold leading-none tracking-tight">rahulkrvermalnct@gmail.com</p>
              <p className="font-semibold leading-none tracking-tight">Bhopal, India</p>
              <p className="font-semibold leading-none tracking-tight">LNCT Bhopal</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-gray-500 text-sm font-semibold leading-none tracking-tight">
              © {currentYear} Rahul Verma. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm font-semibold leading-none tracking-tight">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;