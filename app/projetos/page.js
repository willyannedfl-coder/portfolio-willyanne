"use client";

import { useState, useEffect } from "react";

export default function Projetos() {
  const [mensagemApi, setMensagemApi] = useState("Carregando dados com useEffect...");
  const [carregando, setCarregando] = useState(true);

  // useEffect ensinado em aula para buscar dados assim que o componente é montado
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setMensagemApi(`[API Conectada com Sucesso] Dados carregados do servidor: ${data.name} (${data.email})`);
        setCarregando(false);
      })
      .catch((err) => {
        setMensagemApi("Erro ao conectar com o servidor externo.");
        setCarregando(false);
      });
  }, []);

  return (
    <div className="space-y-8 max-w-4xl py-6">
      <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Meus Projetos & Integrações
      </h1>

      <p className="text-slate-300 text-sm leading-relaxed text-justify">
        Nesta página apliquei conceitos fundamentais de desenvolvimento web, incluindo o uso do gancho <code className="text-purple-400 font-mono">useEffect</code> para gerenciar requisições assíncronas e o ciclo de vida dos componentes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Projeto 1: Bazar Solidário */}
        <div className="p-6 bg-slate-900/60 rounded-2xl border border-purple-950 flex flex-col justify-between space-y-4 hover:border-purple-600 transition-all shadow-lg shadow-purple-950/20">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-purple-300">Bazar Solidário</h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Em Desenvolvimento</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              Aplicação web colaborativa focada em gestão de tarefas e fluxo de doações. Desenvolvida para organizar e otimizar processos de atendimento comunitário.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-xs px-2.5 py-1 bg-purple-950 text-purple-300 rounded-md border border-purple-800">React</span>
            <span className="text-xs px-2.5 py-1 bg-purple-950 text-purple-300 rounded-md border border-purple-800">Node.js</span>
            <span className="text-xs px-2.5 py-1 bg-purple-950 text-purple-300 rounded-md border border-purple-800">Docker</span>
          </div>
        </div>

        {/* Projeto 2: Sistema de Análise em Saúde (Em Ideação) */}
        <div className="p-6 bg-slate-900/60 rounded-2xl border border-purple-950 flex flex-col justify-between space-y-4 hover:border-purple-600 transition-all shadow-lg shadow-purple-950/20">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-pink-300">Sistema de Análise em Saúde</h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Em Ideação</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              Plataforma conceitual voltada para o gerenciamento e otimização de fluxos de dados de saúde pública e preventiva. Atualmente em fase de planejamento arquitetural.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-xs px-2.5 py-1 bg-pink-950 text-pink-300 rounded-md border border-pink-800">Java Spring Boot</span>
            <span className="text-xs px-2.5 py-1 bg-pink-950 text-pink-300 rounded-md border border-pink-800">Next.js</span>
            <span className="text-xs px-2.5 py-1 bg-pink-950 text-pink-300 rounded-md border border-pink-800">PostgreSQL</span>
          </div>
        </div>

      </div>

      {/* Bloco Demonstrando o useEffect em Ação */}
      <div className="p-6 bg-slate-900/40 rounded-2xl border border-purple-950/80 space-y-3">
        <h2 className="text-lg font-bold text-purple-200">Demonstração Prática de API (useEffect)</h2>
        <p className="text-slate-300 text-sm leading-relaxed text-justify">
          O bloco abaixo realiza uma chamada <code className="text-pink-400 font-mono">fetch</code> dentro do <code className="text-purple-400 font-mono">useEffect</code> assim que a página é carregada:
        </p>
        
        <div className="p-4 bg-slate-950/80 rounded-xl border border-purple-900/60 font-mono text-xs sm:text-sm text-pink-300">
          {carregando ? "Carregando dados da API..." : mensagemApi}
        </div>
      </div>

    </div>
  );
}