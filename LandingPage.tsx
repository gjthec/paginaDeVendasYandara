import React from 'react';
import Header from './components/Header';
import FloatingCTA from './components/FloatingCTA';
import { offer } from './config/offer';
import AudienceSection from './components/landing/AudienceSection';
import ContextSection from './components/landing/ContextSection';
import FinalSection from './components/landing/FinalSection';
import FooterSection from './components/landing/FooterSection';
import HeroSection from './components/landing/HeroSection';
import HowItWorksSection from './components/landing/HowItWorksSection';
import InstructorSection from './components/landing/InstructorSection';
import InvestmentSection from './components/landing/InvestmentSection';
import MappingIncludesSection from './components/landing/MappingIncludesSection';
import ModulesSection from './components/landing/ModulesSection';
import ProtocolSection from './components/landing/ProtocolSection';
import RoutineMethodSection from './components/landing/RoutineMethodSection';

const LandingPage: React.FC = () => {
  const results = [
    { label: 'Clareza sobre prioridades', value: '91%' },
    { label: 'Consistência na rotina', value: '82%' },
    { label: 'Começar tarefas importantes', value: '79%' },
    { label: 'Confiança em si mesma', value: '81%' },
    { label: 'Culpa ao final do dia', value: '3%' },
  ];

  return (
    <main className="min-h-screen pb-20 lg:pb-0 bg-[#687868]">
      <Header />

      <HeroSection whatsappLink={offer.whatsappLink} />
      <ContextSection />
      <ProtocolSection />
      <HowItWorksSection />
      <AudienceSection />
      <ModulesSection />
      <MappingIncludesSection />
      <RoutineMethodSection />
      <InstructorSection instructor={offer.instructor} />
      <InvestmentSection offer={offer} />
      <FinalSection results={results} whatsappLink={offer.whatsappLink} />
      <FooterSection />

      <FloatingCTA />
    </main>
  );
};

export default LandingPage;
