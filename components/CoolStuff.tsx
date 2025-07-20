"use client";

import { motion, Variants } from "framer-motion";
import CoolStuffDialog from "./CoolStuffDialog";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function CoolStuff() {
  return (
    <motion.div 
      className="flex flex-col space-y-6 max-w-xs mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <CoolStuffDialog />
      </motion.div>
    </motion.div>
  );
}
