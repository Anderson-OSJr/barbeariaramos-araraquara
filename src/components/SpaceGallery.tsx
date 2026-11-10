import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

export const SpaceGallery: React.FC = () => {
  return (
    <section id="espaco" className="py-20 bg-[#0c1427] border-b border-[#1c2c4c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold mb-2">
              Estrutura Real & Conforto
            </p>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-tight">
              O Espaço Barbearia Ramos
            </h2>
            <p className="text-sm text-slate-300 mt-2 font-sans-main max-w-xl">
              Registros 100% reais do nosso espaço na Vila Harmonia: ambiente climatizado, iluminação cênica,
              bancadas com espelhos em LED, sofá Chesterfield e área de recepção com café.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-100 hover:text-white bg-[#111c34] hover:bg-[#162444] px-4 py-2.5 rounded-lg border border-[#d4af37]/40 hover:border-[#d4af37] transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#d4af37]" />
            <span>Ver bastidores no @{BUSINESS_INFO.instagram}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
          </a>
        </div>

        {/* Real Photos Bento Grid using verified Barbearia Ramos images */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Salon Station Photo (7 cols) */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-[#111c34] border border-[#d4af37]/40 min-h-[360px] lg:min-h-[420px] shadow-lg">
            <img
              src="/images/real/IMG_3229.jpg"
              alt="Salão com parede azul nobre e logo iluminado da Barbearia Ramos"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                Salão Principal · Vila Harmonia
              </span>
              <h3 className="font-cinzel text-xl font-bold mt-1 text-slate-100">
                Bancadas com Espelhos Iluminados & Poltronas Ergonômicas
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                Espaço amplo e climatizado com cadeiras reclináveis profissionais e parede azul com a marca Ramos.
              </p>
            </div>
          </div>

          {/* Real Reception & Coffee Bar Photo (5 cols) */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-xl bg-[#111c34] border border-[#d4af37]/40 min-h-[360px] lg:min-h-[420px] shadow-lg">
            <img
              src="/images/real/IMG_3221.jpg"
              alt="Recepção e espaço café e bebidas com letreiro iluminado Ramos Barbearia"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                Recepção & Lounge de Boas-Vindas
              </span>
              <h3 className="font-cinzel text-xl font-bold mt-1 text-slate-100">
                Espaço Café & Frigobar dos Clientes
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Atendimento atencioso com máquina de café espresso e bebidas geladas para sua comodidade.
              </p>
            </div>
          </div>

          {/* Real Waiting Sofa Card (4 cols) */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-[#111c34] border border-[#1e2f52] hover:border-[#d4af37]/40 min-h-[320px] shadow-sm transition-colors">
            <img
              src="/images/real/IMG_3212.jpg"
              alt="Sofá Chesterfield de couro legítimo na área de espera da Barbearia Ramos"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122]/90 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                Área de Espera
              </span>
              <h3 className="font-cinzel text-base font-bold mt-1 text-slate-100">
                Sofá Chesterfield em Couro
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Conforto e descanso antes de iniciar seu atendimento.
              </p>
            </div>
          </div>

          {/* Real Scissor Cut Card (4 cols) */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-[#111c34] border border-[#1e2f52] hover:border-[#d4af37]/40 min-h-[320px] shadow-sm transition-colors">
            <img
              src="/images/real/IMG_3207.jpg"
              alt="Corte em tesoura de precisão em cliente na Barbearia Ramos"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122]/90 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                Técnica & Precisão
              </span>
              <h3 className="font-cinzel text-base font-bold mt-1 text-slate-100">
                Cortes Sob Medida
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Alinhamento milimétrico e visagismo individual.
              </p>
            </div>
          </div>

          {/* Real Facade Card (4 cols) */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-[#111c34] border border-[#1e2f52] hover:border-[#d4af37]/40 min-h-[320px] shadow-sm transition-colors">
            <img
              src="/images/real/IMG_3215.jpg"
              alt="Fachada moderna da Barbearia Ramos na Vila Harmonia em Araraquara"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122]/90 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                Fachada Vila Harmonia
              </span>
              <h3 className="font-cinzel text-base font-bold mt-1 text-slate-100">
                Localização de Fácil Acesso
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Avenida Queiroz Filho, 1180 com estacionamento na porta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
