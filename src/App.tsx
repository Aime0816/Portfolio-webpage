import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AimeAssistantDrawer } from './components/AimeAssistantDrawer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Gemini AI Assistant Drawer */}
      <AimeAssistantDrawer
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />
    </div>
  );
}
