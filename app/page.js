import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12">
      
      {/* Texto de Apresentação */}
      <div className="flex flex-col items-start gap-6 max-w-xl">
        

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
          Olá, me chamo <br />
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Willyanne Fernandes
          </span> 
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-justify">
          Desenvolvedora Full-Stack, Médica Veterinária, sanitarista, especializada em solucionar os problemas da saúde com <span className="text-purple-400">soluções tecnológicas</span> e análises em saúde <span className="text-pink-400">usando tudo que as tecnologias têm a oferecer</span>.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/projetos"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:opacity-95 transition-all shadow-lg shadow-purple-500/25"
          >
            Ver Projetos
          </Link>
          <Link
            href="/experiencia-academica"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:opacity-95 transition-all shadow-lg shadow-purple-500/25"
          >
            Sobre Mim
          </Link>
        </div>
      </div>

      {/* Espaço para Foto Profissional */}
      <div className="relative flex flex-col items-center">
        <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-pink-500 shadow-xl shadow-purple-500/20 overflow-hidden bg-slate-900 flex items-center justify-center">
          <Image 
            src="/foto.jpeg" 
            alt="Willyanne Fernandes" 
            width={256} 
            height={256} 
            className="rounded-full object-cover w-full h-full"
            priority
          />
        </div>
      </div>

    </div>
  );
}