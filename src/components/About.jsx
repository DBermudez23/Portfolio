import ColourfulText from "./ui/colorfull-text";

function About() {
  return (
    <section className="w-full bg-transparent py-20 lg:px-6 flex justify-center">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-10 text-white max-w-3xl w-full">
          <h2 className="text-4xl font-bold text-center mb-12 border-b border-mst-400 pb-4">
              <ColourfulText text="Un poco sobre mi perfil profesional." />
          </h2>
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-mst-100">
          <p>
            Soy <span className="text-white font-semibold">Daniel Bermúdez</span>, desarrollador web y estudiante de Ingeniería de Sistemas en la Universidad Tecnológica de Pereira. Mi pasión por la tecnología y la programación me ha llevado a explorar diversas áreas, desde la creación de interfaces de usuario hasta el desarrollo backend y la ciencia de datos.
          </p>

          <p>
            Principalmente trabajo con tecnologías como <span className="text-mst-200 font-medium">React</span>, <span className="text-mst-200 font-medium">SvelteKit</span>, <span className="text-mst-200 font-medium">Django</span>, <span className="text-mst-200 font-medium">Node.js</span>, <span className="text-mst-200 font-medium">Tailwind CSS</span> y <span className="text-mst-200 font-medium">Bootstrap</span>, Desarrollo de interfaces gráficas con en python con <span className="text-mst-200 font-medium">PyQt</span>, Aplicaciones de escritorio con <span className="text-mst-200 font-medium">Java</span> aplicando programación orientada a objetos, pudiendo realizar un diseño previo a la aplicación con diagramas de secuencia, diagramas de clase UML, Me gusta crear experiencias de usuario atractivas y funcionales, siempre buscando la mejor manera de resolver problemas y optimizar procesos.
          </p>

          <p>
            Domino la programación orientada a objetos en <span className="text-mst-200 font-medium">Java</span>, <span className="text-mst-200 font-medium">Python</span>, <span className="text-mst-200 font-medium">JavaScript</span> y <span className="text-mst-200 font-medium">C++</span>. También tengo formación sólida en estructuras de datos, patrones de diseño y algoritmos, lo que me permite abordar problemas complejos de manera eficiente.
          </p>

          <p>
            En el área de ciencia de datos, he utilizado herramientas como <span className="text-mst-200 font-medium">NumPy</span>, <span className="text-mst-200 font-medium">Pandas</span> y <span className="text-mst-200 font-medium">Jupyter Notebook</span>, <span className="text-mst-200 font-medium">Scikit-learn</span>, explorando el aprendizaje automático y redes neuronales.
          </p>

          <p>
            Me desenvuelvo cómodamente en entornos <span className="text-mst-200 font-medium">Linux</span>, cuento con experiencia en software de control de versiones con <span className="text-mst-200 font-medium">Git</span>. Valoro el trabajo colaborativo, la mejora continua y los desafíos técnicos.
          </p>

          <p className="italic text-mst-100/70">
            Mi objetivo es integrarme en equipos donde la innovación tecnológica y el impacto positivo sean pilares fundamentales.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
