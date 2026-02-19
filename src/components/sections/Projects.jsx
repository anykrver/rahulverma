import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'StyllAi - Live Virtual Try-On',
      description: 'AI-powered virtual try-on experience allowing users to visualize clothing items in real-time. Features live camera feed processing and realistic fabric draping simulation.',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop',
      tech: ['React', 'Python', 'OpenCV', 'Tailwind CSS', 'Deep Learning'],
      github: 'https://github.com/anykrver/visionfit-ai',
      live: 'https://styllai.vercel.app/',
      featured: true,
      stars: 12,
      forks: 2,
    },
    {
      title: 'Portfolio Website',
      description: 'Modern developer portfolio featuring a minimal dark aesthetic, floating navigation, and smooth animations powered by React and Framer Motion.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Lucide React'],
      github: 'https://github.com/anykrver/rahulverma',
      live: null,
      featured: true,
      stars: 5,
      forks: 1,
    },
    {
      title: 'AI Image Enhancer',
      description: 'Advanced image processing tool that uses deep learning techniques to upscale and enhance low-resolution images with high fidelity.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
      tech: ['Python', 'Deep Learning', 'React', 'Flask', 'PyTorch'],
      github: 'https://github.com/anykrver/AI-image-enhancer',
      live: null,
      featured: true, // Marking as featured based on user interest
      stars: 8,
      forks: 3,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black text-white font-mono">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A selection of projects that showcase my expertise in full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 h-full flex flex-col">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ filter: 'grayscale(100%) contrast(1.2)' }}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "https://placehold.co/600x400/111/444?font=mono&text=Project";
                      }}
                    />
                  </motion.div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="mb-3 text-lg font-bold tracking-tight text-white">{project.title}</h3>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-xs font-mono text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {project.forks}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-gray-800/50 text-gray-300 rounded text-[10px] uppercase tracking-wider border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/rahulkr-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            View All Checkouts
          </a>
        </motion.div>
      </div>
    </section>
  );
}