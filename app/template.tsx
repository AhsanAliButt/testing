"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{
        type: "easeIn",
        dusration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}
