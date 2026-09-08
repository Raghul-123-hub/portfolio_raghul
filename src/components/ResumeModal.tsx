import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, GraduationCap, Award, Briefcase, Code } from 'lucide-react';
import { PROFILE_INFO, PROJECTS_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, SKILLS_DATA } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative flex w-full max-w-4xl max-h-[90vh] flex-col overflow-hidden rounded-3xl border border-white/20 bg-[#111111] p-6 text-[#E5E5E5] shadow-2xl z-10 font-sans sm:p-10 print:bg-white print:text-black print:p-0 print:border-0"
          >
            {/* Action Bar */}
            <div className="flex justify-between items-center pb-6 border-b border-white/10 mb-8 print:hidden">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7ee787]"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#BBCCD7]">
                  Curriculum Vitae / Raghul D
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-white hover:bg-white/15 transition-colors cursor-pointer"
                >
                  <Printer size={13} /> Print
                </button>
                <a
                  href="/Raghul_D_Resume.pdf"
                  download="Raghul_D_Resume.pdf"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#7ee787] text-black font-semibold text-xs font-mono hover:bg-[#7ee787]/90 transition-colors shadow-sm cursor-pointer"
                >
                  <Download size={13} /> Request PDF
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="min-h-0 flex-1 overflow-y-auto pr-1 space-y-8 print:text-black print:overflow-visible">
              {/* Header */}
              <div className="text-center sm:text-left border-b border-white/10 pb-6">
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white print:text-black uppercase">
                  {PROFILE_INFO.name}
                </h1>
                <p className="text-sm sm:text-base text-[#BBCCD7] mt-1 font-mono">
                  {PROFILE_INFO.title}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#D7E2EA]/70 mt-3">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE_INFO.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[#7ee787] transition-colors"
                  >
                    <Mail size={12} className="text-[#7ee787]" /> {PROFILE_INFO.email}
                  </a>
                  <a
                    href={`tel:${PROFILE_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-1 hover:text-[#7ee787] transition-colors"
                  >
                    <Phone size={12} className="text-[#7ee787]" /> {PROFILE_INFO.phone}
                  </a>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-[#7ee787]" /> {PROFILE_INFO.location}
                  </span>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#7ee787] font-bold mb-3 flex items-center gap-2">
                  <GraduationCap size={15} /> Education
                </h2>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-bold text-white text-base">
                      {EDUCATION_DATA.degree}
                    </h3>
                    <span className="font-mono text-xs text-[#7ee787]">
                      {EDUCATION_DATA.graduation}
                    </span>
                  </div>
                  <p className="text-xs text-[#D7E2EA]/70 mt-0.5">
                    {EDUCATION_DATA.institution}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {EDUCATION_DATA.coursework.map((c) => (
                      <span key={c} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#D7E2EA]/80">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Projects */}
              <div>
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#7ee787] font-bold mb-3 flex items-center gap-2">
                  <Code size={15} /> Technical Projects
                </h2>
                <div className="space-y-4">
                  {PROJECTS_DATA.map((proj) => (
                    <div key={proj.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h3 className="font-bold text-white text-base flex items-center gap-2">
                          {proj.name} <span className="text-xs font-mono font-normal text-white/50">/ {proj.sub}</span>
                        </h3>
                        <span className="text-xs font-mono text-[#7ee787]">{proj.tag}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {proj.technologies?.map((tech) => (
                          <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#BBCCD7]">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#D7E2EA]/80 list-disc list-inside font-light">
                        {proj.bullets?.map((bullet, i) => (
                          <li key={i} className="leading-relaxed">{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#7ee787] font-bold mb-3 flex items-center gap-2">
                  <Award size={15} /> Certifications &amp; Job Simulations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CERTIFICATIONS_DATA.map((cert, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/10 flex justify-between items-center text-xs">
                      <div>
                        <div className="font-semibold text-white">{cert.name}</div>
                        <div className="text-[#D7E2EA]/60 font-mono text-[11px]">{cert.issuer}</div>
                      </div>
                      <span className="font-mono text-[#7ee787] text-[11px] shrink-0 ml-2">{cert.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Matrix */}
              <div>
                <h2 className="text-sm font-mono uppercase tracking-widest text-[#7ee787] font-bold mb-3">
                  Technical Skills &amp; Competencies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {SKILLS_DATA.map((group) => (
                    <div key={group.category} className="p-3 rounded-lg bg-white/[0.02] border border-white/10">
                      <span className="font-mono text-[#BBCCD7] font-semibold block mb-1.5 uppercase text-[11px]">
                        {group.category}
                      </span>
                      <p className="text-[#D7E2EA]/80 font-mono leading-relaxed">
                        {group.skills.join(' · ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
