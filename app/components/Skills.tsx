"use client";

import { ChartColumnBig, Code, Database, Network } from "lucide-react";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

const skills = [
  {
    icon: <Network size={32} />,
    title: "Infraestrutura",
    desc: "vSphere, vCenter, Veeam, Windows Server, Linux/Unix",
  },
  {
    icon: <Database size={32} />,
    title: "Bancos de Dados",
    desc: "SQL Server, MySQL, PostgreSQL, MongoDB",
  },
  {
    icon: <Code size={32} />,
    title: "Desenvolvimento",
    desc: "C#, Node.js, TypeScript, SQL, Batch, PowerShell",
  },
  {
    icon: <ChartColumnBig size={32} />,
    title: "Monitoramento",
    desc: "Zabbix, Grafana, ServiceNow, Troubleshooting",
  },
];

export default function Skills() {
  return (
    <section className="py-32 px-10 bg-primary-medium/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Habilidades Técnicas</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((item, i) => (
            <SkillCard key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
