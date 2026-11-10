import React, { useState } from 'react';
import { Menu, X, Calendar, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'A Experiência', href: '#experiencia' },
    { label: 'Serviços & Preços', href: '#servicos' },
    { label: 'O Espaço Real', href: '#espaco' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização & Contato', href: '#localizacao' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0b1325]/95 backdrop-blur-md border-b border-[#1c2c4c] transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Brand mark with official logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Barbearia Ramos Araraquara - Logo Oficial"
              className="h-10 sm:h-12 w-auto object-contain brightness-110 drop-shadow"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-blue-400 transition-colors">
                BARBEARIA RAMOS
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-sans-main font-semibold">
                Vila Harmonia · Araraquara
              </span>
            </div>
          </a>

          {/* Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#d4af37]/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atendimento no WhatsApp"
              className="text-xs font-medium text-slate-200 hover:text-emerald-400 transition-colors flex items-center gap-1.5 px-3.5 py-2.5 border border-[#1f3156] hover:border-emerald-500/50 rounded-lg bg-[#111c34] hover:bg-[#152342]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp VIP</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="btn-premium-blue px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-lg shadow-sm whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Agendar Horário</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 rounded-md cursor-pointer border border-[#d4af37]/30"
            >
              Agendar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Alternar navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e172c] border-b border-[#1c2c4c] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-blue-400 py-1 border-b border-[#182642]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#1c2c4c] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-white bg-blue-600 rounded-md border border-[#d4af37]/40"
            >
              Agendar Horário Online
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs text-slate-200 border border-[#1f3156] rounded-md flex items-center justify-center gap-2 bg-[#111c34]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: (16) 99640-1178</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
