"use client";

import SectionTitle from "./SectionTitle";
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    role: "Analista de Infraestrutura Jr.",
    company: "ViaRondon Concessionária de Rodovias",
    period: "2022 - Atualmente",
    description:
      "Administração de servidores físicos e virtuais, infraestrutura de servidores e cloud, gestão de bancos de dados, desenvolvimento de aplicações internas e garantia de SLA em ambientes críticos.",
  },
  {
    role: "Analista de Suporte Técnico",
    company: "Marfrig Global Foods",
    period: "2018 - 2021",
    description:
      "Suporte técnico corporativo, manutenção de hardware, redes estruturadas, acompanhamento de fornecedores e análise de falhas em sistemas industriais.",
  },
];

export default function Experience() {
  return (
    <section className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
      <SectionTitle>Experiência</SectionTitle>
      <div className="relative">
        <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} index={i} />
        ))}
      </div>
    </section>
  );
}
