import Projects from "./Project";
import About from "./About";
import Contact from "./Contact";
import Stack from "./Stack";
import DescargarCV from "./DescargarCV.jsx";

function Scroll() {
  return (
    <div
      className="w-full min-h-screen overflow-y-auto overflow-x-hidden bg-[#111827]/90 backdrop-blur-md text-white py-20 sm:px-4 space-y-10 scrollbar-thin scrollbar-thumb-[#3c6e71] scrollbar-track-transparent"
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
