import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Database, Cloud, Sparkles, Globe, Server, GitBranch, Workflow, Cpu, BarChart, Wrench } from 'lucide-react';

export default function SkillsSection() {
  const skillSections = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React', level: 'Expert', icon: Globe },
        { name: 'TypeScript', level: 'Advanced', icon: Code2 },
        { name: 'Next.js', level: 'Advanced', icon: Globe },
        { name: 'HTML/CSS', level: 'Expert', icon: Code2 },
        { name: 'Tailwind CSS', level: 'Expert', icon: Wrench },
        { name: 'JavaScript', level: 'Expert', icon: Code2 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 'Advanced', icon: Server },
        { name: 'Express.js', level: 'Advanced', icon: Server },
        { name: 'Java', level: 'Advanced', icon: Code2 },
        { name: 'MongoDB', level: 'Advanced', icon: Database },
        { name: 'MySQL', level: 'Advanced', icon: Database },
        { name: 'REST APIs', level: 'Expert', icon: Globe },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: Cloud,
      skills: [
        { name: 'Git & GitHub', level: 'Expert', icon: GitBranch },
        { name: 'Vercel', level: 'Advanced', icon: Cloud },
        { name: 'Postman', level: 'Expert', icon: Workflow },
        { name: 'CI/CD', level: 'Intermediate', icon: Workflow },
      ],
    },
    {
      title: 'Specializations',
      icon: Sparkles,
      skills: [
        { name: 'WebSockets', level: 'Advanced', icon: Globe },
        { name: 'AI Integration', level: 'Intermediate', icon: Cpu },
        { name: 'Data Visualization', level: 'Advanced', icon: BarChart },
        { name: 'System Design', level: 'Advanced', icon: Workflow },
        { name: 'API Integration', level: 'Advanced', icon: Globe },
        { name: 'Performance', level: 'Advanced', icon: Zap },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-[#14B8A6]';
      case 'Advanced':
        return 'text-purple-600 dark:text-purple-400';
      case 'Intermediate':
        return 'text-blue-600 dark:text-blue-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  // Helper component to render icons dynamically
  const SkillIcon = ({ icon: IconComponent, className }) => {
    if (!IconComponent) return null;
    return <IconComponent className={className} />;
  };

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-[#0E1116]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#14B8A6] to-cyan-500 text-white rounded-full">
            <Zap className="w-3 h-3 mr-2" />
            Technical Expertise
          </div>
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tools, technologies & focus areas
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <section.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <h3 className="text-lg text-gray-900 dark:text-gray-100">
                  {section.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {section.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: sectionIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-[#14B8A6] hover:shadow-lg transition-all duration-300">
                      <SkillIcon icon={skill.icon} className="w-6 h-6 text-gray-700 dark:text-gray-300 mx-auto mb-2" />
                      <div className="mb-2 text-center">{skill.name}</div>
                      <div className={`text-xs text-center ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#14B8A6]"></div>
            <span className="text-gray-600 dark:text-gray-400">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-600"></div>
            <span className="text-gray-600 dark:text-gray-400">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <span className="text-gray-600 dark:text-gray-400">Intermediate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}