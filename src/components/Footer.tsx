import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Logo Barbearia Ramos"
                className="h-10 w-auto object-contain brightness-110"
              />
              <span className="font-cinzel text-lg font-bold tracking-wider text-white block">
                BARBEARIA RAMOS
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans-main">
              Ambiente amplo, claro e climatizado na Vila Harmonia em Araraquara. Cortes autorais com visagismo, barboterapia tradicional e mesa de sinuca.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial Barbearia Ramos"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#experiencia" className="hover:text-blue-400 transition-colors">
                  A Experiência Ramos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-400 transition-colors">
                  Serviços & Preços
                </a>
              </li>
              <li>
                <a href="#espaco" className="hover:text-blue-400 transition-colors">
                  O Espaço Real (Fotos)
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-blue-400 transition-colors">
                  Avaliações de Clientes
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-blue-400 transition-colors">
                  Localização & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
              Principais Cuidados
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">Corte & Barba Completo Ramos (R$ 140)</li>
              <li className="text-slate-300">Corte Autoral com Visagismo (R$ 70)</li>
              <li className="text-slate-300">Barboterapia com Toalha Quente (R$ 70)</li>
              <li className="text-slate-300">Ritual Ramos Experience VIP (R$ 180)</li>
              <li className="text-slate-300">Alinhamento & Selagem Capilar (R$ 120)</li>
            </ul>
          </div>

          {/* Quick Booking */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest">
              Atendimento Pontual
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atendimento com hora marcada para você não perder tempo e aproveitar a estrutura da barbearia.
            </p>
            <button
              onClick={onOpenBooking}
              className="btn-premium-blue w-full py-2.5 px-4 font-bold uppercase tracking-wider text-xs rounded-lg transition-all cursor-pointer shadow-sm"
            >
              Agendar Horário Online
            </button>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{BUSINESS_INFO.address}, Araraquara - SP</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center sm:flex sm:justify-between sm:text-left text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Barbearia Ramos · Todos os direitos reservados. Araraquara - SP.</p>
          <p className="mt-2 sm:mt-0">Ambiente Climatizado, Sinuca & Cuidado Masculino</p>
        </div>
      </div>
    </footer>
  );
};
