import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code2, Database, Brain, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Radial Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#10E79D]/10 via-[#38BDF8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Narrative (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status / Focus Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 hover:border-[#10E79D]/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10E79D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10E79D]"></span>
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wide">
                {personalInfo.statusBadge}
              </span>
            </div>

            {/* Confident Name & Overline */}
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#10E79D] font-semibold block mb-2">
                Portfolio & Academic Work
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                {personalInfo.name}
              </h1>
            </div>

            {/* Core Headline */}
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 mb-6 leading-snug">
              {personalInfo.headline}
            </p>

            {/* Supporting Bio Text */}
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mb-8">
              {personalInfo.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#10E79D] text-black hover:bg-[#10E79D]/90 transition-all duration-200 shadow-lg shadow-[#10E79D]/20 hover:shadow-[#10E79D]/30 hover:-translate-y-0.5 group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quick Tech Spectrum Chips */}
            <div className="pt-6 border-t border-white/[0.08] w-full">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Core Domains & Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Python & Data', icon: Terminal },
                  { label: 'React & Frontend', icon: Code2 },
                  { label: 'Node & APIs', icon: Database },
                  { label: 'Agentic AI Concepts', icon: Brain },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
                    >
                      <Icon className="w-3 h-3 text-[#10E79D]" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Typographic & Architectural Visual Showcase (Col 8-12) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            {/* Outer Decorative Frame */}
            <div className="relative w-full max-w-md p-6 rounded-2xl bg-[#0F111A]/90 border border-white/10 shadow-2xl shadow-black/60 backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10E79D]/70" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">developer.profile</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10E79D]" />
                  <span>Verified Info</span>
                </div>
              </div>

              {/* Monogram Display Visual */}
              <div className="relative p-6 rounded-xl bg-gradient-to-b from-[#131622] to-[#0A0B10] border border-white/[0.06] mb-5 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#10E79D]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#10E79D]/10 border border-[#10E79D]/20 overflow-hidden flex items-center justify-center">
                    <img
                      src={personalInfo.profileImage}
                      alt={`${personalInfo.name} profile`}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.remove(); e.currentTarget.parentElement.querySelector('span').classList.remove('hidden'); }}
                    />
                    <span className="hidden font-display font-extrabold text-xl text-[#10E79D]">SK</span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">VIT Bhopal University</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#38BDF8] font-semibold tracking-wider">
                    Master of Computer Applications
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    Sarthak Kumar Saxena
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    Exploring software development, Python programming, data analytics, and machine learning.
                  </p>
                </div>
              </div>

              {/* Academic & Verification Indicators */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                    Graduate Degree
                  </span>
                  <p className="text-xs font-semibold text-white">MCA Candidate</p>
                  <p className="text-[11px] text-slate-400">VIT Bhopal University</p>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                    Undergraduate
                  </span>
                  <p className="text-xs font-semibold text-white">BCA Graduate</p>
                  <p className="text-[11px] text-slate-400">MJPRU</p>
                </div>
              </div>

              {/* Verified Credentials Pills */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#10E79D]/5 border border-[#10E79D]/20 text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#10E79D]" />
                    <span className="text-slate-200 font-medium">Oracle Agentic AI Associate</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#10E79D] font-semibold uppercase px-1.5 py-0.5 rounded bg-[#10E79D]/10">
                    Passed
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#38BDF8]/5 border border-[#38BDF8]/20 text-xs">
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span className="text-slate-200 font-medium">Deloitte Data Analytics</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#38BDF8] font-semibold uppercase px-1.5 py-0.5 rounded bg-[#38BDF8]/10">
                    Simulation
                  </span>
                </div>
              </div>

              {/* Subtle Corner Accents */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>STATUS: ACTIVE STUDY</span>
                <span className="text-[#10E79D]">ALL CREDENTIALS VERIFIED</span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator at bottom */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-slate-300">
              Scroll to explore
            </span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#10E79D]/50 transition-colors">
              <div className="w-1 h-2 bg-[#10E79D] rounded-full animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
