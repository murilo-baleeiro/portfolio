"use client";

import { motion } from "framer-motion";

const paragraphs = [
  `Presente no mercado de tecnologia desde 2018, com foco em infraestrutura de TI, desenvolvimento de soluções e suporte técnico. Atualmente, sou Analista de Infraestrutura Jr. na ViaRondon, onde administro servidores físicos e virtuais, gerencio bancos de dados e desenvolvo aplicações internas para otimizar processos. Anteriormente, trabalhei na Marfrig Global Foods, prestando suporte técnico corporativo e manutenção de hardware.`,
  `Sou apaixonado por tecnologia e estou sempre buscando aprender novas habilidades para me manter atualizado no mercado. Tenho experiência com vSphere, vCenter, Veeam, Windows Server, Linux/Unix, SQL Server, MySQL, PostgreSQL, MongoDB, C#, Node.js, TypeScript, SQL e automações. Também sou proficiente em ferramentas de monitoramento como Zabbix, Grafana e ServiceNow.`,
  `Meu objetivo é continuar crescendo na área de tecnologia, assumindo desafios cada vez maiores e contribuindo para o sucesso das empresas onde atuo. Estou aberto a novas oportunidades e sempre disposto a colaborar com equipes multidisciplinares para alcançar resultados excepcionais.`,
];

export default function About() {
  return (
    <section className="py-32 px-10 max-w-6xl mx-auto">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-10"
      >
        Sobre Mim
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg leading-relaxed text-light/80 flex flex-col gap-6"
      >
        {paragraphs.map((text, i) => (
          <p key={i} className="text-justify">
            {text}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
