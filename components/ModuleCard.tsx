
import React from 'react';

interface ModuleCardProps {
  title: string;
  description: string;
  bullets: string[];
  footerExercises: string;
  footerSession: string;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, description, bullets, footerExercises, footerSession, index }) => {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      <div className="mb-6">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#D9A08B] mb-2 block">Módulo 0{index + 1}</span>
        <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-3 md:mb-4">{title}</h3>
        <p className="text-sm md:text-base text-stone-600 leading-relaxed">{description}</p>
      </div>
      
      <div className="flex-grow">
        <h4 className="text-[10px] md:text-xs font-bold text-stone-700 uppercase mb-4">O que você constrói:</h4>
        <ul className="space-y-2 md:space-y-3 mb-8">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start">
              <span className="text-[#7A8C7A] mr-2 text-lg leading-none">•</span>
              <span className="text-sm md:text-base text-stone-600 leading-tight">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 border-t border-stone-50 space-y-4">
        <div>
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter mb-1">Exercícios:</p>
          <p className="text-xs md:text-sm text-stone-500 italic leading-relaxed">{footerExercises}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter mb-1">Sessão Individual:</p>
          <p className="text-xs md:text-sm text-stone-500 italic leading-relaxed">{footerSession}</p>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
