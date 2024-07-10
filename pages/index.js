import Head from "next/head";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vallore Joias</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />{" "}
        {/* Adicione seu arquivo CSS personalizado aqui */}
      </Head>

      {/* Cabeçalho Superior */}
      <div className="bg-yellow-300 text-black text-center py-3 flex justify-center">
        <p className="font-bold mr-4">
          ATACADO: Pedido Mínimo R$500 + Frete Grátis!
        </p>
        <p className="ml-20 font-bold">
          Confira nossas ofertas para o Dia dos Namorados
        </p>
      </div>

      <div className="flex justify-around">
        {/* Cabeçalho meio */}
        <div className="flex-col space-y-4 mt-10">
          {/* Divisão para o WhatsApp */}
          <div className="flex items-center space-x-4">
            {/* Ícone do WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=553533333333"
              target="_blank"
              className="text-yellow-300"
            >
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
            {/* Texto "WhatsApp: (35) 3333-3333" */}
            <div>
              <p className="text-gray-800 font-bold">
                WhatsApp: (35) 3333-3333
              </p>
            </div>
          </div>

          {/* Divisão para o Contato */}
          <div className="flex items-center space-x-4">
            <i className="fas fa-phone-alt fa-2x text-yellow-300"></i>
            <div>
              <p className="text-gray-800 font-bold">Contato: (35) 3333-3333</p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="/logo.png"
            alt="Logo da empresa"
            className="w-32 h-32 mt-10"
          />
        </div>

        {/* Divisão para o Busca e outros ícones */}
        <div className="flex items-center space-x-10">
          {/* Ícone de busca */}
          <p className="font-bold">
            Busca <i className="fas fa-search fa-2x text-yellow-300"></i>
          </p>
          {/* Ícone de usuário */}
          <i className="fas fa-user fa-2x text-yellow-300"></i>
          {/* Ícone de compras */}
          <i className="fas fa-shopping-bag fa-2x text-yellow-300"></i>
        </div>
      </div>

      {/* MENU NAV */}
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

      <div>
        <div className="shadow-xl inset-x-0 top-2 h-px bg-yellow-300 pb-1"></div>
        <img
          src="/slider 1.png"
          alt="Imagem de uma mulher usando joias Vallore, como brinco e colar"
          className="w-full object-cover"
        />
      </div>
            {/* LANÇAMENTOS */}
            <div className="text-center mb-8 mt-10">
                <h2 className="text-5xl font-bold text-black">LANÇAMENTOS</h2>
                <p className="text-4xl text-yellow-300">confira nossos lançamentos</p>
            </div>

            {/* BOXES DE PRODUTOS */}
            <div className="flex flex-wrap justify-center gap-4">
                {/* Box 1 */}
                <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
                    <img src="/exemplo1.png" alt="COLAR EXEMPLO - COL0123" className="w-full object-cover" />
                    <div className="p-4 bg-gray-100">
                        <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>
                        <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <span className="text-gray-600 ml-2">5 avaliações</span>
                        </div>
                        <p className="text-gray-700 text-2xl font-bold mb-2"><strong>R$199,99</strong></p>
                        <p className="text-gray-600 mb-2"><strong>R$99,99</strong> à vista com desconto no Pix</p>
                        <p className="text-gray-600 mb-4">ou em até <strong>10x</strong> de <strong>$11,99</strong> sem juros</p>
                        <div className="flex gap-4">
                            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-shopping-bag mr-2 text-white"></i>
                                COMPRAR
                            </button>
                            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-heart mr-2"></i>
                                FAVORITAR
                            </button>
                        </div>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
                    <img src="/exemplo3.png" alt="COLAR EXEMPLO - COL0123" className="w-full object-cover" />
                    <div className="p-4 bg-gray-100">
                        <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>
                        <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <span className="text-gray-600 ml-2">4 avaliações</span>
                        </div>
                        <p className="text-gray-700 text-2xl font-bold mb-2"><strong>R$159,99</strong></p>
                        <p className="text-gray-600 mb-2"><strong>R$79,99</strong> à vista com desconto no Pix</p>
                        <p className="text-gray-600 mb-4">ou em até <strong>8x</strong> de <strong>$19,99</strong> sem juros</p>
                        <div className="flex gap-4">
                            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-shopping-bag mr-2 text-white"></i>
                                COMPRAR
                            </button>
                            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-heart mr-2"></i>
                                FAVORITAR
                            </button>
                        </div>
                    </div>
                </div>

                {/* Box 3 */}
                <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
                    <img src="/exemplo2.png" alt="COLAR EXEMPLO - COL0123" className="w-full object-cover" />
                    <div className="p-4 bg-gray-100">
                        <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>
                        <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <span className="text-gray-600 ml-2">3 avaliações</span>
                        </div>
                        <p className="text-gray-700 text-2xl font-bold mb-2"><strong>R$219,99</strong></p>
                        <p className="text-gray-600 mb-2"><strong>R$109,99</strong> à vista com desconto no Pix</p>
                        <p className="text-gray-600 mb-4">ou em até <strong>12x</strong> de <strong>$18,33</strong> sem juros</p>
                        <div className="flex gap-4">
                            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-shopping-bag mr-2 text-white"></i>
                                COMPRAR
                            </button>
                            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-heart mr-2"></i>
                                FAVORITAR
                            </button>
                        </div>
                    </div>
                </div>
                 {/* Box 4 */}
             <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
                    <img src="/exemplo4.png" alt="COLAR EXEMPLO - COL0123" className="w-full object-cover" />
                    <div className="p-4 bg-gray-100">
                        <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>
                        <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <span className="text-gray-600 ml-2">3 avaliações</span>
                        </div>
                        <p className="text-gray-700 text-2xl font-bold mb-2"><strong>R$219,99</strong></p>
                        <p className="text-gray-600 mb-2"><strong>R$109,99</strong> à vista com desconto no Pix</p>
                        <p className="text-gray-600 mb-4">ou em até <strong>12x</strong> de <strong>$18,33</strong> sem juros</p>
                        <div className="flex gap-4">
                            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-shopping-bag mr-2 text-white"></i>
                                COMPRAR
                            </button>
                            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-heart mr-2"></i>
                                FAVORITAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* PRODUTOS POR CATEGORIA */}
            <div className="text-center mb-8 mt-10">
                <h2 className="text-2xl font-bold text-black">VEJA NOSSOS PRODUTOS POR CATEGORIA</h2>
            </div>

            {/* MAIS VENDIDAS */}
            <div className="text-center mb-8 mt-10">
                <h2 className="text-3xl font-bold text-black">MAIS VENDIDAS</h2>
                <p className="text-2xl text-yellow-300">confira as queridinhas de nossos clientes</p>
            </div>

            {/* BOXES DE PRODUTOS MAIS VENDIDOS */}
            <div className="flex flex-wrap justify-center gap-4">
                {/* Box 1 */}
                <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
                    <img src="/exemplo4.png" alt="COLAR EXEMPLO - COL0123" className="w-full object-cover" />
                    <div className="p-4 bg-gray-100">
                        <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>
                        <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <span className="text-gray-600 ml-2">4 avaliações</span>
                        </div>
                        <p className="text-gray-700 text-2xl font-bold mb-2"><strong>R$179,99</strong></p>
                        <p className="text-gray-600 mb-2"><strong>R$89,99</strong> à vista com desconto no Pix</p>
                        <p className="text-gray-600 mb-4">ou em até <strong>9x</strong> de <strong>$19,99</strong> sem juros</p>
                        <div className="flex gap-4">
                            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-shopping-bag mr-2 text-white"></i>
                                COMPRAR
                            </button>
                            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-heart mr-2"></i>
                                FAVORITAR
                            </button>
                        </div>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
                    <img src="/exemplo3.png" alt="COLAR EXEMPLO - COL0123" className="w-full object-cover" />
                    <div className="p-4 bg-gray-100">
                        <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>
                        <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <span className="text-gray-600 ml-2">3 avaliações</span>
                        </div>
                        <p className="text-gray-700 text-2xl font-bold mb-2"><strong>R$189,99</strong></p>
                        <p className="text-gray-600 mb-2"><strong>R$94,99</strong> à vista com desconto no Pix</p>
                        <p className="text-gray-600 mb-4">ou em até <strong>10x</strong> de <strong>$18,99</strong> sem juros</p>
                        <div className="flex gap-4">
                            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-shopping-bag mr-2 text-white"></i>
                                COMPRAR
                            </button>
                            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-heart mr-2"></i>
                                FAVORITAR
                            </button>
                        </div>
                    </div>
                </div>

                {/* Box 3 */}
                <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
                    <img src="/exemplo1.png" alt="COLAR EXEMPLO - COL0123" className="w-full object-cover" />
                    <div className="p-4 bg-gray-100">
                        <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>
                        <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <span className="text-gray-600 ml-2">5 avaliações</span>
                        </div>
                        <p className="text-gray-700 text-2xl font-bold mb-2"><strong>R$209,99</strong></p>
                        <p className="text-gray-600 mb-2"><strong>R$104,99</strong> à vista com desconto no Pix</p>
                        <p className="text-gray-600 mb-4">ou em até <strong>6x</strong> de <strong>$34,99</strong> sem juros</p>
                        <div className="flex gap-4">
                            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-shopping-bag mr-2 text-white"></i>
                                COMPRAR
                            </button>
                            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-heart mr-2"></i>
                                FAVORITAR
                            </button>
                        </div>
                    </div>
                </div>

                 {/* Box 4 */}
                 <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
                    <img src="/exemplo4.png" alt="COLAR EXEMPLO - COL0123" className="w-full object-cover" />
                    <div className="p-4 bg-gray-100">
                        <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>
                        <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
                            </svg>
                            <span className="text-gray-600 ml-2">3 avaliações</span>
                        </div>
                        <p className="text-gray-700 text-2xl font-bold mb-2"><strong>R$219,99</strong></p>
                        <p className="text-gray-600 mb-2"><strong>R$109,99</strong> à vista com desconto no Pix</p>
                        <p className="text-gray-600 mb-4">ou em até <strong>12x</strong> de <strong>$18,33</strong> sem juros</p>
                        <div className="flex gap-4">
                            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-shopping-bag mr-2 text-white"></i>
                                COMPRAR
                            </button>
                            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                                <i className="fas fa-heart mr-2"></i>
                                FAVORITAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>


    
  );
};

export default Home;
