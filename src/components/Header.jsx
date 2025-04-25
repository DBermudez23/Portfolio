import profile from "../assets/profile.jpeg";

function Header() {
  return (
    <header className="w-full lg:w-[280px] text-center px-6 py-10 lg:py-20 lg:fixed lg:min-h-screen shadow-xl flex flex-col items-center gap-8 bg-white/5 backdrop-blur-lg border-b border-white/10 lg:border-b-0 lg:border-r">
      {/* Nombre */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
          Daniel Bermúdez
        </h1>
        <h2 className="text-white/60 text-lg lg:text-xl font-medium">
          Desarrollador Web
        </h2>
      </div>

      {/* Foto */}
      <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-mst-400 shadow-md transform transition-transform duration-300 hover:scale-105">
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
