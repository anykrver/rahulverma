import React from 'react';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Web Development",
      description: "React, Tailwind, Node.js with clean UI & performance-driven apps.",
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: "UI/UX & Graphic Design",
      description: "Figma, Photoshop, Canva for user-friendly interfaces.",
      gradient: "from-neon-pink to-neon-blue"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Data & Cloud Solutions",
      description: "MySQL, MongoDB, AWS, Azure for scalable systems.",
      gradient: "from-neon-blue to-neon-purple"
    }
  ];

  return (
    <section className="py-20 dark:bg-dark-bg bg-light-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Services I Believe In</span>
          </h2>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-3xl mx-auto">
            Combining technical expertise with creative vision to deliver exceptional digital experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative dark:bg-dark-card bg-light-card rounded-2xl p-8 card-hover border dark:border-gray-800 border-gray-300 hover:border-neon-purple/50 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 dark:text-white text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-neon-pink group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="dark:text-gray-400 text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="mt-6">
                  <span className="text-neon-purple font-semibold group-hover:text-neon-pink transition-colors duration-300 cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-purple/20 via-neon-pink/20 to-neon-blue/20 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="dark:text-gray-400 text-gray-600 mb-6">Ready to bring your ideas to life?</p>
          <button className="btn-gradient px-8 py-4 rounded-full text-white font-semibold text-lg glow-effect">
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
