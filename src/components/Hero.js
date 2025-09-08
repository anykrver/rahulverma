import React from 'react';
import { Github, Linkedin, Mail, Code2, Send } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br dark:from-purple-900/20 dark:via-blue-900/20 dark:to-pink-900/20 from-purple-100/40 via-blue-100/40 to-pink-100/40"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse dark:opacity-20 opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000 dark:opacity-20 opacity-10"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Rahul Verma</span>👋
            </h1>
            <p className="text-lg md:text-xl italic dark:text-gray-400 text-gray-600">
              (Digital Engineer & Designer)
            </p>
            <p className="text-lg md:text-xl leading-relaxed max-w-lg dark:text-gray-300 text-gray-700">
              A passionate individual who always thrives to work on end to end products which develop sustainable and scalable digital solutions to create impact.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/anykrver"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 dark:bg-gray-800 dark:hover:bg-gray-700 bg-gray-900 hover:bg-gray-800 text-white"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rahulkr-verma/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rahulkrvermalnct@gmail.com"
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white"
              >
                <Mail size={20} />
              </a>
            </div>
            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              {/* My Resume Button with Animated Gradient Border */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-full font-semibold flex items-center gap-2 overflow-hidden group group-hover:opacity-100 transition-opacity duration-300"
                style={{ minWidth: 180 }}
              >
                {/* Animated Border */}
                <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 border-glow"></span>
                {/* Inner background */}
                <span className="relative z-10 flex items-center gap-2 px-7 py-3 rounded-full dark:bg-dark-bg bg-white dark:text-white text-gray-900 font-semibold">
                  My Resume <Send size={18} />
                </span>
              </a>
              <style>{`
                @keyframes border-glow {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .border-glow {
                  background-size: 300% 300%;
                  animation: border-glow 5s linear infinite;
                }
              `}</style>
              {/* Let's Work Together Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Developer Illustration */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
                {/* Computer Monitor */}
                <div className="absolute top-8 right-8 w-32 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl border-2 border-gray-700">
                  <div className="w-full h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-t-md flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-1">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-1 rounded-full ${
                            i % 3 === 0
                              ? 'bg-blue-300'
                              : i % 3 === 1
                              ? 'bg-purple-300'
                              : 'bg-pink-300'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="h-8 bg-gray-800 rounded-b-md"></div>
                  {/* Monitor Stand */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-700 rounded-b-lg"></div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-600 rounded-full"></div>
                </div>
                {/* Developer Character */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                  {/* Head */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full mx-auto mb-2 relative">
                    {/* Hair */}
                    <div className="absolute -top-2 left-2 right-2 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-full"></div>
                    {/* Eyes */}
                    <div className="absolute top-6 left-4 w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-6 right-4 w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                  {/* Body */}
                  <div className="w-20 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-t-2xl mx-auto relative">
                    {/* Jacket */}
                    <div className="absolute inset-x-2 top-0 bottom-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl"></div>
                    {/* Arms */}
                    <div className="absolute -left-3 top-4 w-6 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full transform -rotate-12"></div>
                    <div className="absolute -right-3 top-4 w-6 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full transform rotate-12"></div>
                  </div>
                  {/* Legs */}
                  <div className="flex justify-center gap-2 mt-1">
                    <div className="w-6 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full"></div>
                    <div className="w-6 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full"></div>
                  </div>
                  {/* Shoes */}
                  <div className="flex justify-center gap-4 mt-1">
                    <div className="w-8 h-4 bg-gray-900 rounded-full"></div>
                    <div className="w-8 h-4 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                {/* Floating Code Elements */}
                <div className="absolute top-16 left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center animate-bounce">
                  <Code2 size={16} className="text-white" />
                </div>
                <div className="absolute bottom-20 right-12 w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-4 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-ping"></div>
                {/* Desk/Platform */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
