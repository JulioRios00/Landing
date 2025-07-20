"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { COOL_STUFF } from "@/lib/consts";
import Image from "next/image";
import { PlayCircleIcon, PhotoIcon } from "@heroicons/react/24/outline";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const iconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 5 },
  tap: { scale: 0.95 }
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const contentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function CoolStuffDialog() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const renderMedia = (item: (typeof COOL_STUFF)[0]) => {
    if (item.type === "video") {
      const videoId = item.link.split("/d/")[1].split("/view")[0];
      const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src={embedUrl}
            width="100%"
            height="400"
            allow="autoplay"
            className="rounded-lg"
          />
        </motion.div>
      );
    }
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative rounded-lg overflow-hidden shadow-lg"
      >
        <Image
          src={item.link}
          alt={item.text}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col space-y-4">
      <AnimatePresence>
        {COOL_STUFF.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  className="relative w-full p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg"
                      animate={{
                        rotateY: hoveredIndex === index ? 180 : 0
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.type === "video" ? (
                        <PlayCircleIcon className="w-6 h-6" />
                      ) : (
                        <PhotoIcon className="w-6 h-6" />
                      )}
                    </motion.div>
                    
                    <div className="flex-1 text-left">
                      <motion.p 
                        className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                        animate={{
                          x: hoveredIndex === index ? 4 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.text}
                      </motion.p>
                      
                      <motion.div
                        className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 0.7,
                          y: hoveredIndex === index ? 0 : 10
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <span>Click to {item.type === "video" ? "watch" : "view"}</span>
                        <motion.span
                          animate={{ x: hoveredIndex === index ? 4 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <DialogHeader className="text-center space-y-4">
                    <motion.div variants={contentVariants}>
                      <DialogTitle className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                        {item.secondaryText}
                      </DialogTitle>
                      {renderMedia(item)}
                    </motion.div>
                  </DialogHeader>
                </motion.div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
