import {
    FaHtml5, FaCss3, FaPython, FaJava, FaReact, FaGitSquare,
    FaNpm, FaBootstrap,
  } from "react-icons/fa";
  import { IoLogoJavascript } from "react-icons/io5";
  import { PiFileCppFill } from "react-icons/pi";
  import { DiProlog, DiMysql } from "react-icons/di";
  import { TbSql } from "react-icons/tb";
  import { RiTailwindCssFill } from "react-icons/ri";
  import { SiNumpy, SiPandas, SiJupyter, SiLinuxmint, SiDjango, SiApachenetbeanside, SiNodedotjs, SiApache, SiQt, SiSvelte, SiTypescript } from "react-icons/si";
  import { FcLinux } from "react-icons/fc";
  import { VscVscode } from "react-icons/vsc";
  import { useState } from "react";
  import ColourfulText from "./ui/colorfull-text";
  
  const techs = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500", category: "Frontend", desc: "Estructura semántica de sitios web" },
    { name: "CSS", icon: <FaCss3 />, color: "text-blue-500", category: "Frontend", desc: "Estilización visual" },
    { name: "JavaScript", icon: <IoLogoJavascript />, color: "text-yellow-400", category: "Frontend", desc: "Lógica de interacción dinámica" },
    { name: "React", icon: <FaReact />, color: "text-blue-500", category: "Frontend", desc: "Framework para SPAs modernas" },
    { name: "Tailwind", icon: <RiTailwindCssFill />, color: "text-cyan-300", category: "Frontend", desc: "Framework de utilidades CSS" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500", category: "Frontend", desc: "Estilos rápidos y responsivos" },
    { name: "PyQt", icon: <SiQt />, color: "text-green-400", category: "Frontend", desc: "Interfaz gráfica en Python con Qt" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600", category: "Frontend", desc: "Superset tipado de JavaScript para mayor seguridad" },
    { name: "SvelteKit", icon: <SiSvelte />, color: "text-orange-500", category: "Frontend", desc: "Framework de aplicaciones web fullstack basado en Svelte" },
  
    { name: "Python", icon: <FaPython />, color: "text-blue-700", category: "Backend", desc: "Backend, scripting, data" },
    { name: "Django", icon: <SiDjango />, color: "text-yellow-400", category: "Backend", desc: "Framework de Python para backend" },
    { name: "Java", icon: <FaJava />, color: "text-red-600", category: "Backend", desc: "POO, backend empresarial" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500", category: "Backend", desc: "Entorno de ejecución para JS" },
    { name: "C++", icon: <PiFileCppFill />, color: "text-blue-400", category: "Backend", desc: "Estructuras de datos, algoritmos" },
    { name: "Prolog", icon: <DiProlog />, color: "text-purple-500", category: "Backend", desc: "Lógica y programación declarativa" },
  
    { name: "MySQL", icon: <DiMysql />, color: "text-blue-300", category: "Base de datos", desc: "Bases de datos relacionales" },
    { name: "SQL", icon: <TbSql />, color: "text-red-500", category: "Base de datos", desc: "Lenguaje de consultas" },
    
    { name: "NumPy", icon: <SiNumpy />, color: "text-cyan-300", category: "AI/Data", desc: "Álgebra de matrices" },
    { name: "Pandas", icon: <SiPandas />, color: "text-lime-600", category: "AI/Data", desc: "Análisis de datos tabulares" },
    { name: "Jupyter", icon: <SiJupyter />, color: "text-orange-600", category: "AI/Data", desc: "Entornos de experimentación" },
    
    { name: "Apache", icon: <SiApache />, color: "text-red-500", category: "Herramientas", desc: "Servidor web de código abierto" },
    { name: "Git", icon: <FaGitSquare />, color: "text-white", category: "Herramientas", desc: "Control de versiones" },
    { name: "NPM", icon: <FaNpm />, color: "text-rose-600", category: "Herramientas", desc: "Gestión de paquetes JS" },
    { name: "VSCode", icon: <VscVscode />, color: "text-blue-400", category: "Herramientas", desc: "Editor de código" },
    { name: "NetBeans", icon: <SiApachenetbeanside />, color: "text-rose-700", category: "Herramientas", desc: "IDE para Java" },
    { name: "Linux", icon: <FcLinux />, color: "", category: "Herramientas", desc: "Sistema operativo base" },
    { name: "Linux Mint", icon: <SiLinuxmint />, color: "text-lime-500", category: "Herramientas", desc: "Distribución de Linux" },
  ];
  
  const categories = ["Todos", "Frontend", "Backend", "Base de datos", "AI/Data", "Herramientas"];

function Stack() {
    const [selected, setSelected] = useState("Todos");
    const filtered = selected === "Todos" ? techs : techs.filter(t => t.category === selected);
  
    return (
      <section className="w-full py-20 px-6 flex justify-center">
        <div className="w-full max-w-6xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-10 text-white">
          <h2 className="text-4xl font-bold text-center mb-12 border-b border-mst-400 pb-4">
              <ColourfulText text="Stack tecnológico" />
          </h2>
  
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selected === cat
                    ? "bg-mst-400 text-white shadow-md"
                    : "bg-white/10 text-mst-100 hover:bg-mst-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
  
          {/* Iconos */}
          <div className="flex flex-wrap justify-center gap-6">
            {filtered.map((tech, idx) => (
              <div
                key={idx}
                className={`group relative w-20 h-20 rounded-full flex items-center justify-center bg-white/10 hover:bg-mst-400 transition duration-300 shadow-md ${tech.color}`}
              >
                <div className="text-3xl">{tech.icon}</div>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity text-sm mt-2 px-2 py-1 bg-black text-white rounded shadow z-10 whitespace-nowrap">
                  {tech.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default Stack;