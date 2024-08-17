import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center py-12">
      <div className="text-center">
        <h2 className="text-5xl font-bold">DEPOIMENTOS</h2>
        <p className="text-4xl text-yellow-300">de nossos clientes</p>
      </div>

      <div className="flex flex-wrap justify-center mt-8 text-2xl">
        <div className="max-w-xs mx-4 mb-8 bg-white border border-yellow-300 shadow-lg p-4">
          <p className="font-bold">Maria das Dores</p>
          <p className="text-lg text-black">
            Produto lindo, de alta qualidade. Recomendo demais! Uso todos os
            dias!
          </p>
          <div className="mt-4">
            <span className="text-yellow-400">
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span>
          </div>
        </div>

        <div className="max-w-xs mx-4 mb-8 bg-white border border-yellow-300 shadow-lg p-4">
          <p className="font-semibold">João Silva</p>
          <p className="text-sm text-gray-700">
            Ótimo produto, entrega rápida e eficiente. Comprarei novamente com
            certeza!
          </p>
          <div className="mt-4">
            <span className="text-yellow-400">
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span>
          </div>
        </div>

        <div className="max-w-xs mx-4 mb-8 bg-white border border-yellow-300 shadow-lg p-4">
          <p className="font-semibold">Ana Souza</p>
          <p className="text-sm text-gray-700">
            Excelente atendimento e suporte pós-venda. Recomendo muito!
          </p>
          <div className="mt-4">
            <span className="text-yellow-400">
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span>
          </div>
        </div>

        <div className="max-w-xs mx-4 mb-8 bg-white border border-yellow-300 shadow-lg p-4">
          <p className="font-semibold">Ana Souza</p>
          <p className="text-sm text-gray-700">
            Excelente atendimento e suporte pós-venda. Recomendo muito!
          </p>
          <div className="mt-4">
            <span className="text-yellow-400">
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </span>
          </div>
        </div>
      </div>

      <button
        className="bg-yellow-400 px-12 py-3 mt-8 font-bold text-yellow-700 hover:bg-yellow-600 hover:text-white rounded-lg">
        CONFIRA MAIS DEPOIMENTOS
      </button>
    </div>
  );
}
