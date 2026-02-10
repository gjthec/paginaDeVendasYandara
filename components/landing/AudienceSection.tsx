import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AudienceSection: React.FC = () => (
  <section id="para-quem" className="py-20 md:py-24 px-5 bg-[#F8F7F4]">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-6 px-2 text-center font-serif">
          Este processo é para pessoas reais, ocupadas e humanas.
        </h2>
        <p className="text-lg md:text-xl text-stone-600 text-center">Em especial para quem:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
        {[
          'se sente sobrecarregada, confusa ou cansada com frequência',
          'percebe que a mente não desacelera',
          'vive ciclos de culpa e autocobrança',
          'sente desânimo ou queda de energia',
          'procrastina porque o corpo trava',
          'quer retomar o próprio eixo',
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-100 shadow-sm md:shadow-none md:border-0 md:bg-transparent md:p-0"
          >
            <CheckCircle2 className="text-[#7A8C7A] shrink-0 mt-1" size={20} />
            <p className="text-base md:text-lg text-stone-700 leading-snug">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
