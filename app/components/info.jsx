import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faCheckCircle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <div className="relative">
      <img
        src="/slider 1.png"
        alt="Imagem de uma mulher usando joias Vallore, como brinco e colar"
        className="w-full object-cover border-t-4 border-b-4 border-yellow-400 relative"
      />
      <div className="flex justify-center bg-yellow-300 text-white p-5 max-w-7xl mx-auto space-x-4">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faGem}></FontAwesomeIcon>
          <div>
            <p className="text-2xl font-bold">Vários lançamentos</p>
            <p className="text-lg">Grandes novidades</p>
          </div>
        </div>
        <div className="border-l-2 border-white h-[130px]"></div>{" "}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
          <div>
            <p className="text-2xl font-bold">Garantia estendida</p>
            <p className="text-lg">Em todas as peças</p>
          </div>
        </div>
        <div className="border-l-2 border-white h-[130px]"></div>{" "}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
          <div>
            <p className="text-2xl font-bold">Frete grátis</p>
            <p className="text-lg">Acima de R$1000,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
