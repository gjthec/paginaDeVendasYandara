
import React from 'react';
import { offer } from '../config/offer';

interface CTAButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  // Added onClick prop to handle click events (e.g., closing mobile menu)
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  className = "", 
  children = "Quero começar meu mapeamento",
  variant = 'primary',
  onClick
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg";
  
  const variants = {
    primary: "bg-[#7A8C7A] text-white hover:bg-[#687868] shadow-emerald-900/10",
    secondary: "bg-[#D9A08B] text-white hover:bg-[#C28A77] shadow-orange-900/10",
    outline: "border-2 border-[#7A8C7A] text-[#7A8C7A] hover:bg-[#7A8C7A] hover:text-white"
  };

  return (
    <a 
      href={offer.purchaseLink} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={String(children)}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default CTAButton;
