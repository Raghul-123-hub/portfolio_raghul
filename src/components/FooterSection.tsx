import React from 'react';
import { FadeIn, ContactButton } from './UI';
import { PROFILE_INFO, NAV_LINKS } from '../data';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterSectionProps {
  onContactClick?: () => void;
  onResumeClick?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onContactClick, onResumeClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      aria-label="Footer and Contact"
      className="pt-24 pb-16 text-center bg-[#0C0C0C] relative z-20 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <FadeIn delay={0} y={20}>
          <span className="font-mono text-xs text-[#7ee787] font-bold tracking-widest uppercase block mb-3">
            06 / GET CONNECTED
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-none mb-6">
            Let&apos;s Build Something Real
          </h2>
          <p className="text-[#D7E2EA]/70 font-light text-sm sm:text-base max-w-xl mx-auto mb-10">
            Open for software engineering roles, AI/ML research collaborations, full-stack client projects, and video production work.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <ContactButton onClick={onContactClick} />
            <button
              onClick={onResumeClick}
              className="cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 rounded-full border border-white/25 text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-white/10 hover:border-white transition-all"
            >
              Resume
            </button>
          </div>
        </FadeIn>

        {/* Social / Contact Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16 text-xs sm:text-sm font-mono text-[#D7E2EA]/80">
          <a
            href={PROFILE_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/40 transition-colors"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={PROFILE_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/40 transition-colors"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE_INFO.email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/40 transition-colors"
          >
            <Mail size={15} /> {PROFILE_INFO.email}
          </a>
          <a
            href={`tel:${PROFILE_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/40 transition-colors"
          >
            <Phone size={15} /> {PROFILE_INFO.phone}
          </a>
        </div>

        {/* Back to top & Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/40 font-mono gap-4">
          <p className="tracking-widest uppercase">
            &copy; 2026 RAGHUL D &mdash; ALL RIGHTS RESERVED
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            Back to Top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

