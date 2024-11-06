import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import altimeclogo from "@/assets/altimeclogo.png"
import { MenuNavigation } from './menu-navigation';
import { ImWhatsapp } from 'react-icons/im';
import { Menu } from 'lucide-react';
import { SheetContent, SheetTrigger, Sheet, SheetTitle, SheetDescription } from './ui/sheet';
import { MenuNavigationSheet } from './menu-navigation-sheet';

function MenuBar() {

  const [scrollPosition, setScrollPosition] = useState(0);

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

  return (
    <>
      <div className="h-12 bg-azulaltimec flex">
        <div className='w-[1250px] md:px-20 h-12 m-auto flex md:justify-between justify-center items-center'>
          <div className='text-white md:flex hidden items-center gap-4 pl-8'>
            <ImWhatsapp />
            <p className='text-white'>+55 (28) 99923-6765</p>
          </div>
          <Button className='bg-yellow-500 dark rounded-none h-12 text-base' >SOLICITE UM ORÇAMENTO</Button>
        </div>
      </div>
      <div className='xl:w-[1250px] absolute sm:flex xl:justify-start justify-center hidden px-24' style={{ left: '50%', transform: 'translate(-50%, 0%)' }}>
        <MenuNavigation />
      </div>
      <div className={"flex justify-center items-center m-auto fixed w-full top-0 sm:h-12 gap-8" + aparecer()} >
        <img src={altimeclogo} width="24px" className='hidden sm:flex' />
        <MenuNavigation className={"hidden sm:flex"} />
      </div>
      <Sheet>
        <SheetTrigger className='fixed right-2 top-1 sm:hidden bg-transparent' asChild>
          <Button className='text-zinc-900 border-zinc-900' size='icon' variant='outline'>
            <Menu style={{ width: '28px', height: '28px' }} />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetTitle>
            Altimec - Topografia
          </SheetTitle>
          <SheetDescription>
            Seus projetos em boas mãos!
          </SheetDescription>
          <MenuNavigationSheet />
        </SheetContent>
      </Sheet>
    </>
  )
}

export { MenuBar }