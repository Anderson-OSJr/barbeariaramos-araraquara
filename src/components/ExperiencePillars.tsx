import React from 'react';
import { Sparkles, Trophy, Scissors, Flame } from 'lucide-react';

export const ExperiencePillars: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Ambiente Amplo & Climatizado',
      icon: Sparkles,
      description:
        'Espaço claro, bem iluminado e arejado, pensado para seu conforto total. Bancadas modernas, higienização rigorosa e atendimento pontual para você desfrutar do seu momento.',
    },
    {
      num: '02',
      title: 'Barboterapia & Toalha a Vapor',
      icon: Flame,
      description:
        'O ritual que a sua pele merece. Toalha quente a vapor para abertura dos poros, emolientes de alta qualidade, alinhamento preciso na navalha e loção pós-barba refrescante.',
    },
    {
      num: '03',
      title: 'Lounge com Café & Bebidas',
      icon: Trophy,
      description:
        'A espera é uma pausa relaxante. Desfrute de um café espresso especial, frigobar com bebidas geladas, Wi-Fi veloz e sofá de couro confortável em ambiente silencioso.',
    },
    {
      num: '04',
      title: 'Cortes Autorais & Visagismo',
      icon: Scissors,
      description:
        'Do degradê militar/fade navalhado ao corte social clássico em tesoura de precisão. Nossos barbeiros analisam o seu estilo para entregar um resultado impecável e duradouro.',
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-[#0c1427] border-b border-[#1c2c4c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold mb-2">
            Diferenciais Barbearia Ramos
          </p>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Mais que um Corte, uma Pausa com Estilo e Conforto.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-sans-main leading-relaxed">
            Desenvolvida para quem valoriza pontualidade, ambiente acolhedor e atendimento personalizado na Vila Harmonia em Araraquara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-[#111c34] border border-[#1d2d4e] hover:border-[#d4af37]/45 p-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-cinzel text-2xl font-bold text-[#d4af37]/80 group-hover:text-[#d4af37] transition-colors">
                    {pillar.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#162444] border border-[#21355e] flex items-center justify-center text-blue-400 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-cinzel text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans-main">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
