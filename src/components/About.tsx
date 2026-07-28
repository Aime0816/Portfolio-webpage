import React from 'react';
import { motion } from 'motion/react';
import { User, Sparkles, Code, Cpu, Award, Zap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-blue-500">Aime Nsengiyumva</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Software Engineer, AI Developer, and UI/UX Designer crafting intelligent digital solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Biography Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-500" />
                <span>Bridging Code, Artificial Intelligence & Experience</span>
              </h3>
              
              {PERSONAL_INFO.aboutDetailed.map((paragraph, index) => (
                <p key={index} className="text-zinc-300 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Stack Capability</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">End-to-end architecture from React & Next.js to Node.js, Express, PHP, and databases.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">AI & LLM Integration</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Prompt engineering, Gemini API workflows, and intelligent automated solutions.</p>
                </div>
              </div>
            </div>

            {/* Passion Cards Grid */}
            <div className="pt-4 space-y-3">
              <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">What Drives My Work</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PERSONAL_INFO.passions.map((passion, i) => (
                  <div key={i} className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/90 hover:border-blue-500/50 transition-all duration-300">
                    <h5 className="text-xs font-bold text-blue-400 mb-1">{passion.title}</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">{passion.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Metric Badges Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span>Impact & Metrics</span>
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {PERSONAL_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center hover:border-blue-500/40 transition-colors">
                    <p className="text-3xl font-extrabold text-blue-400 tracking-tight">{stat.value}</p>
                    <p className="text-xs font-medium text-zinc-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Primary Stack</span>
                  <span className="text-blue-400 font-semibold">React, Next.js, Node, Gemini</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Work Status</span>
                  <span className="text-emerald-400 font-semibold">Open to Remote / Relocation</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Design Approach</span>
                  <span className="text-zinc-200 font-semibold">Modern, Dark, Accessible</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
