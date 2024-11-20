import logo from "@/assets/altimec3.png"
import Autoplay from "embla-carousel-autoplay"
import img1 from "@/assets/lucas/Lucas9.jpg"
import img2 from "@/assets/lucas/Lucas4.jpg"
import matricial from "@/assets/clientes/matricial.jpg"
import privateC from "@/assets/clientes/privateconstrutora.jpg"
import celEnge from "@/assets/clientes/celengenharia.png"
import gruposimec from "@/assets/clientes/gruposimec.png"
import monto from "@/assets/clientes/monto.png"
import ipe from "@/assets/clientes/ipe.jpg"
import ope from "@/assets/clientes/opeconstrucoes.png"
import estel from "@/assets/clientes/grupoestel.jpg"
import edp from "@/assets/clientes/edp.png"
import labmar from "@/assets/clientes/labmar.jpg"
import { isIos } from "@/utils/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BottomCarouselNext, BottomCarouselPrevious, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import * as React from "react"

export default function HomePage() {

  var bgFixed = isIos() ? '' : ' bg-fixed'

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const clientes = { privateC, celEnge, gruposimec, monto, ipe, ope, estel, edp, matricial, labmar }

  return (
    <>
      {/* Início */}
      <section className={'bg-logo3 bg-cover bg-esmaecer bg-blend-lighten bg-no-repeat bg-center h-[800px] w-full flex flex-col justify-startgap-20' + bgFixed}>
        <div className="my-auto flex flex-col gap-32 items-center ">
          <img src={logo} alt="Logo altimec" width="240px" />

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl text-center px-4">"Mapeando o futuro com precisão e confiança"</h1>
            <h2 className="text-2xl text-center">Seus projetos em boas mãos</h2>
          </div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
      </section>

      {/* Sobre nós */}
      <section className="text-center max-w-[1050px] py-16 flex flex-col gap-8 m-auto px-4">
        <h1 className="text-4xl">Sobre Nós</h1>
        <div className="flex items-center sm:gap-16 gap-8 md:flex-row flex-col sm:p-0 px-4">
          <img src={img1} className="md:w-2/5 w-full rounded-lg" />
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Especializada</h3>
            <h3 className="text-xl text-gray-600">Somos uma empresa especializada em <span className="text-black font-semibold">topografia</span> e dedicada a proporcionar <span className="text-black font-semibold">honestidade</span>, <span className="text-black font-semibold">compromisso</span> e <span className="text-black font-semibold">excelência</span> em cada projeto.</h3>
          </div>
        </div>
        <hr />
        <div className="flex items-center sm:gap-8 gap-4 md:flex-row flex-col-reverse sm:p-0 px-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Profissional</h3>
            <h3 className="text-xl text-gray-600">Contamos com uma equipe de profissionais <span className="text-black font-semibold">altamente qualificados</span>, estamos comprometidos em atender às <span className="text-black font-semibold">necessidades</span> de nossos <span className="text-black font-semibold">clientes</span> em vários setores.</h3>
          </div>
          <img src={img2} className="md:w-2/5 w-full rounded-lg" />
        </div>
      </section >

      {/* Carousel */}
      <section className="bg-slate-700 text-white">
        <svg width="100%" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0 L100 0 L0 50 Z" fill="#FFFFFF" />
        </svg>
        <h1 className="text-4xl text-center my-16 px-4">Alguns de nossos clientes</h1>
        <div className="flex justify-center mb-16">
          <Carousel plugins={[plugin.current]}
            className="w-full max-w-5xl px-8 relative">
            <CarouselContent className="-ml-1">
              {Object.entries(clientes).map(([key, cliente]) => (
                <CarouselItem key={key} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={cliente} alt="" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-8 mt-8">
              <BottomCarouselPrevious className='xl:hidden flex' />
              <BottomCarouselNext className='xl:hidden flex' />
            </div>
            <CarouselPrevious className='xl:flex hidden' />
            <CarouselNext className='xl:flex hidden' />
          </Carousel>
        </div>

        <svg width="100%" height="50" className="rotate-180" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0 L100 0 L0 50 Z" fill="#FFFFFF" />
        </svg>
      </section>

      {/* Missão - Visão - Valores */}
      <section>
        
      </section>
    </>
  )
}