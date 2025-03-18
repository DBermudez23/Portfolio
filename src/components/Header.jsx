import profile from "../assets/profile.jpeg";

function Header() {
  return (
    <header className="w-full lg:w-140 bg-gray-800 flex flex-col items-center justify-center text-center px-4 py-6 lg:fixed lg:min-h-screen sm:border-b-2 border-emerald-300 lg:border-r-2 lg:border-b-0 lg:border-emerald-300 lg:shadow-lg">
      {/* Títles */}
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-2 tracking-wide animate-fade-in">
        Daniel Bermúdez
      </h1>
      <h2 className="text-base sm:text-lg lg:text-2xl text-emerald-300 mb-4 lg:mb-6 animate-fade-in-delay">
        Desarrollador Web
      </h2>

      {/* Profile Card */}
      <div className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-xs h-48 sm:h-64 lg:h-96 rounded-lg border-2 border-emerald-300 overflow-hidden mx-auto shadow-lg bg-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="p-2 sm:p-4 flex items-center justify-center h-full">
          <img
            src={profile}
            alt="Foto de perfil de Daniel Bermúdez"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>

      {/* Navegation*/}
      <nav className="mt-4 lg:mt-8">
        <ul className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6">
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-emerald-300 text-sm lg:text-lg font-medium transition-colors duration-200"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-emerald-300 text-sm lg:text-lg font-medium transition-colors duration-200"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-emerald-300 text-sm lg:text-lg font-medium transition-colors duration-200"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
