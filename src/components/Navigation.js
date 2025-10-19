import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    // Updated navigation with moving indicator
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-transparent">
      <div className="max-w-4xl mx-auto border border-white/10 rounded-xl px-6 py-3"
        style={{ background: 'rgba(10, 11, 20, 0.9)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)' }}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-lg font-semibold tracking-tight text-white font-sans">Rahul Verma</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60 relative">
            {/* Moving indicator */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#14B8A6] to-purple-500 transition-all duration-300 ease-out"
                 style={{
                   width: '50px',
                   transform: `translateX(${
                     navItems.findIndex(item => item.href.substring(1) === activeSection) * 100 + 20
                   }px)`
                 }}></div>
            
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5 font-sans ${
                    activeSection === item.href.substring(1) ? 'text-white' : ''
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="hover:bg-white/5 p-2 rounded-lg transition-all duration-300 border border-white/5" 
              style={{ background: 'rgba(255, 255, 255, 0.02)' }} 
              aria-label="Account"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 stroke-[1.5] text-white/60">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl">
            {/* Made background transparent as requested */}
            <div className="px-4 py-3 space-y-3" style={{ background: 'transparent' }}>
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left transition-colors duration-300 font-medium py-2 px-3 rounded-lg ${
                    activeSection === item.href.substring(1) 
                      ? 'text-white bg-white/10' 
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-xl hover:shadow-xl transition-all duration-300 group"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;