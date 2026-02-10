import React from 'react';
import { Instagram, Send } from 'lucide-react';
import type { Instructor } from '../../config/offer';

interface InstructorSectionProps {
  instructor: Instructor;
}

const InstructorSection: React.FC<InstructorSectionProps> = ({ instructor }) => (
  <section className="py-20 md:py-24 px-5 bg-stone-100">
    <div className="max-w-5xl mx-auto bg-white rounded-3xl md:rounded-[40px] overflow-hidden shadow-sm flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-64 md:h-auto">
        <img src={instructor.photoUrl} alt={instructor.name} className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
        <span className="text-[#D9A08B] font-bold uppercase tracking-widest text-xs mb-3">Quem conduz</span>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2 font-serif">{instructor.name}</h2>
        <p className="text-lg text-stone-500 italic mb-6">{instructor.tagline}</p>
        <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8">{instructor.bio}</p>
        <div className="flex flex-wrap gap-6">
          <a
            href={instructor.instagramUrl}
            className="flex items-center gap-2 text-stone-700 hover:text-[#D9A08B] transition-colors font-medium"
          >
            <Instagram size={20} /> Instagram
          </a>
          <a
            href={instructor.supportChannelUrl}
            className="flex items-center gap-2 text-stone-700 hover:text-[#D9A08B] transition-colors font-medium"
          >
            <Send size={20} /> Suporte
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default InstructorSection;
