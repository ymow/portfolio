"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/lib/data";
import { useState } from "react";

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 md:py-32 px-8 bg-background-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyan-pink mb-4">
            Key Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Showcasing impactful product management work across enterprise AI, e-commerce optimization, and technical innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(project.id)}
              style={{ borderColor: project.color, borderWidth: selectedProject === project.id ? 2 : 1 }}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-text-primary group-hover:text-gradient-cyan-pink">
                    {project.title}
                  </h3>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />
                </div>
                <p className="text-accent-primary font-semibold mb-1">{project.client}</p>
                <p className="text-text-tertiary text-sm">{project.role} • {project.period}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full glass text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <p className="text-text-secondary mb-6 line-clamp-3">{project.overview}</p>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(project.impact)
                  .slice(0, 2)
                  .map(([key, value], idx) => (
                    <div key={idx} className="glass p-3 rounded-lg">
                      <div
                        className="text-lg font-bold mb-1"
                        style={{ color: project.color }}
                      >
                        {value}
                      </div>
                      <div className="text-xs text-text-tertiary capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  ))}
              </div>

              {/* CTA */}
              <button
                className="w-full py-3 glass rounded-lg font-semibold hover:bg-accent-primary hover:text-background transition-colors duration-200"
                style={{ borderColor: project.color }}
              >
                View Case Study →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Expanded Project Details */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 glass p-8 md:p-12 rounded-2xl"
          >
            {(() => {
              const project = projects.find((p) => p.id === selectedProject);
              if (!project) return null;

              return (
                <>
                  <div className="flex items-start justify-between mb-8">
                    <h3 className="text-3xl font-bold text-gradient-cyan-pink">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-text-secondary hover:text-text-primary"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-8">
                    {/* Challenge */}
                    <div>
                      <h4 className="text-xl font-bold text-accent-primary mb-3">
                        Challenge
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Approach */}
                    <div>
                      <h4 className="text-xl font-bold text-accent-secondary mb-3">
                        Approach
                      </h4>
                      <ul className="space-y-2">
                        {project.approach.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-text-secondary">
                            <span className="text-accent-secondary mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="text-xl font-bold text-accent-tertiary mb-3">
                        Impact & Results
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(project.impact).map(([key, value], idx) => (
                          <div key={idx} className="glass p-4 rounded-lg">
                            <div className="text-2xl font-bold text-accent-primary mb-2">
                              {value}
                            </div>
                            <div className="text-sm text-text-secondary capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3">
                        Skills Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 glass rounded-full text-text-secondary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}
      </div>
    </section>
  );
}
