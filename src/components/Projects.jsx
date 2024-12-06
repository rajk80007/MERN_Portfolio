// src/components/Projects.js

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Project 1</h3>
            <p className="text-gray-600 mb-4">Description of the project...</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">View on GitHub</a>
          </div>
          <div className="project-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Project 2</h3>
            <p className="text-gray-600 mb-4">Description of the project...</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">View on GitHub</a>
          </div>
          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
