
import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Focus, 
  Video, 
  UserCircle2, 
  ShieldCheck,
  Instagram,
  Send,
  MessageCircle,
  AudioLines,
  FileText
} from 'lucide-react';
import Header from './components/Header';
import CTAButton from './components/CTAButton';
import ModuleCard from './components/ModuleCard';
import Accordion from './components/Accordion';
import FloatingCTA from './components/FloatingCTA';
import { offer, formatValue } from './config/offer';

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen pb-20 lg:pb-0">
      <Header />
      
      {/* 2. HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-100 rounded-full blur-[80px] md:blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-orange-50 rounded-full blur-[80px] md:blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-stone-800 leading-tight mb-6 md:mb-8 uppercase tracking-tight">
            Mapeamento <span className="italic font-light lowercase">do</span> Sentir
          </h1>
          <h2 className="text-lg md:text-3xl text-stone-600 font-medium leading-relaxed mb-8 max-w-3xl mx-auto px-2">
            Uma jornada guiada para te devolver clareza emocional, direção interna e leveza para começar um novo ciclo — mesmo quando seus dias estão cansativos ou instáveis.
          </h2>
          <p className="text-base md:text-lg text-stone-500 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Organizar por dentro o que hoje parece caótico por fora, com prática, presença e um caminho simples de seguir.
          </p>

          <div className="flex flex-col items-center gap-6 px-4">
            <CTAButton className="w-full sm:w-auto scale-105 md:scale-110" />
            <a href={offer.whatsappLink} className="text-stone-500 hover:text-stone-800 transition-colors flex items-center justify-center gap-2 text-sm text-center">
              <MessageCircle size={18} className="shrink-0" />
              <span>Dúvidas? Fale comigo no WhatsApp</span>
            </a>
          </div>

          {/* Mini-box editable fields */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-stone-100 pt-8 text-sm text-stone-400">
            <div className="bg-stone-50/50 p-4 rounded-2xl md:bg-transparent md:p-0">
              <p className="uppercase tracking-widest text-[10px] font-bold mb-1">Investimento</p>
              <p className="text-stone-600 font-medium">R$ {formatValue(offer.priceBRL)}</p>
            </div>
            <div className="bg-stone-50/50 p-4 rounded-2xl md:bg-transparent md:p-0">
              <p className="uppercase tracking-widest text-[10px] font-bold mb-1">Pagamento</p>
              <p className="text-stone-600 font-medium">{formatValue(offer.paymentMethods)}</p>
            </div>
            <div className="bg-stone-50/50 p-4 rounded-2xl md:bg-transparent md:p-0">
              <p className="uppercase tracking-widest text-[10px] font-bold mb-1">Próximas Datas</p>
              <p className="text-stone-600 font-medium">{formatValue(offer.datesAndSpots)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARA QUEM É */}
      <section id="para-quem" className="py-20 md:py-24 px-5 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-6 px-2">Este processo é para pessoas reais, ocupadas e humanas.</h2>
            <p className="text-lg md:text-xl text-stone-600">Em especial para quem:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {[
              "se sente sobrecarregada, confusa ou cansada com frequência",
              "percebe que a mente não desacelera",
              "vive ciclos de culpa e autocobrança",
              "sente desânimo ou queda de energia",
              "procrastina porque o corpo trava",
              "quer retomar o próprio eixo"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/50 p-4 rounded-xl md:bg-transparent md:p-0">
                <CheckCircle2 className="text-[#7A8C7A] shrink-0 mt-1" size={20} />
                <p className="text-base md:text-lg text-stone-700 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. O QUE É / RECEBE */}
      <section className="py-20 md:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 md:mb-8 leading-tight">O que é o Mapeamento do Sentir</h2>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
                Um processo em 4 módulos que estrutura sua vida emocional e prática de forma integrada.
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed italic border-l-4 border-[#D9A08B] pl-5 md:pl-6 py-2">
                Você não precisa saber por onde começar. Você só precisa aparecer. O resto é guiado.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl md:rounded-[40px] shadow-sm border border-stone-100">
              <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-6 md:mb-8 text-center md:text-left">O que você recebe:</h3>
              <ul className="space-y-5 md:space-y-6">
                {[
                  { icon: <Video size={20} className="text-[#D9A08B]" />, text: "4 módulos com videoaulas objetivas" },
                  { icon: <Sparkles size={20} className="text-[#D9A08B]" />, text: "Exercícios guiados de autorreflexão" },
                  { icon: <Focus size={20} className="text-[#D9A08B]" />, text: "1 sessão individual por módulo" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-base md:text-lg text-stone-700">
                    <div className="p-2.5 md:p-3 bg-stone-50 rounded-xl md:rounded-2xl shrink-0">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#7A8C7A] rounded-3xl md:rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden">
            <h3 className="text-xl md:text-4xl font-bold max-w-4xl mx-auto leading-relaxed relative z-10 font-serif italic font-normal">
              “Você sai do emaranhado interno para um mapa claro do que te trava e do que te sustenta.”
            </h3>
            <p className="mt-6 md:mt-8 text-emerald-50 text-base md:text-xl font-light">
              Um plano possível para o seu próximo ciclo, alinhado ao seu ritmo real.
            </p>
          </div>
        </div>
      </section>

      {/* 9. MÓDULOS */}
      <section id="modulos" className="py-20 md:py-24 px-5 bg-[#FDFCFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-12 md:mb-16 text-center">Os 4 módulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ModuleCard 
              index={0}
              title="Módulo 1: Organização"
              description="Antes de tudo, organizamos o terreno. Entenda como a sobrecarga bagunça sua mente."
              bullets={["identificar gatilhos", "enxergar excessos", "filtrar o essencial"]}
              footerExercises="Mapeamento do caos e excessos."
              footerSession="Estrutura possível para o agora."
            />
            <ModuleCard 
              index={1}
              title="Módulo 2: Desânimo"
              description="O desânimo não é um defeito, é um pedido de atenção. Aprenda a rastrear sua energia."
              bullets={["vazamentos de energia", "humor e sensibilidade", "autocuidado realista"]}
              footerExercises="Rastreamento de energia."
              footerSession="Trabalhamos pontos emocionais profundos."
            />
            <ModuleCard 
              index={2}
              title="Módulo 3: Procrastinação"
              description="Diferencie pausa necessária de fuga. Entenda o que seu corpo diz quando trava."
              bullets={["corpo que trava", "medo e comparação", "micro passos reais"]}
              footerExercises="Identificação de bloqueios."
              footerSession="Ajustamos metas e tempo interno."
            />
            <ModuleCard 
              index={3}
              title="Módulo 4: Planejamento"
              description="Criar direção, não apenas metas. Planeje respeitando seu corpo e vida real."
              bullets={["semanas leves", "prioridades reais", "plano sustentável"]}
              footerExercises="Agenda afetiva e plano possível."
              footerSession="Fechamento do mapa e próximo ciclo."
            />
          </div>
        </div>
      </section>

      {/* 10. QUEM CONDUZ */}
      <section className="py-20 md:py-24 px-5 bg-stone-100">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl md:rounded-[40px] overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-64 md:h-auto">
            <img 
              src={offer.instructor.photoUrl} 
              alt={offer.instructor.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
            <span className="text-[#D9A08B] font-bold uppercase tracking-widest text-xs mb-3">Quem conduz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">{offer.instructor.name}</h2>
            <p className="text-lg text-stone-500 italic mb-6">{offer.instructor.tagline}</p>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8">
              {offer.instructor.bio}
            </p>
            <div className="flex flex-wrap gap-6">
              <a href={offer.instructor.instagramUrl} className="flex items-center gap-2 text-stone-700 hover:text-[#D9A08B] transition-colors font-medium">
                <Instagram size={20} /> Instagram
              </a>
              <a href={offer.instructor.supportChannelUrl} className="flex items-center gap-2 text-stone-700 hover:text-[#D9A08B] transition-colors font-medium">
                <Send size={20} /> Suporte
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. BÔNUS */}
      <section id="bonus" className="py-20 md:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-12 md:mb-16 text-center px-4">Além dos módulos, você ganha:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Ritual de Aterramento", detail: "5 min (áudio)", icon: <AudioLines /> },
              { title: "Higiene do Sono", detail: "PDF Prático", icon: <FileText /> },
              { title: "Meditação Retorno", detail: "Áudio guiado", icon: <Sparkles /> },
              { title: "Diário de Percepções", detail: "PDF Interativo", icon: <UserCircle2 /> }
            ].map((bonus, i) => (
              <div key={i} className="bg-stone-50 p-6 md:p-8 rounded-2xl md:rounded-3xl text-center border border-stone-100 flex flex-row sm:flex-col items-center gap-4 sm:gap-0">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center text-[#D9A08B] shrink-0 sm:mx-auto sm:mb-6">
                  {bonus.icon}
                </div>
                <div className="text-left sm:text-center">
                  <h4 className="text-lg font-bold text-stone-800 sm:mb-2">{bonus.title}</h4>
                  <p className="text-stone-500 text-sm font-medium">{bonus.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. INVESTIMENTO */}
      <section id="investimento" className="py-20 md:py-32 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl md:rounded-[50px] shadow-xl overflow-hidden border border-stone-100 flex flex-col md:flex-row">
            <div className="p-8 md:p-16 flex-1 bg-stone-50/50">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6 md:mb-8 text-center md:text-left">Comece hoje sua jornada</h2>
              <ul className="space-y-4 mb-10">
                {["4 Módulos completos", "4 Sessões individuais", "Todos os bônus", "Acesso imediato"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600 font-medium text-sm md:text-base">
                    <CheckCircle2 size={18} className="text-[#7A8C7A]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 p-4 bg-[#7A8C7A]/5 rounded-2xl border border-[#7A8C7A]/10">
                <ShieldCheck className="text-[#7A8C7A] shrink-0" size={24} />
                <p className="text-stone-500 text-xs leading-relaxed">{formatValue(offer.guaranteePolicy)}</p>
              </div>
            </div>
            
            <div className="p-10 md:p-16 flex-1 flex flex-col justify-center items-center text-center bg-white border-t md:border-t-0 md:border-l border-stone-100">
              <p className="text-stone-400 uppercase tracking-widest text-[10px] font-bold mb-2">Investimento Total</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xl font-medium text-stone-400">R$</span>
                <span className="text-5xl md:text-6xl font-bold text-stone-800">{formatValue(offer.priceBRL)}</span>
              </div>
              <p className="text-stone-500 text-sm md:text-base font-medium mb-10">
                {formatValue(offer.paymentMethods)}
              </p>
              <CTAButton className="w-full py-4 text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* 14. FINAL */}
      <section className="py-24 md:py-32 px-5 bg-[#7A8C7A] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-serif italic px-2">Pronta para começar?</h2>
          <p className="text-lg md:text-2xl text-emerald-50 mb-10 md:mb-12 leading-relaxed font-light px-4">
            Recuperar sua clareza interna é recuperar sua vida. Escolha com mais calma, firmeza e menos confusão.
          </p>
          <CTAButton variant="secondary" className="w-full sm:w-auto scale-105 md:scale-125 mb-8" />
          <div className="mt-8">
            <a href={offer.whatsappLink} className="text-emerald-100 hover:text-white transition-colors underline underline-offset-8 text-base md:text-lg">
              Dúvidas? Fale no WhatsApp.
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white text-stone-400 text-center text-xs px-5 border-t border-stone-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="font-serif font-bold text-stone-800 text-lg italic">Mapeamento do Sentir</div>
          <div>© {new Date().getFullYear()} • Todos os direitos reservados</div>
        </div>
      </footer>

      <FloatingCTA />
    </main>
  );
};

export default LandingPage;
