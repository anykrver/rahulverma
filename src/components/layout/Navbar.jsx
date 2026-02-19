import React, { useState, useEffect, useMemo } from 'react';
import { Home, User, Briefcase, Mail, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'About', href: '#about', icon: User },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Increase offset for center-screen detection

      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-full shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`relative p - 3 rounded - full transition - all duration - 300 group ${isActive ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                } `}
              aria-label={item.name}
            >
              <item.icon className={`w - 5 h - 5 ${isActive ? 'stroke-2' : 'stroke-[1.5]'} `} />

              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-800 pointer-events-none">
                {item.name}
              </span>

              {/* Active Indicator Dot */}
              {isActive && (
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;