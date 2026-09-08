import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn, LiveProjectButton } from './UI';
import { PROJECTS_DATA } from '../data';
import type { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  total: number;
  onProjectClick?: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  total,
  onProjectClick,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-[85vh] flex items-center justify-center sticky top-24 md:top-32 mb-12 sm:mb-16 last:mb-0"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="w-full max-w-7xl border-2 border-[#D7E2EA] bg-[#0C0C0C] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative transition-shadow duration-300 hover:border-white"
      >
        {/* Top row */}
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="flex items-start gap-4 sm:gap-6">
            <span className="font-black text-[clamp(2.5rem,7vw,90px)] leading-none text-[#D7E2EA] opacity-25 select-none font-mono">
              {project.id}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#7ee787] uppercase text-xs tracking-widest font-mono font-semibold">
                  {project.tag}
                </span>
                {project.sub && (
                  <span className="text-white/40 text-xs font-mono hidden sm:inline-block">
                    / {project.sub}
                  </span>
                )}
              </div>
              <h3 className="text-white font-bold uppercase text-xl sm:text-2xl md:text-3xl tracking-wide">
                {project.name}
              </h3>
              {project.technologies && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-mono text-[#D7E2EA]/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-mono text-white/50">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LiveProjectButton
              onClick={() => onProjectClick?.(project)}
            />
          </div>
        </div>

        {/* Bottom row: Two-column image grid (Left 40% has 2 stacked, Right 60% has 1 tall) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
          {/* Left Column (col-span-5 = ~40% width) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] bg-[#161616]">
              <img
                src={project.images[0]}
                alt={`${project.name} preview 1`}
                referrerPolicy="no-referrer"
                className="w-full h-[clamp(130px,16vw,230px)] object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] bg-[#161616] flex-1">
              <img
                src={project.images[1]}
                alt={`${project.name} preview 2`}
                referrerPolicy="no-referrer"
                className="w-full h-[clamp(160px,22vw,340px)] object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (col-span-7 = ~60% width) */}
          <div className="md:col-span-7 h-full flex">
            <div className="overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] bg-[#161616] w-full min-h-[290px] md:min-h-[400px]">
              <img
                src={project.images[2]}
                alt={`${project.name} preview 3`}
                referrerPolicy="no-referrer"
                className="w-full h-full min-h-[290px] md:min-h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onProjectClick?: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onProjectClick,
}) => {
  return (
    <section
      id="projects"
      aria-label="Featured 3D Projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 -mt-10 sm:-mt-12 md:-mt-14 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-14 sm:mb-20">
            Project
          </h2>
        </FadeIn>

        <div className="relative flex flex-col">
          {PROJECTS_DATA.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              total={PROJECTS_DATA.length}
              onProjectClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
