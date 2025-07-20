"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface HeaderProps {
  name: string;
  title: string;
  description: string;
  imageUrl: {
    light: string;
    dark: string;
  };
}

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

const imageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const textVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const titleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function Header({
  name,
  title,
  description,
  imageUrl,
}: HeaderProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Determine which image to show based on theme
  const currentImageUrl = theme === "dark" ? imageUrl.dark : imageUrl.light;

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={imageVariants}
        whileHover={{ 
          scale: 1.05, 
          rotate: 2,
          transition: { duration: 0.3 }
        }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full blur-xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <Image
          src={currentImageUrl}
          alt={name}
          width={200}
          height={200}
          className="relative rounded-full object-cover w-48 h-48 border-4 border-white dark:border-slate-800 shadow-xl"
          style={{ 
            transition: 'opacity 0.5s ease-in-out' 
          }}
          key={theme} // This will cause a re-render when theme changes
        />
      </motion.div>
      
      <motion.div 
        className="flex flex-col items-center md:items-start text-center md:text-left flex-1"
        variants={textVariants}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          {name}
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
          variants={titleVariants}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-muted-foreground w-full leading-relaxed text-lg max-w-2xl"
          variants={titleVariants}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
