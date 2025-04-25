import Projects from "./Project";
import About from "./About";
import Contact from "./Contact";
import Stack from "./Stack";
import DescargarCV from "./DescargarCV.jsx";

function Scroll() {
  return (
    <div
      className="w-full min-h-screen bg-mst-gradient py-20 px-6 overflow-y-auto px-4 sm:px-6 lg:px-20 py-20 space-y-28 scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-transparent"
    >
      <section id="about">
        <About />
      </section>

      <section id="stack">
        <Stack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section>
        <DescargarCV />
      </section>
    </div>
  );
}

export default Scroll;
