import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-emerald-300 mb-6 text-center border-b-2 border-emerald-300 pb-2">
        Contacto
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="https://wa.me/qr/ZXLVJCEIIQAIJ1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-emerald-300 transition-colors duration-300"
        >
          <IoLogoWhatsapp className="text-4xl sm:text-5xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-bermudez-florez/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-emerald-300 transition-colors duration-300"
        >
          <FaLinkedin className="text-4xl sm:text-5xl" />
        </a>
        <a
          href="mailto:d.bermudez1@utp.edu.co?subject=Asunto%20del%20correo&body=Hola,%20me%20gustaría%20contactarte"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-emerald-300 transition-colors duration-300"
        >
          <SiGmail className="text-4xl sm:text-5xl" />
        </a>
        <a
          href="https://github.com/DBermudez23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-emerald-300 transition-colors duration-300"
        >
          <FaGithub className="text-4xl sm:text-5xl" />
        </a>
      </div>
    </div>
  );
}

export default Contact;