"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const quote = {
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

const singelWord = (index: number) => ({
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: index * 0.15, // Add delay based on the word index
    },
  },
});

const AnimatedText = ({
  text,
  className = "",
}: {
  text: string;
  className: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Set 'once' to false to trigger animations every time

  // Split the text into lines based on <br />
  const lines = text.split(/<br\s*\/?>/);

  return (
    <div className={`sm:py-0 w-full flex items-center text-start`} ref={ref}>
      <motion.h1
        className={`inline-flex w-full text-dark font-bold flex-wrap capitalize text-8xl dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate={isInView ? "animate" : "initial"} // Animate when in view
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex">
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={word + "-" + wordIndex}
                variants={singelWord(wordIndex)} // Pass index to create a unique variant
                initial="initial"
                animate={isInView ? "animate" : "initial"} // Animate each word when in view
              >
                {word}&nbsp;
              </motion.span>
            ))}
            {/* Add a line break after each line except the last one */}
            {lineIndex < lines.length - 1 && <br />}
          </div>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
