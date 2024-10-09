"use client";
import React from "react";
import { motion } from "framer-motion";
import { data } from "./data";
import Card from "./Card";

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

const AnimatedCardGrid = () => {
  return (
    <motion.div
      className="mt-[8%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-10 md:gap-5 xl:gap-10 xxl:gap-5 xxxl:gap-10 px-[5%] md:px-[3%] xxl:px-[30px] xxxl:px-[60px]"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
    >
      {data?.map((item: any, index: number) => (
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

export default AnimatedCardGrid;
