"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-3xl sm:text-4xl font-bold text-white"
      >
        {children}
      </motion.h2>
      <motion.div
        whileInView={{ scaleX: 1 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="h-[2px] w-16 bg-accent mt-4 origin-left"
      />
    </div>
  );
}
