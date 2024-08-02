import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="flex justify-around">
      <div className="flex-col space-y-4 mt-10">
        <div className="flex items-center space-x-4">
          <a
            href="https://api.whatsapp.com/send?phone=553533333333"
            target="_blank"
            className="text-yellow-300"
          >
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
          </a>
          <div>
            <p className="text-gray-800 font-bold">WhatsApp: (35) 3333-3333</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
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

      <div className="flex items-center space-x-10">
        <p className="font-bold">
          Busca <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </p>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
      </div>
    </div>
  );
}
