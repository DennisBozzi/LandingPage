import { Button } from "./ui/button";
import altimeclogo from "@/assets/altimeclogo.png"

function Footer() {
  return (<section className="p-2 flex justify-center items-center flex-row md:gap-16 gap-4">
    <img src={altimeclogo} width={32} />
    <div className="flex flex-col text-center">
      <Button variant='link' className="p-0 text-md">Política de Privacidade e Termos de Uso</Button>
      <p className="font-semibold text-md">© Altimec Topografia 2024. Todos os direitos Reservados.</p>
    </div>
  </section>
  )
}

export { Footer };