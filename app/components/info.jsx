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
      className="w-full object-cover border-t-2 border-b-2 border-yellow-400 mb-32" // Ajusta a margem inferior para dar mais espaço
    />
    <div className="absolute bottom-[-80px] left-0 right-0 bg-yellow-500 text-white py-4 px-6 flex justify-around space-x-4 max-w-6xl mx-auto">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faGem} className="text-4xl" />
        <div>
          <p className="text-sm font-bold">Vários lançamentos</p>
          <p className="text-xs">Grandes novidades</p>
        </div>
      </div>
      <div className="border-l-2 border-white h-[80px]" />
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCheckCircle} className="text-4xl" />
        <div>
          <p className="text-sm font-bold">Garantia estendida</p>
          <p className="text-xs">Em todas as peças</p>
        </div>
      </div>
      <div className="border-l-2 border-white h-[80px]" />
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faTruck} className="text-4xl" />
        <div>
          <p className="text-sm font-bold">Frete grátis</p>
          <p className="text-xs">Acima de R$1000,00</p>
        </div>
      </div>
    </div>
  </div>
  );
}
