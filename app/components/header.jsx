'use client';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faPhoneAlt, faSearch, faUser, faShoppingBag, faGoogle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Header() {
  // Estados para controlar a visibilidade dos modais
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY_HERE'; // Substitua pelo seu site key do reCAPTCHA

  // Funções para abrir e fechar os modais
  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
    setPassword('');
    setConfirmPassword('');
    setRecaptchaToken('');
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    if (!recaptchaToken) {
      alert("Por favor, complete o CAPTCHA.");
      return;
    }
    // Lógica para registro do usuário aqui
    alert("Cadastro realizado com sucesso!");
    closeRegisterModal();
  };

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
          <button onClick={openLoginModal}>
            <FontAwesomeIcon icon={faUser} className="text-2xl text-yellow-400" />
          </button>
          <button onClick={openCart}>
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
              <h2 className="text-xl font-bold mb-4 text-center">Entrar com e-mail e senha</h2>
              <form>
                <input
                  type="email"
                  placeholder="Ex.: exemplo@mail.com"
                  className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                />
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-gray-500" />
                  </button>
                </div>
                <button type="submit" className="bg-yellow-400 text-white rounded-lg p-2 w-full">
                  Entrar
                </button>
                <p className="mt-4 text-center">
                  <button
                    onClick={() => { setIsLoginModalOpen(false); setIsRegisterModalOpen(true); }}
                    className="text-black underline"
                  >
                    Criar conta
                  </button>
                </p>
                {/* Botão de login social */}
                <div className="flex flex-col space-y-2 mt-4">
                  <button className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-lg py-2 px-4 w-full">
                    <FontAwesomeIcon icon={faGoogle} className="text-xl mr-2 text-black" />
                    <span>Entrar com sua conta Google</span>
                  </button>
                </div>
              </form>
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
              <h2 className="text-xl font-bold mb-4">Cadastre-se</h2>
              <p className="text-center mb-4">Compre mais rápido e acompanhe seu pedido em um só lugar!</p>
              <form onSubmit={handleRegisterSubmit}>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                />
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-gray-500" />
                  </button>
                </div>
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirmar senha"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-gray-500" />
                  </button>
                </div>
                <div className="mb-4">
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={(token) => setRecaptchaToken(token)}
                  />
                </div>
                <button type="submit" className="bg-yellow-400 text-white rounded-lg p-2 w-full">
                  Cadastre-se
                </button>
                <p className="mt-4 text-center">
                  <button
                    onClick={() => { setIsRegisterModalOpen(false); setIsLoginModalOpen(true); }}
                    className="text-black underline"
                  >
                    Já possui uma conta? Inicie sua sessão aqui.
                  </button>
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Cart Drawer */}
        {isCartOpen && (
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform translate-x-0">
            <div className="p-4">
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
              <h2 className="text-xl font-bold mb-4">Carrinho</h2>
              <div>
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
