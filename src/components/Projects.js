import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Capacity & Availability Dashboard (TeamPulse)",
      description: "A comprehensive dashboard that helps managers track team capacity and utilization in real-time.",
      technologies: ["React", "Tailwind", "Node.js", "Chart.js", "Excel Export"],
      gradient: "from-neon-purple to-neon-pink",
      image: "📊"
    },
    {
      title: "Blind Spot Detection System",
      description: "An IoT-based safety system that enhances driver awareness using computer vision and sensor technology.",
      technologies: ["Arduino", "Raspberry Pi", "OpenCV", "Ultrasonic Sensors"],
      gradient: "from-neon-pink to-neon-blue",
      image: "🚗"
    },
    {
      title: "Zaroorat - A Crowdfunding Platform",
      description:
        "Zaroorat is a crowdfunding platform tailored for UAE clients, enabling individuals and organizations to raise funds for meaningful causes and innovative projects.",
      technologies: ["React", "Next.js", "Tailwind", "Firebase", "Stripe API"],
      gradient: "from-neon-blue to-neon-green",
      image: "🌍"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b dark:from-dark-bg dark:to-dark-card from-light-bg to-light-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend technology with real-world impact
          </p>
        </div>

        {/* Projects Grid (3x3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative dark:bg-dark-card bg-light-card rounded-3xl p-8 card-hover border dark:border-gray-800 border-gray-300 hover:border-neon-purple/50 transition-all duration-500"
            >
              {/* Project Image/Icon */}
              <div className="mb-8">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.image}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 dark:text-white text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-neon-pink group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="dark:text-gray-400 text-gray-600 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold dark:text-white text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 dark:bg-gray-800 bg-gray-200 text-neon-purple rounded-full text-sm font-medium hover:bg-neon-purple hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="btn-gradient px-6 py-3 rounded-full text-white font-semibold flex-1 glow-effect">
                  View Project
                </button>
                <button className="border-2 border-neon-purple px-6 py-3 rounded-full text-neon-purple font-semibold hover:bg-neon-purple hover:text-white transition-all duration-300">
                  GitHub
                </button>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-10 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="border-2 border-neon-purple px-8 py-4 rounded-full text-neon-purple font-semibold text-lg hover:bg-neon-purple hover:text-white transition-all duration-300 glow-effect">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
