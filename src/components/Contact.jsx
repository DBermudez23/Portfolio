import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <section className="w-full py-20 px-6 flex justify-center">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-10 max-w-xl w-full text-white text-center">
        <h2 className="text-4xl font-bold text-mst-100 mb-10 border-b border-mst-400 pb-4">
          Contacto
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://wa.me/qr/ZXLVJCEIIQAIJ1/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-4 rounded-full text-mst-100 hover:bg-mst-400 hover:text-white transition-all duration-300 shadow-md"
            title="WhatsApp"
          >
            <IoLogoWhatsapp className="text-3xl sm:text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-bermudez-florez/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-4 rounded-full text-mst-100 hover:bg-mst-400 hover:text-white transition-all duration-300 shadow-md"
            title="LinkedIn"
          >
            <FaLinkedin className="text-3xl sm:text-4xl" />
          </a>
          <a
            href="mailto:d.bermudez1@utp.edu.co?subject=Asunto%20del%20correo&body=Hola,%20me%20gustaría%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-4 rounded-full text-mst-100 hover:bg-mst-400 hover:text-white transition-all duration-300 shadow-md"
            title="Correo"
          >
            <SiGmail className="text-3xl sm:text-4xl" />
          </a>
          <a
            href="https://github.com/DBermudez23"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-4 rounded-full text-mst-100 hover:bg-mst-400 hover:text-white transition-all duration-300 shadow-md"
            title="GitHub"
          >
            <FaGithub className="text-3xl sm:text-4xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
