import Image from "next/image";
import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className="bg-green w-[100%] mt-[10%] h-auto  md:h-[100vh] xxl:h-[950px]">
      <div className="w-full flex items-start justify-center border-b border-black">
        <p className="text-[11vw] font-bold text-center">Sport Consulting</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between  md:h-[65%] w-[100%] p-[16px] lg:p-[60px]  ">
        {/* first box */}
        <div className="flex justify-between flex-row lg:flex-col h-full w-[100%] lg:w-[27%]">
          <div>
            <Image
              src="/logo.svg"
              alt="Logo..."
              className="md:w-[118px] md:h-[50px] w-[99px] h-[42px]"
              width={1}
              height={1}
            />
          </div>
          <div>
            <p className="text-[14px] md:text-[15px] xl:text-[18px] text-black font-gustavo-reg">
              Camino de la Goleta, nº 2, 301 <br />
              04007 Almería (España)
            </p>
            <p className="text-[14px] md:text-[15px] xl:text-[18px] text-black font-gustavo-reg mt-[15px] md:mt-[19px] xl:mt-[26px]">
              info@liderasport.com
            </p>
            <p className="text-[14px] md:text-[15px] xl:text-[18px] text-black font-gustavo-reg">
              +34 950 09 28 01
            </p>
          </div>
        </div>
        {/* second box */}
        <div className="flex flex-col md:flex-row justify-between  w-[100%] md:w-[73%] h-full mt-[40px] md:mt-[0px]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[32px] xl:text-[44px] text-black font-medium leading-[38px] xl:leading-[50px]">
                Últimas noticias
              </p>
              <p className="text-[32px] xl:text-[44px] text-black font-medium leading-[38px] xl:leading-[50px]">
                Proyectos
              </p>
              <p className="text-[32px] xl:text-[44px] text-black font-medium leading-[38px] xl:leading-[50px]">
                Blog
              </p>
              <p className="text-[32px] xl:text-[44px] text-black font-medium leading-[38px] xl:leading-[50px]">
                Hublidera
              </p>
              <p className="text-[32px] xl:text-[44px] text-black font-medium leading-[38px] xl:leading-[50px]">
                Nosotros
              </p>
            </div>
            <div className="mt-[28px] md:mt-[0px]">
              <p className="text-[15px] xl:text-[18px] font-gustavo-reg text-black ">
                Aviso legal
              </p>
              <p className="text-[15px] xl:text-[18px] text-black font-gustavo-reg">
                Política de cookies
              </p>
              <p className="text-[15px] xl:text-[18px] text-black font-gustavo-reg ">
                Política de privacidad
              </p>
            </div>
          </div>

          {/* third box */}
          <div className='flex items-end gap-5 mt-[80px] md:mt-[""]'>
            <p className="text-[21px] md:text-[24] xl:text-[26px] text-black ">
              <Link href={"#"}>LinkedIn</Link>
            </p>
            <p className="text-[21px] md:text-[24] xl:text-[26px] text-black ">
              <Link href={"#"}>Facebook</Link>
            </p>
            <p className="text-[21px] md:text-[24] xl:text-[26px] text-black ">
              <Link href="#">Instagram</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
