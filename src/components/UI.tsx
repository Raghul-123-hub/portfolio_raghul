import React, { useRef, useState, useEffect, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { FadeInProps, MagnetProps } from '../types';

// --- FADE IN ---
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  id,
}) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// --- MAGNET EFFECT ---
export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const withinX = Math.abs(distanceX) < rect.width / 2 + padding;
      const withinY = Math.abs(distanceY) < rect.height / 2 + padding;

      if (withinX && withinY) {
        setIsHovered(true);
        setPosition({
          x: distanceX / strength,
          y: distanceY / strength,
        });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ willChange: 'transform' }}
    >
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isHovered
            ? 'transform 0.3s ease-out'
            : 'transform 0.6s ease-in-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
};

// --- CONTACT BUTTON ---
interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  id?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  id,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      className={`cursor-pointer relative group overflow-hidden px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base transition-all duration-300 outline outline-2 outline-white -outline-offset-[3px] hover:scale-105 active:scale-95 select-none ${className}`}
      style={{
        background:
          'linear-gradient(135deg, #0284c7 0%, #38bdf8 50%, #0369a1 100%)',
        boxShadow:
          '0px 4px 15px rgba(56, 189, 248, 0.4), inset 2px 2px 8px #7dd3fc',
      }}
    >
      Contact Me
    </button>
  );
};

// --- LIVE PROJECT BUTTON ---
interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  href,
  className = '',
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block px-8 py-3 sm:px-10 sm:py-3.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer text-center select-none ${className}`}
      >
        Live Project
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-8 py-3 sm:px-10 sm:py-3.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer select-none ${className}`}
    >
      Live Project
    </button>
  );
};

// --- ANIMATED TEXT (Character-by-character scroll-driven reveal) ---
interface AnimatedTextProps {
  text: string;
  className?: string;
}

const CharacterSpan: React.FC<{
  char: string;
  scrollYProgress: any;
  start: number;
  end: number;
}> = ({ char, scrollYProgress, start, end }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for layout stability */}
      <span className="opacity-0 select-none">{char}</span>
      {/* Absolute positioned animated span */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-text"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;

  // Split by words to ensure proper word wrapping while animating character by character
  const words = text.split(' ');

  let charCounter = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.2em] ${className}`}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        return (
          <span key={`word-${wordIndex}`} className="inline-flex whitespace-nowrap">
            {wordChars.map((char) => {
              const currentIndex = charCounter++;
              const start = currentIndex / totalChars;
              const end = Math.min(1, (currentIndex + 1) / totalChars);
              return (
                <CharacterSpan
                  key={`char-${currentIndex}`}
                  char={char}
                  scrollYProgress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
