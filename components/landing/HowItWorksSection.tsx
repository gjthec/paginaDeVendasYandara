import React from 'react';

const highlights = [
  'Conteúdos pensados para cada momento da sua rotina',
  'Desafios práticos para quando precisar de um novo impulso',
  'Acompanhamento para ajustar sua rotina sem culpa e sem rigidez',
];

const HowItWorksSection: React.FC = () => (
  <section id="como-funciona" className="py-20 md:py-24 px-5 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#D9A08B] font-semibold mb-4">
            Por que mapeamento
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight font-serif">
            Por que um Mapeamento e não um curso comum?
          </h2>
          <p className="text-lg md:text-xl text-stone-700 font-medium mb-6">A resposta é simples: constância.</p>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Criar uma rotina é só o começo. O verdadeiro desafio está em mantê-la, adaptá-la às mudanças da vida e
            continuar evoluindo — e é exatamente nesse ponto que a maioria das pessoas se perde.
          </p>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed">
            O Mapeamento não é um curso que você assiste uma vez e deixa parado. É um processo guiado, com
            acompanhamento individual, ferramentas práticas e direcionamento contínuo para cada fase da sua jornada.
          </p>
        </div>

        <div className="bg-[#7A8C7A] rounded-3xl md:rounded-[40px] border border-stone-200 p-7 md:p-10 shadow-sm text-white">
          <p className="text-white text-base md:text-lg mb-5">Aqui, você encontra:</p>

          <ul className="space-y-4 md:space-y-5">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white leading-relaxed">
                <span className="text-lg md:text-xl leading-none mt-0.5">✔️</span>
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 md:mt-8 pt-6 border-t border-stone-200">
            <p className="text-white text-base md:text-lg font-medium mb-2">Porque rotina não é sobre fazer perfeito.</p>
            <p className="text-emerald-100 text-base md:text-lg">É sobre continuar — mesmo quando a vida muda.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
