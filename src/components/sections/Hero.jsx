import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center px-6 py-20 relative overflow-hidden font-mono">
      {/* Background glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Name Label */}
          <motion.p variants={item} className="text-gray-500 text-sm tracking-widest uppercase">
            Rahul Verma
          </motion.p>

          {/* Main Title */}
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight">
            Full Stack Engineer
          </motion.h1>

          {/* Open to Work Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-gray-300 font-medium">Open to Work</span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={item} className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            I'm a full-stack developer who loves building fast, clean, and impactful web experiences.
            Specializing in building scalable <span className="text-white">Backends</span> and <span className="text-white">Creative</span> products that make an impact.
            Currently learning <span className="text-white">Golang</span>.
          </motion.p>

          {/* Actions */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:rahulkrvermalnct@gmail.com"
              className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 bg-transparent border border-gray-700 text-white rounded-full hover:bg-gray-900 transition-colors"
            >
              Résumé/CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={item} className="flex gap-6 pt-8">
            <a href="https://github.com/rahulkr-verma" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/rahulkr-verma" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/rahulkr_verma" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:rahulkrvermalnct@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;