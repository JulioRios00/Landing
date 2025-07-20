"use client";

import { motion, Variants } from "framer-motion";
import { HISTORY } from "@/lib/consts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarIcon, BuildingOfficeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
    x: -30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  hover: {
    x: 8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function History() {
  return (
    <motion.ul 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {HISTORY.map((item, index) => (
        <motion.li 
          key={index} 
          variants={itemVariants}
          whileHover="hover"
          className="relative"
        >
          <Dialog>
            <DialogTrigger asChild>
              <motion.button className="w-full text-left relative flex flex-col p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 group overflow-hidden cursor-pointer">
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-2 top-6 w-4 h-4 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full border-3 border-white dark:border-slate-800 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                />
                
                <div className="relative ml-4">
                  <motion.div
                    className="flex items-center gap-2 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <CalendarIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg text-sm">
                      {item.year}
                    </span>
                  </motion.div>
                  
                  <motion.h3 
                    className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {item.position}
                  </motion.h3>
                  
                  <motion.div 
                    className="flex items-center gap-2 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <BuildingOfficeIcon className="w-4 h-4 text-slate-500" />
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.company}
                    </p>
                  </motion.div>
                  
                  <motion.p 
                    className="text-sm text-muted-foreground leading-relaxed mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {item.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <span>Click for more details</span>
                    <ChevronRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>
                
                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </DialogTrigger>
            
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  {item.detailedDescription}
                </DialogTitle>
              </DialogHeader>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Key Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {item.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: detailIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">
                    Technologies Used
                  </h4>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium border border-emerald-200 dark:border-emerald-700"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        </motion.li>
      ))}
    </motion.ul>
  );
}
