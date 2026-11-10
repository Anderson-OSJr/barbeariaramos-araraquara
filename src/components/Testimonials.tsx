import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/barberData';

export const Testimonials: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-[#0a1122] border-b border-[#1c2c4c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold mb-2">
            Avaliações de Clientes Reais
          </p>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-tight">
            A Experiência Contada por Quem Frequenta
          </h2>
          <p className="text-sm text-slate-300 mt-2 font-sans-main">
            Opiniões de quem confia no trabalho da equipe Barbearia Ramos na Vila Harmonia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#111c34] border border-[#1d2d4e] hover:border-[#d4af37]/45 p-8 rounded-xl flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 text-[#d4af37] mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-500/20 mb-3" />

                <p className="text-xs sm:text-sm text-slate-300 font-sans-main leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1c2c4c]">
                <p className="font-cinzel text-sm font-bold text-white">
                  {item.name}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {item.role}
                </p>
                <div className="mt-2 text-[11px] font-semibold text-[#d4af37]">
                  {item.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
