export default function Category() {
  return (
    <>
      <div className="text-center mb-8 mt-10">
        <h2 className="text-2xl font-bold text-black">
          VEJA NOSSOS PRODUTOS POR CATEGORIA
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap">
          <a href="#">
            <img
              src="/Prancheta 1.png"
              alt="Imagem 1"
              className="w-300 h-300 object-cover m-2 border-2 border-yellow-300"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              src="/Prancheta 2.png"
              alt="Imagem 2"
              className="w-300 h-300 object-cover m-2 border-2 border-yellow-300"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              src="/Prancheta 3.png"
              alt="Imagem 3"
              className="w-300 h-300 object-cover m-2 border-2 border-yellow-300"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              src="/Prancheta 4.png"
              alt="Imagem 4"
              className="w-300 h-300 object-cover m-2 border-2 border-yellow-300"
            />
          </a>
        </div>
      </div>
    </>
  );
}
