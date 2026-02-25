
import React from 'react';
import { offer } from '../config/offer';

interface CTAButtonProps {
  className?: string;
  label?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  // Added onClick prop to handle click events (e.g., closing mobile menu)
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  className = "", 
  label,
  children,
  variant = 'primary',
  onClick
}) => {
  const content = label ?? children ?? 'Quero começar meu mapeamento';
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg";
  
  const variants = {
    primary: "bg-[#F6F1E6] text-[#8A6455] hover:bg-[#EFE7D8] shadow-stone-900/10",
    secondary: "bg-[#F6F1E6] text-[#8A6455] hover:bg-[#EFE7D8] shadow-stone-900/10",
    outline: "border-2 border-[#E7DDCC] bg-[#F6F1E6] text-[#8A6455] hover:bg-[#EFE7D8]"
  };

  return (
    <a 
      href={offer.purchaseLink} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={typeof content === 'string' ? content : 'Call to action'}
      onClick={onClick}
    >
      {content}
    </a>
  );
};

export default CTAButton;
