import logo from "@/assets/altimec5.png"



export default function HomePage() {

  function isIos() {
    const userAgent = window.navigator.userAgent;
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    return isIOSDevice ? '' : ' bg-fixed';
  }

  return (
    <div className={'bg-logo3 bg-cover bg-esmaecer bg-blend-lighten bg-no-repeat bg-center h-[600px] w-full flex flex-col justify-start items-center gap-20' + isIos()}>
      <img src={logo} alt="Logo altimec" width="240px" className="mt-24" />
      <div>
        <h1 className="text-4xl text-center px-4">"Mapeando o futuro com precisão e confiança."</h1>
        <h2 className="text-2xl text-center">Seus projetos em boas mãos</h2>
      </div>
    </div>
  )
}