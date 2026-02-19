import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonwebservices/white' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  // { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' }, 
  { name: 'Golang', icon: 'https://cdn.simpleicons.org/go/00ADD8' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/white' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/white' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux/764ABC' },
  { name: 'Material UI', icon: 'https://cdn.simpleicons.org/mui/007FFF' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white' },
  { name: 'Arch Linux', icon: 'https://cdn.simpleicons.org/archlinux/1793D1' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white font-mono relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-4 uppercase">
            Stack Snapshot
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tech Stack
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-full hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 cursor-default group"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;