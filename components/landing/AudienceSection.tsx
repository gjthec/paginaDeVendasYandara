import React from 'react';
const AudienceSection: React.FC = () => (
  <section id="para-quem" className="py-20 md:py-24 px-5 bg-[#7A8C7A]">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 px-2 text-center font-serif">
          Este processo é para pessoas reais, ocupadas e humanas.
        </h2>
        <p className="text-lg md:text-xl text-emerald-50 text-center">Em especial para quem:</p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 list-disc pl-6 md:pl-8 marker:text-white">
        {[
          'se sente sobrecarregada, confusa ou cansada com frequência',
          'percebe que a mente não desacelera',
          'vive ciclos de culpa e autocobrança',
          'sente desânimo ou queda de energia',
          'procrastina porque o corpo trava',
          'quer retomar o próprio eixo',
        ].map((item) => (
          <li key={item} className="text-base md:text-lg text-white leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AudienceSection;
