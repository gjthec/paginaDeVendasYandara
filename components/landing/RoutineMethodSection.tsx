import React from 'react';

const outcomes = [
  'Um ritmo mais consciente, alinhado com a sua energia e com a fase de vida que você está vivendo',
  'A capacidade de transformar planos em pequenas ações possíveis dentro da sua rotina real',
  'Mais flexibilidade para lidar com imprevistos sem sentir que “perdeu tudo”',
  'Uma relação mais gentil com o tempo, diminuindo a autocobrança excessiva',
  'Clareza para perceber seu próprio progresso — passado, presente e futuro',
  'A sensação de encerrar o dia com mais presença, direção e significado',
];

const RoutineMethodSection: React.FC = () => (
  <section className="py-20 md:py-24 px-5 bg-[#7A8C7A]">
    <div className="max-w-6xl mx-auto">
      <div className="bg-white border border-stone-200 rounded-3xl md:rounded-[40px] p-7 md:p-12 shadow-sm">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#D9A08B] font-semibold mb-4">Resultados do método</p>
        <h2 className="text-3xl md:text-5xl font-bold text-stone-800 leading-tight mb-6 font-serif">
          O método de rotina que funciona até nos dias difíceis
        </h2>
        <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8">
          Ao vivenciar o Mapeamento, você desenvolve recursos práticos para manter constância sem rigidez, mesmo
          quando a sua rotina muda.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {outcomes.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl border border-stone-100 bg-[#7A8C7A] p-4 md:p-5">
              <span className="text-[#7A8C7A] text-lg leading-none mt-0.5">•</span>
              <span className="text-stone-700 text-base md:text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default RoutineMethodSection;
