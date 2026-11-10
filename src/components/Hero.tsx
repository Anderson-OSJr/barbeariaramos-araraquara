import React from 'react';
import { Calendar, ArrowRight, Clock, MapPin, Sparkles, Coffee } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-gradient-to-b from-[#0a1122] via-[#0d162a] to-[#0a1122] border-b border-[#1c2c4c] overflow-hidden py-16 lg:py-24">
      {/* Subtle luxury background radial lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Conversion (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Brand Kicker with subtle gold border */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111d38] border border-[#d4af37]/35 mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-xs uppercase tracking-wider text-slate-200 font-semibold font-sans-main">
                Barbearia Ramos · Vila Harmonia, Araraquara
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.15] mb-6 text-balance">
              Estilo, Precisão e um{' '}
              <span className="blue-gradient-text font-black">Ambiente Completo</span> para o Homem Moderno.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl text-balance leading-relaxed font-sans-main mb-8">
              A verdadeira experiência da Barbearia Ramos: espaço amplo, claro, climatizado e moderno na
              Vila Harmonia. Cortes com visagismo, barboterapia com toalha aquecida, lounge de espera com café espresso e pontualidade rigorosa.
            </p>

            {/* CTAs with darkened premium blue */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                className="btn-premium-blue w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-3 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Agendar Horário Online</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider text-slate-200 hover:text-white bg-[#111c34] hover:bg-[#162444] border border-[#1f3156] hover:border-[#d4af37]/45 rounded-lg transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Chamar no WhatsApp Oficial</span>
              </a>
            </div>

            {/* Trust strip */}
            <div className="pt-6 border-t border-[#1c2c4c] w-full grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#d4af37] shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white">Sem Filas</p>
                  <p className="text-slate-400">Atendimento com hora marcada</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Coffee className="w-5 h-5 text-[#d4af37] shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white">Lounge & Café</p>
                  <p className="text-slate-400">Café espresso e bebidas</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white">Vila Harmonia</p>
                  <p className="text-slate-400">Av. Queiroz Filho, 1180</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Photo of the Barbearia Ramos salon (IMG_3229 with blue wall and illuminated R logo) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl bg-[#111c34]">
              <img
                src="/images/real/IMG_3229.jpg"
                alt="Foto real do salão com parede azul e logo iluminado da Barbearia Ramos Araraquara"
                className="w-full h-[450px] sm:h-[490px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                    Espaço Real Barbearia Ramos
                  </span>
                </div>
                <p className="text-sm font-semibold font-cinzel mt-1 text-slate-100">
                  Bancadas com espelhos iluminados e poltronas reclináveis
                </p>
              </div>
            </div>

            {/* Floating amenity card */}
            <div className="absolute -bottom-5 -left-5 bg-[#0e172c]/95 border border-[#d4af37]/35 p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] font-bold">
                ✂️
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Vila Harmonia</p>
                <p className="text-[11px] text-slate-400">Ambiente climatizado e moderno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
