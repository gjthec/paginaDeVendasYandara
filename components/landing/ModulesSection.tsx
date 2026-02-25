import React from 'react';
import ModuleCard from '../ModuleCard';

const ModulesSection: React.FC = () => (
  <section id="modulos" className="py-20 md:py-24 px-5 bg-[#7A8C7A]">
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
);

export default ModulesSection;
