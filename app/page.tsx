"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, easeInOut: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-10 gradient-bg relative">
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="text-6xl md:text-7xl font-bold">
          Murilo Baleeiro
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl max-w-6xl text-[#D2C1B6]/80"
        >
          Infraestrutura de TI • Desenvolvimento • Virtualização • Bancos de Dados • Soluções Internas
        </motion.p>
        <div className="absolute w-96 h-96 bg-[#456882] blur-[150px] opacity-40 top-0 right-0" />
      </section>
      {/* SOBRE */}
      <section className="py-32 px-10 max-w-6xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-10"
        >
          Sobre Mim
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg leading-relaxed text-[#D2C1B6]/80"
        >
          Profissional com mais de 5 anos de experiência em infraestrutura de TI, administração de servidores e suporte
          técnico. Atuação com ambientes críticos garantindo disponibilidade superior a 98%, gestão de bancos SQL e
          NoSQL e desenvolvimento de soluções internas para otimização de processos.
        </motion.p>
      </section>
      {/* HABILIDADES */}
      <section className="py-32 px-10 bg-[#234C6A]/40">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold mb-16"
          >
            Habilidades Técnicas
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Infraestrutura", desc: "vSphere, vCenter, Veeam, Windows Server, Linux/Unix" },
              { title: "Bancos de Dados", desc: "SQL Server, MySQL, PostgreSQL, MongoDB" },
              { title: "Desenvolvimento", desc: "C#, Node.js, TypeScript, SQL, automações" },
              { title: "Monitoramento", desc: "Zabbix, Grafana, ServiceNow, troubleshooting" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2 }}
                className="glass p-8 rounded-2xl hover:-translate-y-3 transition duration-500"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-[#D2C1B6]/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* EXPERIÊNCIA */}
      <section className="py-32 px-10 max-w-6xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          className="text-4xl font-semibold mb-16"
        >
          Experiência
        </motion.h2>
        <div className="space-y-16 border-l-2 border-[#456882] pl-10">
          <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
            <h3 className="text-2xl font-semibold">Analista de Infraestrutura Jr.</h3>
            <p className="text-[#D2C1B6]/70">ViaRondon Concessionária de Rodovias • 2022 - Atualmente</p>
            <p className="mt-4 text-[#D2C1B6]/80">
              Administração de servidores físicos e virtuais, infraestrutura de servidores e cloud, gestão de bancos de
              dados, desenvolvimento de aplicações internas e garantia de SLA em ambientes críticos.
            </p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
            <h3 className="text-2xl font-semibold">Analista de Suporte Técnico</h3>
            <p className="text-[#D2C1B6]/70">Marfrig Global Foods • 2018 - 2021</p>
            <p className="mt-4 text-[#D2C1B6]/80">
              Suporte técnico corporativo, manutenção de hardware, redes estruturadas, acompanhamento de fornecedores e
              análise de falhas em sistemas industriais.
            </p>
          </motion.div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="py-12 bg-[#234C6A] text-center">
        <p className="text-[#D2C1B6]/70">Murilo Baleeiro • murilo.baleeiro@hotmail.com • (14) 99153-6847</p>
      </footer>
    </main>
  );
}
