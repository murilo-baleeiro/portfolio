"use client";

import { ChartColumnBig, Code, Database, Network } from "lucide-react";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

const skills = [
  {
    icon: <Network size={28} />,
    title: "Infraestrutura",
    desc: "vSphere, vCenter, Veeam, Windows Server, Linux/Unix",
  },
  {
    icon: <Database size={28} />,
    title: "Bancos de Dados",
    desc: "SQL Server, MySQL, PostgreSQL, MongoDB",
  },
  {
    icon: <Code size={28} />,
    title: "Desenvolvimento",
    desc: "C#, Node.js, TypeScript, SQL, Batch, PowerShell",
  },
  {
    icon: <ChartColumnBig size={28} />,
    title: "Monitoramento",
    desc: "Zabbix, Grafana, ServiceNow, Troubleshooting",
  },
];

export default function Skills() {
  return (
    <section className="relative py-24 sm:py-32 px-6 bg-secondary/40">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.01] via-transparent to-accent/[0.01] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <SectionTitle>Habilidades Técnicas</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((item, i) => (
            <SkillCard key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
