import Warning from "../components/warning";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Social from "../components/social";
import Footer from "../components/footer";
import Related from "../components/related";

export default function Products() {
  return (
    <>
      <Warning />
      <Header />
      <Navbar />

      <div className="border-t-2 border-yellow-400">
        <div className="max-w-7xl mx-auto bg-white p-8">
          <div className="text-gray-600 text-sm ">
            <a href="/site/index.html" className="hover:text-gray-800">
              Home
            </a>{" "}
            /
            <a href="#" className="hover:text-gray-800">
              Categoria
            </a>{" "}
            /
            <span className="text-gray-800">
              <strong>Produto</strong>
            </span>
          </div>
          <div className="flex justify-center">
            <div className="flex mt-6 w-max">
              <div className="flex flex-col space-y-2 mr-2">
                <img
                  src="/exemplo1.png"
                  alt="Imagem do Produto"
                  className="border-2 border-yellow-300 w-20 h-20 object-cover"
                />
                <img
                  src="/exemplo1.png"
                  alt="Imagem do Produto"
                  className="border-2 border-yellow-300 w-20 h-20 object-cover"
                />
                <img
                  src="/exemplo1.png"
                  alt="Imagem do Produto"
                  className="border-2 border-yellow-300 w-20 h-20 object-cover"
                />
              </div>

              <div className="ml-6 flex items-start">
                <img
                  src="/exemplo1.png"
                  alt="Imagem do Produto"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125 cursor-pointer"
                />
              </div>

              <div className="ml-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Nome do Produto
                </h2>
                <p className="text-lg text-gray-700 mb-4">Título de destaque</p>

                <div className="mb-4">
                  <span className="inline-block bg-yellow-300 text-white px-3 py-2 rounded-full text-xs font-semibold">
                    LANÇAMENTO
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-lg font-bold text-black">
                    <del style={{ textDecorationColor: "red" }}>
                      De: R$ 119,90
                    </del>
                  </p>
                  <p className="text-2xl text-red-600 font-bold">
                    Por: R$99,90
                  </p>
                  <p className="text-sm text-gray-600">
                    R$99,90 - à vista com desconto no PIX
                  </p>
                  <p className="text-sm text-gray-600">
                    ou em até 10x de R$11,90 sem juros
                  </p>
                </div>

                <div className="mb-6">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">
                      Cor do item:
                    </p>
                    <div className="flex space-x-2">
                      <div className="bg-yellow-300 rounded-lg py-1 px-4">
                        <p className="text-white">COR 1</p>
                      </div>
                      <div className="bg-yellow-300 rounded-lg py-1 px-4">
                        <p className="text-white">COR 2</p>
                      </div>
                      <div className="bg-yellow-300 rounded-lg py-1 px-4">
                        <p className="text-white">COR 3</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold text-gray-800 mb-2">Tamanho:</p>
                    <div className="flex space-x-2">
                      <div className="bg-yellow-300 rounded-lg py-1 px-2">
                        <p className="text-white">44</p>
                      </div>
                      <div className="bg-yellow-300 rounded-lg py-1 px-2">
                        <p className="text-white">45</p>
                      </div>
                      <div className="bg-yellow-300 rounded-lg py-1 px-2">
                        <p className="text-white">46</p>
                      </div>
                      <div className="bg-yellow-300 rounded-lg py-1 px-2">
                        <p className="text-white">47</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center">
                    <p className="font-semibold text-gray-800 mb-2 mr-2">
                      Quantidade:
                    </p>
                    <button className="border-2 border-yellow-300 rounded-xl px-14 py-1 mr-2 text-center">
                      1
                    </button>
                    <button className="bg-yellow-300 text-white py-1 px-5 rounded-xl text-lg">
                      COMPRAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/3 mx-auto mt-10">
          <div className="shadow-lg inset-x-0 top-0 h-px bg-gray-300"></div>
        </div>
        <div className="w-2/3 mx-auto mt-10">
          <h2 className="text-3xl font-bold mb-10">
            CARACTERÍSTICAS DO PRODUTO:
          </h2>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            sem at enim posuere vulputate vel ut orci. Proin id libero at odio
            sodales elementum. Integer eu lectus at turpis sagittis cursus eget
            eget ipsum. Vestibulum cursus condimentum nibh, a eleifend libero
            consequat ut. Integer tincidunt condimentum eros tincidunt placerat.
            Aenean quis laoreet orci, id hendrerit massa. In viverra magna non
            urna suscipit finibus. Phasellus ultrices posuere ipsum, nec
            dignissim nulla efficitur eget. Nulla tincidunt est eget rhoncus
            ornare.
          </p>
          <p className="font-semibold my-4">
            Morbi ultrices leo vel lacus pretium, nec varius erat iaculis.
            Quisque mattis in eros pulvinar lobortis. Donec accumsan commodo
            nisl id convallis. Maecenas id tortor ornare, eleifend nulla ac,
            lobortis lectus. In feugiat tempus nisl eget elementum. Sed sit amet
            turpis vitae enim congue tincidunt. Proin elit est, iaculis eget
            rutrum faucibus, consectetur ac mauris. Suspendisse potenti. Aliquam
            semper lacus quis sem vestibulum, nec lacinia nunc scelerisque.
            Curabitur tincidunt arcu at tortor scelerisque aliquet. In mollis,
            magna et fermentum vestibulum, sem libero vulputate ex, eget
            ullamcorper arcu nisi id orci. Donec ut ullamcorper enim. Quisque
            molestie eros nec ex auctor dignissim.
          </p>
        </div>

        <div className="w-2/3 mx-auto mt-10">
          <h2 className="text-xl font-bold mb-4">FICHA TÉCNICA:</h2>
          <div className="flex mb-1">
            <div className="w-24 bg-black text-white p-1 text-center">
              <p>Código</p>
            </div>
            <div className="w-48 bg-yellow-300 p-1">
              <p>A9DI3KA11l298</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-24 bg-black text-white p-1 text-center">
              <p>Modelo</p>
            </div>
            <div className="w-48 bg-yellow-300 p-1">
              <p>Modelo do produto</p>
            </div>
          </div>
        </div>
      </div>

      <Related />
      <Social />
      <Footer />
    </>
  );
}
