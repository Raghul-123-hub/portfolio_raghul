import React, { useState } from 'react';
import { FadeIn, Magnet, ContactButton } from './UI';
import { NAV_LINKS, PROFILE_INFO } from '../data';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import profilePortrait from '../assets/images/raghul_portrait_1788842793118.jpg';

interface HeroSectionProps {
  onContactClick?: () => void;
  onResumeClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick, onResumeClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col justify-between relative overflow-x-clip bg-[#0C0C0C] select-none pt-2 pb-6"
    >
      {/* 1. Navbar */}
      <nav
        aria-label="Main Navigation"
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-50 flex-wrap gap-4"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded border border-[#D7E2EA]/30 flex items-center justify-center font-bold text-sm text-[#BBCCD7] rotate-45">
            <span className="-rotate-45">{PROFILE_INFO.initials}</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7ee787] animate-pulse"></span>
            <span className="font-semibold text-xs tracking-widest uppercase text-[#BBCCD7] hidden sm:inline-block">
              {PROFILE_INFO.kicker}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
          {NAV_LINKS.map((link, i) => (
            <FadeIn key={link.label} delay={i * 0.05} y={-20}>
              <a
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base hover:text-white hover:opacity-100 opacity-70 transition-all duration-200"
                onClick={(e) => {
                  if (link.label === 'Contact' && onContactClick) {
                    e.preventDefault();
                    onContactClick();
                  }
                }}
              >
                {link.label}
              </a>
            </FadeIn>
          ))}
          <FadeIn delay={0.35} y={-20}>
            <button
              onClick={onResumeClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D7E2EA]/30 text-xs uppercase tracking-wider text-[#D7E2EA] hover:bg-white/10 hover:border-white transition-all cursor-pointer"
            >
              <FileText size={13} /> Resume
            </button>
          </FadeIn>
        </div>
      </nav>

      {/* 2. Hero Portrait (Centered with Magnet Physics & User's Corner Brackets) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[310px] md:w-[380px] lg:w-[440px] top-[46%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-14 md:bottom-16 pointer-events-auto">
        <FadeIn delay={0.45} y={30}>
          <Magnet padding={120} strength={3.5}>
            <div className={`portrait-frame rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] ${imageLoaded ? 'is-loaded' : ''}`}>
              <span className="corner c1"></span>
              <span className="corner c2"></span>
              <span className="corner c3"></span>
              <span className="corner c4"></span>
              <img
                src={profilePortrait}
                alt="Portrait of Raghul D"
                referrerPolicy="no-referrer"
                className={`w-full h-auto object-cover aspect-[1/1.12] rounded-xl transition-all duration-700 ${imageLoaded ? 'loaded' : ''}`}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
              <div className="mt-2.5 flex justify-between items-center text-[10px] sm:text-xs text-[#D7E2EA]/60 font-mono tracking-wider px-1">
                <span className="text-[#7ee787]">AI/ML &amp; FULL-STACK</span>
                <span>RAGHUL D.</span>
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 3. Hero Heading */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-20 pointer-events-none my-auto">
        <div className="overflow-hidden w-full text-center">
          <FadeIn delay={0.15} y={40} duration={0.9}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw] mt-4 sm:mt-2 md:-mt-4">
              Hi, i&apos;m raghul
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end px-6 md:px-10 pb-4 sm:pb-6 md:pb-8 relative z-20 gap-4">
        <FadeIn delay={0.35} y={20}>
          <div className="max-w-[280px] sm:max-w-[340px] md:max-w-[400px]">
            <p className="text-[#BBCCD7] text-xs font-mono uppercase tracking-widest mb-1">
              {PROFILE_INFO.tagline}
            </p>
            <p className="text-[#D7E2EA]/80 font-light text-xs sm:text-sm md:text-[0.95rem] leading-snug">
              AI/ML undergraduate with full-stack engineering experience across NestJS, Next.js, and intelligent systems.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <a
                href={PROFILE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/15 text-[#D7E2EA] hover:bg-white/10 hover:border-white/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={15} />
              </a>
              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/15 text-[#D7E2EA] hover:bg-white/10 hover:border-white/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE_INFO.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/15 text-[#D7E2EA] hover:bg-white/10 hover:border-white/40 transition-colors"
                aria-label="Email Raghul via Gmail"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="self-end sm:self-auto">
          <div className="flex items-center gap-3">
            <ContactButton onClick={onContactClick} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

