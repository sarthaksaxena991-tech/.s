import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Terminal, Info, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectVisualByType } from './ProjectPreviewIllustrations';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F111A] border border-white/10 shadow-2xl shadow-black/80 text-left p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium mb-3 border bg-white/[0.03] text-slate-300 border-white/10">
            <Layers className="w-3.5 h-3.5 text-[#10E79D]" />
            <span>{project.category}</span>
          </div>
          <h2 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-sm text-slate-400">
            {project.tagline}
          </p>
        </div>

        {/* Visual Preview */}
        <div className="rounded-xl overflow-hidden border border-white/[0.08] mb-6">
          <ProjectVisualByType type={project.previewType} />
        </div>

        {/* Deep Dive Description */}
        <div className="mb-6">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
            Architecture & Objective
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Key Features */}
        {project.keyFeatures && (
          <div className="mb-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3 font-mono">
              Key Capabilities & Implementation
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#10E79D] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Placeholder / Link Transparency Notice */}
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-6 text-xs text-slate-400 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-slate-300 block mb-0.5">Configuration Notice</span>
            Repository links and demo URLs can be updated directly in <code className="text-[#10E79D] font-mono">src/data/portfolio.js</code>.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            Close
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/10 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>View Code (GitHub)</span>
          </a>

          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#10E79D] text-black hover:bg-[#10E79D]/90 transition-colors"
            >
              <span>Live Preview</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
