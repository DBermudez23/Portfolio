import Projects from "./Project";
import About from "./About";
import Contact from "./Contact";
import Stack from "./Stack";
import DescargarCV from "./DescargarCV.jsx";

function Scroll() {
  return (
    <div className="container mx-auto px-2 lg:px-0 py-8 pt-24 lg:ml-140 w-full min-h-screen overflow-y-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-900 bg-gradient-to-br from-gray-800 via-violet-700 to-emerald-950">

      <section id="about" className="mb-16">
        <About />
      </section>

      <section id="stack" className="mb-16">
        <Stack />
      </section>

      <section id="projects" className="mb-16">
        <Projects />
      </section>


      <section id="contact" className="mb-16">
        <Contact />
      </section>


      <section  className="mb-16">
        <DescargarCV />
      </section>
    </div>
  );
}

export default Scroll;