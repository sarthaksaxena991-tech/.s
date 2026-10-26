import React from 'react';
import { Award, CheckCircle2, ExternalLink, Sparkles, Compass, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { certificationsData, ongoingLearning } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#08090E]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#10E79D] mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>04 / CREDENTIALS & LEARNING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Certifications & Technical Horizon
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Verified professional certifications and structured virtual simulations, alongside active exploration topics.
          </p>
        </div>

        {/* Completed Certifications (Prominent Cards) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-[#10E79D]" />
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider font-mono text-xs">
              Verified Certifications & Programs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#10E79D]">
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#10E79D]/10 text-[#10E79D] border border-[#10E79D]/30 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{cert.status}</span>
                    </span>
                  </div>

                  <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#10E79D] transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Core Subject Areas:
                    </span>
                    <div className="space-y-1.5">
                      {cert.keyTopics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10E79D]/60" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {cert.type}
                  </span>
                  
                  {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#10E79D] hover:underline"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400">
                      Credential Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Separate Ongoing Learning Track */}
        <div className="pt-10 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-4 h-4 text-[#38BDF8]" />
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider font-mono text-xs">
              Active Learning & Ongoing Focus
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ongoingLearning.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    HORIZON 0{idx + 1}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20">
                    <Clock className="w-2.5 h-2.5" />
                    <span>{item.status}</span>
                  </span>
                </div>

                <h4 className="font-display text-base font-bold text-white mb-2">
                  {item.topic}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
