import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, ExternalLink, Github, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & ML', 'Full Stack', 'Web Apps'];

  const filteredProjects = PROJECTS.filter(project => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Selected <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Real-world applications spanning AI integration, healthcare portals, e-commerce engines, and academic software.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center gap-2 bg-zinc-950 p-1.5 rounded-xl border border-zinc-800/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
                id={`project-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-zinc-950 border border-zinc-800/90 overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-2xl"
              id={`project-card-${project.id}`}
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative overflow-hidden aspect-video bg-zinc-900 border-b border-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-md text-xs font-semibold bg-black/70 backdrop-blur-md text-blue-400 border border-blue-500/30 font-mono">
                      {project.category}
                    </span>
                  </div>

                  {/* Inspect Overlay Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600/90 hover:bg-blue-600 shadow-lg shadow-blue-600/30 transition-transform transform scale-95 group-hover:scale-100"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Details</span>
                    </button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                    </h3>
                    <p className="text-xs font-medium text-blue-400 mt-1">{project.tagline}</p>
                  </div>

                  <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-zinc-900 mt-4 flex items-center justify-between gap-3 pt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                  id={`project-github-${project.id}`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-medium text-zinc-400 hover:text-blue-400 underline underline-offset-4"
                  >
                    Details
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600/90 hover:bg-blue-600 transition-colors shadow-sm shadow-blue-600/20"
                    id={`project-live-${project.id}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for detail preview */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
