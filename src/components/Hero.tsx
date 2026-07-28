import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Github, Linkedin, Sparkles, Terminal, ChevronDown, Download, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAssistant }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsEl = document.querySelector('#projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Ambient Glowing Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase shadow-sm"
              id="hero-status-badge"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-time Roles & AI Projects</span>
            </motion.div>

            {/* Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]" id="hero-name">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </motion.div>

            {/* Title / Role Typing Rotator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-xl sm:text-2xl font-medium text-zinc-300"
              id="hero-role-container"
            >
              <Terminal className="w-6 h-6 text-blue-500 shrink-0" />
              <span className="text-blue-400 font-mono font-semibold">
                {PERSONAL_INFO.roles[roleIndex]}
              </span>
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed"
              id="hero-intro"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
              id="hero-cta-buttons"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0"
                id="hero-view-projects-btn"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-zinc-900 border border-zinc-700 hover:border-blue-500 hover:text-white hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                id="hero-contact-me-btn"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenAssistant}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-blue-300 bg-blue-950/40 border border-blue-500/30 hover:bg-blue-900/40 transition-all duration-200"
                id="hero-ask-ai-btn"
              >
                <Sparkles className="w-4 h-4 text-blue-400 animate-spin-slow" />
                <span>Ask AI</span>
              </button>
            </motion.div>

            {/* Social Links & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 border-t border-zinc-800/80 w-full"
              id="hero-social-links"
            >
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-zinc-800 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-zinc-800 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-blue-500 transition-all"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>aime.nsengiyumva@gmail.com</span>
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Profile Card / Avatar Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative group w-full max-w-sm sm:max-w-md"
              id="hero-avatar-card"
            >
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 opacity-30 group-hover:opacity-60 blur-xl transition duration-500" />

              <div className="relative rounded-2xl bg-zinc-950 border border-zinc-800/90 p-5 shadow-2xl space-y-4">
                {/* Avatar Frame */}
                <div className="relative overflow-hidden rounded-xl border border-zinc-800 aspect-square bg-zinc-900">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-3 rounded-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-zinc-400">Location</p>
                      <p className="text-sm font-semibold text-white">Kigali, Rwanda</p>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-mono">
                      Full-Stack & AI
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                    React & Next.js
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400 font-semibold">
                    Gemini AI
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                    Node & PHP
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-500 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <span>Scroll for details</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
