"use client";

import { motion } from "framer-motion";

const paragraphs = [
  `Presente no mercado de tecnologia desde 2018, com foco em infraestrutura de TI, desenvolvimento de soluções e suporte técnico. Atualmente, sou Analista de Infraestrutura Jr. na ViaRondon, onde administro servidores físicos e virtuais, gerencio bancos de dados e desenvolvo aplicações internas para otimizar processos. Anteriormente, trabalhei na Marfrig Global Foods, prestando suporte técnico corporativo e manutenção de hardware.`,
  `Sou apaixonado por tecnologia e estou sempre buscando aprender novas habilidades para me manter atualizado no mercado. Tenho experiência com vSphere, vCenter, Veeam, Windows Server, Linux/Unix, SQL Server, MySQL, PostgreSQL, MongoDB, C#, Node.js, TypeScript, SQL e automações. Também sou proficiente em ferramentas de monitoramento como Zabbix, Grafana e ServiceNow.`,
  `Meu objetivo é continuar crescendo na área de tecnologia, assumindo desafios cada vez maiores e contribuindo para o sucesso das empresas onde atuo. Estou aberto a novas oportunidades e sempre disposto a colaborar com equipes multidisciplinares para alcançar resultados excepcionais.`,
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function About() {
  return (
    <section className="relative py-24 sm:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Sobre Mim
        </motion.h2>
        <motion.div
          whileInView={{ scaleX: 1 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[2px] w-16 bg-accent mb-10 origin-left"
        />
        <div className="space-y-5 sm:space-y-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={fadeUp}
              whileInView="show"
              initial="hidden"
              viewport={{ once: true }}
              className="text-base sm:text-lg text-muted leading-[1.75] text-justify"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
