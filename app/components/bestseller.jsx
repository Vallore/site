import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Casting() {
  return (
    <>
      <div className="text-center mb-8 mt-10">
        <h2 className="text-5xl font-bold text-black">MAIS VENDIDAS</h2>
        <p className="text-4xl text-yellow-300">confira as queridinhas dos nossos clientes</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
          <img
            src="/exemplo1.png"
            alt="COLAR EXEMPLO - COL0123"
            className="w-full object-cover mb-5"
          />

          <div className="p-4 bg-gray-100">
            <h2 className="text-gray-800 text-lg font-bold mb-2">
              COLAR EXEMPLO - COL0123
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
              <span className="text-gray-600 ml-2">5 avaliações</span>
            </div>

            <p className="text-gray-700 text-2xl font-bold mb-2">
              <strong>R$119,90</strong>
            </p>

            <p className="text-gray-600 mb-2">
              <strong>R$99,90</strong> à vista com desconto no Pix
            </p>

            <p className="text-gray-600 mb-4">
              ou em até <strong>10x</strong> de <strong>R$11,99</strong> sem
              juros
            </p>

            <div className="flex gap-4">
              <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                COMPRAR
              </button>

              <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                FAVORITAR
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
          <img
            src="/exemplo3.png"
            alt="COLAR EXEMPLO - COL0123"
            className="w-full object-cover mb-5"
          />

          <div className="p-4 bg-gray-100">
            <h2 className="text-gray-800 text-lg font-bold mb-2">
              COLAR EXEMPLO - COL0123
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
              <span className="text-gray-600 ml-2">5 avaliações</span>
            </div>

            <p className="text-gray-700 text-2xl font-bold mb-2">
              <strong>R$199,90</strong>
            </p>

            <p className="text-gray-600 mb-2">
              <strong>R$179,90</strong> à vista com desconto no Pix
            </p>

            <p className="text-gray-600 mb-4">
              ou em até <strong>10x</strong> de <strong>R$19,90</strong> sem
              juros
            </p>

            <div className="flex gap-4">
              <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                COMPRAR
              </button>

              <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                FAVORITAR
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
          <img
            src="/exemplo2.png"
            alt="COLAR EXEMPLO - COL0123"
            className="w-full object-cover mb-5"
          />

          <div className="p-4 bg-gray-100">
            <h2 className="text-gray-800 text-lg font-bold mb-2">
              COLAR EXEMPLO - COL0123
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
              <span className="text-gray-600 ml-2">5 avaliações</span>
            </div>

            <p className="text-gray-700 text-2xl font-bold mb-2">
              <strong>R$329,90</strong>
            </p>

            <p className="text-gray-600 mb-2">
              <strong>R$299,90</strong> à vista com desconto no Pix
            </p>

            <p className="text-gray-600 mb-4">
              ou em até <strong>10x</strong> de <strong>R$32,99</strong> sem
              juros
            </p>

            <div className="flex gap-4">
              <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                COMPRAR
              </button>

              <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                FAVORITAR
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-80 bg-white border border-yellow-300 overflow-hidden mb-20">
          <img
            src="/exemplo4.png"
            alt="COLAR EXEMPLO - COL0123"
            className="w-full object-cover mb-5"
          />

          <div className="p-4 bg-gray-100">
            <h2 className="text-gray-800 text-lg font-bold mb-2">
              COLAR EXEMPLO - COL0123
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
              <span className="text-gray-600 ml-2">5 avaliações</span>
            </div>

            <p className="text-gray-700 text-2xl font-bold mb-2">
              <strong>R$89,90</strong>
            </p>

            <p className="text-gray-600 mb-2">
              <strong>R$79,90</strong> à vista com desconto no Pix
            </p>

            <p className="text-gray-600 mb-4">
              ou em até <strong>10x</strong> de <strong>R$8,99</strong> sem
              juros
            </p>

            <div className="flex gap-4">
              <button className="flex items-center justify-center bg-yellow-500 text-xs hover:bg-yellow-600 text-yellow-800 py-2.5 px-4 rounded-lg font-bold">
                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                COMPRAR
              </button>

              <button className="flex items-center justify-center border-2 border-yellow-300 text-xs hover:bg-gray-100 text-yellow-300 py-2.5 px-4 rounded-lg font-bold">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                FAVORITAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
