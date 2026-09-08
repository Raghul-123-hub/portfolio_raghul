import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchEducationSection } from './components/ResearchEducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { BackToTop } from './components/BackToTop';
import type { ProjectItem } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <main id="top" className="w-full bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip min-h-screen selection:bg-[#7ee787] selection:text-black relative">
      {/* 1. HERO SECTION */}
      <HeroSection onContactClick={handleOpenContact} onResumeClick={handleOpenResume} />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onContactClick={handleOpenContact} onResumeClick={handleOpenResume} />

      {/* 4. SERVICES & SKILLS SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection onProjectClick={handleOpenProject} />

      {/* 6. RESEARCH & EDUCATION SECTION */}
      <ResearchEducationSection />

      {/* 7. CERTIFICATIONS & INTERESTS SECTION */}
      <CertificationsSection />

      {/* 8. FOOTER SECTION */}
      <FooterSection onContactClick={handleOpenContact} onResumeClick={handleOpenResume} />

      {/* Back to Top Button with Scroll Progress Indicator */}
      <BackToTop />

      {/* Interactive Modals */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
      <ProjectModal project={selectedProject} onClose={handleCloseProject} />
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </main>
  );
}

