"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  index: number;
}

export default function SkillCard({ icon, title, desc, index }: SkillCardProps) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl hover:-translate-y-3 transition duration-500"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-light/70">{desc}</p>
    </motion.div>
  );
}
