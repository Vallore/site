export default function Category() {
  return (
    <>
      <div className="text-center mb-8 mt-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
          VEJA NOSSOS PRODUTOS POR CATEGORIA
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 p-4">
          <a href="#">
            <img
              src="/Prancheta 1.png"
              alt="Imagem 1"
              className="w-full h-auto object-cover border-2 border-yellow-300"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              src="/Prancheta 2.png"
              alt="Imagem 2"
              className="w-full h-auto object-cover border-2 border-yellow-300"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              src="/Prancheta 3.png"
              alt="Imagem 3"
              className="w-full h-auto object-cover border-2 border-yellow-300"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              src="/Prancheta 4.png"
              alt="Imagem 4"
              className="w-full h-auto object-cover border-2 border-yellow-300"
            />
          </a>
        </div>
      </div>
    </>
  );
}
