import { FaGithub, FaLink } from 'react-icons/fa'; // Importa los íconos
import infoProjects from "../projectsInfo.js";

function Projects() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='py-8'>
            <h2 className="text-3xl font-bold text-white mb-6 text-center ">Mis Proyectos</h2>
        </div>
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {infoProjects.map((project, index) => (
        <a href={project.url ? project.url : project.github}>
          <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6 transform transition duration-300 hover:scale-105 hover:shadow-xl w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {/* Contenido */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>
              {/* Buttons */}
              <div className="flex justify-end p-4 bg-gray-900">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white mr-4 transition-colors duration-200"
                >
                  <FaLink size={20} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
        </a>
      ))}
    </div>
    </div>
  );
}
 
export default Projects;    