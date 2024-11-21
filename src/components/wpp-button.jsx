import Wpp from '@/assets/icons/whatsapp-verde.svg';

function WppButton() {
  return (<>
    <a className='cursor-pointer' target='_blank' rel='noopener noreferrer' href='https://api.whatsapp.com/send?phone=5527992020148&text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'>
      <img className='animate-bounce fixed bottom-4 right-4' width={64} src={Wpp} alt="" /> 
    </a>
  </>)
}

export { WppButton };