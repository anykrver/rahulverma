import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "7.02", label: "CGPA", suffix: "" },
    { number: "100", label: "Top Students", suffix: "" },
    { number: "3+", label: "Years Experience", suffix: "" },
    { number: "10+", label: "Projects Completed", suffix: "" }
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-black text-white font-mono relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              About Me
            </h2>

            <div className="space-y-6 text-base md:text-lg text-gray-400 leading-relaxed font-sans">
              <p>
                I'm a B.Tech student at <span className="text-white font-medium">LNCT Bhopal</span> (CGPA: 7.02)
                specializing in Electronics & Communication Engineering. Passionate about building digital solutions,
                blending engineering with design.
              </p>

              <p>
                My journey combines technical expertise with creative vision, allowing me to create solutions that
                are both functional and beautiful.
              </p>
            </div>

            {/* Achievement Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 p-6 bg-gray-900/50 rounded-xl border border-gray-800"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">ISRO Achievement</h3>
                  <p className="text-sm text-gray-400">
                    Selected among <span className="text-white">top 100 students</span> by MyGov for ISRO visit.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills Preview */}
            <div className="mt-10">
              <h3 className="text-lg font-bold text-white mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Python", "Arduino", "Figma", "AWS", "MySQL", "OpenCV"].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="px-3 py-1 bg-gray-900 text-gray-300 rounded text-xs font-mono border border-gray-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gray-900/30 rounded-xl border border-gray-800 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2 font-mono">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Profile Visual */}
            <div className="relative">
              <div className="w-full h-80 bg-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden border border-gray-800 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-3xl">
                    RV
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Rahul Verma</h3>
                  <p className="text-gray-500 font-mono text-sm">Digital Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;