import React from 'react';
import CTAButton from '../CTAButton';

interface ResultItem {
  label: string;
  value: string;
}

interface FinalSectionProps {
  results: ResultItem[];
  whatsappLink: string;
}

const FinalSection: React.FC<FinalSectionProps> = ({ results, whatsappLink }) => (
  <section className="py-24 md:py-32 px-5 bg-[#7A8C7A] text-white text-center">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 font-serif italic px-2 text-center">Pronta para começar?</h2>
      <p className="text-lg md:text-2xl text-emerald-50 mb-10 md:mb-12 leading-relaxed font-light px-4 text-center">
        Recuperar sua clareza interna é recuperar sua vida. Escolha com mais calma, firmeza e menos confusão.
      </p>
      <CTAButton variant="secondary" className="w-full sm:w-auto scale-105 md:scale-125 mb-8" />
      <div className="mt-8 text-center">
        <a
          href={whatsappLink}
          className="text-emerald-100 hover:text-white transition-colors underline underline-offset-8 text-base md:text-lg"
        >
          Dúvidas? Fale no WhatsApp.
        </a>
      </div>
    </div>

    <div className="mt-20 max-w-2xl mx-auto bg-[#2D352D] p-6 md:p-10 rounded-[32px] md:rounded-[48px] shadow-2xl text-left border border-white/5">
      <h3 className="text-white text-xl md:text-2xl font-bold mb-8 text-center md:text-left font-serif italic">
        Depois do Mapeamento do Sentir:
      </h3>

      <div className="space-y-6">
        {results.map((res, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <div className="bg-[#C3D9C3] text-[#2D352D] px-4 py-2 rounded-xl text-xs md:text-sm font-bold shadow-sm whitespace-nowrap">
                {res.label}
              </div>
              <span className="text-white font-bold text-sm md:text-base opacity-90">{res.value}</span>
            </div>
            <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C3D9C3] rounded-full transition-all duration-1000 ease-out"
                style={{ width: res.value }}
                aria-label={`Progresso de ${res.label}: ${res.value}`}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-emerald-100/50 text-[10px] md:text-xs text-center uppercase tracking-widest font-medium">
        Dados baseados em percepção de alunas após 4 semanas de acompanhamento
      </p>
    </div>
  </section>
);

export default FinalSection;
