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

      {/*CAIXA DE FRETE*/}
      <div className="relative">
        <img
          src="/slider 1.png"
          alt="Imagem de uma mulher usando joias Vallore, como brinco e colar"
          className="w-full object-cover border-t-4 border-b-4 border-yellow-400 relative"
        />
        <div className="flex justify-center bg-yellow-300 text-white p-5 max-w-7xl mx-auto space-x-4">
          <div className="flex items-center space-x-2">
            <i className="far fa-gem text-7xl"></i>
            <div>
              <p className="text-2xl font-bold">Vários lançamentos</p>
              <p className="text-lg">Grandes novidades</p>
            </div>
          </div>
          <div className="border-l-2 border-white h-[130px]"></div>{" "}
          {/* Divisória vertical */}
          <div className="flex items-center space-x-2">
            <i className="far fa-check-circle text-7xl"></i>
            <div>
              <p className="text-2xl font-bold">Garantia estendida</p>
              <p className="text-lg">Em todas as peças</p>
            </div>
          </div>
          <div className="border-l-2 border-white h-[130px]"></div>{" "}
          {/* Divisória vertical */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-truck text-7xl"></i>
            <div>
              <p className="text-2xl font-bold">Frete grátis</p>
              <p className="text-lg">Acima de R$1000,00</p>
            </div>
          </div>
        </div>
      </div>
      {/* LANÇAMENTOS */}
      <div className="text-center mb-8 mt-10">
        <h2 className="text-5xl font-bold text-black">LANÇAMENTOS</h2>
        <p className="text-4xl text-yellow-300">confira nossos lançamentos</p>
      </div>

      {/* BOXES DE PRODUTOS */}
      <div className="flex flex-wrap justify-center gap-4">
      {/* Box 1 */}
      <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-2">
        {/* Imagem do produto */}
        <img
          src="/exemplo1.png"
          alt="COLAR EXEMPLO - COL0123"
          className="object-cover mb-5"
          style={{ width: 294 }}
        />

        {/* Informações do produto */}
        <div className="p-4 bg-gray-100">
          {/* Título do produto */}
          <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>

          {/* Avaliações */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-2">5 avaliações</span>
          </div>

          {/* Preço original */}
          <p className="text-gray-700 text-2xl font-bold mb-2">
            <strong>R$199,99</strong>
          </p>

          {/* Preço com desconto no Pix */}
          <p className="text-gray-600 mb-2">
            <strong>R$99,99</strong> à vista com desconto no Pix
          </p>

          {/* Opções de parcelamento */}
          <p className="text-gray-600 mb-4">
            ou em até <strong>10x</strong> de <strong>R$11,99</strong> sem juros
          </p>

          <div className="flex gap-4">
            {/* Botão de compra */}
            <a href="/produto1.js">
              <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                <i className="fas fa-shopping-bag mr-2 text-white"></i>
                COMPRAR
              </button>
            </a>

            {/* Botão de favoritar */}
            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-heart mr-2"></i>
              FAVORITAR
            </button>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
        {/* Imagem do produto */}
        <img
          src="/exemplo3.png"
          alt="COLAR EXEMPLO - COL0123"
          className="object-cover mb-5"
          style={{ width: 275 }}
        />

        {/* Informações do produto */}
        <div className="p-4 bg-gray-100">
          {/* Título do produto */}
          <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>

          {/* Avaliações */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-2">5 avaliações</span>
          </div>

          {/* Preço original */}
          <p className="text-gray-700 text-2xl font-bold mb-2">
            <strong>R$199,99</strong>
          </p>

          {/* Preço com desconto no Pix */}
          <p className="text-gray-600 mb-2">
            <strong>R$99,99</strong> à vista com desconto no Pix
          </p>

          {/* Opções de parcelamento */}
          <p className="text-gray-600 mb-4">
            ou em até <strong>10x</strong> de <strong>R$11,99</strong> sem juros
          </p>

          <div className="flex gap-4">
            {/* Botão de compra */}
            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-shopping-bag mr-2 text-white"></i>
              COMPRAR
            </button>

            {/* Botão de favoritar */}
            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-heart mr-2"></i>
              FAVORITAR
            </button>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
        {/* Imagem do produto */}
        <img
          src="/exemplo2.png"
          alt="COLAR EXEMPLO - COL0123"
          className="w-full object-cover"
          style={{ marginBottom: 26.5 }}
        />

        {/* Informações do produto */}
        <div className="p-4 bg-gray-100">
          {/* Título do produto */}
          <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>

          {/* Avaliações */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-2">5 avaliações</span>
          </div>

          {/* Preço original */}
          <p className="text-gray-700 text-2xl font-bold mb-2">
            <strong>R$199,99</strong>
          </p>

          {/* Preço com desconto no Pix */}
          <p className="text-gray-600 mb-2">
            <strong>R$99,99</strong> à vista com desconto no Pix
          </p>

          {/* Opções de parcelamento */}
          <p className="text-gray-600 mb-4">
            ou em até <strong>10x</strong> de <strong>R$11,99</strong> sem juros
          </p>

          <div className="flex gap-4">
            {/* Botão de compra */}
            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-shopping-bag mr-2 text-white"></i>
              COMPRAR
            </button>

            {/* Botão de favoritar */}
            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-heart mr-2"></i>
              FAVORITAR
            </button>
          </div>
        </div>
      </div>

      {/* Box 4 */}
      <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
        {/* Imagem do produto */}
        <img
          src="/exemplo4.png"
          alt="COLAR EXEMPLO - COL0123"
          className="w-full object-cover"
          style={{ marginBottom: 26.5 }}
        />

        {/* Informações do produto */}
        <div className="p-4 bg-gray-100">
          {/* Título do produto */}
          <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>

          {/* Avaliações */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-2">5 avaliações</span>
          </div>

          {/* Preço original */}
          <p className="text-gray-700 text-2xl font-bold mb-2">
            <strong>R$199,99</strong>
          </p>

          {/* Preço com desconto no Pix */}
          <p className="text-gray-600 mb-2">
            <strong>R$99,99</strong> à vista com desconto no Pix
          </p>

          {/* Opções de parcelamento */}
          <p className="text-gray-600 mb-4">
            ou em até <strong>10x</strong> de <strong>R$11,99</strong> sem juros
          </p>

          <div className="flex gap-4">
            {/* Botão de compra */}
            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-shopping-bag mr-2 text-white"></i>
              COMPRAR
            </button>

            {/* Botão de favoritar */}
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
        <h2 className="text-2xl font-bold text-black">
          VEJA NOSSOS PRODUTOS POR CATEGORIA
        </h2>
      </div>
      <div class="flex justify-center">
  <div class="flex flex-wrap">
    <a href="#">
      <img
        src="/Prancheta 1.png"
        alt="Imagem 1"
        class="w-300 h-300 object-cover m-2 border-2 border-yellow-300"
      />
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer">
      <img
        src="/Prancheta 2.png"
        alt="Imagem 2"
        class="w-300 h-300 object-cover m-2 border-2 border-yellow-300"
      />
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer">
      <img
        src="/Prancheta 3.png"
        alt="Imagem 3"
        class="w-300 h-300 object-cover m-2 border-2 border-yellow-300"
      />
    </a>
    <a href="http://" target="_blank" rel="noopener noreferrer">
      <img
        src="/Prancheta 4.png"
        alt="Imagem 4"
        class="w-300 h-300 object-cover m-2 border-2 border-yellow-300"
      />
    </a>
  </div>
</div>

      {/* MAIS VENDIDAS */}
      <div className="text-center mb-8 mt-10">
        <h2 className="text-3xl font-bold text-black">MAIS VENDIDAS</h2>
        <p className="text-2xl text-yellow-300">
          confira as queridinhas de nossos clientes
        </p>
      </div>

      {/* BOXES DE PRODUTOS MAIS VENDIDOS */}
      <div className="flex flex-wrap justify-center gap-4 p-8">
      {/* Box 1 */}
      <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
        {/* Imagem do produto */}
        <img
          src="/exemplo1.png"
          alt="COLAR EXEMPLO - COL0123"
          className="object-cover mb-5"
          style={{ width: 294 }}
        />

        {/* Informações do produto */}
        <div className="p-4 bg-gray-100">
          {/* Título do produto */}
          <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>

          {/* Avaliações */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-2">5 avaliações</span>
          </div>

          {/* Preço original */}
          <p className="text-gray-700 text-2xl font-bold mb-2">
            <strong>R$199,99</strong>
          </p>

          {/* Preço com desconto no Pix */}
          <p className="text-gray-600 mb-2">
            <strong>R$99,99</strong> à vista com desconto no Pix
          </p>

          {/* Opções de parcelamento */}
          <p className="text-gray-600 mb-4">
            ou em até <strong>10x</strong> de <strong>R$11,99</strong> sem juros
          </p>

          <div className="flex gap-4">
            {/* Botão de compra */}
            <a href="/produto1.html">
              <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                <i className="fas fa-shopping-bag mr-2 text-white"></i>
                COMPRAR
              </button>
            </a>

            {/* Botão de favoritar */}
            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-heart mr-2"></i>
              FAVORITAR
            </button>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
        {/* Imagem do produto */}
        <img
          src="/exemplo3.png"
          alt="COLAR EXEMPLO - COL0123"
          className="object-cover mb-5"
          style={{ width: 275 }}
        />

        {/* Informações do produto */}
        <div className="p-4 bg-gray-100">
          {/* Título do produto */}
          <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>

          {/* Avaliações */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-2">5 avaliações</span>
          </div>

          {/* Preço original */}
          <p className="text-gray-700 text-2xl font-bold mb-2">
            <strong>R$199,99</strong>
          </p>

          {/* Preço com desconto no Pix */}
          <p className="text-gray-600 mb-2">
            <strong>R$99,99</strong> à vista com desconto no Pix
          </p>

          {/* Opções de parcelamento */}
          <p className="text-gray-600 mb-4">
            ou em até <strong>10x</strong> de <strong>R$11,99</strong> sem juros
          </p>

          <div className="flex gap-4">
            {/* Botão de compra */}
            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-shopping-bag mr-2 text-white"></i>
              COMPRAR
            </button>

            {/* Botão de favoritar */}
            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-heart mr-2"></i>
              FAVORITAR
            </button>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
        {/* Imagem do produto */}
        <img
          src="/exemplo2.png"
          alt="COLAR EXEMPLO - COL0123"
          className="w-full object-cover"
          style={{ marginBottom: 26.5 }}
        />

        {/* Informações do produto */}
        <div className="p-4 bg-gray-100">
          {/* Título do produto */}
          <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>

          {/* Avaliações */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-2">5 avaliações</span>
          </div>

          {/* Preço original */}
          <p className="text-gray-700 text-2xl font-bold mb-2">
            <strong>R$199,99</strong>
          </p>

          {/* Preço com desconto no Pix */}
          <p className="text-gray-600 mb-2">
            <strong>R$99,99</strong> à vista com desconto no Pix
          </p>

          {/* Opções de parcelamento */}
          <p className="text-gray-600 mb-4">
            ou em até <strong>10x</strong> de <strong>R$11,99</strong> sem juros
          </p>

          <div className="flex gap-4">
            {/* Botão de compra */}
            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-shopping-bag mr-2 text-white"></i>
              COMPRAR
            </button>

            {/* Botão de favoritar */}
            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-heart mr-2"></i>
              FAVORITAR
            </button>
          </div>
        </div>
      </div>

      {/* Box 4 */}
      <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
        {/* Imagem do produto */}
        <img
          src="/exemplo4.png"
          alt="COLAR EXEMPLO - COL0123"
          className="w-full object-cover"
          style={{ marginBottom: 26.5 }}
        />

        {/* Informações do produto */}
        <div className="p-4 bg-gray-100">
          {/* Título do produto */}
          <h2 className="text-gray-800 text-lg font-bold mb-2">COLAR EXEMPLO - COL0123</h2>

          {/* Avaliações */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.45 6.3L18 8.25l-5 4.22L15.55 19 10 15.4 4.45 19l1.55-6.53-5-4.22L7.55 7.3 10 1z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-2">5 avaliações</span>
          </div>

          {/* Preço original */}
          <p className="text-gray-700 text-2xl font-bold mb-2">
            <strong>R$199,99</strong>
          </p>

          {/* Preço com desconto no Pix */}
          <p className="text-gray-600 mb-2">
            <strong>R$99,99</strong> à vista com desconto no Pix
          </p>

          {/* Opções de parcelamento */}
          <p className="text-gray-600 mb-4">
            ou em até <strong>10x</strong> de <strong>R$11,99</strong> sem juros
          </p>

          <div className="flex gap-4">
            {/* Botão de compra */}
            <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-shopping-bag mr-2 text-white"></i>
              COMPRAR
            </button>

            {/* Botão de favoritar */}
            <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
              <i className="fas fa-heart mr-2"></i>
              FAVORITAR
            </button>
          </div>
        </div>
      </div>
    </div>
      <div className="flex justify-center bg-gray-200 py-8">
      {/* Coluna da imagem */}
      <div className="relative">
        {/* Imagem com sobreposição */}
        <img
          src="/novidades 1.png"
          alt="Imagem Newsletter"
          className="inset-0 z-10 w-461 h-369 object-cover"
        />
        {/* Caixa retangular esquerda superior */}
        <div
          className="absolute left-0 top-0 z-0"
          style={{ width: '70px', height: '319px', background: '#F2E205' }}
        ></div>

        {/* Caixa retangular direita inferior */}
        <div
          className="absolute right-0 bottom-0 z-0"
          style={{ width: '42px', height: '191px', background: '#F2E205' }}
        ></div>
      </div>

      {/* Coluna do formulário */}
      <div className="flex flex-col justify-center ml-8">
        {/* Título */}
        <h2 className="text-4xl font-bold mb-4 text-center">NEWSLETTER</h2>

        {/* Descrição */}
        <p className="mb-5 text-center text-2xl text-yellow-400 font-bold">
          Que tal receber as novidades de nossa loja
          <br />
          em seu e-mail ou no seu WhatsApp?
        </p>

        {/* Formulário */}
        <form className="flex flex-col items-center">
          {/* Campo Seu nome */}
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

          {/* Campo Seu e-mail */}
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

          {/* Campo Seu telefone */}
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

          {/* Botão de cadastro */}
          <button
            type="submit"
            className="bg-yellow-300 text-yellow-700 font-bold px-4 py-2 rounded-md hover:bg-yellow-600 mt-4 hover:text-white"
          >
            QUERO ME CADASTRAR NA LISTA VIP!
          </button>
        </form>
      </div>
    </div>
    <div className="flex flex-col items-center py-12">
      {/* Título "DEPOIMENTOS" */}
      <div className="text-center">
        <h2 className="text-5xl font-bold">DEPOIMENTOS</h2>
        <p className="text-4xl text-yellow-300">de nossos clientes</p>
      </div>

      {/* Caixas de depoimentos */}
      <div className="flex flex-wrap justify-center mt-8 text-2xl">
        {/* Depoimento 1 */}
        <div className="max-w-xs mx-4 mb-8 bg-white border border-yellow-300 shadow-lg p-4">
          <p className="font-bold">Maria das Dores</p>
          <p className="text-lg text-black">Produto lindo, de alta qualidade. Recomendo demais! Uso todos os dias!</p>
          <div className="mt-4">
            <span className="text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
          </div>
        </div>

        {/* Depoimento 2 */}
        <div className="max-w-xs mx-4 mb-8 bg-white border border-yellow-300 shadow-lg p-4">
          <p className="font-semibold">João Silva</p>
          <p className="text-sm text-gray-700">Ótimo produto, entrega rápida e eficiente. Comprarei novamente com certeza!</p>
          <div className="mt-4">
            <span className="text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
          </div>
        </div>

        {/* Depoimento 3 */}
        <div className="max-w-xs mx-4 mb-8 bg-white border border-yellow-300 shadow-lg p-4">
          <p className="font-semibold">Ana Souza</p>
          <p className="text-sm text-gray-700">Excelente atendimento e suporte pós-venda. Recomendo muito!</p>
          <div className="mt-4">
            <span className="text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
          </div>
        </div>

        {/* Depoimento 4 */}
        <div className="max-w-xs mx-4 mb-8 bg-white border border-yellow-300 shadow-lg p-4">
          <p className="font-semibold">Ana Souza</p>
          <p className="text-sm text-gray-700">Excelente atendimento e suporte pós-venda. Recomendo muito!</p>
          <div className="mt-4">
            <span className="text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Botão "CONFIRA MAIS DEPOIMENTOS" */}
      <button className="bg-yellow-300 px-6 py-3 mt-8" style={{ color: '#A67212' }}>
        CONFIRA MAIS DEPOIMENTOS
      </button>
    </div>
    <div className="py-12 bg-gray-100 p-20">
      <div className="container mx-auto flex justify-center">
        <div className="items-center mr-8 mt-3">
          <h2 className="text-4xl font-bold">SIGA-NOS</h2>
          <p className="text-3xl text-yellow-300">nas Redes Sociais</p>
        </div>

        <div className="flex items-center mr-8">
          <span className="text-3xl text-blue-600 mr-2">
            <i className="fab fa-facebook text-yellow-300 p-2 text-6xl"></i>
          </span>
          <p className="text-lg text-gray-700">Curta nossa página no <br /> <strong>FACEBOOK</strong></p>
        </div>

        <div className="flex items-center">
          <span className="text-3xl text-yellow-300 mr-2">
            <i className="fab fa-instagram text-yellow-300 p-2 text-6xl"></i>
          </span>
          <p className="text-lg text-gray-700">Siga nosso perfil no <br /> <strong>INSTAGRAM</strong></p>
        </div>
      </div>
    </div>
           
     {/* Formas de Pagamento */}
     <div class="pt-10">
        <div class="max-w-screen-2xl mx-auto">
          <div class="shadow-xl inset-x-0 top-0 h-0.5 bg-yellow-300"></div>
        </div>
        <div class="flex justify-center md:grid-cols-3 gap-8">
          {/* Caixa Institucional */}
          <div class=" p-6">
            <h3 class="text-xl font-bold mb-4">Institucional</h3>
            <p class="text-gray-700 text-lg">
              Quem somos<br />
              Formas de pagamento<br />
              Política de privacidade<br />
              Cuidados com suas semijoias<br />
              Medidor de anel<br />
              Como comprar no atacado<br />
              Troca e devolução<br />
              Frete e prazo de entrega<br />
              Acompanhe seu pedido
            </p>
          </div>

          {/* Caixa Atendimento */}
          <div class="p-6">
            <h3 class="text-xl font-bold">Atendimento</h3>
            <p class="text-gray-700 mt-4">
              <p class="pb-2"><strong>WhatsApp</strong> (35) 3333-333</p> 
              <p class="pb-2"><strong>Telefone</strong> (35) 3333-3333</p>
              <p class="pb-2"><strong>Email: </strong> contato@valloresemijoias.com.br</p>
              <span class="text-gray-300">Horário de funcionamento: de segunda à sexta,<br />das 9h às 18h.</span>
            </p>
          </div>

          {/* Caixa Formas de Pagamento */}
          <div class="p-6">
            <h3 class="text-xl font-bold">Formas de Pagamento</h3>
            <div class="flex items-center mb-4">
              <img src="/site" class="w-72" alt="icone das bandeiras dos cartões"></img>
            </div>
            <div class="flex items-center mb-4">
              <img src="/pix 1.png" alt="icone de pix"></img>
              <img src="/boleto 1.png" alt="icone de boleto"></img>
            </div>
            <img src="/compra-segura.png" class="w-full" alt="icone da compra segura"></img>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer>
        <div class="shadow-lg h-px bg-gray-300 mb-8"></div>
        <div class="container mx-auto text-center">
          <p class="text-sm mb-4 font-semibold">
            Copyright (c) 2024 - Vallore Joias e Semijoias de Luxo. Todos os direitos reservados. Os preços, promoções, condições de pagamento, frete e produtos são válidos exclusivamente para compras realizadas via internet. Fotos meramente ilustrativas. Vallore Joias e Semijoias de Luxo - CNPJ: 00.000.000/0000-00 - Endereço da loja física, nº 000, Centro - São Lourenço/MG
          </p>
          <p class="font-bold">Desenvolvido por Rixxer Corp</p>
        </div>
      </footer>
    </div>
  );
};


export default Home;
