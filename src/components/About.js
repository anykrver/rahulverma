import React from 'react';

const About = () => {
  const stats = [
    { number: "7.02", label: "CGPA", suffix: "" },
    { number: "100", label: "Top Students", suffix: "" },
    { number: "3+", label: "Years Experience", suffix: "" },
    { number: "10+", label: "Projects Completed", suffix: "" }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
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

            {/* Achievement Highlight */}
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ISRO Achievement</h3>
                  <p className="text-gray-700">
                    Selected among the <span className="text-gray-900 font-semibold">top 100 students across India</span> by MyGov 
                    to visit ISRO and interact with top scientists. This experience deepened my passion for space technology 
                    and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Node.js", "Python", "Arduino", "Figma", "AWS", "MySQL", "OpenCV"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-[#14B8A6]/20 hover:to-purple-500/20 hover:text-gray-900 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Stats & Visual */}
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-[#14B8A6] transition-all duration-300 shadow-sm"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Visual */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center relative overflow-hidden border border-gray-200">
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#14B8A6] to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-white">RV</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rahul Verma</h3>
                  <p className="text-gray-600">Digital Engineer & Designer</p>
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