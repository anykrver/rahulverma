import React from 'react';
import { Code, Palette, Database } from 'lucide-react';

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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold gradient-text mb-4 leading-none tracking-tight">
            My Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I offer a range of digital services to help bring your ideas to life with cutting-edge technology and creative design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#14B8A6] to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 leading-none tracking-tight">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;