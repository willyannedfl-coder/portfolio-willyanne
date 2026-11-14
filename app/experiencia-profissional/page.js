export default function ExperienciaProfissional() {
  return (
    <div className="space-y-8 max-w-4xl py-6">
      <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Experiência Profissional
      </h1>

      <div className="space-y-6">
        <div className="p-6 bg-slate-900/60 rounded-2xl border border-purple-900/50 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h2 className="text-xl font-bold text-slate-100">Desenvolvedora Full-Stack</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 w-fit">Desenvolvimento de Software</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed text-justify">
            Construção e manutenção de aplicações web modernas utilizando React, Next.js no front-end, e microsserviços escaláveis com Java (Spring Boot) e Node.js no back-end. Foco no desenvolvimento de soluções limpas, padronizadas e voltadas para resolução de problemas reais de negócios e saúde.
          </p>
        </div>

        <div className="p-6 bg-slate-900/60 rounded-2xl border border-purple-900/50 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h2 className="text-xl font-bold text-slate-100">Médica Veterinária Sanitarista & Virologista</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 w-fit">Saúde Pública & Diagnóstico</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed text-justify">
            Experiência em saúde pública, análise de dados sanitários e diagnóstico virológico preventivo. Atuação focada em estratégias coletivas de saúde e análise técnica multidisciplinar.
          </p>
        </div>

        <div className="p-6 bg-slate-900/60 rounded-2xl border border-purple-900/50 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h2 className="text-xl font-bold text-slate-100">Agente Comunitária de Saúde</h2>
            <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 w-fit">Saúde Pública</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed text-justify">
            Experiência em saúde pública, promoção e prevenção em saúde, acompanhamento de famílias, orientações de saúde.
          </p>
        </div>
      </div>
    </div>
  );
}