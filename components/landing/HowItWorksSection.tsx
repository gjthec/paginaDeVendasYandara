import React from 'react';
import { Focus, Sparkles, Video } from 'lucide-react';

const HowItWorksSection: React.FC = () => (
  <section id="como-funciona" className="py-20 md:py-24 px-5 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-24">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 md:mb-8 leading-tight font-serif">
            O que é o Mapeamento do Sentir
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
            Um processo em 4 módulos que estrutura sua vida emocional e prática de forma integrada.
          </p>
          <p className="text-base md:text-lg text-stone-500 leading-relaxed italic border-l-4 border-[#D9A08B] pl-5 md:pl-6 py-2">
            Você não precisa saber por onde começar. Você só precisa aparecer. O resto é guiado.
          </p>
        </div>
        <div className="bg-[#FDFCFB] p-8 md:p-10 rounded-3xl md:rounded-[40px] shadow-sm border border-stone-100">
          <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-6 md:mb-8 text-center md:text-left">
            O que você recebe:
          </h3>
          <ul className="space-y-5 md:space-y-6">
            {[
              { icon: <Video size={20} className="text-[#D9A08B]" />, text: '4 módulos com videoaulas objetivas' },
              { icon: <Sparkles size={20} className="text-[#D9A08B]" />, text: 'Exercícios guiados de autorreflexão' },
              { icon: <Focus size={20} className="text-[#D9A08B]" />, text: '4 sessões individuais (1 por módulo)' },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-base md:text-lg text-stone-700">
                <div className="p-2.5 md:p-3 bg-white rounded-xl md:rounded-2xl shadow-sm shrink-0">{item.icon}</div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#7A8C7A] rounded-3xl md:rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden">
        <h3 className="text-xl md:text-4xl font-bold max-w-4xl mx-auto leading-relaxed relative z-10 font-serif italic font-normal text-center">
          “Você sai do emaranhado interno para um mapa claro do que te trava e do que te sustenta.”
        </h3>
        <p className="mt-6 md:mt-8 text-emerald-50 text-base md:text-xl font-light text-center">
          Um plano possível para o seu próximo ciclo, alinhado ao seu ritmo real.
        </p>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
