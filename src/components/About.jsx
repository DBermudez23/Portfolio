function About() {
  return (
    <section className="w-full bg-transparent py-20 px-6 flex justify-center">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-10 text-white max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-center text-mst-100 mb-10 tracking-tight border-b border-mst-400 pb-4">
          Sobre mí
        </h2>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-mst-100">
          <p>
            Soy <span className="text-white font-semibold">Daniel Bermúdez</span>, desarrollador web y estudiante de Ingeniería de Sistemas en la Universidad Tecnológica de Pereira. Me apasiona construir soluciones tecnológicas que integren desarrollo frontend, backend e interfaces gráficas intuitivas.
          </p>

          <p>
            Trabajo con tecnologías como <span className="text-mst-200 font-medium">React</span>, <span className="text-mst-200 font-medium">Tailwind CSS</span>, <span className="text-mst-200 font-medium">Django</span> y <span className="text-mst-200 font-medium">Bootstrap</span>, y tengo experiencia con interfaces en <span className="text-mst-200 font-medium">PyQt</span> y desarrollo backend con <span className="text-mst-200 font-medium">Node.js</span>.
          </p>

          <p>
            Domino la programación orientada a objetos en <span className="text-mst-200 font-medium">Java</span>, <span className="text-mst-200 font-medium">Python</span>, <span className="text-mst-200 font-medium">JavaScript</span> y <span className="text-mst-200 font-medium">C++</span>. También tengo formación sólida en estructuras de datos y principios de diseño de software.
          </p>

          <p>
            En el área de ciencia de datos, he utilizado herramientas como <span className="text-mst-200 font-medium">NumPy</span>, <span className="text-mst-200 font-medium">Pandas</span> y <span className="text-mst-200 font-medium">Jupyter Notebook</span>, explorando el aprendizaje automático y redes neuronales.
          </p>

          <p>
            Me desenvuelvo cómodamente en entornos <span className="text-mst-200 font-medium">Linux</span>, con dominio de herramientas como <span className="text-mst-200 font-medium">Git</span>, <span className="text-mst-200 font-medium">NPM</span>, <span className="text-mst-200 font-medium">VSCode</span> y <span className="text-mst-200 font-medium">NetBeans</span>. Valoro el trabajo colaborativo, la mejora continua y los desafíos técnicos.
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
