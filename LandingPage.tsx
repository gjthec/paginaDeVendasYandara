
import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import CTAButton from './components/CTAButton';
import ModuleCard from './components/ModuleCard';
import FloatingCTA from './components/FloatingCTA';
import { offer, formatValue } from './config/offer';
import { blogService, BlogPost } from './services/blogService';

const LandingPage: React.FC = () => {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    const fetch = async () => {
      const posts = await blogService.getPosts();
      setLatestPosts(posts.slice(0, 2));
    };
    fetch();
  }, []);

  const results = [
    { label: "Clareza sobre prioridades", value: "91%" },
    { label: "Consistência na rotina", value: "82%" },
    { label: "Começar tarefas importantes", value: "79%" },
    { label: "Confiança em si mesma", value: "81%" },
    { label: "Culpa ao final do dia", value: "3%" },
  ];

  return (
    <main className="min-h-screen pb-20 lg:pb-0">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-100 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-orange-50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#D9A08B]/10 text-[#D9A08B] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-bounce">
            <Sparkles size={16} />
            <span>Apenas R$ 49,50 por semana</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-stone-800 leading-tight mb-8 uppercase tracking-tight">
            Mapeamento <span className="italic font-light lowercase">do</span> Sentir
          </h1>
          <h2 className="text-lg md:text-3xl text-stone-600 font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
            Uma jornada guiada para te devolver clareza emocional e direção interna.
          </h2>

          <div className="flex flex-col items-center gap-6">
            <CTAButton className="scale-110" />
            <a href={offer.whatsappLink} className="text-stone-500 hover:text-stone-800 transition-colors flex items-center gap-2 text-sm">
              <MessageCircle size={18} />
              <span>Dúvidas? Fale comigo no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW SECTION */}
      {latestPosts.length > 0 && (
        <section className="py-24 md:py-32 px-5 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">Notas sobre o Sentir</h2>
                <p className="text-lg text-stone-600">Reflexões recentes direto do nosso diário.</p>
              </div>
              <Link to="/blog" className="flex items-center gap-2 text-[#7A8C7A] font-bold text-sm uppercase tracking-widest border-b-2 border-[#7A8C7A] pb-1">
                Ver todos os textos <ArrowRight size={18}/>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestPosts.map(post => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-xl animate-fade-in">
                  <img src={post.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent p-12 flex flex-col justify-end">
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">{post.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif leading-tight">{post.title}</h3>
                    <div className="text-white/80 font-bold text-sm uppercase tracking-widest flex items-center gap-2">Ler agora <ArrowRight size={18}/></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MÓDULOS */}
      <section id="modulos" className="py-20 md:py-24 px-5 bg-[#FDFCFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-16 text-center">Os 4 módulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ModuleCard index={0} title="Módulo 1: Organização" description="Entenda como a sobrecarga emocional bagunça sua mente e como filtrar o essencial." bullets={["identificar gatilhos", "enxergar excessos", "filtrar o essencial"]} footerExercises="Mapeamento do caos." footerSession="Sessão individual inclusa." />
            <ModuleCard index={1} title="Módulo 2: Desânimo" description="Aprenda a rastrear sua energia e diferenciar cansaço de falta de propósito." bullets={["vazamentos de energia", "humor e sensibilidade", "autocuidado realista"]} footerExercises="Rastreamento de energia." footerSession="Sessão individual inclusa." />
            <ModuleCard index={2} title="Módulo 3: Procrastinação" description="Diferencie pausa necessária de fuga. Entenda o que seu corpo diz quando trava." bullets={["corpo que trava", "medo e comparação", "micro passos reais"]} footerExercises="Identificação de bloqueios." footerSession="Sessão individual inclusa." />
            <ModuleCard index={3} title="Módulo 4: Planejamento" description="Crie uma direção sustentável para as suas semanas, respeitando seu tempo." bullets={["semanas leves", "prioridades reais", "plano sustentável"]} footerExercises="Agenda afetiva." footerSession="Sessão individual inclusa." />
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section id="investimento" className="py-20 md:py-32 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#7A8C7A] rounded-[50px] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
             <h2 className="text-4xl md:text-6xl font-bold mb-8 italic font-serif">Apenas R$ {formatValue(offer.priceBRL)}</h2>
             <p className="text-emerald-50/80 mb-12 text-lg max-w-xl mx-auto">Investimento único para 12 meses de acesso e acompanhamento individual.</p>
             <CTAButton variant="secondary" className="scale-125" />
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white text-stone-300 text-center text-[10px] uppercase tracking-widest font-bold">
        © {new Date().getFullYear()} Mapeamento do Sentir • <Link to="/admin" className="hover:text-stone-800">Admin</Link>
      </footer>

      <FloatingCTA />
    </main>
  );
};

export default LandingPage;
