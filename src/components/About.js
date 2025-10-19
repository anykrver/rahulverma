import React from 'react';

const About = () => {
  const stats = [
    { number: "7.02", label: "CGPA", suffix: "" },
    { number: "100", label: "Top Students", suffix: "" },
    { number: "3+", label: "Years Experience", suffix: "" },
    { number: "10+", label: "Projects Completed", suffix: "" }
  ];

  return (
    // Reduced padding on mobile (py-16 instead of py-24) and added responsive padding
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reduced gap on mobile screens */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            {/* Adjusted text size for mobile */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 gradient-text">
              About Me
            </h2>
            
            {/* Adjusted text size and spacing for mobile */}
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                I'm a B.Tech student at <span className="text-gray-900 font-semibold">LNCT Bhopal</span> (CGPA: 7.02) 
                specializing in Electronics & Communication Engineering. Passionate about building digital solutions, 
                blending engineering with design.
              </p>
              
              <p>
                My journey combines technical expertise with creative vision, allowing me to create solutions that 
                are both functional and beautiful. I believe in the power of technology to solve real-world problems 
                and make a positive impact.
              </p>
            </div>

            {/* Achievement Highlight - Adjusted margins for mobile */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#14B8A6] to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">ISRO Achievement</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Selected among the <span className="text-gray-900 font-semibold">top 100 students across India</span> by MyGov 
                    to visit ISRO and interact with top scientists. This experience deepened my passion for space technology 
                    and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Preview - Adjusted margins for mobile */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["React", "Node.js", "Python", "Arduino", "Figma", "AWS", "MySQL", "OpenCV"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-[#14B8A6]/20 hover:to-purple-500/20 hover:text-gray-900 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Stats & Visual */}
          <div>
            {/* Stats Grid - Adjusted padding and text sizes for mobile */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-[#14B8A6] transition-all duration-300 shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Visual - Adjusted height for mobile */}
            <div className="relative">
              <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center relative overflow-hidden border border-gray-200">
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#14B8A6] to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-white">RV</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Rahul Verma</h3>
                  <p className="text-sm sm:text-base text-gray-600">Digital Engineer & Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;