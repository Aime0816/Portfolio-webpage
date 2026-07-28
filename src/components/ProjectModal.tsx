import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-800 bg-zinc-900/60">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 font-mono">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{project.title}</h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6 overflow-y-auto">
            {/* Image Banner */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 aspect-video bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            </div>

            {/* Tagline & Metric */}
            <div className="space-y-2">
              <p className="text-base font-semibold text-blue-400">{project.tagline}</p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {project.metrics && (
              <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-400 shrink-0" />
                <p className="text-xs font-semibold text-blue-300">{project.metrics}</p>
              </div>
            )}

            {/* Key Features List */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Key Technical Highlights</span>
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="text-xs text-zinc-300 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-900 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 sm:p-6 border-t border-zinc-800 bg-zinc-900/80 flex flex-wrap items-center justify-between gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900 border border-zinc-700 hover:text-white hover:border-blue-500 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Demo</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
