import logo from "@/assets/altimec3.png"
import { isIos } from "@/utils/utils"
import { Button } from "@/components/ui/button"

export default function HomePage() {

  var bgFixed = isIos() ? '' : ' bg-fixed'

  return (
    <>
      <section className={'bg-logo3 bg-cover bg-esmaecer bg-blend-lighten bg-no-repeat bg-center h-[800px] w-full flex flex-col justify-startgap-20' + bgFixed}>
        <div className="my-auto flex flex-col gap-32 items-center ">
          <img src={logo} alt="Logo altimec" width="240px"/>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl text-center px-4">"Mapeando o futuro com precisão e confiança."</h1>
            <h2 className="text-2xl text-center">Seus projetos em boas mãos</h2>
            <Button variant='ghost' className='bg-black text-white mt-8 mb-48 rounded'>SOLICITE UM ORÇAMENTO GRATUITO</Button>
          </div>
        </div>
      </section>

      <section className="text-center h-[800px] py-24">
        <h1 className="text-4xl">Lorem Ipsum</h1>
        <h3 className="text-2xl">Lorem ipsum dolor sit amet. Ut unde enim ut quibusdam tempora aut ipsam aperiam sit galisum eaque eum magni quae qui quae rerum.</h3>
      </section>

    </>
  )
}