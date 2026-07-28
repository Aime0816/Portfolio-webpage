import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 py-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <a href="#hero" className="flex items-center gap-2 text-lg font-bold text-white">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span>
                Aime<span className="text-blue-500">.dev</span>
              </span>
            </a>
            <p className="text-xs text-zinc-500">
              Software Engineer | AI Developer | UI/UX Designer
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-md ml-2"
              title="Back to Top"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Aime Nsengiyumva. Designed & Built with React, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};
