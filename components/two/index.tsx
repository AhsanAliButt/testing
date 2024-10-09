"use client";
import React, { useState, useEffect } from "react";
import { data } from "./data";
import Button from "../ui/button/Button";
import AnimatedText from "@/lib/AnimatedText";
import { motion } from "framer-motion";
function Two() {
  const [active, setActive] = useState<number>();
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);

  // Handle screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // sm screen and below
    };
    // Set initial value
    handleResize();
    // Add resize event listener
    window.addEventListener("resize", handleResize);
    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSelectHandle = (index: number) => {
    setActive(index);
  };

  const displayedData = isSmallScreen && !showAll ? data.slice(0, 6) : data;
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
  return (
    <div className="w-full mt-[5%]">
      <div className="m-auto">
        <p>
          <AnimatedText
            text={
              "Tú indicas el <br /> problema, nosotros te <br /> damos la solución"
            }
            className="text-[44px] md:text-[80px] xl:text-[98px] flex items-center justify-center leading-[50px] md:leading-[100px]"
          />
        </p>
      </div>
      <motion.div
        className="md:px-[5%] xl:px-[15%] px-[5%] flex items-center justify-center flex-wrap gap-5 m-auto mt-[46px] md:mt-[80px]"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        {displayedData?.map((item: any, index: number) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Button
              key={index}
              onClick={() => onSelectHandle(index)}
              className={`text-[14px] md:text-[15px]  xl:text-[18px] text-black font-gustavo-reg px-[16px] md:px-[20px] h-[37px] md:h-[52px] rounded-[72px] ${
                active === index ? "bg-green" : "border border-black"
              }`}
            >
              {item?.title}
            </Button>
          </motion.div>
        ))}
      </motion.div>
      {/* </div> */}
      <div className="flex items-center justify-center mt-[36px]">
        {isSmallScreen && !showAll && data.length > 6 && (
          <Button
            onClick={() => setShowAll(true)}
            className="text-[12px] text-black font-gustavo-reg gap-[8px]"
          >
            <div className="w-[14px] h-[14px] rounded-full bg-green"></div> Ver
            más
          </Button>
        )}
      </div>
    </div>
  );
}

export default Two;
