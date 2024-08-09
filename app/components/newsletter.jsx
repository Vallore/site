export default function Newsletter() {
  return (
    <>
      <div className="flex justify-center bg-gray-200 py-8">
        <div className="relative">
          <img 
            src="/novidades 1.png"
            alt="Imagem Newsletter"
            className="inset-0 z-10 object-cover mr-20"
          />
          <div
            className="absolute left-0 top-0 z-0"
            style={{ width: "70px", height: "319px", background: "#F2E205" }}
          ></div>

          <div
            className="absolute right-0 bottom-0 z-0"
            style={{ width: "42px", height: "191px", background: "#F2E205" }}
          ></div>
        </div>

        <div className="flex flex-col justify-center ml-20">
          <h2 className="text-4xl font-bold mb-4 text-center">NEWSLETTER</h2>

          <p className="mb-5 text-center text-2xl text-yellow-500">
            Que tal receber as novidades de nossa loja
            <br />
            em seu e-mail ou no seu WhatsApp?
          </p>

          <form className="flex flex-col items-center">
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700 mb-1 text-center"
              >
                Seu nome:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="border border-gray-300 px-3 py-2 rounded-lg w-96"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 text-center"
              >
                Seu e-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 px-3 py-2 rounded-lg w-96"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="telefone"
                className="block text-sm font-medium text-gray-700 mb-1 text-center"
              >
                Seu telefone:
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                className="border border-gray-300 px-3 py-2 rounded-lg w-96"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-yellow-700 font-bold px-12 py-2 hover:bg-yellow-600 mt-4 hover:text-white"
            >
              QUERO ME CADASTRAR NA LISTA VIP!
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
