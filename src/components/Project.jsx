import { FaGithub, FaLink } from 'react-icons/fa';
import infoProjects from "../projectsInfo.js";

function Projects() {
  return (
    <section className="w-full py-20 px-6 flex justify-center">
      <div className="w-full max-w-7xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-10 text-white">
        <h2 className="text-4xl font-bold text-center text-mst-100 mb-12 border-b border-mst-400 pb-4">
          Mis Proyectos
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {infoProjects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[85%] md:w-[45%] lg:w-[40%] xl:w-[30%] bg-white/10 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-lg border border-white/10"
            >
              <div className="h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between min-h-[220px]">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-mst-100 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex gap-3 justify-end mt-6">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-mst-400 text-mst-100 hover:text-white transition"
                    >
                      <FaLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-mst-400 text-mst-100 hover:text-white transition"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
