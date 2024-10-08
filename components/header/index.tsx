import Image from 'next/image'
import React from 'react'

function Header(props: any) {
  let blackLogo = props.blackLogo;
  return (
    <div className="flex max-w-[1920px] px-[20px] md:px-[60px] py-10 justify-between items-center">
      <Image
        src={blackLogo ? "/logo.svg" : "/logo-white.svg"}
        alt="Logo..."
        className="w-[123px] h-[42px] xl:w-[142px] xl:h-[60px]"
        width={1}
        height={1}
      />
      <div className="gap-5 hidden min-[1050px]:flex">
        {/* Navigation */}
        <nav className={`flex uppercase font-gustavo-medium text-sm items-center ${blackLogo ? "border border-black" : ""} bg-white px-9 xl:h-[60px] md:h-[52px] rounded-full gap-5`}>
          <p className="flex gap-1 items-center cursor-pointer">
            <span>Soluciones</span> <img src="/angle-down.svg" alt="" />
          </p>
          <p className="cursor-pointer">proyectos</p>
          <p className="cursor-pointer">noticias</p>
          <p className="cursor-pointer">hublidera</p>
          <p className="cursor-pointer">nosotros</p>
        </nav>
        {/* CTA */}
        <button className={`px-4 flex items-center bg-white rounded-full xl:h-[60px] md:h-[52px]  ${blackLogo ? "border border-black" : ""}`}>
          <div className="w-[14px] mb-[2.5px] aspect-square rounded-full bg-green"></div>
          <p className="text-[22px] ml-2 leading-none">Contacts</p>
          <img className="ml-6" src="arrow-right.svg" alt="" />
        </button>
      </div>
      <button className="px-1 bg-white hidden rounded-full max-[1050px]:block">
        <img src="menu.svg" alt="" />
      </button>
    </div>
  )
}

export default Header
