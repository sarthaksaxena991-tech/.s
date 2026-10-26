import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Bookmark, Terminal } from 'lucide-react';
import { educationData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#090A10]">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#818CF8] mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>05 / ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Education & Degrees
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
            Formal coursework in Computer Applications, computer science fundamentals, and advanced software systems.
          </p>
        </div>

        {/* Academic Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-[#10E79D]" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#10E79D]/10 text-[#10E79D] border border-[#10E79D]/20 font-semibold">
                    {edu.status}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#10E79D] transition-colors">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-4">
                  <span className="text-[#38BDF8] font-semibold">{edu.institution}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {edu.details}
                </p>

                {edu.highlights && (
                  <div className="space-y-2 mb-4">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Program Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10E79D] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>DEGREE TRACK</span>
                <span>ACCEDITED INSTITUTION</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
