import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Casting() {
  return (
    <>
      <div className="text-center mb-8 mt-10">
        <h2 className="text-3xl font-bold text-black">LANÇAMENTOS</h2>
        <p className="text-2xl text-yellow-500">Confira nossos últimos lançamentos</p>
      </div>

      <div className="flex justify-center gap-6">
      <div className="max-w-sm bg-white border border-yellow-300 overflow-hidden">
      <img
        src="/exemplo1.png"
        alt="COLAR EXEMPLO - COL0123"
        className="w-full h-60 object-cover p-4"
      />

      <div className="p-4 bg-gray-100">
        <h2 className="text-gray-800 text-xl font-bold mb-2">
          Colar exemplo - COL 0123
        </h2>

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
          <span className="text-gray-600 ml-2">(15)</span>
        </div>

        <p className="text-gray-700 text-xl font-bold mb-2">
          <strong>R$119,90</strong>
        </p>

        <p className="text-gray-600 mb-2 text-xs">
          <strong>R$99,90</strong> à vista com desconto no Pix
        </p>

        <p className="text-gray-600 mb-4 text-xs">
          ou em até <strong>10x</strong> de <strong>R$11,99</strong> sem
          juros
        </p>

        <div className="flex gap-4">
          <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 hover:text-yellow-800 text-white py-2.5 px-4 rounded-lg font-bold">
            <FontAwesomeIcon icon={faShoppingBag} className="mr-2 text-white" />
            COMPRAR
          </button>

          <button className="flex items-center justify-center border border-yellow-800 text-xs hover:bg-yellow-600 hover:text-white hover:border-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            FAVORITAR
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-yellow-300 overflow-hidden">
      <img
        src="/exemplo3.png"
        alt="COLAR EXEMPLO - COL0123"
        className="w-full h-60 object-cover p-4"
      />

      <div className="p-4 bg-gray-100">
        <h2 className="text-gray-800 text-xl font-bold mb-2">
          Anel exemplo - ANL 0123
        </h2>

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
          <span className="text-gray-600 ml-2">(15)</span>
        </div>

        <p className="text-gray-700 text-xl font-bold mb-2">
          <strong>R$199,90</strong>
        </p>

        <p className="text-gray-600 mb-2 text-xs">
          <strong>R$179,90</strong> à vista com desconto no Pix
        </p>

        <p className="text-gray-600 mb-4 text-xs">
          ou em até <strong>10x</strong> de <strong>R$19,99</strong> sem
          juros
        </p>

        <div className="flex gap-4">
          <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 hover:text-yellow-800 text-white py-2.5 px-4 rounded-lg font-bold">
            <FontAwesomeIcon icon={faShoppingBag} className="mr-2 text-white" />
            COMPRAR
          </button>

          <button className="flex items-center justify-center border border-yellow-800 text-xs hover:bg-yellow-600 hover:text-white hover:border-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            FAVORITAR
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-yellow-300 overflow-hidden">
      <img
        src="/exemplo2.png"
        alt="COLAR EXEMPLO - COL0123"
        className="w-full h-60 object-cover p-4"
      />

      <div className="p-4 bg-gray-100">
        <h2 className="text-gray-800 text-xl font-bold mb-2">
          Colar exemplo - COL 0456
        </h2>

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
          <span className="text-gray-600 ml-2">(15)</span>
        </div>

        <p className="text-gray-700 text-xl font-bold mb-2">
          <strong>R$329,90</strong>
        </p>

        <p className="text-gray-600 mb-2 text-xs">
          <strong>R$299,90</strong> à vista com desconto no Pix
        </p>

        <p className="text-gray-600 mb-4 text-xs">
          ou em até <strong>10x</strong> de <strong>R$32,99</strong> sem
          juros
        </p>

        <div className="flex gap-4">
          <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 hover:text-yellow-800 text-white py-2.5 px-4 rounded-lg font-bold">
            <FontAwesomeIcon icon={faShoppingBag} className="mr-2 text-white" />
            COMPRAR
          </button>

          <button className="flex items-center justify-center border border-yellow-800 text-xs hover:bg-yellow-600 hover:text-white hover:border-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            FAVORITAR
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-yellow-300 overflow-hidden">
      <img
        src="/exemplo4.png"
        alt="COLAR EXEMPLO - COL0123"
        className="w-full h-60 object-cover p-4"
      />

      <div className="p-4 bg-gray-100">
        <h2 className="text-gray-800 text-xl font-bold mb-2">
          Colar exemplo - ANL 0456
        </h2>

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
          <span className="text-gray-600 ml-2">(15)</span>
        </div>

        <p className="text-gray-700 text-xl font-bold mb-2">
          <strong>R$89,90</strong>
        </p>

        <p className="text-gray-600 mb-2 text-xs">
          <strong>R$79,90</strong> à vista com desconto no Pix
        </p>

        <p className="text-gray-600 mb-4 text-xs">
          ou em até <strong>10x</strong> de <strong>R$8,99</strong> sem
          juros
        </p>

        <div className="flex gap-4">
          <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 hover:text-yellow-800 text-white py-2.5 px-4 rounded-lg font-bold">
            <FontAwesomeIcon icon={faShoppingBag} className="mr-2 text-white" />
            COMPRAR
          </button>

          <button className="flex items-center justify-center border border-yellow-800 text-xs hover:bg-yellow-600 hover:text-white hover:border-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            FAVORITAR
          </button>
        </div>
      </div>
    </div>
        
      </div>
    </>
  );
}
