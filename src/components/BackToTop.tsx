import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }

      // Show button once scrolled past 180px
      if (scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`back-to-top-container fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        className="back-to-top group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
        href="#top"
        onClick={scrollToTop}
        aria-label="Back to top of page"
        title="Back to top"
        style={{
          background: `conic-gradient(#7ee787 ${scrollProgress}%, rgba(255, 255, 255, 0.12) ${scrollProgress}%)`,
        }}
      >
        {/* Inner circle mask that forms the 3px progress ring */}
        <div className="absolute inset-[3px] rounded-full bg-[#121212] flex items-center justify-center transition-colors group-hover:bg-[#181818]">
          <svg
            className="arrow-up transition-transform duration-300 group-hover:-translate-y-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            stroke="#f5f5f5"
            strokeWidth="2.75"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              className="group-hover:stroke-[#7ee787] transition-colors"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};
