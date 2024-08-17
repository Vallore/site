'use client';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faSearch, faUser, faShoppingBag, faFacebook, faGoogle } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'; // Importar useState do React

export default function Header() {
  // Estado para controlar a visibilidade dos modais
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Funções para abrir e fechar os modais
  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);
  
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  
  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);
  
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="flex justify-around px-32 mt-1 mb-1">
      <div className="flex-col space-y-4 mt-10">
        <div className="flex items-center space-x-4">
          <a
            href="https://api.whatsapp.com/send?phone=553533333333"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 text-3xl"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <div>
            <p className="text-gray-800 font-bold">WhatsApp: (35) 3333-3333</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-400 text-2xl" />
          <div>
            <p className="text-gray-800 font-bold">Contato: (35) 3333-3333</p>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/logo.png"
          alt="Logo da empresa"
          className="w-44 h-44"
        />
      </div>

      <div className="relative mt-20">
        {/* Icon Buttons */}
        <div className="flex items-center space-x-5">
          <p className="font-bold">Busca</p>
          <button onClick={openSearchModal} className="cursor-pointer">
            <FontAwesomeIcon icon={faSearch} className="text-2xl text-yellow-400" />
          </button>
          <button onClick={openLoginModal} className="cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="text-2xl text-yellow-400" />
          </button>
          <button onClick={openCart} className="cursor-pointer">
            <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-yellow-400" />
          </button>
        </div>

        {/* Search Modal */}
        {isSearchModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-yellow-300 bg-opacity-90 rounded-lg shadow-lg p-6 w-full max-w-md relative h-40">
              <button onClick={closeSearchModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative flex items-center mt-10">
                <input
                  type="text"
                  placeholder="Busque mais produtos em nosso site..."
                  className="border border-gray-300 rounded-lg p-2 w-full pr-14"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-yellow-300 bg-opacity-90 rounded-lg shadow-lg p-6 w-full max-w-md relative">
              <button onClick={closeLoginModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-xl font-bold mb-4">Login</h2>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                />
                <button type="submit" className="bg-yellow-400 text-white rounded-lg p-2 w-full">
                  Entrar
                </button>
              </form>
              <p className="mt-4 text-center">
                <button onClick={() => { closeLoginModal(); openRegisterModal(); }} className="text-black">
                  Criar conta
                </button>
                {/* Botões de login social */}
                <div className="flex space-x-4 mt-4">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                    <FontAwesomeIcon icon={faFacebook} className="text-white text-xl" />
                    <span>Login com Facebook</span>
                  </button>
                  <button className="bg-red-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                    <FontAwesomeIcon icon={faGoogle} className="text-white text-xl" />
                    <span>Login com Google</span>
                  </button>
                </div>
              </p>
            </div>
          </div>
        )}

        {/* Register Modal */}
        {isRegisterModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-yellow-300 bg-opacity-90 rounded-lg shadow-lg p-6 w-full max-w-md relative">
              <button onClick={closeRegisterModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-xl font-bold mb-4">Criar Conta</h2>
              <form>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                />
                <button type="submit" className="bg-yellow-400 text-white rounded-lg p-2 w-full">
                  Registrar
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Cart */}
        {isCartOpen && (
          <div className="fixed top-0 right-0 h-full bg-white shadow-lg w-80 z-50 transition-transform duration-300 ease-in-out transform translate-x-0">
            <button onClick={closeCart} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Carrinho</h2>
              {/* Aqui você pode mapear os itens do carrinho */}
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <p className="font-bold">Produto 1</p>
                  <p className="text-gray-600">Descrição do produto 1</p>
                  <p className="text-gray-800">R$ 100,00</p>
                </div>
                <div className="border-b pb-4">
                  <p className="font-bold">Produto 2</p>
                  <p className="text-gray-600">Descrição do produto 2</p>
                  <p className="text-gray-800">R$ 200,00</p>
                </div>
                {/* Adicione mais itens conforme necessário */}
              </div>
              <div className="mt-6">
                <p className="font-bold">Total: R$ 300,00</p>
                <button className="bg-yellow-400 text-white py-2 px-4 rounded-lg w-full mt-4">Finalizar Compra</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
