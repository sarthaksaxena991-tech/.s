import React from 'react';
import { GraduationCap, Code2, Brain, Sparkles, CheckCircle2, Terminal, Layers } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolio';

const iconMap = {
  GraduationCap: GraduationCap,
  Code2: Code2,
  Brain: Brain,
  Sparkles: Sparkles,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#090A10]">
      {/* Background Subtle Accent */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#10E79D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#10E79D] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Bridging foundational engineering with practical AI & data systems.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {aboutData.bioParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Academic Transition Highlight Box */}
            <div className="mt-8 p-6 rounded-2xl bg-[#0F111A] border border-white/10 shadow-lg">
              <span className="text-xs font-mono uppercase tracking-wider text-[#10E79D] font-semibold block mb-2">
                Educational Trajectory
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-300">
                <div className="flex-1 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-mono text-slate-400 block">FOUNDATION</span>
                  <p className="font-semibold text-white">BCA — MJPRU</p>
                  <p className="text-xs text-slate-400 mt-1">Core computation, data structures, relational databases</p>
                </div>
                <div className="hidden sm:block text-slate-600 font-mono text-xl">→</div>
                <div className="flex-1 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-mono text-[#10E79D] block">ADVANCED SPECIALIZATION</span>
                  <p className="font-semibold text-white">MCA — VIT Bhopal</p>
                  <p className="text-xs text-slate-400 mt-1">Modern web architectures, Python data pipelines, AI/ML</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.highlights.map((item, idx) => {
              const Icon = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#10E79D] group-hover:bg-[#10E79D]/10 group-hover:border-[#10E79D]/30 transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {item.title}
                  </span>
                  <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-[#10E79D] transition-colors">
                    {item.value}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Engineering Approach / Philosophy Blocks */}
        <div className="pt-12 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-semibold block mb-2">
                WORK ETHIC & METHODOLOGY
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                How I approach building software
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              A structured mindset applied across academic coursework, personal experiments, and engineering projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.approachItems.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-200 group"
              >
                <span className="font-mono text-2xl font-extrabold text-white/20 group-hover:text-[#10E79D]/50 transition-colors block mb-3">
                  {item.number}
                </span>
                <h4 className="font-display text-base font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
