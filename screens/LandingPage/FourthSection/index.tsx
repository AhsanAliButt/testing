"use client";
import React from "react";
import { motion } from "framer-motion";
import { fourthSection } from "@/lib/data";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const containerVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.5, 0, 0.5, 1],
      delay: index * 0.15,
    },
  }),
};

const FourthSection = () => {
  return (
    <motion.div
      className="mt-[8%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-10 md:gap-5 xl:gap-10 xxl:gap-5 xxxl:gap-10 px-[5%] md:px-[3%] xxl:px-[30px] xxxl:px-[60px]"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
    >
      {fourthSection?.map((item: any, index: number) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          custom={index}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Card
            title={item?.title}
            one={item?.one}
            two={item?.two}
            three={item?.three}
            link={item?.link}
            darkGreen={item?.darkGreen}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FourthSection;

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
    <div
      className={`w-[100%] h-[300px] md:h-[380px] xl:h-[418px] ${
        darkGreen ? "bg-darkGreen" : "bg-[#51E559]"
      } p-[19px] md:p-[30px] flex flex-col justify-between`}
    >
      <p
        className={` ${
          darkGreen ? "text-green " : "text-darkGreen"
        } text-[38px] md:text-[46px] xl:text-[56px] font-normal leading-[40px] md:leading-[60px]`}
      >
        {title}
      </p>

      <div className="flex items-end justify-between">
        <div>
          <p
            className={`text-[14px] md:text-[15px] xl:text-[18px] font-gustavo-reg  ${
              darkGreen ? "text-green" : "text-darkGreen"
            } leading-[17px] md:leading-[25px] `}
          >
            {one}
          </p>
          <p
            className={`text-[14px] md:text-[15px] xl:text-[18px] font-gustavo-reg  ${
              darkGreen ? "text-green" : "text-darkGreen"
            } leading-[17px] md:leading-[25px] `}
          >
            {two}
          </p>
          <p
            className={`text-[14px] md:text-[15px] xl:text-[18px] font-gustavo-reg  ${
              darkGreen ? "text-green" : "text-darkGreen"
            } leading-[17px] md:leading-[25px] `}
          >
            {three}
          </p>
          <p
            className={`text-[14px] md:text-[15px] xl:text-[18px] font-gustavo-reg underline  ${
              darkGreen ? "text-green" : "text-darkGreen"
            } leading-[17px] md:leading-[25px] `}
          >
            <Link href={"/404"}>{link}</Link>
          </p>
        </div>
        <button
          className={`w-[49px] md:w-[54px] xl:w-[60px] xl:h-[44px] h-[36px] md:h-[39.6px] border  ${
            darkGreen ? "border-green" : "border-darkGreen"
          } rounded-[22px] flex items-center justify-center`}
        >
          <FaArrowRightLong
            className={`${darkGreen ? "text-green" : "text-darkGreen"}`}
          />
        </button>
      </div>
    </div>
  );
}
