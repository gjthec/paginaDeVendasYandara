import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import CTAButton from '../CTAButton';

const ContextSection: React.FC = () => (
  <section id="contexto" className="py-20 md:py-24 px-5 bg-[#F8F7F4]">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight font-serif">
            Cansada de começar rotinas que não duram?
          </h2>

          <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
            A procrastinação, a falta de planejamento e o desânimo têm te impedido de avançar.
          </p>

          <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-8">
            A dificuldade de sustentar uma rotina equilibrada muitas vezes está ligada a fatores estruturais — não a
            “falta de força”.
          </p>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-100 shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-stone-800 mb-4">Isso costuma aparecer como:</h3>

            <ul className="space-y-3">
              {[
                'Sobrecarga de trabalho doméstico',
                'Falta de rede de apoio',
                'Excesso de responsabilidades simultâneas',
                'Pouco espaço real para descanso e autocuidado',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle2 className="text-[#7A8C7A] shrink-0 mt-1" size={18} />
                  <span className="text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border-t border-stone-200/70" />
        </div>

        <div className="bg-white rounded-3xl md:rounded-[40px] p-8 md:p-10 border border-stone-100 shadow-sm">
          <p className="text-[#D9A08B] font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-4">Contexto real</p>

          <div className="rounded-2xl bg-[#FDFCFB] border border-stone-100 p-6 md:p-7">
            <p className="text-stone-700 text-base md:text-lg leading-relaxed">
              Dados do <span className="font-bold">IBGE</span> mostram que mulheres dedicam, em média,{' '}
              <span className="font-bold">mais de 21 horas semanais</span> aos cuidados e tarefas domésticas —{' '}
              <span className="font-bold">quase o dobro</span> do tempo dos homens.
            </p>

            <p className="text-stone-500 text-sm md:text-base leading-relaxed mt-4">
              Quando somamos trabalho, responsabilidades invisíveis e autocobrança constante, fica mais fácil entender
              por que manter constância parece tão difícil.
            </p>

            <p className="mt-6 text-stone-400 text-[9px] md:text-[10px] uppercase tracking-widest font-medium">
              Nota: dado citado conforme referência do texto
            </p>
          </div>

          <div className="mt-8">
            <CTAButton className="w-full" label="Quero mudar minha rotina" />
            <p className="mt-3 text-stone-500 text-xs text-center">Um caminho possível, sem rigidez e sem sobrecarga.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContextSection;
