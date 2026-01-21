
import React from 'react';
import CTAButton from './CTAButton';

const FloatingCTA: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-stone-200 z-40">
      <CTAButton className="w-full !shadow-lg" />
    </div>
  );
};

export default FloatingCTA;
