import React from 'react';
import { Code, Palette, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive, high-performance websites and web applications using modern technologies like React, Tailwind CSS, and Node.js.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'JavaScript', 'HTML/CSS'],
    },
    {
      icon: Palette,
      title: 'UI/UX & Graphic Design',
      description: 'Creating beautiful, user-friendly interfaces and visual designs that enhance user experience and engagement.',
      technologies: ['Figma', 'Photoshop', 'Canva', 'Illustrator', 'UI/UX Principles'],
    },
    {
      icon: Database,
      title: 'Data & Cloud Solutions',
      description: 'Implementing robust data management and cloud infrastructure solutions for scalable applications.',
      technologies: ['MySQL', 'MongoDB', 'AWS', 'Azure', 'Firebase'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-black text-white font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-none tracking-tight">
            Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Digital solutions crafted with precision and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 leading-none tracking-tight">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;