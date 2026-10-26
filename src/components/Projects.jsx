import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolio';
import { ProjectVisualByType } from './ProjectPreviewIllustrations';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#090A10]">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#10E79D] mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 / FEATURED PROJECTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected Technical Work
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Academic projects, full-stack implementations, and data analytics investigations across health informatics, railway logistics, and machine telemetry.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-xl shadow-black/40 group"
            >
              <div>
                {/* Visual Mockup Header */}
                <div className="relative border-b border-white/[0.08] overflow-hidden">
                  <ProjectVisualByType type={project.previewType} />
                  
                  {/* Category Pill Overlay */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border ${project.badgeColor} backdrop-blur-md`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#10E79D] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-400 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links Footer */}
              <div className="px-6 sm:px-7 py-4 bg-white/[0.01] border-t border-white/[0.06] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10E79D] hover:text-[#10E79D]/80 transition-colors cursor-pointer"
                >
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
                    title="View repository on GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Code</span>
                  </a>

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
                      title="View live deployment"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
