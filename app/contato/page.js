export default function Contato() {
  return (
    <div className="text-center max-w-lg mx-auto py-12 space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Vamos trabalhar juntos?
      </h1>
      
      <p className="text-slate-300 text-sm leading-relaxed">
        Estou sempre aberta a novas oportunidades, conexões e projetos desafiadores.
      </p>
      
      <a 
        href="mailto:willyannedfl@gmail.com" 
        className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:opacity-95 transition-all shadow-lg shadow-purple-950/40 border border-purple-500/30"
      >
        Enviar um E-mail
      </a>
    </div>
  );
}