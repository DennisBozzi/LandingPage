import logo from "@/assets/altimec3.png"
import { isIos } from "@/utils/utils"
import { Button } from "@/components/ui/button"
import img1 from "@/assets/lucas/Lucas9.jpg"
import img2 from "@/assets/lucas/Lucas4.jpg"

export default function HomePage() {

  var bgFixed = isIos() ? '' : ' bg-fixed'

  return (
    <>
      <section className={'bg-logo3 bg-cover bg-esmaecer bg-blend-lighten bg-no-repeat bg-center h-[800px] w-full flex flex-col justify-startgap-20' + bgFixed}>
        <div className="my-auto flex flex-col gap-32 items-center ">
          <img src={logo} alt="Logo altimec" width="240px" />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl text-center px-4">"Mapeando o futuro com precisão e confiança"</h1>
            <h2 className="text-2xl text-center">Seus projetos em boas mãos</h2>
            <Button variant='ghost' className='bg-black text-white mt-8 mb-48 rounded'>SOLICITE UM ORÇAMENTO GRATUITO</Button>
          </div>
        </div>
      </section>

      <section className="text-center h-[800px] max-w-[1050px] py-24 flex flex-col gap-16 m-auto px-4">
        <h1 className="text-4xl">Sobre Nós</h1>
        <div className="flex items-center sm:gap-16 gap-8 sm:flex-row flex-col sm:p-0 px-4">
          <img src={img1} className="md:w-2/5 w-full rounded"/>
          <h3 className="text-2xl">Somos uma empresa especializada em topografia e dedicada a proporcionar honestidade, compromisso e excelência em cada projeto.</h3>
        </div>
        <hr/>
        <div className="flex items-center sm:gap-16 gap-8 sm:flex-row flex-col-reverse sm:p-0 px-4">
          <h3 className="text-2xl">Contamos com uma equipe de profissionais altamente qualificados, estamos comprometidos em atender às necessidades de nossos clientes em vários setores.</h3>
          <img src={img2} className="md:w-2/5 w-full rounded-lg"/>
        </div>
      </section>

    </>
  )
}