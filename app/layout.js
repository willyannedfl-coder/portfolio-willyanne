import Link from "next/link";
import "./globals.css";
import ThemeToggle from "./ThemeToggle";

export const metadata = {
  title: "Willyanne Fernandes | Portfólio Profissional",
  description: "Desenvolvedora Full-Stack e Médica Veterinária Sanitarista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col justify-between selection:bg-purple-500 selection:text-slate-950">
        
        {/* Navbar Global */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-purple-950/50">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-end">
            
            {/* Menu de Navegação Completo */}
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="/sobre" className="hover:text-purple-400 transition-colors">
                Sobre
              </Link>
              <Link href="/experiencia-academica" className="hover:text-purple-400 transition-colors">
                Exp. Acadêmica
              </Link>
              <Link href="/experiencia-profissional" className="hover:text-purple-400 transition-colors">
                Exp. Profissional
              </Link>
              <Link href="/projetos" className="hover:text-purple-400 transition-colors">
                Projetos
              </Link>
              <Link href="/contato" className="hover:text-purple-400 transition-colors">
                Contato
              </Link>
              
              {/* Botão de Tema */}
              <ThemeToggle />
            </nav>

          </div>
        </header>

        {/* Conteúdo da Página */}
        <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 w-full flex-1">
          {children}
        </main>

        {/* Rodapé */}
        <footer className="border-t border-purple-950/30 py-6 text-center text-xs text-slate-500">
          <p>© 2026 Willyanne Fernandes. Todos os direitos reservados.</p>
        </footer>

      </body>
    </html>
  );
}