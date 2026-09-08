import React, { useState } from 'react';
import { FadeIn } from './UI';
import { CERTIFICATIONS_DATA, INTERESTS_DATA } from '../data';
import { Award, CheckCircle, ExternalLink, Sparkles, Compass } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'AI, ML & Data Science', 'Cloud Computing', 'Job Simulations (Forage)'];

  const filteredCerts =
    activeFilter === 'All'
      ? CERTIFICATIONS_DATA
      : CERTIFICATIONS_DATA.filter((c) => c.category === activeFilter);

  return (
    <section
      id="certifications"
      aria-label="Certifications and Professional Training"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-3">
            <span className="font-mono text-xs text-[#7ee787] font-bold tracking-widest uppercase">
              05 / CREDENTIALS &amp; SIMULATIONS
            </span>
          </div>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,8vw,100px)] leading-none mb-4">
            Certifications
          </h2>
          <p className="text-[#D7E2EA]/65 text-center max-w-xl mx-auto text-sm sm:text-base font-light mb-12">
            Verified technical completions across Artificial Intelligence, Deep Learning, Cloud, and real-world enterprise job simulations.
          </p>
        </FadeIn>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-20">
          {filteredCerts.map((cert, i) => (
            <FadeIn
              key={`${cert.name}-${i}`}
              delay={i * 0.05}
              y={20}
              className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#7ee787]/50 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-[#7ee787] px-2 py-0.5 rounded-md bg-[#7ee787]/10 border border-[#7ee787]/20 uppercase">
                    {cert.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#D7E2EA]/50">
                    {cert.date}
                  </span>
                </div>

                <h4 className="font-bold text-white text-base leading-snug group-hover:text-[#BBCCD7] transition-colors mb-2">
                  {cert.name}
                </h4>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#D7E2EA]/60 font-mono mt-3">
                <span className="flex items-center gap-1">
                  <Award size={13} className="text-[#7ee787]" />
                  {cert.issuer}
                </span>
                <span className="text-emerald-400 text-[11px] font-mono">Verified</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Areas of Interest */}
        <div className="pt-12 border-t border-white/10 max-w-4xl mx-auto">
          <FadeIn delay={0.1} y={20}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Compass className="w-4 h-4 text-[#7ee787]" />
              <span className="font-mono text-xs text-[#BBCCD7] font-semibold tracking-widest uppercase">
                Active Areas of Interest &amp; Future Research
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {INTERESTS_DATA.map((interest) => (
                <span
                  key={interest}
                  className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/15 text-sm font-mono text-[#D7E2EA] hover:border-white/40 hover:bg-white/[0.06] transition-all cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
