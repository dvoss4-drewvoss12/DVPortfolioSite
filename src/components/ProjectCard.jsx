import React from 'react';

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className = "flex flex-col bg-nord-dark rounded-xl p-6 shadow-lg border border-nord-border hover:border-nord-frost hover:-translate-y-1 transition-all duration-300">
      <h3 className = "text-xl font-bold text-nord-snow mb-2">{title}</h3>
      <p className = "text-nord-ice mb-4 grow">{description}</p>
      
      <div className = "flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span key = {item} className="px-3 py-1 bg-nord-darkest text-nord-frost text-xs font-semibold rounded-full">
            {item}
          </span>
        ))}
      </div>

      <a href = {link} className="text-nord-frost font-medium hover:text-nord-frost-hover inline-flex items-center transition-colors">
        View Details &rarr;
      </a>
    </div>
  );
}