"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-semibold mb-16"
    >
      {children}
    </motion.h2>
  );
}
