"use client";

import { motion } from "framer-motion";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

export default function ExperienceItem({
  role,
  company,
  period,
  description,
  index,
}: ExperienceItemProps) {
  return (
    <div className="relative pl-10 sm:pl-14 pb-14 sm:pb-16 last:pb-0 group">
      <div className="absolute left-0 top-1 w-[7px] h-[7px] rounded-full bg-accent ring-[3px] ring-primary transition-transform duration-500 group-hover:scale-150" />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
      >
        <span className="text-accent/60 text-xs sm:text-sm font-mono tracking-wide">
          {period}
        </span>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mt-1">
          {role}
        </h3>
        <p className="text-accent/80 text-sm sm:text-base mt-0.5 sm:mt-1">
          {company}
        </p>
        <p className="text-muted text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
