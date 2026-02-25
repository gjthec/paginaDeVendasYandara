import React from 'react';

const MappingIncludesSection: React.FC = () => {
  const items = [
    {
      title: 'Vídeo aulas',
      description: 'Conteúdos objetivos para te guiar na construção de uma rotina mais consciente e funcional.',
    },
    {
      title: 'Exercícios guiados',
      description: 'Práticas estruturadas para aplicar no seu dia real, sem sobrecarga.',
    },
    {
      title: 'Sessão individual',
      description: 'Um acompanhamento para olhar para a sua rotina com mais clareza e direcionamento.',
    },
    {
      title: 'Material didático',
      description: 'Ferramentas organizadas para apoiar cada etapa do processo.',
    },
    {
      title: 'Ebook — hábitos conscientes',
      description: 'Um guia complementar para entender como mudanças de hábitos acontecem na prática.',
    },
  ];

  return (
    <section id="conteudo-mapeamento" className="py-20 md:py-24 px-5 bg-[#7A8C7A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#D9A08B] font-semibold mb-4">
            Tudo o que você recebe
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">
            Ao entrar no Mapeamento, você tem tudo para construir uma rotina possível.
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed">
            Conteúdos e ferramentas para sustentar uma rotina constante — de forma leve, prática e alinhada à sua
            realidade.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-[#FCEFE7] flex items-center justify-center text-xl">
                  ✨
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-stone-800 capitalize">{item.title}</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MappingIncludesSection;
