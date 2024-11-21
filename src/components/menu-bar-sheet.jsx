import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import altimeclogo from "@/assets/altimeclogo.png"
import { MenuBar } from './menu-bar';
import { ImWhatsapp } from 'react-icons/im';
import { PanelLeft } from 'lucide-react';
import { SheetContent, SheetTrigger, Sheet, SheetTitle, SheetDescription } from './ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useNavigate } from 'react-router-dom';

function MenuBarSheet() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  function aparecer() {
    return scrollPosition < 450 ? " hidden" : ""
  }

  const goTo = (path) => {
    navigate(path);
    setIsSheetOpen(false);
    window.scrollTo(0, 0);
  }

  return (
    <>

      {/* BlueBar */}
      <div className="h-12 bg-slate-900 flex">
        <div className='w-[1250px] md:px-20 h-12 m-auto flex md:justify-between justify-center items-center'>
          <div className='text-white md:flex hidden items-center gap-4 pl-8'>
            <ImWhatsapp />
            <p className='text-white'>+55 (28) 99923-6765</p>
          </div>
          <Button className='bg-azulaltimec dark rounded-none h-12 text-white hover:bg-slate-700' >SOLICITE UM ORÇAMENTO</Button>
        </div>
      </div>

      {/* CenteredMenu */}
      <div className='xl:w-[1250px] absolute sm:flex xl:justify-start justify-center hidden px-24' style={{ left: '50%', transform: 'translate(-50%, 0%)' }}>
        <MenuBar />
      </div>

      {/* AfterScroll */}
      <div className={"flex z-50 justify-center text-white items-center m-auto fixed w-full top-0 sm:h-12 gap-8 bg-slate-900" + aparecer()} >
        <img src={altimeclogo} width="24px" className='hidden sm:flex' />
        <MenuBar className={"hidden sm:flex"} />
      </div>

      {/* LateralMenu */}
      <Sheet open={isSheetOpen} onOpenChange={() => setIsSheetOpen(!isSheetOpen)}>
        <SheetTrigger className='z-50 fixed right-2 top-1 sm:hidden bg-transparent' asChild>
          <Button className='text-white bg-slate-900' size='icon' variant='ghost'>
            <PanelLeft style={{ width: '28px', height: '28px' }} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className='flex justify-between pr-2'>
            <div>
              <SheetTitle>
                Altimec - Topografia
              </SheetTitle>
              <SheetDescription>Seus projetos em boas mãos!</SheetDescription>
            </div>
            <img src={altimeclogo} width={24} alt="" />
          </div>
          <hr className='mt-2 mb-8 w-80' />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <Button variant='link' onClick={() => goTo('/')} className='justify-start p-0 w-full text-base'>Home</Button>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Soluções</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4'>
                <Button variant='ghost' onClick={() => { goTo('/solucao') }} className='justify-start'>Solução 1</Button>
                <Button variant='ghost' onClick={() => { goTo('/solucao') }} className='justify-start'>Solução 2</Button>
                <Button variant='ghost' onClick={() => { goTo('/solucao') }} className='justify-start'>Solução 3</Button>
                <Button variant='ghost' onClick={() => { goTo('/solucao') }} className='justify-start'>Solução 4</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Portfólio</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4'>
                <Button variant='ghost' onClick={() => { goTo('/portfolio') }} className='justify-start'>Tabalho 1</Button>
                <Button variant='ghost' onClick={() => { goTo('/portfolio') }} className='justify-start'>Tabalho 2</Button>
                <Button variant='ghost' onClick={() => { goTo('/portfolio') }} className='justify-start'>Tabalho 3</Button>
                <Button variant='ghost' onClick={() => { goTo('/portfolio') }} className='justify-start'>Tabalho 4</Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>

    </>
  )
}

export { MenuBarSheet }