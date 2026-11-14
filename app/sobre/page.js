export default function Sobre() {
  const techs = [
    { name: 'Next.js 14+', role: 'Framework React com App Router e Server Components' },
    { name: 'React', role: 'Biblioteca para construção de interfaces reativas' },
    { name: 'Tailwind CSS', role: 'Estilização utilitária moderna e responsiva' },
    { name: 'GitHub API', role: 'Integração externa para exibição dinâmica de repositórios' },
    { name: 'Vercel', role: 'Plataforma de deploy e hospedagem contínua' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4 text-cyan-400">Sobre o Aplicativo e Tecnologias</h1>
      <p className="text-slate-400 mb-8">
        Este portal foi arquitetado utilizando padrões modernos de desenvolvimento web, garantindo alta performance, otimização SEO e responsividade completa.
      </p>

      <h2 className="text-xl font-semibold mb-4 text-slate-200">Módulos e Stack Tecnológica Utilizada:</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {techs.map((t, index) => (
          <div key={index} className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors">
            <h3 className="font-bold text-cyan-400 mb-1">{t.name}</h3>
            <p className="text-sm text-slate-400">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}