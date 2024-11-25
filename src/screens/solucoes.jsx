import estacaoTotal from "@/assets/solucoes/estacaoTotal.png";

export default function Solucoes() {
  return (
    <>
      <section className="py-8 md:py-24 px-8 flex items-center justify-center max-w-screen-lg gap-24 m-auto md:flex-row flex-col md:text-start text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Estação Total</h1>
          <h3 className="text-xl">
            A Estação Total é um equipamento que combina teodolito eletrônico e
            medidor de distância a laser para realizar medições precisas de
            ângulos e distâncias.
          </h3>
        </div>
        <img src={estacaoTotal} alt="" className="w-96" />
      </section>

      <svg
        width="100%"
        height="50"
        className="rotate-180"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0 0 L100 0 L0 50 Z" className="fill-slate-700" />
      </svg>

      <section className="h-[800px] bg-slate-700 text-white py-8 md:py-16 px-8">
        <div className="flex flex-col gap-8 max-w-screen-lg m-auto px-8">
          <h1 className="text-4xl text-center">Aplicações e Indicações</h1>
          <h3 className="text-xl">
          ● Indicada para levantamentos topográficos em áreas de pequena a média
            extensão que exigem alta precisão, como construção civil,
            loteamentos e obras de infraestrutura.
          </h3>
          <h3 className="text-xl">
          ● Levantamento cadastral, locação de obras, medições de áreas,
            definição de limites e estudos planialtimétricos.
          </h3>
        </div>
      </section>
    </>
  );
}
