import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2, FileText, Sparkles, Send } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
  onOpenAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenResume,
  onOpenAssistant
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2 text-xl font-bold text-white tracking-tight"
            id="nav-logo"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Code2 className="w-5 h-5" />
            </div>
            <span>
              Aime<span className="text-blue-500">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-sm" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                  id={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3" id="nav-actions">
            <button
              onClick={onOpenAssistant}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-400 bg-blue-950/40 border border-blue-500/30 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
              id="nav-ai-assistant-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>Ask AI Assistant</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-700 hover:text-white hover:border-zinc-500 transition-all duration-200"
              id="nav-resume-btn"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-md shadow-blue-600/30"
              id="nav-hire-btn"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenAssistant}
              className="p-2 rounded-lg text-blue-400 bg-blue-950/40 border border-blue-500/30"
              title="Ask AI"
              id="mobile-ai-btn"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-xl px-4 pt-3 pb-6"
            id="mobile-menu-drawer"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-zinc-200 bg-zinc-900 border border-zinc-700"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  View Resume
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAssistant();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 shadow-lg shadow-blue-600/20"
                >
                  <Sparkles className="w-4 h-4" />
                  Ask AI Assistant
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
