import React from 'react';
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import CTAButton from '../CTAButton';
import { formatValue } from '../../config/offer';
import type { OfferConfig } from '../../config/offer';

interface InvestmentSectionProps {
  offer: OfferConfig;
}

const InvestmentSection: React.FC<InvestmentSectionProps> = ({ offer }) => (
  <section id="investimento" className="py-20 md:py-32 px-5 bg-white relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7A8C7A] rounded-full blur-[120px] -z-10" />

    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">Investimento Leve</h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Organizar sua vida emocional não precisa custar uma fortuna. Criamos um modelo acessível para que ninguém fique
          de fora.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white rounded-3xl md:rounded-[50px] shadow-2xl overflow-hidden border-4 border-[#7A8C7A]/10 flex flex-col md:flex-row relative z-10">
          <div className="p-10 md:p-16 flex-1 flex flex-col justify-center items-center text-center bg-[#7A8C7A] text-white">
            <p className="text-emerald-100 uppercase tracking-widest text-[10px] md:text-xs font-bold mb-6 border-b border-white/20 pb-2">
              O seu custo semanal
            </p>
            <div className="mb-8">
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-2xl font-medium text-emerald-100 italic mr-1">R$</span>
                <span className="text-7xl md:text-8xl font-bold tracking-tighter">49,50</span>
              </div>
              <p className="text-emerald-50 text-base md:text-lg font-medium opacity-80">Por módulo / semana</p>
            </div>
            <div className="w-full p-4 bg-white/10 rounded-2xl flex items-center justify-center gap-3">
              <Clock size={20} className="text-emerald-200" />
              <p className="text-sm font-medium">Acompanhamento Individual Incluso</p>
            </div>
          </div>

          <div className="p-10 md:p-16 flex-1 flex flex-col justify-center items-center text-center bg-white">
            <div className="mb-10 text-left w-full space-y-4">
              <h3 className="text-xl font-bold text-stone-800 font-serif">O que está garantido:</h3>
              <ul className="space-y-4">
                {['4 Sessões individuais de 50min', '4 Módulos de conteúdo guiado', 'Material de apoio e Bônus', 'Suporte direto no WhatsApp'].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-600 font-medium">
                      <CheckCircle2 size={18} className="text-[#7A8C7A] shrink-0" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="w-full space-y-6">
              <div className="flex flex-col gap-1 border-t border-stone-100 pt-6">
                <p className="text-stone-400 text-[10px] uppercase font-bold tracking-widest">Valor Total do Pacote</p>
                <div className="mt-1">
                  <span className="text-stone-400 line-through text-lg block leading-none mb-1">
                    De R$ {formatValue(offer.originalPriceBRL)}
                  </span>
                  <p className="text-2xl md:text-3xl font-bold text-stone-800 tracking-tight">
                    <span className="text-sm font-medium text-stone-500 mr-1 italic">Por apenas</span>
                    R$ {formatValue(offer.priceBRL)}
                  </p>
                </div>
              </div>
              <CTAButton className="w-full py-5 text-lg shadow-xl" />
              <div className="flex flex-col gap-2">
                <p className="text-stone-500 text-xs font-medium">{formatValue(offer.paymentMethods)}</p>
                <div className="flex items-center justify-center gap-2 text-[#7A8C7A] text-xs font-bold">
                  <ShieldCheck size={14} />
                  <span>{formatValue(offer.guaranteePolicy)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-6 -right-6 md:-right-12 bg-[#D9A08B] text-white px-6 py-3 rounded-2xl shadow-xl z-20 transform rotate-6 hidden md:block text-center">
          <p className="text-[10px] uppercase font-black tracking-tighter">Oportunidade</p>
          <p className="text-xl font-bold">Vagas Limitadas</p>
        </div>
      </div>
    </div>
  </section>
);

export default InvestmentSection;
