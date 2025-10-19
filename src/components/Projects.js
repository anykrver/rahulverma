import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'CollabNest',
      description: 'AI-powered real-time workspace with collaborative features, intelligent task management, and live updates using WebSockets.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI', 'WebSockets'],
      github: 'https://github.com/rahulkr-verma',
      live: '#',
      featured: true,
      stars: 45,
      forks: 12,
    },
    {
      title: 'TeamPulse',
      description: 'Comprehensive workforce analytics dashboard with real-time performance metrics, team insights, and data visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'Express', 'Chart.js', 'MySQL'],
      github: 'https://github.com/rahulkr-verma',
      live: '#',
      featured: true,
      stars: 38,
      forks: 8,
    },
    {
      title: 'AI Image Enhancer',
      description: 'AI-driven image enhancer that improves the quality and details of your images using deep learning techniques and machine learning algorithms.',
      image: 'https://i.pinimg.com/736x/a5/66/58/a56658ba8f1a9b67e556d7fddc6df007.jpg?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/rahulkr-verma',
      live: '#',
      featured: false,
      stars: 52,
      forks: 15,
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-[#14B8A6]/5 dark:from-purple-500/10 dark:to-[#14B8A6]/10"></div>
      
      <div className="max-w-[1100px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in full-stack development,
            AI integration, and modern web technologies.
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
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm">
                      ⭐ Featured
                    </div>
                  </div>
                )}

                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "https://placehold.co/600x400/EEE/31343C?font=montserrat&text=Project+Image";
                      }}
                    />
                  </motion.div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Quick action buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-xl hover:shadow-xl transition-all duration-300 group text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-xl hover:shadow-xl transition-all duration-300 group text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="mb-3 text-xl font-semibold group-hover:text-[#14B8A6] transition-colors">{project.title}</h3>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-[#14B8A6]/10 to-purple-500/10 text-[#14B8A6] dark:text-[#14B8A6] rounded-lg text-xs border border-[#14B8A6]/20"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 to-purple-500/0 group-hover:from-[#14B8A6]/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl pointer-events-none"></div>
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
          className="text-center mt-12"
        >
          <a
            href="https://github.com/rahulkr-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-xl hover:shadow-xl transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}