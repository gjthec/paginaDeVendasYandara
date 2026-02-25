import React, { useEffect, useMemo, useRef, useState } from 'react';
import CTAButton from '../CTAButton';

const ProtocolSection: React.FC = () => {
  const themes = useMemo(
    () => [
      { title: 'Organização', image: '/themes/organizacao.jpg' },
      { title: 'Procrastinação', image: '/themes/procrastinacao.jpg' },
      { title: 'Desânimo', image: '/themes/desanimo.jpg' },
      { title: 'Planejamento', image: '/themes/planejamento.jpg' },
    ],
    []
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeTheme, setActiveTheme] = useState(0);

  const scrollToTheme = (index: number, updateState = true) => {
    const el = trackRef.current;
    if (!el) return;

    const item = el.children[index] as HTMLElement | undefined;
    if (!item) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const centeredLeft = item.offsetLeft - (el.clientWidth - item.clientWidth) / 2;
    const nextLeft = Math.max(0, Math.min(centeredLeft, maxScrollLeft));

    el.scrollTo({ left: nextLeft, behavior: 'smooth' });

    if (updateState) {
      setActiveTheme(index);
    }
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveTheme((prev) => {
        const next = (prev + 1) % themes.length;
        scrollToTheme(next, false);
        return next;
      });
    }, 5000);

    return () => window.clearInterval(id);
  }, [themes.length]);

  return (
    <section id="protocolo" className="py-20 md:py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight font-serif">
            Não é que você não consiga se organizar.
          </h2>

          <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
            É que ninguém te ensinou a construir uma rotina que funcione dentro da sua vida real — inclusive nos dias
            difíceis.
          </p>

          <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-10">
            Depois de muita pesquisa e prática, desenvolvi um protocolo acessível para transformar a sua relação com a
            rotina, criando uma estrutura que se adapta às suas necessidades — e não o contrário.
          </p>

          <div className="max-w-md">
            <CTAButton className="w-full sm:w-auto" label="Quero começar meu mapeamento" />
            <p className="mt-3 text-stone-500 text-xs text-center sm:text-left">
              Um método possível, sem rigidez e sem sobrecarga.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl md:rounded-[40px] p-6 md:p-8 border border-stone-100 shadow-sm mt-12">
          <p className="text-[#D9A08B] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-5">
            Temas do mapeamento
          </p>

          <div className="relative">
            <div
              ref={trackRef}
              onScroll={() => {
                const el = trackRef.current;
                if (!el) return;

                const center = el.scrollLeft + el.clientWidth / 2;
                const items = Array.from(el.children) as HTMLElement[];

                let best = 0;
                let bestDist = Number.POSITIVE_INFINITY;

                items.forEach((it, idx) => {
                  const itCenter = it.offsetLeft + it.clientWidth / 2;
                  const dist = Math.abs(itCenter - center);
                  if (dist < bestDist) {
                    bestDist = dist;
                    best = idx;
                  }
                });

                setActiveTheme(best);
              }}
              className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3
                         [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {themes.map((t) => (
                <div
                  key={t.title}
                  className="snap-center shrink-0 w-[78%] sm:w-[52%] lg:w-[32%] h-44 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden relative shadow-sm border border-stone-100 bg-stone-200"
                  style={
                    t.image
                      ? {
                          backgroundImage: `url(${t.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : undefined
                  }
                >
                  <div className="absolute inset-0 bg-black/45" />

                  <div className="absolute inset-0 p-6 md:p-7 flex items-end">
                    <h3 className="text-white text-3xl md:text-4xl font-bold leading-none tracking-tight drop-shadow-sm">
                      {t.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-2">
              {themes.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToTheme(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === activeTheme ? 'bg-stone-700' : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Ir para tema ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <p className="mt-4 text-stone-400 text-[10px] md:text-xs text-center uppercase tracking-widest font-medium">
            Você segue um caminho guiado — passo a passo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;
