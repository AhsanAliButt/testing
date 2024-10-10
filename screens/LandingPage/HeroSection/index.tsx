"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import NavigationBar from "./NavigationBar";

const HeroSection = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0); // Track active button index
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState<number | null>(
    null
  ); // Track hover state for each button

  // Variants for bottom to top animations
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  // Variants for left to right animation
  const leftToRightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
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

  // Handler for button click
  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };

  return (
    <>
      <div className="absolute inset-0 flex">
        <video
          className="h-full w-full flex-1 object-cover object-center"
          autoPlay
          loop
          playsInline
          muted
          controls={false}
        >
          <source src="/Hero-Bg.mp4" type="video/mp4" />
        </video>
      </div>
      <section className="flex flex-col justify-between min-h-[100vh] relative">
        {/* Navbar */}
        <NavigationBar blackLogo={false} />

        {/* Bottom Content */}
        <div className="text-white">
          <div className="flex flex-col items-center gap-16 min-[1200px]:gap-0 min-[1200px]:items-stretch min-[1024px]:flex-row justify-between px-[60px] mb-9">
            <div>
              <div className="flex items-center space-x-4">
                {/* Welcome Text */}
                <motion.p
                  className="font-gustavo-reg max-w-[110px] sm:text-lg uppercase leading-[1.2]"
                  variants={leftToRightVariants}
                  initial="hidden"
                  animate="visible"
                >
                  BIENVENIDO A LIDERA
                </motion.p>
                <motion.h2
                  className="text-[40px] min-[450px]:text-[60px] md:text-[110px] xxl:text-[140px] leading-none"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Consultoría
                </motion.h2>
              </div>
              {/* Titles */}
              <div>
                <motion.h2
                  className="text-[80px] md:text-[100px] xxl:text-[140px] leading-none"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }} // Delay for the second title
                >
                  deportiva
                </motion.h2>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-between relative items-baseline self-end">
              {/* Show the "Play" button only when hovering over the first button */}
              <button className="hidden min-[1200px]:block px-[52px] py-[22px] xxl:py-[34px] bg-transparent rounded-full mr-[90px]">
                {/* <img src="arrow-right-white.svg" alt="" /> */}
              </button>

              {hoveredButtonIndex !== null && (
                <button
                  className="hidden min-[1200px]:block px-[52px] py-[15px] xxl:py-[30px] text-[22px] border-2 border-white bg-transparent rounded-[72px] transition-opacity duration-300"
                  style={{
                    position: "absolute", // Absolute positioning
                    top: "50%", // Center vertically
                    transform: "translateY(-50%)", // Adjust for centering
                  }}
                >
                  Play
                </button>
              )}

              <div className="min-[1200px]:ml-auto font-gustavo-reg flex items-center gap-1 self-baseline">
                {[1, 2, 3, 4].map((number, index) => (
                  <div
                    key={number}
                    className="relative flex items-center cursor-pointer"
                    onMouseEnter={() => setHoveredButtonIndex(index)} // Set hovered index
                    onMouseLeave={() => setHoveredButtonIndex(null)} // Reset hover on leave
                  >
                    {number}
                    {index !== 3 ? <img src="/line-gray.svg" alt="" /> : ""}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Search Bar and Options */}
          <div className="px-[60px] gap-10 flex items-center justify-between overflow-x-scroll hide-scroll border-t border-b border-white py-10">
            <motion.p
              className="text-nowrap xl:text-[18px] text-[15px]"
              variants={leftToRightVariants}
              initial="hidden"
              animate="visible"
            >
              HOLA, ¿QUÉ ESTÁS BUSCANDO?
            </motion.p>
            <div className="flex gap-3">
              {[
                // Button options
                {
                  text: "Fin de contrato de prestación de servicios",
                  active: true,
                },
                { text: "Elaborar pliegos", active: false },
                { text: "Fin de contrato de concesión", active: false },
                { text: "Elaborar pliegos", active: false },
                { text: "Otros...", active: false },
              ].map((v, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div
                    onClick={() => handleButtonClick(index)} // Set active button index on click
                    className={`p-[20px] h-[36px] md:h-[46px] xxl:h-[52px] cursor-pointer flex items-center justify-center border border-white text-nowrap font-gustavo-reg text-[15px] xl:text-[18px] rounded-[72px] ${
                      activeButtonIndex === index ? "bg-white text-black" : "" // Change styles based on active button
                    }`}
                  >
                    {v.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
