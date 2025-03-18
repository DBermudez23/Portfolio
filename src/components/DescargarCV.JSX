import Daniel_B_cvDef from "../assets/Daniel_B_cvDef.pdf";
import { IoMdCloudDownload } from "react-icons/io";


function DescargarCV() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-emerald-300 mb-6 text-center border-b-2 border-emerald-300 pb-2">
        Descargar CV
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href={Daniel_B_cvDef}
          download="Daniel_Bermudez_CV.pdf"
          className="text-white hover:text-emerald-300 transition-colors duration-300 flex items-center gap-2"
          title="Descargar CV en PDF"
        >
          <IoMdCloudDownload className="text-4xl sm:text-5xl" />
          <span className="text-lg">Descargar</span>
        </a>
      </div>
    </div>
  );
}

export default DescargarCV;