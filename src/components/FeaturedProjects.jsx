import { useState } from "react";
import { PROJECTS } from "../types";
import { Clock, Sparkles, LayoutGrid } from "lucide-react";

export default function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="badge-pill bg-brand-blue/10 text-brand-blue mb-3">
              Craftsmanship Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Featured Plumbing Engineering Projects
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              We approach every challenge as a long-term mechanical solution. Inspect our latest water restorations, luxury residential integrations, and heavy-duty facility overhauls.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50/65 border border-slate-150 rounded-full text-xs font-semibold text-slate-500 font-mono shrink-0">
            <LayoutGrid className="w-4 h-4 text-brand-blue" />
            <span>CASE ARCHIVE LOGGED</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group bg-slate-50/60 rounded-3xl overflow-hidden border border-slate-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                {/* Image Wrap */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold font-mono uppercase bg-slate-900/95 backdrop-blur-xs text-white px-3 py-1 rounded-full border border-slate-750">
                    {project.category}
                  </span>
                  {/* Duration Pill */}
                  <span className="absolute top-4 right-4 text-[10px] font-bold font-mono uppercase bg-white/95 backdrop-blur-xs text-slate-900 px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-blue" />
                    <span>{project.duration}</span>
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 text-left space-y-3">
                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Metrics Highlights Footer */}
              <div className="p-6 bg-white border-t border-slate-150 flex items-center gap-2 justify-between">
                <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-wider">Metrics Achieved</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 flex items-center gap-1 font-mono">
                  <Sparkles className="w-3 h-3 text-emerald-500" />
                  {project.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
