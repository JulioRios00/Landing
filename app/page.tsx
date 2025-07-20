"use client";

import { motion, Variants } from "framer-motion";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import History from "@/components/History";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HEADER } from "@/lib/consts";
import CoolStuff from "@/components/CoolStuff";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Theme Toggle with animation */}
      <motion.nav 
        className="fixed top-4 right-4 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <ThemeToggle />
      </motion.nav>

      <motion.div 
        className="container mx-auto px-4 py-16 space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants}>
          <Header
            name={HEADER.name}
            title={HEADER.title}
            description={HEADER.description}
            imageUrl={HEADER.imageUrl}
          />
        </motion.div>

        {/* Skills and History Row */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
          >
            <Card className="h-full text-center border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Languages & Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Skills />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
          >
            <Card className="h-full border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <History />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Projects, Contact, and Cool Stuff Row */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
          >
            <Card className="h-full border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Projects />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
          >
            <Card className="h-full border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Contact />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
          >
            <Card className="h-full border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Cool Stuff about me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CoolStuff />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Floating elements for visual interest */}
        <motion.div
          className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
