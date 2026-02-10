import React, { useMemo, useRef, useState } from 'react';
// Import Link component from react-router-dom
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Sparkles,
  Focus,
  Video,
  ShieldCheck,
  Instagram,
  Send,
  MessageCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Header from './components/Header';
import CTAButton from './components/CTAButton';
import ModuleCard from './components/ModuleCard';
import FloatingCTA from './components/FloatingCTA';
import { offer, formatValue } from './config/offer';

const LandingPage: React.FC = () => {
  const results = [
    { label: 'Clareza sobre prioridades', value: '91%' },
    { label: 'Consistência na rotina', value: '82%' },
    { label: 'Começar tarefas importantes', value: '79%' },
    { label: 'Confiança em si mesma', value: '81%' },
    { label: 'Culpa ao final do dia', value: '3%' },
  ];

  // =========================
  // TEMAS (CARROSSEL)
  // Coloque as imagens em: /public/themes/...
  // =========================
  const themes = useMemo(
    () => [
      { title: 'Organização', image: '/themes/organizacao.jpg' },
      { title: 'Procrastinação', image: '/themes/procrastinacao.jpg' },
      { title: 'Desânimo', image: '/themes/desanimo.jpg' },
      { title: 'Planejamento', image: '/themes/planejamento.jpg' },
    ],
    []
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeTheme, setActiveTheme] = useState(0);

  const scrollToTheme = (index: number) => {
    const el = trackRef.current;
    if (!el) return;

    const item = el.children[index] as HTMLElement | undefined;
    if (!item) return;

    item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <main className="min-h-screen pb-20 lg:pb-0 bg-[#FDFCFB]">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-100 rounded-full blur-[80px] md:blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-orange-50 rounded-full blur-[80px] md:blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* REMOVIDO: tag de valor por semana */}

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-stone-800 leading-tight mb-6 md:mb-8 uppercase tracking-tight font-serif">
            O método de rotina que funciona <span className="italic font-light lowercase">até</span> nos dias difíceis.
          </h1>

          <h2 className="text-lg md:text-3xl text-stone-600 font-medium leading-relaxed mb-8 max-w-3xl mx-auto px-2 text-center">
            Uma metodologia prática, baseada em ferramentas estratégicas e princípios científicos de comportamento, para você
            organizar sua rotina de forma possível — sem rigidez e sem sobrecarga.
          </h2>

          <p className="text-base md:text-lg text-stone-500 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Você não precisa dar conta de tudo. Você precisa de um plano que respeite seu ritmo e te coloque em movimento,
            mesmo quando o dia não ajuda.
          </p>

          <div className="flex flex-col items-center gap-6 px-4">
            <CTAButton className="w-full sm:w-auto scale-105 md:scale-110" label="Quero mudar minha rotina" />
            <div className="flex flex-col items-center gap-2">
              <p className="text-stone-400 text-xs font-medium uppercase tracking-widest">Acesso total por 12 meses</p>
              <a
                href={offer.whatsappLink}
                className="text-stone-500 hover:text-stone-800 transition-colors flex items-center justify-center gap-2 text-sm text-center"
              >
                <MessageCircle size={18} className="shrink-0" />
                <span>Dúvidas? Fale comigo no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXTO / DOR */}
      <section id="contexto" className="py-20 md:py-24 px-5 bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight font-serif">
                Cansada de começar rotinas que não duram?
              </h2>

              <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
                A procrastinação, a falta de planejamento e o desânimo têm te impedido de avançar.
              </p>

              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-8">
                A dificuldade de sustentar uma rotina equilibrada muitas vezes está ligada a fatores estruturais — não a
                “falta de força”.
              </p>

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-stone-800 mb-4">Isso costuma aparecer como:</h3>

                <ul className="space-y-3">
                  {[
                    'Sobrecarga de trabalho doméstico',
                    'Falta de rede de apoio',
                    'Excesso de responsabilidades simultâneas',
                    'Pouco espaço real para descanso e autocuidado',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-700">
                      <CheckCircle2 className="text-[#7A8C7A] shrink-0 mt-1" size={18} />
                      <span className="text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 border-t border-stone-200/70" />
            </div>

            <div className="bg-white rounded-3xl md:rounded-[40px] p-8 md:p-10 border border-stone-100 shadow-sm">
              <p className="text-[#D9A08B] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4">
                Contexto real
              </p>

              <div className="rounded-2xl bg-[#FDFCFB] border border-stone-100 p-6 md:p-7">
                <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                  Dados do <span className="font-bold">IBGE</span> mostram que mulheres dedicam, em média,{' '}
                  <span className="font-bold">mais de 21 horas semanais</span> aos cuidados e tarefas domésticas —{' '}
                  <span className="font-bold">quase o dobro</span> do tempo dos homens.
                </p>

                <p className="text-stone-500 text-sm md:text-base leading-relaxed mt-4">
                  Quando somamos trabalho, responsabilidades invisíveis e autocobrança constante, fica mais fácil entender
                  por que manter constância parece tão difícil.
                </p>

                <p className="mt-6 text-stone-400 text-[10px] md:text-xs uppercase tracking-widest font-medium">
                  Nota: dado citado conforme referência do texto
                </p>
              </div>

              <div className="mt-8">
                <CTAButton className="w-full" label="Quero mudar minha rotina" />
                <p className="mt-3 text-stone-500 text-xs text-center">Um caminho possível, sem rigidez e sem sobrecarga.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFRAME / PROTOCOLO */}
      <section id="protocolo" className="py-20 md:py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight font-serif">
                Não é que você não consiga se organizar.
              </h2>

              <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
                É que ninguém te ensinou a construir uma rotina que funcione dentro da sua vida real — inclusive nos dias
                difíceis.
              </p>

              <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-10">
                Depois de muita pesquisa e prática, desenvolvi um protocolo acessível para transformar a sua relação com a
                rotina, criando uma estrutura que se adapta às suas necessidades — e não o contrário.
              </p>

              <div className="max-w-md">
                <CTAButton className="w-full sm:w-auto" label="Quero mudar minha rotina" />
                <p className="mt-3 text-stone-500 text-xs text-center sm:text-left">
                  Um método possível, sem rigidez e sem sobrecarga.
                </p>
              </div>
            </div>

            {/* =========================
               CARROSSEL DE TEMAS (IGUAL PRINT)
               ========================= */}
            <div className="bg-white rounded-3xl md:rounded-[40px] p-6 md:p-8 border border-stone-100 shadow-sm">
              <p className="text-[#D9A08B] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-5">
                Temas do mapeamento
              </p>

              <div className="relative">
                {/* setas */}
                <button
                  type="button"
                  onClick={() => scrollToTheme(Math.max(0, activeTheme - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-stone-200 shadow-sm hover:bg-white transition hidden md:flex"
                  aria-label="Tema anterior"
                >
                  <ChevronLeft size={20} className="text-stone-700" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToTheme(Math.min(themes.length - 1, activeTheme + 1))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-stone-200 shadow-sm hover:bg-white transition hidden md:flex"
                  aria-label="Próximo tema"
                >
                  <ChevronRight size={20} className="text-stone-700" />
                </button>

                {/* trilho */}
                <div
                  ref={trackRef}
                  onScroll={() => {
                    const el = trackRef.current;
                    if (!el) return;

                    const center = el.scrollLeft + el.clientWidth / 2;
                    const items = Array.from(el.children) as HTMLElement[];

                    let best = 0;
                    let bestDist = Number.POSITIVE_INFINITY;

                    items.forEach((it, idx) => {
                      const itCenter = it.offsetLeft + it.clientWidth / 2;
                      const dist = Math.abs(itCenter - center);
                      if (dist < bestDist) {
                        bestDist = dist;
                        best = idx;
                      }
                    });

                    setActiveTheme(best);
                  }}
                  className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3
                             [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {themes.map((t, i) => (
                    <div
                      key={t.title}
                      className="snap-center shrink-0 w-[78%] sm:w-[52%] lg:w-[32%] h-44 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden relative shadow-sm border border-stone-100 bg-stone-200"
                      style={
                        t.image
                          ? {
                              backgroundImage: `url(${t.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }
                          : undefined
                      }
                    >
                      {/* overlay escuro */}
                      <div className="absolute inset-0 bg-black/45" />

                      {/* título */}
                      <div className="absolute inset-0 p-6 md:p-7 flex items-end">
                        <h3 className="text-white text-3xl md:text-4xl font-bold leading-none tracking-tight drop-shadow-sm">
                          {t.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* bolinhas */}
                <div className="flex items-center justify-center gap-2 mt-2">
                  {themes.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollToTheme(i)}
                      className={`h-2 w-2 rounded-full transition ${
                        i === activeTheme ? 'bg-stone-700' : 'bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`Ir para tema ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* CTA barra (igual print) */}
              <div className="mt-5">
                <CTAButton className="w-full" label="Quero mudar minha rotina agora!" />
              </div>

              <p className="mt-4 text-stone-400 text-[10px] md:text-xs text-center uppercase tracking-widest font-medium">
                Você segue um caminho guiado — passo a passo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 md:py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 md:mb-8 leading-tight font-serif">
                O que é o Mapeamento do Sentir
              </h2>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-6">
                Um processo em 4 módulos que estrutura sua vida emocional e prática de forma integrada.
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed italic border-l-4 border-[#D9A08B] pl-5 md:pl-6 py-2">
                Você não precisa saber por onde começar. Você só precisa aparecer. O resto é guiado.
              </p>
            </div>
            <div className="bg-[#FDFCFB] p-8 md:p-10 rounded-3xl md:rounded-[40px] shadow-sm border border-stone-100">
              <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-6 md:mb-8 text-center md:text-left">
                O que você recebe:
              </h3>
              <ul className="space-y-5 md:space-y-6">
                {[
                  { icon: <Video size={20} className="text-[#D9A08B]" />, text: '4 módulos com videoaulas objetivas' },
                  { icon: <Sparkles size={20} className="text-[#D9A08B]" />, text: 'Exercícios guiados de autorreflexão' },
                  { icon: <Focus size={20} className="text-[#D9A08B]" />, text: '4 sessões individuais (1 por módulo)' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-base md:text-lg text-stone-700">
                    <div className="p-2.5 md:p-3 bg-white rounded-xl md:rounded-2xl shadow-sm shrink-0">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#7A8C7A] rounded-3xl md:rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden">
            <h3 className="text-xl md:text-4xl font-bold max-w-4xl mx-auto leading-relaxed relative z-10 font-serif italic font-normal text-center">
              “Você sai do emaranhado interno para um mapa claro do que te trava e do que te sustenta.”
            </h3>
            <p className="mt-6 md:mt-8 text-emerald-50 text-base md:text-xl font-light text-center">
              Um plano possível para o seu próximo ciclo, alinhado ao seu ritmo real.
            </p>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section id="para-quem" className="py-20 md:py-24 px-5 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-6 px-2 text-center font-serif">
              Este processo é para pessoas reais, ocupadas e humanas.
            </h2>
            <p className="text-lg md:text-xl text-stone-600 text-center">Em especial para quem:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {[
              'se sente sobrecarregada, confusa ou cansada com frequência',
              'percebe que a mente não desacelera',
              'vive ciclos de culpa e autocobrança',
              'sente desânimo ou queda de energia',
              'procrastina porque o corpo trava',
              'quer retomar o próprio eixo',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-100 shadow-sm md:shadow-none md:border-0 md:bg-transparent md:p-0"
              >
                <CheckCircle2 className="text-[#7A8C7A] shrink-0 mt-1" size={20} />
                <p className="text-base md:text-lg text-stone-700 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section id="modulos" className="py-20 md:py-24 px-5 bg-[#FDFCFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-12 md:mb-16 text-center font-serif">
            Os 4 módulos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ModuleCard
              index={0}
              title="Módulo 1: Organização"
              description="Antes de tudo, organizamos o terreno. Entenda como a sobrecarga bagunça sua mente."
              bullets={['identificar gatilhos', 'enxergar excessos', 'filtrar o essencial']}
              footerExercises="Mapeamento do caos e excessos."
              footerSession="Sessão individual inclusa."
            />
            <ModuleCard
              index={1}
              title="Módulo 2: Desânimo"
              description="O desânimo não é um defeito, é um pedido de atenção. Aprenda a rastrear sua energia."
              bullets={['vazamentos de energia', 'humor e sensibilidade', 'autocuidado realista']}
              footerExercises="Rastreamento de energia."
              footerSession="Sessão individual inclusa."
            />
            <ModuleCard
              index={2}
              title="Módulo 3: Procrastinação"
              description="Diferencie pausa necessária de fuga. Entenda o que seu corpo diz quando trava."
              bullets={['corpo que trava', 'medo e comparação', 'micro passos reais']}
              footerExercises="Identificação de bloqueios."
              footerSession="Sessão individual inclusa."
            />
            <ModuleCard
              index={3}
              title="Módulo 4: Planejamento"
              description="Criar direção, não apenas metas. Planeje respeitando seu corpo e vida real."
              bullets={['semanas leves', 'prioridades reais', 'plano sustentável']}
              footerExercises="Agenda afetiva e plano possível."
              footerSession="Sessão individual inclusa."
            />
          </div>
        </div>
      </section>

      {/* QUEM CONDUZ */}
      <section className="py-20 md:py-24 px-5 bg-stone-100">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl md:rounded-[40px] overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-64 md:h-auto">
            <img src={offer.instructor.photoUrl} alt={offer.instructor.name} className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
            <span className="text-[#D9A08B] font-bold uppercase tracking-widest text-xs mb-3">Quem conduz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2 font-serif">{offer.instructor.name}</h2>
            <p className="text-lg text-stone-500 italic mb-6">{offer.instructor.tagline}</p>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8">{offer.instructor.bio}</p>
            <div className="flex flex-wrap gap-6">
              <a
                href={offer.instructor.instagramUrl}
                className="flex items-center gap-2 text-stone-700 hover:text-[#D9A08B] transition-colors font-medium"
              >
                <Instagram size={20} /> Instagram
              </a>
              <a
                href={offer.instructor.supportChannelUrl}
                className="flex items-center gap-2 text-stone-700 hover:text-[#D9A08B] transition-colors font-medium"
              >
                <Send size={20} /> Suporte
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section id="investimento" className="py-20 md:py-32 px-5 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/30 rounded-full blur-[120px] -z-10" />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 font-serif">Investimento Leve</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Organizar sua vida emocional não precisa custar uma fortuna. Criamos um modelo acessível para que ninguém
              fique de fora.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white rounded-3xl md:rounded-[50px] shadow-2xl overflow-hidden border-4 border-[#7A8C7A]/10 flex flex-col md:flex-row relative z-10">
              <div className="p-10 md:p-16 flex-1 flex flex-col justify-center items-center text-center bg-[#7A8C7A] text-white">
                <p className="text-emerald-100 uppercase tracking-widest text-[10px] md:text-xs font-bold mb-6 border-b border-white/20 pb-2">
                  O seu custo semanal
                </p>
                <div className="mb-8">
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-2xl font-medium text-emerald-100 italic mr-1">R$</span>
                    <span className="text-7xl md:text-8xl font-bold tracking-tighter">49,50</span>
                  </div>
                  <p className="text-emerald-50 text-base md:text-lg font-medium opacity-80">Por módulo / semana</p>
                </div>
                <div className="w-full p-4 bg-white/10 rounded-2xl flex items-center justify-center gap-3">
                  <Clock size={20} className="text-emerald-200" />
                  <p className="text-sm font-medium">Acompanhamento Individual Incluso</p>
                </div>
              </div>

              <div className="p-10 md:p-16 flex-1 flex flex-col justify-center items-center text-center bg-white">
                <div className="mb-10 text-left w-full space-y-4">
                  <h3 className="text-xl font-bold text-stone-800 font-serif">O que está garantido:</h3>
                  <ul className="space-y-4">
                    {['4 Sessões individuais de 50min', '4 Módulos de conteúdo guiado', 'Material de apoio e Bônus', 'Suporte direto no WhatsApp'].map(
                      (item, i) => (
                        <li key={i} className="flex items-center gap-3 text-stone-600 font-medium">
                          <CheckCircle2 size={18} className="text-[#7A8C7A] shrink-0" />
                          <span className="text-sm md:text-base">{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="w-full space-y-6">
                  <div className="flex flex-col gap-1 border-t border-stone-100 pt-6">
                    <p className="text-stone-400 text-[10px] uppercase font-bold tracking-widest">Valor Total do Pacote</p>
                    <div className="mt-1">
                      <span className="text-stone-400 line-through text-lg block leading-none mb-1">
                        De R$ {formatValue(offer.originalPriceBRL)}
                      </span>
                      <p className="text-2xl md:text-3xl font-bold text-stone-800 tracking-tight">
                        <span className="text-sm font-medium text-stone-500 mr-1 italic">Por apenas</span>
                        R$ {formatValue(offer.priceBRL)}
                      </p>
                    </div>
                  </div>
                  <CTAButton className="w-full py-5 text-lg shadow-xl" />
                  <div className="flex flex-col gap-2">
                    <p className="text-stone-500 text-xs font-medium">{formatValue(offer.paymentMethods)}</p>
                    <div className="flex items-center justify-center gap-2 text-[#7A8C7A] text-xs font-bold">
                      <ShieldCheck size={14} />
                      <span>{formatValue(offer.guaranteePolicy)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 md:-right-12 bg-[#D9A08B] text-white px-6 py-3 rounded-2xl shadow-xl z-20 transform rotate-6 hidden md:block text-center">
              <p className="text-[10px] uppercase font-black tracking-tighter">Oportunidade</p>
              <p className="text-xl font-bold">Vagas Limitadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="py-24 md:py-32 px-5 bg-[#7A8C7A] text-white text-center">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-serif italic px-2 text-center">Pronta para começar?</h2>
          <p className="text-lg md:text-2xl text-emerald-50 mb-10 md:mb-12 leading-relaxed font-light px-4 text-center">
            Recuperar sua clareza interna é recuperar sua vida. Escolha com mais calma, firmeza e menos confusão.
          </p>
          <CTAButton variant="secondary" className="w-full sm:w-auto scale-105 md:scale-125 mb-8" />
          <div className="mt-8 text-center">
            <a
              href={offer.whatsappLink}
              className="text-emerald-100 hover:text-white transition-colors underline underline-offset-8 text-base md:text-lg"
            >
              Dúvidas? Fale no WhatsApp.
            </a>
          </div>
        </div>

        <div className="mt-20 max-w-2xl mx-auto bg-[#2D352D] p-6 md:p-10 rounded-[32px] md:rounded-[48px] shadow-2xl text-left border border-white/5">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-8 text-center md:text-left font-serif italic">
            Depois do Mapeamento do Sentir:
          </h3>

          <div className="space-y-6">
            {results.map((res, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="bg-[#C3D9C3] text-[#2D352D] px-4 py-2 rounded-xl text-xs md:text-sm font-bold shadow-sm whitespace-nowrap">
                    {res.label}
                  </div>
                  <span className="text-white font-bold text-sm md:text-base opacity-90">{res.value}</span>
                </div>
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C3D9C3] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: res.value }}
                    aria-label={`Progresso de ${res.label}: ${res.value}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-emerald-100/50 text-[10px] md:text-xs text-center uppercase tracking-widest font-medium">
            Dados baseados em percepção de alunas após 4 semanas de acompanhamento
          </p>
        </div>
      </section>

      <footer className="py-12 bg-white text-stone-400 text-center text-xs px-5 border-t border-stone-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 text-center">
          <div className="font-serif font-bold text-stone-800 text-lg italic">Mapeamento do Sentir</div>
          <div>
            © {new Date().getFullYear()} • Todos os direitos reservados •{' '}
            <Link to="/admin" className="hover:text-stone-800">
              Admin
            </Link>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </main>
  );
};

export default LandingPage;
