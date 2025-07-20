"use client";

import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "@/lib/consts";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
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
  },
  hover: {
    y: -4,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const iconVariants: Variants = {
  initial: { rotate: 0 },
  hover: { rotate: 5, scale: 1.1 }
};

export default function Contact() {
  const getIconColor = (name: string) => {
    switch (name) {
      case "GitHub": return "group-hover:text-gray-800 dark:group-hover:text-gray-200";
      case "LinkedIn": return "group-hover:text-blue-600";
      case "Email": return "group-hover:text-red-500";
      default: return "group-hover:text-blue-500";
    }
  };

  const getBackgroundGradient = (name: string) => {
    switch (name) {
      case "GitHub": return "hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-900";
      case "LinkedIn": return "hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20";
      case "Email": return "hover:from-red-50 hover:to-red-100 dark:hover:from-red-900/20 dark:hover:to-red-800/20";
      default: return "hover:from-slate-50 hover:to-slate-100 dark:hover:from-slate-800 dark:hover:to-slate-900";
    }
  };

  return (
    <motion.div 
      className="flex flex-col space-y-4 max-w-xs mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {CONTACT.map((contact, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover="hover"
        >
          <Link
            target="_blank"
            href={contact.link}
            className={`
              relative flex items-center justify-center p-6 rounded-xl 
              bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50
              ${getBackgroundGradient(contact.name)}
              border border-slate-200 dark:border-slate-700 
              transition-all duration-300 group overflow-hidden
              hover:border-slate-300 dark:hover:border-slate-600
            `}
          >
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
            
            <div className="relative flex items-center">
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                className="mr-3"
              >
                {contact.name === "GitHub" && (
                  <Github className={`h-5 w-5 transition-colors duration-300 ${getIconColor(contact.name)}`} />
                )}
                {contact.name === "LinkedIn" && (
                  <Linkedin className={`h-5 w-5 transition-colors duration-300 ${getIconColor(contact.name)}`} />
                )}
                {contact.name === "Email" && (
                  <Mail className={`h-5 w-5 transition-colors duration-300 ${getIconColor(contact.name)}`} />
                )}
              </motion.div>

              <span className={`font-medium transition-colors duration-300 ${getIconColor(contact.name)}`}>
                {contact.name}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
