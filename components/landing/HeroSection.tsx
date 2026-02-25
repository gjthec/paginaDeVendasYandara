import React from 'react';
import { MessageCircle } from 'lucide-react';
import CTAButton from '../CTAButton';

interface HeroSectionProps {
  whatsappLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ whatsappLink }) => (
  <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-5 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#7A8C7A] rounded-full blur-[80px] md:blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-orange-50 rounded-full blur-[80px] md:blur-[100px]" />
    </div>

    <div className="max-w-4xl mx-auto text-center animate-fade-in">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-stone-800 leading-tight mb-6 md:mb-8 uppercase tracking-tight font-serif">
        O método de rotina que funciona <span className="italic font-light lowercase">até</span> nos dias difíceis.
      </h1>

      <h2 className="text-lg md:text-3xl text-stone-600 font-medium leading-relaxed mb-8 max-w-3xl mx-auto px-2 text-center">
        Uma metodologia prática, baseada em ferramentas estratégicas e princípios científicos de comportamento, para você
        organizar sua rotina de forma possível — sem rigidez e sem sobrecarga.
      </h2>

      <p className="text-base md:text-lg text-stone-500 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
        Você não precisa dar conta de tudo. Você precisa de um plano que respeite seu ritmo e te coloque em movimento,
        mesmo quando o dia não ajuda.
      </p>

      <div className="flex flex-col items-center gap-6 px-4">
        <CTAButton className="w-full sm:w-auto scale-105 md:scale-110" label="Quero começar meu mapeamento" />
        <div className="flex flex-col items-center gap-2">
          <p className="text-stone-400 text-xs font-medium uppercase tracking-widest">Acesso total por 12 meses</p>
          <a
            href={whatsappLink}
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
