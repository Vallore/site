export default function Navbar() {
  return (
    <div className="pt-6 relative">
      <div className="max-w-screen-md mx-auto">
        <div className="shadow-lg inset-x-0 top-0 h-px bg-gray-300"></div>
      </div>

      <div className="flex justify-center space-x-10 p-5">
        {/* Item de menu "Lançamentos" */}
        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Lançamentos
          </a>
          {/* Submenu "Lançamentos" */}
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

        {/* Item de menu "Brincos" */}
        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-lg font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Brincos
          </a>
          {/* Submenu "Brincos" */}
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

        {/* Item de menu "Anéis" */}
        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Anéis
          </a>
          {/* Submenu "Anéis" */}
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

        {/* Item de menu "Colares" */}
        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Colares
          </a>
          {/* Submenu "Colares" */}
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

        {/* Item de menu "Pulseiras" */}
        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Pulseiras
          </a>
          {/* Submenu "Pulseiras" */}
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

        {/* Item de menu "Conjuntos" */}
        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            Conjuntos
          </a>
          {/* Submenu "Conjuntos" */}
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

        {/* Item de menu "+Categorias" */}
        <div className="relative">
          <a
            href="#"
            className="block py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600"
          >
            +Categorias
          </a>
          {/* Submenu "+Categorias" */}
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
