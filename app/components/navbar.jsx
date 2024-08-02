export default function Navbar() {
  return (
    <div className="pt-6 relative">
      <div className="max-w-screen-md mx-auto">
        <div className="shadow-lg inset-x-0 top-0 h-px bg-gray-300"></div>
      </div>

      <div className="flex justify-center space-x-10 p-5">
        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Lançamentos
          </a>
          <div className="absolute hidden bg-white shadow-lg mt-2 w-48 submenu">
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Ver todos
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Novidades
            </a>
          </div>
        </div>

        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-lg font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Brincos
          </a>
          <div className="absolute hidden bg-white shadow-xl mt-2 w-48 submenu">
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Argolas
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Pendentes
            </a>
          </div>
        </div>

        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Anéis
          </a>
          <div className="absolute hidden bg-white shadow-lg mt-2 w-48 submenu">
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Solitários
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Aparadores
            </a>
          </div>
        </div>

        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Colares
          </a>
          <div className="absolute hidden bg-white shadow-lg mt-2 w-48 submenu">
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Chokers
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Longos
            </a>
          </div>
        </div>

        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Pulseiras
          </a>
          <div className="absolute hidden bg-white shadow-lg mt-2 w-48 submenu">
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Pulseiras de Prata
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Pulseiras de Ouro
            </a>
          </div>
        </div>

        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Conjuntos
          </a>
          <div className="absolute hidden bg-white shadow-lg mt-2 w-48 submenu">
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Conjuntos de Pedras
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Conjuntos de Diamantes
            </a>
          </div>
        </div>

        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            +Categorias
          </a>
          <div className="absolute hidden bg-white shadow-lg mt-2 w-48 submenu">
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Categorias Extras 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
            >
              Categorias Extras 2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
