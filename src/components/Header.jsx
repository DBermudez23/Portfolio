import profile from "../assets/profile.jpeg";
import { SparklesCore } from "./ui/sparkles";

function Header() {
  return (
    <header className="w-full lg:w-[25%] text-center px-6 py-10 lg:py-20 lg:fixed lg:min-h-screen shadow-xl flex flex-col items-center gap-8 bg-[#111827]/90 backdrop-blur-md border-b border-gray lg:border-b-0 lg:border-r text-white">

      {/* Contenedor con h1 y Sparkles como fondo */}
      <div className="relative w-fit h-fit">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight relative z-10 px-4 py-2">
          Daniel Bermudez
        </h1>

        {/* Sparkles como fondo del h1 */}
        <div className="absolute inset-0 w-full h-full z-0">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={80}
            particleColor="#ffffff"
            className="w-full h-full"
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(300px_80px_at_center,white,transparent)]" />
        </div>
      </div>

      {/* Foto */}
      <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-[#3c6e71] shadow-md transform transition-transform duration-300 hover:scale-105">
        <img
          src={profile}
          alt="Foto de perfil de Daniel Bermúdez"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navegación */}
      <nav className="w-full">
        <ul className="flex flex-col items-center gap-4 text-sm lg:text-base text-white/60">
          {[
            { href: "#projects", label: "Proyectos" },
            { href: "#about", label: "Sobre mí" },
            { href: "#contact", label: "Contacto" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-white font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
