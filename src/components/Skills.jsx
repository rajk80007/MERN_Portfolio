// src/components/Skills.js
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="skill-item">
            <h3 className="text-xl font-semibold">React</h3>
            <div className="h-2 bg-orange-500 rounded mt-2 w-3/4"></div>
          </div>
          <div className="skill-item">
            <h3 className="text-xl font-semibold">Laravel</h3>
            <div className="h-2 bg-orange-500 rounded mt-2 w-3/4"></div>
          </div>
          <div className="skill-item">
            <h3 className="text-xl font-semibold">Node.js</h3>
            <div className="h-2 bg-orange-500 rounded mt-2 w-2/3"></div>
          </div>
          {/* Add more skills here */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
