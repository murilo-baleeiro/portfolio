"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const tags = ["vSphere", "Windows Server", "Linux", "SQL Server", "C#", "Node.js"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[250px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div variants={item}>
          <p className="text-white font-semibold text-base sm:text-lg md:text-xl tracking-[0.3em]">
            MURILO BALEEIRO
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-[1px] w-10 bg-accent/60 mx-auto mt-3 sm:mt-4 origin-center"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 sm:mt-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05]"
        >
          Infraestrutura &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
            Desenvolvimento
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Especialista em infraestrutura de TI, virtualização, bancos de dados
          e desenvolvimento de soluções internas.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {tags.map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-mono border border-accent/20 bg-accent/[0.03] text-accent/80 rounded-full hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-muted/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
