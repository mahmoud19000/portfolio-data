import { useState } from "react";
import { ArrowRight, X, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects, type Project } from "@/data/portfolio";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [galleryIndex, setGalleryIndex] = useState(0);

  const next = () => setGalleryIndex((i) => (i + 1) % project.gallery.length);
  const prev = () => setGalleryIndex((i) => (i - 1 + project.gallery.length) % project.gallery.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]" />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#12141a] border border-white/10 shadow-2xl animate-[scaleIn_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Gallery carousel */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl bg-black/40">
          <img
            src={project.gallery[galleryIndex].url}
            alt={project.gallery[galleryIndex].label}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent" />

          {/* Gallery controls */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 border border-white/10 text-white hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 border border-white/10 text-white hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Gallery label */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold backdrop-blur-sm">
              {project.gallery[galleryIndex].label}
            </span>
            <span className="text-gray-400 text-xs hidden sm:inline">
              {project.gallery[galleryIndex].description}
            </span>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 right-4 flex gap-1.5">
            {project.gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setGalleryIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === galleryIndex
                    ? "w-6 bg-cyan-400"
                    : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

          <div className="space-y-5">
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-2">
                The Problem
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-2">
                The Solution
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-6">
            <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Github className="h-4 w-4" />
              GitHub Repo
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Featured Projects
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Selected{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)] hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Cover image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.summary}
                </p>

                {/* Tech preview */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-cyan-400/5 border border-cyan-400/10 text-cyan-300/80 text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-500 text-[11px] font-medium">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className="group/btn inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:gap-3 transition-all"
                >
                  More Info
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
