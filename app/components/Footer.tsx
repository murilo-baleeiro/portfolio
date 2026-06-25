import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 sm:py-20 px-6 bg-secondary/60">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Contato
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-muted">
          <a
            href="mailto:murilo.baleeiro@hotmail.com"
            className="flex items-center gap-3 hover:text-accent transition-colors duration-300 group"
          >
            <Mail size={18} className="text-accent/60 group-hover:text-accent transition-colors" />
            <span>murilo.baleeiro@hotmail.com</span>
          </a>
          <a
            href="tel:+5514991536847"
            className="flex items-center gap-3 hover:text-accent transition-colors duration-300 group"
          >
            <Phone size={18} className="text-accent/60 group-hover:text-accent transition-colors" />
            <span>(14) 99153-6847</span>
          </a>
        </div>
        <p className="mt-12 text-xs sm:text-sm text-muted/50">
          &copy; {new Date().getFullYear()} Murilo Baleeiro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
