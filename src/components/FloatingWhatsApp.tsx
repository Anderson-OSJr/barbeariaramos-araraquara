import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Barbearia Ramos" className="fixed bottom-6 right-6 z-40">
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp Barbearia Ramos"
        className="group flex items-center gap-3 bg-[#0e172c] hover:bg-[#152342] border border-[#d4af37]/40 hover:border-[#d4af37] p-2 sm:pr-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="w-11 h-11 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs font-bold text-white tracking-wide">
            WhatsApp Barbearia
          </span>
          <span className="text-[11px] text-[#d4af37] font-semibold">
            (16) 99640-1178
          </span>
        </div>
      </a>
    </aside>
  );
};
