import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murilo Baleeiro | Portfólio",
  description:
    "Portfólio profissional de Murilo Baleeiro, especialista em infraestrutura de TI, desenvolvimento e soluções internas. Com mais de 5 anos de experiência, Murilo é um profissional dedicado a otimizar processos e garantir a eficiência em ambientes críticos. Explore suas habilidades técnicas, experiências profissionais e projetos para conhecer melhor seu trabalho e expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
