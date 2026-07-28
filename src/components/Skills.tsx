import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Database, Sparkles, Wrench, Search, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const categoriesList = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = SKILL_CATEGORIES.filter(cat => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
      return false;
    }
    return true;
  }).map(cat => {
    if (!searchQuery.trim()) return cat;
    const query = searchQuery.toLowerCase();
    const matchingSkills = cat.skills.filter(s => s.name.toLowerCase().includes(query));
    return { ...cat, skills: matchingSkills };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-blue-500">Technologies</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Grouped by functional domain, honed through hands-on full-stack projects and AI applications.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-zinc-950 p-1.5 rounded-xl border border-zinc-800/80 w-full md:w-auto">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g., React, AI, PHP)..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.title}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    <p className="text-xs text-zinc-400">{category.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3.5 mt-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle className={`w-3.5 h-3.5 ${skill.highlight ? 'text-blue-400' : 'text-zinc-500'}`} />
                          <span className={`font-semibold ${skill.highlight ? 'text-white' : 'text-zinc-300'}`}>
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {skill.experienceYears && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono">
                              {skill.experienceYears}
                            </span>
                          )}
                          <span className="font-mono text-blue-400 font-semibold">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-blue-600 to-sky-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                              : 'bg-zinc-600'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-zinc-500 text-sm">
            No skills matched "{searchQuery}". Try searching for another skill term!
          </div>
        )}
      </div>
    </section>
  );
};
