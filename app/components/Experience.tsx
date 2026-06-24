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
    <section className="py-32 px-10 max-w-6xl mx-auto">
      <SectionTitle>Experiência</SectionTitle>
      <div className="space-y-16 border-l-2 border-accent pl-10">
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </section>
  );
}
