import { projectsData } from "../data/data";

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-32">
      <h3 className="text-3xl font-bold mb-12">Projects</h3>
      <div className="grid md:grid-cols-2 gap-12">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="bg-white/10 p-10 rounded-2xl shadow-xl"
          >
            <h4 className="text-xl font-semibold">{project.title}</h4>
            <p className="opacity-80 mt-4">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
