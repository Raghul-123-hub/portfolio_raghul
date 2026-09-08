import React, { useState } from 'react';
import { FadeIn } from './UI';
import { SERVICES_DATA, SKILLS_DATA } from '../data';
import { Terminal, Database, Brain, Film, Lock, Sparkles, CheckCircle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS_DATA.map((g) => g.category)];

  const displayedSkillGroups =
    activeCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((g) => g.category === activeCategory);

  return (
    <section
      id="skills"
      aria-label="Services and Core Skills"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden relative z-0"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-3">
            <span className="font-mono text-xs text-emerald-600 font-bold tracking-widest uppercase">
              02 / CAPABILITIES &amp; OFFERINGS
            </span>
          </div>
          <h2 className="font-black uppercase text-center text-[clamp(2.8rem,10vw,140px)] leading-none mb-16 sm:mb-20 md:mb-24 text-[#0C0C0C]">
            Services
          </h2>
        </FadeIn>

        {/* 5 Core Services List */}
        <div className="max-w-5xl mx-auto flex flex-col mb-24">
          {SERVICES_DATA.map((service, i) => (
            <FadeIn
              key={service.id}
              delay={i * 0.08}
              y={30}
              className="group flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)] last:border-b transition-colors duration-300 hover:bg-[rgba(12,12,12,0.02)] px-2"
            >
              {/* Service Number on Left */}
              <div className="font-black text-[clamp(2.5rem,8vw,110px)] leading-none text-[#0C0C0C] md:w-1/3 shrink-0 select-none group-hover:translate-x-2 transition-transform duration-300">
                {service.id}
              </div>

              {/* Service Details on Right */}
              <div className="flex flex-col gap-2 md:w-2/3 mt-3 md:mt-0">
                <h3 className="font-semibold uppercase text-[clamp(1.1rem,2vw,1.9rem)] text-[#0C0C0C] tracking-wide">
                  {service.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.5vw,1.15rem)] text-[#0C0C0C]/70">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Technical Skills Matrix */}
        <div className="pt-12 border-t border-black/15">
          <FadeIn delay={0.1} y={30}>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-mono text-xs text-emerald-600 font-bold tracking-widest uppercase">
                TOOLKIT &amp; PROFICIENCIES
              </span>
              <h3 className="font-black uppercase text-3xl sm:text-4xl text-[#0C0C0C] mt-2 mb-3">
                Skills Matrix
              </h3>
              <p className="text-[#0C0C0C]/65 text-sm sm:text-base font-light">
                Technologies, frameworks, and methodologies applied across full-stack production and intelligent algorithms.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0C0C0C] text-white shadow-md'
                      : 'bg-black/5 text-black/70 hover:bg-black/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Groups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedSkillGroups.map((group, idx) => (
                <div
                  key={group.category}
                  className="p-6 rounded-3xl bg-neutral-100/70 border border-black/10 hover:border-black/30 transition-all hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-black">
                        {group.category}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-block px-3 py-1.5 rounded-xl bg-white border border-black/10 text-xs font-mono text-neutral-800 shadow-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

