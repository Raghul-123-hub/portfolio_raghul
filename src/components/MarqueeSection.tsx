import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MARQUEE_TECH, PROJECTS_DATA } from '../data';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const val = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
      setOffset(val);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Tech badges repeated for endless smooth stream
  const row1Tech = [...MARQUEE_TECH, ...MARQUEE_TECH, ...MARQUEE_TECH];

  // Project preview cards
  const previewCards = [
    { title: 'LeadFlow AI', badge: 'NestJS · Next.js · Docker', img: PROJECTS_DATA[0].images[0] },
    { title: 'Shopping Assistant', badge: 'Python · Recommendation', img: PROJECTS_DATA[1].images[0] },
    { title: 'Waste Classification', badge: 'Python · Real-Time Pipeline', img: PROJECTS_DATA[2].images[0] },
    { title: 'Video Production', badge: 'CapCut · Color Grading', img: PROJECTS_DATA[3].images[0] },
    { title: 'Intelligent Logic', badge: 'Boolean Algebra · Systems', img: PROJECTS_DATA[0].images[1] },
    { title: 'Prisma + PostgreSQL', badge: 'RBAC · REST APIs', img: PROJECTS_DATA[1].images[1] },
  ];
  const row2Cards = [...previewCards, ...previewCards, ...previewCards];

  return (
    <section
      ref={sectionRef}
      id="marquee"
      aria-label="Core Capabilities & Tech Stack"
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden flex flex-col gap-5 select-none relative z-10"
    >
      {/* Row 1: High-Speed Tech Stream moving RIGHT */}
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        style={{
          transform: `translate3d(${offset - 250}px, 0, 0)`,
          willChange: 'transform',
        }}
      >
        {row1Tech.map((tech, i) => (
          <div
            key={`tech-${i}`}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#141414] border border-[#D7E2EA]/15 text-[#D7E2EA] text-xs sm:text-sm font-mono uppercase tracking-wider hover:border-[#BBCCD7] transition-colors shrink-0 shadow-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7ee787]"></span>
            <span>{tech}</span>
          </div>
        ))}
      </motion.div>

      {/* Row 2: Visual project preview tiles moving LEFT */}
      <motion.div
        className="flex gap-5 whitespace-nowrap"
        style={{
          transform: `translate3d(${-offset - 100}px, 0, 0)`,
          willChange: 'transform',
        }}
      >
        {row2Cards.map((card, i) => (
          <div
            key={`card-${i}`}
            className="w-[320px] sm:w-[380px] h-[210px] shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-white/10 relative group transition-transform duration-300 hover:scale-[1.02] shadow-2xl"
          >
            <img
              src={card.img}
              alt={card.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-end">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#BBCCD7] mb-1">
                {card.badge}
              </span>
              <h4 className="text-lg font-bold text-white tracking-wide uppercase">
                {card.title}
              </h4>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
