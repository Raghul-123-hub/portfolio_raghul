import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Mail, MapPin, Sparkles, Copy, Check } from 'lucide-react';
import { PROFILE_INFO } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // Send to mail.google.com compose page with pre-filled to, subject, and message
    const formattedSubject = subject.trim() || `Inquiry from ${name.trim()}`;
    const formattedBody = `${message.trim()}\n\n—\nName: ${name.trim()}\nEmail: ${email.trim()}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PROFILE_INFO.email
    )}&su=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      onClose();
    }, 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Dialog — Light Blue Themed Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-[#0b1626] border-2 border-sky-400/60 rounded-3xl p-6 sm:p-8 text-sky-100 shadow-[0_0_60px_rgba(56,189,248,0.25)] z-10 overflow-hidden"
          >
            {/* Top decorative light blue ambient glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-sky-500/20 blur-3xl rounded-full pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-sky-200/70 hover:text-white hover:bg-sky-500/20 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="mb-6 relative">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-300 px-3.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/40 mb-3">
                <Sparkles size={13} className="text-sky-300" /> Available for Roles &amp; Projects
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Get In Touch
              </h3>
              <p className="text-sm text-sky-200/75 mt-1 font-light">
                Reach out directly via Gmail for engineering roles, AI projects, or freelance collaboration.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10 flex flex-col items-center justify-center text-center space-y-3"
              >
                <CheckCircle2 className="w-16 h-16 text-sky-400 animate-bounce" />
                <h4 className="text-xl font-bold text-white">Opening Gmail...</h4>
                <p className="text-sm text-sky-200/80 max-w-xs">
                  Your email draft with subject and message is prepared in Gmail for Raghul D.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-sky-300 mb-1 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Henderson"
                      className="w-full bg-[#06101d] border border-sky-400/30 rounded-xl px-3.5 py-2.5 text-white placeholder-sky-200/30 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/25 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-sky-300 mb-1 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full bg-[#06101d] border border-sky-400/30 rounded-xl px-3.5 py-2.5 text-white placeholder-sky-200/30 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/25 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-sky-300 mb-1 font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Inquiry / Job Opportunity / Video Commission"
                    className="w-full bg-[#06101d] border border-sky-400/30 rounded-xl px-3.5 py-2.5 text-white placeholder-sky-200/30 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/25 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-sky-300 mb-1 font-mono">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your requirements or message for Raghul..."
                    className="w-full bg-[#06101d] border border-sky-400/30 rounded-xl px-3.5 py-2.5 text-white placeholder-sky-200/30 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/25 text-sm transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full cursor-pointer py-3.5 rounded-xl text-slate-950 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-300 shadow-[0_4px_16px_rgba(56,189,248,0.4)] transition-all active:scale-98"
                  >
                    <Send size={15} /> Send via Gmail
                  </button>
                </div>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-sky-400/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-sky-200/70 font-mono">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-left"
              >
                <Mail size={13} className="text-sky-400" />
                <span>{PROFILE_INFO.email}</span>
                {copiedEmail ? <Check size={12} className="text-sky-300" /> : <Copy size={12} />}
              </button>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-sky-400" /> {PROFILE_INFO.location}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
