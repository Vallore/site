export default function Footer() {
  return (
    <>
      <div className="pt-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="shadow-xl inset-x-0 top-0 h-0.5 bg-yellow-300"></div>
        </div>
        <div className="flex justify-center md:grid-cols-3 gap-8">
          <div className=" p-6">
            <h3 className="text-xl font-bold mb-4">Institucional</h3>
            <p className="text-gray-700 text-lg">
              Quem somos
              <br />
              Formas de pagamento
              <br />
              Política de privacidade
              <br />
              Cuidados com suas semijoias
              <br />
              Medidor de anel
              <br />
              Como comprar no atacado
              <br />
              Troca e devolução
              <br />
              Frete e prazo de entrega
              <br />
              Acompanhe seu pedido
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold">Atendimento</h3>
            <p className="text-gray-700 mt-4">
              <p className="pb-2">
                <strong>WhatsApp</strong> (35) 3333-333
              </p>
              <p className="pb-2">
                <strong>Telefone</strong> (35) 3333-3333
              </p>
              <p className="pb-2">
                <strong>Email: </strong> contato@valloresemijoias.com.br
              </p>
              <span className="text-gray-300">
                Horário de funcionamento: de segunda à sexta,
                <br />
                das 9h às 18h.
              </span>
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold">Formas de Pagamento</h3>
            <div className="flex items-center mb-4">
              <img
                src="/BANDEIRAS_CARTAO"
                className="w-72"
                alt="icone das bandeiras dos cartões"
              ></img>
            </div>
            <div className="flex items-center mb-4">
              <img src="/pix 1.png" alt="icone de pix"></img>
              <img src="/boleto 1.png" alt="icone de boleto"></img>
            </div>
            <img
              src="/compra-segura.png"
              className="w-full"
              alt="icone da compra segura"
            ></img>
          </div>
        </div>
      </div>

      <footer>
        <div className="shadow-lg h-px bg-gray-300 mb-8"></div>
        <div className="container mx-auto text-center">
          <p className="text-sm mb-4 font-semibold">
            Copyright (c) 2024 - Vallore Joias e Semijoias de Luxo. Todos os
            direitos reservados. Os preços, promoções, condições de pagamento,
            frete e produtos são válidos exclusivamente para compras realizadas
            via internet. Fotos meramente ilustrativas. Vallore Joias e
            Semijoias de Luxo - CNPJ: 00.000.000/0000-00 - Endereço da loja
            física, nº 000, Centro - São Lourenço/MG
          </p>
          <span className="font-bold">Desenvolvido por Rixxer Corp</span>
        </div>
      </footer>
    </>
  );
}
