import Daniel_B_cvDef from "../assets/Daniel_B_cvDef.pdf";
import { IoMdCloudDownload } from "react-icons/io";

function DescargarCV() {
  return (
    <section className="w-full py-20 px-6 flex justify-center">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-10 max-w-xl w-full text-white text-center">
        <h2 className="text-4xl font-bold text-mst-100 mb-8 border-b border-mst-400 pb-4">
          Descargar CV
        </h2>

        <a
          href={Daniel_B_cvDef}
          download="Daniel_Bermudez_CV.pdf"
          className="inline-flex items-center gap-3 bg-mst-400 hover:bg-mst-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          title="Descargar CV en PDF"
        >
          <IoMdCloudDownload className="text-2xl" />
          <span className="text-base">Descargar PDF</span>
        </a>
      </div>
    </section>
  );
}

export default DescargarCV;
