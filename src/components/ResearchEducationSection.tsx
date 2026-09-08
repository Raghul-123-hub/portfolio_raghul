import React from 'react';
import { FadeIn } from './UI';
import { EDUCATION_DATA } from '../data';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';

export const ResearchEducationSection: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Academic Foundations & Education"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-3">
            <span className="font-mono text-xs text-[#7ee787] font-bold tracking-widest uppercase">
              04 / ACADEMIC FOUNDATIONS
            </span>
          </div>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,8vw,100px)] leading-none mb-14 sm:mb-18">
            Education
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.15} y={30}>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-[#D7E2EA]/15 hover:border-[#BBCCD7]/40 transition-all duration-300 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#7ee787] uppercase tracking-wider">
                  <GraduationCap size={15} /> University Degree Program
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#7ee787] bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/10 w-fit">
                  <Calendar size={14} /> {EDUCATION_DATA.graduation}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-3 leading-tight">
                {EDUCATION_DATA.degree}
              </h3>

              <div className="flex items-center gap-2 text-sm sm:text-base text-[#D7E2EA]/80 mb-8 font-mono">
                <MapPin size={16} className="shrink-0 text-[#7ee787]" />
                <span>{EDUCATION_DATA.institution}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10 mb-8">
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#BBCCD7] block">
                    Key Academic Highlights
                  </span>
                  <div className="space-y-2.5 text-xs sm:text-sm text-[#D7E2EA]/85">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#7ee787] shrink-0 mt-0.5" />
                      <span>Specialization in Neural Architectures, Recommendation Systems, and Data Science.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#7ee787] shrink-0 mt-0.5" />
                      <span>Applied engineering rigor through end-to-end full-stack SaaS and intelligent model builds.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#7ee787] shrink-0 mt-0.5" />
                      <span>Saveetha Institute of Medical and Technical Sciences (SIMATS) Engineering.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#BBCCD7] block mb-3">
                    Core Coursework
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION_DATA.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#D7E2EA] hover:border-[#7ee787]/50 hover:text-white transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/50 font-mono gap-2">
                <span className="flex items-center gap-1.5">
                  <Award size={13} className="text-[#7ee787]" /> SIMATS Engineering Department
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#7ee787]" /> Saveetha School of Engineering
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
