import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import CTAButton from '../CTAButton';
import { offer } from '../../config/offer';

const HeroSection: React.FC = () => (
  <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-5 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-100 rounded-full blur-[80px] md:blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-orange-50 rounded-full blur-[80px] md:blur-[100px]" />
    </div>

    <div className="max-w-4xl mx-auto text-center animate-fade-in">
      <div className="inline-flex items-center gap-2 bg-[#D9A08B]/10 text-[#D9A08B] px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest mb-6 animate-bounce">
        <Sparkles size={16} />
        <span>Apenas R$ 49,50 por semana</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-stone-800 leading-tight mb-6 md:mb-8 uppercase tracking-tight font-serif">
        Mapeamento <span className="italic font-light lowercase">do</span> Sentir
      </h1>
      <h2 className="text-lg md:text-3xl text-stone-600 font-medium leading-relaxed mb-8 max-w-3xl mx-auto px-2 text-center">
        Uma jornada guiada para te devolver clareza emocional, direção interna e leveza para começar um novo ciclo.
      </h2>
      <p className="text-base md:text-lg text-stone-500 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
        Organizar por dentro o que hoje parece caótico por fora, com prática, presença e um caminho simples de seguir.
      </p>

      <div className="flex flex-col items-center gap-6 px-4">
        <CTAButton className="w-full sm:w-auto scale-105 md:scale-110" />
        <div className="flex flex-col items-center gap-2">
          <p className="text-stone-400 text-xs font-medium uppercase tracking-widest">Acesso total por 12 meses</p>
          <a
            href={offer.whatsappLink}
            className="text-stone-500 hover:text-stone-800 transition-colors flex items-center justify-center gap-2 text-sm text-center"
          >
            <MessageCircle size={18} className="shrink-0" />
            <span>Dúvidas? Fale comigo no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
