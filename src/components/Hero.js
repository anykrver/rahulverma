import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl sm:px-6 sm:mt-16 mt-10 px-4 py-20 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h1 className="leading-none gradient-text tracking-tight text-center lg:text-left">
            <span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold">
              <span 
                data-letter="" 
                style={{ display: 'inline-block', transform: 'translateY(0px)', opacity: 1 }} 
                className="tracking-tighter"
              >
                Rahul
              </span>
              <span className="block"></span>
              <span 
                data-letter="" 
                style={{ display: 'inline-block', transform: 'translateY(0px)', opacity: 1 }} 
                className="tracking-tighter"
              >
                Verma
              </span>
            </span>
          </h1>
          
          <p className="sm:mt-5 sm:text-3xl leading-relaxed max-w-2xl text-gray-600 tracking-tight mt-4 text-center lg:text-left">
            Digital Engineer & Designer crafting clear, performant interfaces for ambitious teams. I blend
            systems thinking, accessibility, and motion to ship useful, beautiful work.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 border border-gray-900"
            >
              <ArrowRight className="lucide lucide-arrow-right w-4 h-4" />
              <span>View Work</span>
            </button>
            
            <a 
              href="mailto:rahulkrvermalnct@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm"
            >
              <Mail className="lucide lucide-mail w-4 h-4" />
              <span>rahulkrvermalnct@gmail.com</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 border-t border-black/5 pt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-map-pin w-[18px] h-[18px] text-gray-400 mt-0.5">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="text-sm font-medium tracking-tight text-gray-900">Based in India</p>
                <p className="text-xs text-gray-500 mt-0.5">Open to remote work</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 border-t border-black/5 pt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-monitor w-[18px] h-[18px] text-gray-400 mt-0.5">
                <rect width="20" height="14" x="2" y="3" rx="2" />
                <line x1="8" x2="16" y1="21" y2="21" />
                <line x1="12" x2="12" y1="17" y2="21" />
              </svg>
              <div>
                <p className="text-sm font-medium tracking-tight text-gray-900">Digital Engineering + Design</p>
                <p className="text-xs text-gray-500 mt-0.5">Design systems, web apps</p>
              </div>
            </div>
            
            <div className="flex gap-3 border-black/5 border-t pt-4 items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-check w-[18px] h-[18px] text-gray-400 mt-0.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <p className="text-sm font-medium tracking-tight text-gray-900">Currently available</p>
                <p className="text-xs text-gray-500 mt-0.5">Starting immediately</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 mt-16 lg:mt-0">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-white rounded-3xl border border-gray-200 mx-auto">
            <img 
              src="https://i.pinimg.com/736x/31/9c/c7/319cc7b0ec976a1500370e65a16ea4eb.jpg" 
              alt="Portrait of Rahul Verma" 
              className="absolute inset-0 w-full h-full object-cover" 
              style={{ filter: 'grayscale(100%) saturate(0) contrast(1.05)' }}
            />
          

            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400/50"></div>
                  <div className="text-lg font-semibold tracking-tight text-white-500">10+</div>
                </div>
                <p className="text-[11px] text-gray-500">Projects</p>
              </div>
              
              <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400/50"></div>
                  <div className="text-lg font-semibold tracking-tight text-white-500">3+</div>
                </div>
                <p className="text-[11px] text-gray-500">Years Experience</p>
              </div>
              
              <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400/50"></div>
                  <div className="text-lg font-semibold tracking-tight text-white-500">5</div>
                </div>
                <p className="text-[11px] text-gray-500">Startups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;