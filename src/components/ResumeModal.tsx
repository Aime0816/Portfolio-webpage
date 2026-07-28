import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, CheckCircle2, Briefcase, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCE_ITEMS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-800 bg-zinc-900/80">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Aime Nsengiyumva — Curriculum Vitae</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-zinc-200 text-sm leading-relaxed" id="printable-resume">
            
            {/* Header info */}
            <div className="border-b border-zinc-800 pb-6 space-y-2 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-white">{PERSONAL_INFO.name}</h1>
              <p className="text-base font-semibold text-blue-400">{PERSONAL_INFO.title}</p>
              <p className="text-xs text-zinc-400">{PERSONAL_INFO.location} • {PERSONAL_INFO.email}</p>
              <div className="flex flex-wrap gap-4 text-xs text-blue-400 pt-1 justify-center sm:justify-start">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 border-b border-zinc-800 pb-1 flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Professional Summary</span>
              </h2>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Technical Skills Summary */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 border-b border-zinc-800 pb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Core Competencies & Technologies</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title} className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800/80">
                    <span className="font-bold text-white">{cat.title}: </span>
                    <span className="text-zinc-300">{cat.skills.map(s => s.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 border-b border-zinc-800 pb-1 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience & Hackathons</span>
              </h2>
              <div className="space-y-4">
                {EXPERIENCE_ITEMS.map((item) => (
                  <div key={item.id} className="space-y-1">
                    <div className="flex items-center justify-between font-bold text-white text-xs">
                      <span>{item.role} — <span className="text-blue-400">{item.organization}</span></span>
                      <span className="text-zinc-400 font-mono">{item.period}</span>
                    </div>
                    {item.award && (
                      <p className="text-xs font-semibold text-amber-300">🏆 {item.award}</p>
                    )}
                    <ul className="list-disc list-inside text-[11px] text-zinc-300 space-y-0.5">
                      {item.description.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
