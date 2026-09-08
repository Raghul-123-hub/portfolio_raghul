import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#0F0F0F] border border-[#D7E2EA]/20 rounded-3xl p-5 sm:p-8 text-[#D7E2EA] shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:bg-white/10 transition-colors z-20 cursor-pointer"
            aria-label="Close project modal"
          >
            <X size={22} />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#BBCCD7] mb-2 font-mono">
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-[#7ee787]">{project.tag}</span>
              <span>Project {project.id}</span>
              {project.sub && <span className="opacity-60 hidden sm:inline-block">/ {project.sub}</span>}
            </div>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-wide">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base text-[#D7E2EA]/80 mt-2 font-light max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            {project.technologies && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#BBCCD7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Key Milestones / Bullets */}
          {project.bullets && project.bullets.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#161616] border border-white/10 mb-6 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#BBCCD7] block mb-2">
                Implementation Highlights
              </span>
              {project.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/85">
                  <CheckCircle2 size={15} className="text-[#7ee787] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          )}

          {/* Image Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl overflow-hidden bg-[#161616]">
              <img
                src={project.images[0]}
                alt={`${project.name} Main View`}
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden bg-[#161616] flex-1">
                <img
                  src={project.images[1]}
                  alt={`${project.name} Technical Schema`}
                  referrerPolicy="no-referrer"
                  className="w-full h-32 sm:h-38 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#161616] flex-1">
                <img
                  src={project.images[2] || project.images[0]}
                  alt={`${project.name} Detail 2`}
                  referrerPolicy="no-referrer"
                  className="w-full h-32 sm:h-38 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#D7E2EA]/60 font-mono">
            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <Github size={14} /> Repository
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors uppercase tracking-wider text-xs font-medium cursor-pointer"
            >
              Close View
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

