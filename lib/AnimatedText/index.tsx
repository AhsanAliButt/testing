"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Motion variants
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
      delay: index * 0.15,
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
  const isInView = useInView(ref, { once: false });

  // Split the text into lines
  const lines = text.split(/<br\s*\/?>/);

  return (
    <div className={`sm:py-0 w-full flex items-center text-start`} ref={ref}>
      <motion.h1
        className={`inline-flex w-full flex-wrap ${className}`} // Ensuring the custom font is applied
        variants={quote}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex">
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={word + "-" + wordIndex}
                variants={singelWord(wordIndex)}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className={`font-gustavo-reg`} // Ensure font is explicitly applied here
              >
                {word}&nbsp;
              </motion.span>
            ))}
            {lineIndex < lines.length - 1 && <br />}
          </div>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
