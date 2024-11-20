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
import handshake from "@/assets/icons/handshake-svgrepo-com.svg"
import target from "@/assets/icons/target-and-arrow-svgrepo-com.svg"
import telescope from "@/assets/icons/telescope-svgrepo-com.svg"
import map from "@/assets/icons/map.svg"
import instagram from "@/assets/icons/instagram.svg"
import facebook from "@/assets/icons/facebook.svg"
import whatsapp from "@/assets/icons/whatsapp.svg"
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
      <section className="flex max-w-5xl justify-center m-auto py-16 gap-8 px-4 lg:flex-row flex-col">
        <div className="flex-1 bg-slate-700 p-6 rounded-xl">
          <img src={target} className="pb-4" width={64} fill='#e2e8f0' />
          <h1 className="text-2xl font-semibold text-white">Missão</h1>
          <h3 className="text-lg text-slate-200">Nosso compromisso é proporcionar serviços de topografia de excelente qualidade. Estamos comprometidos com a melhoria contínua para o sucesso dos projetos dos nossos clientes.</h3>
        </div>
        <div className="flex-1 bg-slate-700 p-6 rounded-xl">
          <img src={telescope} className="pb-4" width={64} />
          <h1 className="text-2xl font-semibold text-white">Visão</h1>
          <h3 className="text-lg text-slate-200">Ser reconhecida como líder de mercado em topografia especializada, oferecendo excelência técnica, compromisso com a qualidade e contribuindo para o avanço tecnológico do setor.</h3>
        </div>
        <div className="flex-1 bg-slate-700 p-6 rounded-xl">
          <img src={handshake} className="pb-4" width={64} />
          <h1 className="text-2xl font-semibold text-white">Valores</h1>
          <h3 className="text-lg text-slate-200">Ética, transparência e honestidade são os princípios fundamentais que norteiam nossas relações com colaboradores, fornecedores e clientes.</h3>
        </div>


      </section>

      <svg width="100%" height="50" className="rotate-180" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 0 L100 0 L0 50 Z" className="fill-slate-700" />
      </svg>

      {/* Contatos */}
      <section className="bg-slate-700 py-16 text-center px-8">
        <h1 className="text-4xl text-white">Contatos</h1>
        <h3 className="text-xl text-slate-300 pb-16">Entre em contato com a Altimec Topografia</h3>
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="flex md:items-end items-center flex-col gap-8 md:text-end text-center flex-1">
            <div className="md:max-w-sm max-w-full">
              <h2 className="text-xl text-white font-semibold">Endereço</h2>
              <h3 className="text-md text-zinc-300">Av. Lourenzo Zandonadi, 825, Venda Nova do Imigrante - Ao lado do hospital Padre Máximo</h3>
            </div>
            <div>
              <h2 className="text-xl text-white font-semibold mb-1">Contatos</h2>
              <h3 className="text-md text-zinc-300">(27) 99202-0148</h3>
              <h3 className="text-md text-zinc-300">(27) 98889-3584</h3>
              <h3 className="text-md text-zinc-300">altimectopografia@altimec.com.br</h3>
            </div>
            <div>
              <h2 className="text-xl text-white font-semibold mb-1">Horários</h2>
              <h3 className="text-md text-zinc-300">SEG a SEX: 9:00 as 18:00</h3>
              <h3 className="text-md text-zinc-300">SAB: 9:00 as 13:00</h3>
            </div>
            <div>
              <h2 className="text-xl text-white font-semibold mb-1">Redes Sociais</h2>
              <div className="flex gap-2">
                <Button  size='icon' className='bg-transparent hover:bg-slate-500 rounded-lg p-1'><img src={instagram} /></Button>
                <Button  size='icon' className='bg-transparent hover:bg-slate-500 rounded-lg p-1'><img src={facebook} /></Button>
                <Button  size='icon' className='bg-transparent hover:bg-slate-500 rounded-lg p-1'><img src={whatsapp} /></Button>
                <Button  size='icon' className='bg-transparent hover:bg-slate-500 rounded-lg p-1'><img src={map} /></Button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:justify-start justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10581.653161587303!2d-41.165569390928056!3d-20.33420806431848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb98fe7eb3b3d73%3A0xd2a930b137ebd39a!2sPlanet%20Burger!5e0!3m2!1spt-BR!2sbr!4v1732125350409!5m2!1spt-BR!2sbr"
              className="md:max-w-sm w-full h-64 md:h-full rounded-xl"
              allowFullScreen="false"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}