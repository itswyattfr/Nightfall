import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Digital Experience Platform",
      description: "A revolutionary platform combining AI and user interaction.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "Immersive VR Solution",
      description: "Next-generation virtual reality experiences for education.",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Smart City Initiative",
      description: "Innovative urban solutions powered by IoT technology.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 transition-transform duration-300 hover:-translate-y-2">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;