export default function Navbar() {
  return (
    <div className="relative">
      <div className="max-w-screen-md mx-auto">
        <div className="shadow-lg inset-x-0 top-0 h-px bg-gray-300"></div>
      </div>

      <div className="flex justify-center space-x-10 p-5">
        {/* Dropdown Item */}
        <div className="relative inline-block group">
          <button className="py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600 bg-transparent border-none cursor-pointer">
            Lançamentos
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg min-w-[160px] z-10 opacity-0 translate-y-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Ver todos</a>
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Novidades</a>
          </div>
        </div>

        {/* Dropdown Item */}
        <div className="relative inline-block group">
          <button className="py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600 bg-transparent border-none cursor-pointer">
            Brincos
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg min-w-[160px] z-10 opacity-0 translate-y-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Argolas</a>
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Pendentes</a>
          </div>
        </div>

        {/* Dropdown Item */}
        <div className="relative inline-block group">
          <button className="py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600 bg-transparent border-none cursor-pointer">
            Anéis
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg min-w-[160px] z-10 opacity-0 translate-y-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Solitários</a>
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Aparadores</a>
          </div>
        </div>

        {/* Dropdown Item */}
        <div className="relative inline-block group">
          <button className="py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600 bg-transparent border-none cursor-pointer">
            Colares
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg min-w-[160px] z-10 opacity-0 translate-y-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Chokers</a>
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Longos</a>
          </div>
        </div>

        {/* Dropdown Item */}
        <div className="relative inline-block group">
          <button className="py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600 bg-transparent border-none cursor-pointer">
            Pulseiras
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg min-w-[160px] z-10 opacity-0 translate-y-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Pulseiras de Prata</a>
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Pulseiras de Ouro</a>
          </div>
        </div>

        {/* Dropdown Item */}
        <div className="relative inline-block group">
          <button className="py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600 bg-transparent border-none cursor-pointer">
            Conjuntos
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg min-w-[160px] z-10 opacity-0 translate-y-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Conjuntos de Pedras</a>
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Conjuntos de Diamantes</a>
          </div>
        </div>

        {/* Dropdown Item */}
        <div className="relative inline-block group">
          <button className="py-3 px-4 text-xl font-bold uppercase text-center text-gray-800 hover:text-gray-600 bg-transparent border-none cursor-pointer">
            +Categorias
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg min-w-[160px] z-10 opacity-0 translate-y-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Categorias Extras 1</a>
            <a href="#" className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100">Categorias Extras 2</a>
          </div>
        </div>
      </div>
    </div>
  );
}
