"use client";
import React from "react";
import { motion } from "framer-motion";

const container = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleDiv = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedDivs = ({
  divs,
  className = "",
}: {
  divs: string[];
  className?: string;
}) => {
  return (
    <div className={`sm:py-0 w-full flex items-center text-start ${className}`}>
      {/* Animate the divs with Framer Motion */}
      <motion.div
        className="flex w-full justify-around"
        variants={container}
        initial="initial"
        animate="animate"
      >
        {divs.map((div, index) => (
          <motion.div
            key={index}
            className="bg-gray-300 p-4 m-2 rounded-md shadow-lg"
            variants={singleDiv}
          >
            {div}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedDivs;
