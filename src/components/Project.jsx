"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaGithub, FaLink } from "react-icons/fa";
import infoProjects from "../projectsInfo";
import ColourfulText from "./ui/colorfull-text";

function Projects() {

  return (
    <section className="w-full py-20 px-6 flex justify-center">
      <div className="w-full max-w-7xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-10 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 border-b border-mst-400 pb-4">
        <ColourfulText text="Mis proyectos" />
      </h2>


        <div className="flex flex-wrap justify-center gap-8">
          {infoProjects.map((project, index) => (
            <CardContainer
              key={index}
              containerClassName="flex justify-center"
            >
              <CardBody className="w-[280px] h-[500px] flex flex-col justify-between bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2">

                {/* Imagen */}
                <CardItem
                  translateZ={60}
                  rotateX={5}
                  className="h-[200px] w-full overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </CardItem>

                {/* Contenido */}
                <div className="px-4 py-4 flex flex-col justify-between flex-grow">
                  <div>
                    <CardItem
                      translateZ={40}
                      className="text-lg font-bold text-white mb-2 leading-tight"
                    >
                      {project.name}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="p"
                      className="text-sm text-mst-100 leading-relaxed line-clamp-4"
                    >
                      {project.description}
                    </CardItem>
                  </div>

                  {/* Botones */}
                  <div className="flex gap-2 justify-end mt-4">
                    {project.url && (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.url}
                        target="_blank"
                        className="p-2 rounded-full bg-white/10 hover:bg-mst-400 text-mst-100 hover:text-white transition"
                      >
                        <FaLink size={16} />
                      </CardItem>
                    )}
                    {project.github && (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.github}
                        target="_blank"
                        className="p-2 rounded-full bg-white/10 hover:bg-mst-400 text-mst-100 hover:text-white transition"
                      >
                        <FaGithub size={16} />
                      </CardItem>
                    )}
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
