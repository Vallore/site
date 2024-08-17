import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className="py-12 bg-gray-100 p-20">
      <div className="container mx-auto flex justify-center">
        <div className="items-center mr-8 mt-3">
          <h2 className="text-4xl font-bold">SIGA-NOS</h2>
          <p className="text-3xl text-yellow-300">nas Redes Sociais</p>
        </div>

        <div className="flex items-center mr-8">
          <span className="text-3xl text-yellow-300 mr-2">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </span>
          <p className="text-lg text-gray-700">
            Curta nossa página no <br /> <a href="#"><strong>FACEBOOK</strong></a>
          </p>
        </div>

        <div className="flex items-center">
          <span className="text-3xl text-yellow-300 mr-2">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </span>
          <p className="text-lg text-gray-700">
            Siga nosso perfil no <br /> <a href="#"><strong>INSTAGRAM</strong></a>
          </p>
        </div>
      </div>
    </div>
  );
}
