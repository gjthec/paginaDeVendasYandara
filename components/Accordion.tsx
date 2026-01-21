
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl font-medium text-stone-800 group-hover:text-stone-600 transition-colors">
          {question}
        </span>
        {isOpen ? <ChevronUp className="text-stone-400" /> : <ChevronDown className="text-stone-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
        <div className="text-stone-600 leading-relaxed text-lg">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, idx) => (
        <AccordionItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
