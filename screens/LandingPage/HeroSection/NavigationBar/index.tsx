"use client";
import Image from "next/image";
import React from "react";
import { NavigationMenuDemo } from "../tabs";
import { motion } from "framer-motion";
import { MenuSheet } from "@/components/MenuButton";

function NavigationBar(props: any) {
  let blackLogo = props.blackLogo;

  // Animation variants for logo, nav, and CTA
  const logoVariants = {
    hidden: { y: -50, opacity: 0, willChange: "transform, opacity" },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Updated variants for diagonal animation
  const navVariants = {
    hidden: { x: -50, y: -50, opacity: 0 }, // Start from top-left
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const ctaVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <div className="flex max-w-[1920px] px-[20px] md:px-[60px] py-10 justify-between items-center">
      {/* Animated Logo */}
      <motion.div initial="hidden" animate="visible" variants={logoVariants}>
        <Image
          src={blackLogo ? "/logo.svg" : "/logo-white.svg"}
          alt="Logo..."
          className="w-[123px] h-[42px] xl:w-[142px] xl:h-[60px]"
          width={123}
          height={42}
        />
      </motion.div>

      <div className="gap-5 hidden min-[1050px]:flex">
        {/* Navigation with diagonal animation */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className={`flex uppercase font-gustavo-medium text-sm items-center ${
            blackLogo ? "border border-black" : ""
          } bg-white px-9 xl:h-[60px] md:h-[52px] rounded-full gap-5`}
        >
          <NavigationMenuDemo />
        </motion.nav>

        {/* CTA Button */}
        <motion.button
          initial="hidden"
          animate="visible"
          variants={ctaVariants}
          className={`px-4 flex items-center bg-white rounded-full xl:h-[60px] md:h-[52px] ${
            blackLogo ? "border border-black" : ""
          }`}
        >
          <div className="w-[14px] mb-[2.5px] aspect-square rounded-full bg-green"></div>
          <p className="text-[22px] ml-2 leading-none">Contacts</p>
          <img className="ml-6" src="arrow-right.svg" alt="" />
        </motion.button>
      </div>

      {/* Menu Button for smaller screens */}
      <motion.button
        initial="hidden"
        animate="visible"
        variants={ctaVariants}
        className="px-1 bg-white hidden rounded-full max-[1024px]:block"
      >
        {/* <img src="menu.svg" alt="" /> */}
        <MenuSheet />
      </motion.button>
    </div>
  );
}

export default NavigationBar;
