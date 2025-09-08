import React from 'react';

const About = () => {
  const stats = [
    { number: "7.02", label: "CGPA", suffix: "" },
    { number: "100", label: "Top Students", suffix: "" },
    { number: "3+", label: "Years Experience", suffix: "" },
    { number: "10+", label: "Projects Completed", suffix: "" }
  ];

  return (
    <section className="py-20 bg-dark-card dark:bg-dark-card bg-light-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-neon-purple rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-neon-pink rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <div className="space-y-6 text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
              <p>
                I'm a B.Tech student at <span className="text-neon-purple font-semibold">LNCT Bhopal</span> (CGPA: 7.02) 
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
            <div className="mt-8 p-6 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-2xl border border-neon-purple/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-2">ISRO Achievement</h3>
                  <p className="dark:text-gray-300 text-gray-700">
                    Selected among the <span className="text-neon-pink font-semibold">top 100 students across India</span> by MyGov 
                    to visit ISRO and interact with top scientists. This experience deepened my passion for space technology 
                    and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Node.js", "Python", "Arduino", "Figma", "AWS", "MySQL", "OpenCV"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 dark:bg-gray-800 bg-gray-200 text-neon-purple rounded-full text-sm font-medium hover:bg-neon-purple hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Stats & Visual */}
          <div className="animate-fade-in">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 dark:bg-dark-bg bg-light-bg rounded-2xl border dark:border-gray-800 border-gray-300 hover:border-neon-purple/50 transition-all duration-300 card-hover"
                >
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="dark:text-gray-400 text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Visual */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-8 left-8 w-16 h-16 border border-neon-purple/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-16 right-12 w-12 h-12 border border-neon-pink/30 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-12 left-16 w-8 h-8 border border-neon-blue/30 rounded-full animate-pulse delay-2000"></div>
                  <div className="absolute bottom-8 right-8 w-20 h-20 border border-neon-purple/30 rounded-full animate-pulse delay-3000"></div>
                </div>
                
                {/* Central content */}
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                    <span className="text-4xl font-bold text-white">RV</span>
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-2">Rahul Verma</h3>
                  <p className="dark:text-gray-400 text-gray-600">Digital Engineer & Designer</p>
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
