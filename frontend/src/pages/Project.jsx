import React from "react";

const projects = [
  {
    name: "Sort Visualizer",
    description:
      "A beautiful and interactive visualization tool for all major sorting algorithms. Built using modern data structures and algorithms, this project helps you understand how sorting works step by step.\n\nYou can also contribute to this project on GitHub!",
    url: "https://sort-visualiser-chi.vercel.app",
    github: "https://github.com/pseudovicky/SortVisualiser",
    image: "/project-sort-visualizer.png",
    tags: ["React", "Algorithms", "Data Structures", "Visualization", "Sorting"],
  },
];

export default function Project() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 drop-shadow-lg">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group block rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-slate-100 hover:border-blue-400 transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold tracking-wide uppercase">
                  Featured
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-2 group-hover:text-blue-900 transition-colors duration-200">
                  {project.name}
                </h2>
                <p className="text-gray-700 mb-4 min-h-[60px] whitespace-pre-line">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white bg-blue-600 hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg shadow transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 border border-blue-600 hover:bg-blue-50 font-semibold px-4 py-2 rounded-lg shadow transition-colors duration-200"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
