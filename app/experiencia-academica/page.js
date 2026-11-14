import Image from "next/image";

export default function ExperienciaAcademica() {
  return (
    <div className="space-y-6 max-w-2xl py-6">
      <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Experiência Acadêmica
      </h1>
      
      <p className="text-slate-300 leading-relaxed text-justify">
        Trabalho com desenvolvimento de software criando interfaces dinâmicas com React e Next.js, além de construir arquiteturas de back-end robustas com Java, Spring Boot e Node.js.
      </p>
      
      <p className="text-slate-300 leading-relaxed text-justify">
        Sou Médica Veterinária formada pela Universidade Federal Rural de Pernambuco (UFRPE), possuo residência em Medicina Veterinária Preventiva - Viroses pela UFRPE. Sou sanitarista, com experiência em saúde pública e diagnóstico virológico.
      </p>
      
      <p className="text-slate-300 leading-relaxed text-justify">
        Atualmente estou cursando Sistemas para internet na Universidade Catolica de Pernambuco, e Engenharia da Computação na Universidade de Pernambuco. Minha formação acadêmica é diversificada, abrangendo áreas como saúde coletiva, patologia clínica veterinária, endocrinologia veterinária, nutrição animal, homeopatia aplicada aos animais, nefrologia e urologia veterinária, tecnologia da informação e arquitetura de software. Meu foco no momento é a transição de carreira, onde eu possa usar conhecimentos tecnologicos na área da saúde.
      </p>

      <div className="space-y-2">
        <p className="text-slate-300 font-medium">
          Sou pós-graduada em:
        </p>
        <ul className="list-disc list-inside text-slate-400 space-y-1 pl-2">
          <li>Saúde Coletiva</li>
          <li>Patologia Clínica Veterinária</li>
          <li>Endocrinologia Veterinária</li>
          <li>Nutrição Animal</li>
          <li>Homeopatia aplicada aos animais</li>
          <li>Nefrologia e Urologia Veterinária</li>
          <li>Tecnologia da Informação</li>
          <li>Arquitetura de Software</li>
        </ul>
      </div>

      <div className="space-y-2">
        <p className="text-slate-300 font-medium">
          Possuo formação técnica em:
        </p>
        <ul className="list-disc list-inside text-slate-400 space-y-1 pl-2">
          <li>Análises Clínicas, pela Escola Técnica Estadual Almirante Soares Dutra</li>
          <li>Desenvolvimento de Sistemas, pela Escola Técnica Estadual Porto Digital</li>
          <li>Agente Comunitário de Saúde, pela Universidade Federal Do Rio Grande do Sul</li>
        </ul>
      </div>

      <p className="text-slate-300 leading-relaxed text-justify">
        Além disso, sou uma pessoa curiosa e proativa, sempre em busca de novos desafios e oportunidades para crescer profissionalmente. Acredito que a combinação de habilidades técnicas e soft skills é essencial para o sucesso em qualquer área, creio que minha formação multidisciplinar me permite abordar problemas de forma abrangente me fazendo ver além do óbvio.
      </p>

      <p className="text-slate-300 leading-relaxed text-justify">
        Busco sempre escrever códigos limpos, escaláveis e focados em resolver problemas reais, mantendo-me atualizada com as melhores práticas da engenharia de software e controle de versão.
      </p>
      
      <p className="text-slate-300 leading-relaxed text-justify">
        Se você está procurando uma desenvolvedora Full-Stack dedicada, apaixonada por tecnologia e com uma visão multidisciplinar única, estou sempre aberta a novas oportunidades de trabalho e projetos desafiadores.
      </p>

      {/* Botões do Currículo Lattes e LinkedIn com a mesma cor */}
      <div className="pt-4 flex flex-wrap gap-4">
        {/* Botão Lattes */}
        <a
          href="http://lattes.cnpq.br/0427802281675815"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:opacity-95 transition-all shadow-lg shadow-purple-500/25"
        >
          <span>Acessar Currículo Lattes</span>
        </a>

        {/* Botão LinkedIn */}
        <a
          href="https://www.linkedin.com/in/willyanne-fernandes-a3b84337a/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:opacity-95 transition-all shadow-lg shadow-purple-500/25"
        >
          <span>Conectar no LinkedIn</span>
        </a>
      </div>

    </div>
  );
} 