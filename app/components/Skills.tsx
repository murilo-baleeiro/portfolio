"use client";

import { CircuitBoard, Code, Database, Network } from "lucide-react";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

const skills = [
  {
    icon: <Network size={28} />,
    title: "Infraestrutura",
    desc: "Administração de servidores Windows e Linux, gestão de redes, Active Directory, Veeam e virtualização de servidores com VMware e Hyper-V.",
  },
  {
    icon: <Database size={28} />,
    title: "Bancos de Dados",
    desc: "Consultas, monitoramento e manutenção em banco de dados relacionais e não relacionais.",
  },
  {
    icon: <Code size={28} />,
    title: "Desenvolvimento",
    desc: "Soluções em software e automações internas para otimização de processos, utilizando linguagens como C#, Node.js, Python e PowerShell.",
  },
  {
    icon: <CircuitBoard size={28} />,
    title: "Hardware",
    desc: "Prototipagem e desenvolvimento de soluções em hardware, sistemas embarcados, circuitos de controles e automação.",
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
