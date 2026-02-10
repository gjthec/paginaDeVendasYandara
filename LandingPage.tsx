
import React from 'react';
import Header from './components/Header';
import FloatingCTA from './components/FloatingCTA';
import FinalSection from './components/landing/FinalSection';
import FooterSection from './components/landing/FooterSection';
import ForWhoSection from './components/landing/ForWhoSection';
import HeroSection from './components/landing/HeroSection';
import HowItWorksSection from './components/landing/HowItWorksSection';
import InstructorSection from './components/landing/InstructorSection';
import InvestmentSection from './components/landing/InvestmentSection';
import ModulesSection from './components/landing/ModulesSection';

const LandingPage: React.FC = () => {
  const results = [
    { label: "Clareza sobre prioridades", value: "91%" },
    { label: "Consistência na rotina", value: "82%" },
    { label: "Começar tarefas importantes", value: "79%" },
    { label: "Confiança em si mesma", value: "81%" },
    { label: "Culpa ao final do dia", value: "3%" },
  ];

  return (
    <main className="min-h-screen pb-20 lg:pb-0 bg-[#FDFCFB]">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ForWhoSection />
      <ModulesSection />
      <InstructorSection />
      <InvestmentSection />
      <FinalSection results={results} />
      <FooterSection />

      <FloatingCTA />
    </main>
  );
};

export default LandingPage;
