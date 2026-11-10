import React, { useState } from 'react';
import { Clock, Check, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/barberData';
import { BarberService } from '../types';

interface ServicesMenuProps {
  onSelectService: (service: BarberService) => void;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'combo', label: 'Combos & Rituais' },
    { id: 'cabelo', label: 'Cortes & Visagismo' },
    { id: 'barba', label: 'Barba & Barboterapia' },
    { id: 'terapia', label: 'Tratamentos' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeCategory);

  return (
    <section id="servicos" className="py-20 bg-[#0a1122] relative border-b border-[#1c2c4c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold mb-2">
              Menu de Serviços & Valores
            </p>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Tabela de Serviços & Cuidados
            </h2>
            <p className="text-sm text-slate-300 mt-2 font-sans-main max-w-xl">
              Preços transparentes e profissionais dedicados. Todos os serviços contam com lavatório especial e ambiente climatizado.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111c34] border border-[#1e2f52] rounded-lg shadow-sm shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#123e75] text-white shadow-xs border border-[#d4af37]/60'
                    : 'text-slate-300 hover:text-white hover:bg-[#162444]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col justify-between rounded-xl p-7 transition-all duration-300 relative bg-[#111c34] border ${
                service.recommended
                  ? 'border-[#d4af37]/60 ring-1 ring-[#d4af37]/25 shadow-xl shadow-blue-900/10'
                  : 'border-[#1d2d4e] hover:border-[#d4af37]/35 hover:shadow-lg'
              }`}
            >
              {service.recommended && (
                <div className="absolute -top-3 right-6 bg-[#162444] border border-[#d4af37] text-[#d4af37] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  <span>Mais Recomendado</span>
                </div>
              )}

              <div>
                {/* Title */}
                <h3 className="font-cinzel text-xl font-bold text-white">
                  {service.name}
                </h3>

                {/* Duration & Price */}
                <div className="flex items-baseline justify-between py-3 border-y border-[#1c2c4c] my-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <Clock className="w-3.5 h-3.5 text-blue-300" />
                    <span>{service.duration}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-[#d4af37] mr-1 font-sans">R$</span>
                    <span className="font-cinzel text-2xl font-bold text-white tabular-nums">
                      {service.price},00
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-sans-main leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature checklist */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                      <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service)}
                className={`w-full py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  service.recommended
                    ? 'btn-premium-blue'
                    : 'bg-[#162444] hover:bg-[#1d2f59] text-slate-200 border border-[#21355e] hover:border-[#d4af37]/40 hover:text-white'
                }`}
              >
                <span>Agendar Este Horário</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
