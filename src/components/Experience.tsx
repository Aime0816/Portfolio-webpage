import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Trophy, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'work' | 'hackathon'>('all');

  const filteredItems = EXPERIENCE_ITEMS.filter((item) => {
    if (filterType === 'all') return true;
    if (filterType === 'work') return item.type === 'work';
    if (filterType === 'hackathon') return item.type === 'hackathon';
    return true;
  });

  return (
    <section id="experience" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & <span className="text-blue-500">Hackathons</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Professional roles, hackathon wins, and academic foundation in software engineering.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-zinc-950 p-1.5 rounded-xl border border-zinc-800/80">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                filterType === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              All History
            </button>
            <button
              onClick={() => setFilterType('work')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                filterType === 'work'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setFilterType('hackathon')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                filterType === 'hackathon'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              Hackathons & Awards
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                  id={`exp-card-${item.id}`}
                >
                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-blue-500/40 transition-all duration-300 shadow-xl space-y-3">
                      
                      {/* Period & Badge */}
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-zinc-900 text-blue-400 border border-zinc-800">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>

                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider ${
                          item.type === 'hackathon'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : item.type === 'education'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        }`}>
                          {item.type}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.role}</h3>
                        <p className="text-sm font-semibold text-blue-400">{item.organization}</p>
                        <p className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </p>
                      </div>

                      {item.award && (
                        <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{item.award}</span>
                        </div>
                      )}

                      {/* Bullet points */}
                      <ul className="space-y-1.5 pt-1">
                        {item.description.map((bullet, idx) => (
                          <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed">
                            <span className="text-blue-500 font-bold">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-900">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-950 border-2 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {item.type === 'hackathon' ? (
                      <Trophy className="w-4 h-4 text-amber-400" />
                    ) : item.type === 'education' ? (
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-blue-400" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
