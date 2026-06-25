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
  title: "Murilo Baleeiro | Infraestrutura & Desenvolvimento",
  description:
    "Especialista em infraestrutura de TI, virtualização, bancos de dados e desenvolvimento de soluções internas.",
  openGraph: {
    title: "Murilo Baleeiro | Infraestrutura & Desenvolvimento",
    description:
      "Especialista em infraestrutura de TI, virtualização, bancos de dados e desenvolvimento de soluções internas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
