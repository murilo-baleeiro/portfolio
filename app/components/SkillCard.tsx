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
      initial={{ opacity: 0, y: 40 }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 sm:p-8 hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-500 hover:-translate-y-2"
    >
      <div className="text-accent mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-muted leading-relaxed">{desc}</p>
    </motion.div>
  );
}
