import React from 'react';
import { FadeIn, ContactButton, AnimatedText } from './UI';
import { ABOUT_TEXT, ABOUT_STATS } from '../data';
import { FileText, Award, Layers, Code, Sparkles, Brain, Cpu, Film } from 'lucide-react';

interface AboutSectionProps {
  onContactClick?: () => void;
  onResumeClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick, onResumeClick }) => {
  return (
    <section
      id="about"
      aria-label="About Raghul D"
      className="min-h-screen w-full relative px-5 sm:px-8 md:px-10 py-24 sm:py-32 flex flex-col items-center justify-center bg-[#0C0C0C] overflow-hidden"
    >
      {/* Corner 1: Top-left AI badge */}
      <div className="absolute top-[6%] left-[3%] sm:left-[5%] md:left-[8%] pointer-events-none select-none z-10 hidden sm:block">
        <FadeIn delay={0.1} x={-40} y={0} duration={0.9}>
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-[#BBCCD7]">
            <Brain className="w-6 h-6 text-[#7ee787]" />
            <div className="text-left font-mono text-[11px] leading-tight">
              <span className="text-white font-bold block">AI / ML</span>
              <span className="opacity-60">Models &amp; Vision</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Corner 2: Top-right Full-Stack badge */}
      <div className="absolute top-[6%] right-[3%] sm:right-[5%] md:right-[8%] pointer-events-none select-none z-10 hidden sm:block">
        <FadeIn delay={0.15} x={40} y={0} duration={0.9}>
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-[#BBCCD7]">
            <Cpu className="w-6 h-6 text-[#BBCCD7]" />
            <div className="text-left font-mono text-[11px] leading-tight">
              <span className="text-white font-bold block">Full-Stack</span>
              <span className="opacity-60">NestJS · Next.js</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Corner 3: Bottom-left Creative badge */}
      <div className="absolute bottom-[10%] left-[3%] sm:left-[5%] md:left-[8%] pointer-events-none select-none z-10 hidden sm:block">
        <FadeIn delay={0.25} x={-40} y={0} duration={0.9}>
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-[#BBCCD7]">
            <Film className="w-6 h-6 text-purple-400" />
            <div className="text-left font-mono text-[11px] leading-tight">
              <span className="text-white font-bold block">Video Production</span>
              <span className="opacity-60">CapCut &amp; Color Grade</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Corner 4: Bottom-right Certifications badge */}
      <div className="absolute bottom-[10%] right-[3%] sm:right-[5%] md:right-[8%] pointer-events-none select-none z-10 hidden sm:block">
        <FadeIn delay={0.3} x={40} y={0} duration={0.9}>
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-[#BBCCD7]">
            <Award className="w-6 h-6 text-[#7ee787]" />
            <div className="text-left font-mono text-[11px] leading-tight">
              <span className="text-white font-bold block">8 Certifications</span>
              <span className="opacity-60">IBM · Infosys · Forage</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-20 text-center max-w-4xl mx-auto w-full">
        <FadeIn delay={0} y={40}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#7ee787] tracking-widest uppercase">01 / DISCIPLINE &amp; FOCUS</span>
          </div>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.8rem,10vw,140px)]">
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 sm:gap-16 w-full">
          {/* Scroll-Driven Character Reveal Bio */}
          <AnimatedText text={ABOUT_TEXT} className="max-w-[720px]" />

          {/* Key Stat Badges */}
          <FadeIn delay={0.2} y={30} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto pt-6 border-t border-white/10">
              {ABOUT_STATS.map((stat, i) => (
                <div
                  key={`stat-${i}`}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center hover:border-white/30 transition-colors"
                >
                  <span className="font-mono text-4xl sm:text-5xl font-black text-[#7ee787] leading-none mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#D7E2EA]/70 font-mono tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <ContactButton onClick={onContactClick} />
              <button
                onClick={onResumeClick}
                className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 text-white font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-white/10 hover:border-white transition-all"
              >
                <FileText size={15} /> View Resume
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
