import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface LocationAndContactProps {
  onOpenBooking: () => void;
}

export const LocationAndContact: React.FC<LocationAndContactProps> = ({ onOpenBooking }) => {
  return (
    <section id="localizacao" className="py-20 bg-[#0c1427] border-b border-[#1c2c4c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold mb-2">
            Localização & Conveniência
          </p>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Venha nos Visitar na Vila Harmonia
          </h2>
          <p className="text-sm text-slate-300 mt-2 font-sans-main">
            O endereço mais nobre e reservado de Araraquara, com fácil estacionamento na porta e ambiente 100% climatizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact details, opening hours, direct WhatsApp CTA (5 cols) */}
          <div className="lg:col-span-5 bg-[#111c34] border border-[#1d2d4e] rounded-2xl p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              {/* Address card */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-base font-bold text-white">
                    Endereço
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 font-sans-main font-semibold">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-slate-400">
                    {BUSINESS_INFO.city} · CEP {BUSINESS_INFO.cep}
                  </p>
                  <div className="inline-flex items-center gap-1.5 mt-2 text-xs text-[#d4af37] font-medium">
                    <Car className="w-3.5 h-3.5" />
                    <span>Estacionamento fácil e seguro na porta</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp & Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-base font-bold text-white">
                    WhatsApp & Telefone
                  </h3>
                  <p className="text-sm text-white mt-1 font-mono font-bold tracking-wide">
                    {BUSINESS_INFO.phone}
                  </p>
                  <p className="text-xs text-slate-400">
                    Atendimento imediato e agendamentos diretos
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel text-base font-bold text-white mb-2">
                    Horários de Atendimento
                  </h3>
                  <div className="space-y-1.5 text-xs text-slate-300 font-sans-main">
                    {BUSINESS_INFO.hours.map((h, idx) => (
                      <div key={idx} className="flex justify-between pb-1.5 border-b border-[#1c2c4c]">
                        <span className="text-slate-400">{h.days}:</span>
                        <span className="font-semibold text-slate-100">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp VIP Button & Online Booking */}
            <div className="pt-6 mt-6 border-t border-[#1c2c4c] space-y-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold uppercase tracking-wider text-xs rounded-lg shadow-lg shadow-emerald-600/20 border border-emerald-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chamar Direto no WhatsApp: (16) 99640-1178</span>
              </a>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="btn-premium-blue flex-1 py-3 px-3 font-bold uppercase tracking-wider text-[11px] rounded-lg transition-all cursor-pointer shadow-sm"
                >
                  Agendar Online Aqui
                </button>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir perfil oficial no Instagram"
                  className="p-3 bg-[#162444] hover:bg-[#1f335f] text-slate-300 hover:text-white border border-[#21355e] hover:border-[#d4af37]/40 rounded-lg transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#d4af37]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Integrated Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 bg-[#111c34] border border-[#1d2d4e] rounded-2xl overflow-hidden flex flex-col shadow-xl">
            <div className="px-6 py-4 bg-[#0e172c] border-b border-[#1c2c4c] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span className="font-cinzel text-sm font-bold text-white">
                  Google Maps · Barbearia Ramos Araraquara
                </span>
              </div>
              <span className="text-xs text-slate-400 font-sans-main">
                Av. Queiroz Filho, 1180 - Vila Harmonia
              </span>
            </div>

            {/* Responsive iframe */}
            <div className="w-full h-[420px] lg:h-full min-h-[380px] relative bg-slate-900">
              <iframe
                title="Localização Barbearia Ramos Araraquara no Google Maps"
                src={BUSINESS_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
