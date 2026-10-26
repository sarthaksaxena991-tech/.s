import React, { useState } from 'react';
import { Terminal, Code, Server, Database, Brain, Sparkles, Check, Cpu } from 'lucide-react';
import { skillsCategories } from '../data/portfolio';

const categoryIconMap = {
  Programming: Terminal,
  "Frontend Development": Code,
  "Backend & Systems": Server,
  "Databases & Storage": Database,
  "Data Science & AI Foundations": Brain,
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', ...skillsCategories.map(c => c.category)];

  const filteredCategories = selectedFilter === 'All'
    ? skillsCategories
    : skillsCategories.filter(c => c.category === selectedFilter);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#08090E]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#38BDF8] mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 / TECHNICAL TOOLKIT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Technologies & Core Competencies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
            Curated technical skills organized by domain. Grounded in coursework, ongoing study, and hands-on project implementations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/[0.06]">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#10E79D] text-black font-semibold shadow-md shadow-[#10E79D]/20'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catItem, idx) => {
            const Icon = categoryIconMap[catItem.category] || Sparkles;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#10E79D] group-hover:bg-[#10E79D]/10 group-hover:border-[#10E79D]/30 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-white">
                          {catItem.category}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400">
                          {catItem.skills.length} competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {catItem.description}
                  </p>

                  {/* Skills Tag List */}
                  <div className="space-y-2.5">
                    {catItem.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-all flex items-center justify-between group/item"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-[#10E79D]' : 'bg-slate-500'}`} />
                          <span className="text-xs font-semibold text-slate-200 group-hover/item:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/5">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>PRACTICAL & ACADEMIC</span>
                  <span className="text-[#10E79D]">CONTINUOUS STUDY</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
