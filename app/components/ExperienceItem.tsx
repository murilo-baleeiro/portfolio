"use client";

import { motion } from "framer-motion";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

export default function ExperienceItem({ role, company, period, description }: ExperienceItemProps) {
  return (
    <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <h3 className="text-2xl font-semibold">{role}</h3>
      <p className="text-light/70">
        {company} • {period}
      </p>
      <p className="mt-4 text-light/80">{description}</p>
    </motion.div>
  );
}
