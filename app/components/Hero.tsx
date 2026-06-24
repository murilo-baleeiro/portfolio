"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-10">
      <div className="absolute w-96 h-96 bg-accent blur-[150px] opacity-40 top-0 right-0" />
      <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="text-6xl md:text-7xl font-bold">
        Murilo Baleeiro
      </motion.h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        className="mt-6 text-xl max-w-6xl text-light/80"
      >
        Infraestrutura de TI • Desenvolvimento • Virtualização • Bancos de Dados • Soluções Internas
      </motion.p>
    </section>
  );
}
