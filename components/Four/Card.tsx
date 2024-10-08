import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'


interface CardProps {
    title: string;
    one: string;
    two: string;
    three: string;
    link: string;
    darkGreen: boolean;
}
function Card({ title, one, two, three, link, darkGreen }: CardProps) {
    return (
        <div className={`w-[100%] h-[300px] md:h-[380px] xl:h-[418px] ${darkGreen ? 'bg-darkGreen' : 'bg-[#51E559]'} p-[19px] md:p-[30px] flex flex-col justify-between`}>

            <p className={` ${darkGreen ? "text-green " : "text-darkGreen"} text-[38px] md:text-[46px] xl:text-[56px] font-normal leading-[40px] md:leading-[60px]`}>
                {title}
            </p>

            <div className='flex items-end justify-between'>
                <div>
                    <p className={`text-[14px] md:text-[15px] xl:text-[18px] font-gustavo-reg  ${darkGreen ? "text-green" : "text-darkGreen"} leading-[17px] md:leading-[25px] `}>
                        {one}
                    </p>
                    <p className={`text-[14px] md:text-[15px] xl:text-[18px] font-gustavo-reg  ${darkGreen ? "text-green" : "text-darkGreen"} leading-[17px] md:leading-[25px] `}>
                        {two}
                    </p>
                    <p className={`text-[14px] md:text-[15px] xl:text-[18px] font-gustavo-reg  ${darkGreen ? "text-green" : "text-darkGreen"} leading-[17px] md:leading-[25px] `}>
                        {three}
                    </p>
                    <p className={`text-[14px] md:text-[15px] xl:text-[18px] font-gustavo-reg underline  ${darkGreen ? "text-green" : "text-darkGreen"} leading-[17px] md:leading-[25px] `}>
                        <Link href={"#"}>{link}</Link>
                    </p>
                </div>
                <button className={`w-[49px] md:w-[54px] xl:w-[60px] xl:h-[44px] h-[36px] md:h-[39.6px] border  ${darkGreen ? "border-green" : "border-darkGreen"} rounded-[22px] flex items-center justify-center`}>
                    <FaArrowRightLong className={`${darkGreen ? "text-green" : "text-darkGreen"}`} />
                </button>
            </div>
        </div>
    )
}

export default Card
