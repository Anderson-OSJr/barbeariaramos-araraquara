import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, MessageSquare, ChevronLeft, Sparkles } from 'lucide-react';
import { SERVICES, BARBERS, BUSINESS_INFO } from '../data/barberData';
import { BarberService } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: BarberService | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService ? initialService.id : 'combo-corte-barba'
  );
  const [selectedBarberId, setSelectedBarberId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [drinkPreference, setDrinkPreference] = useState<string>('Café Espresso');
  const [notes, setNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  // Generate available dates (next 6 days excluding Sundays)
  const availableDates = React.useMemo(() => {
    const dates = [];
    const now = new Date();
    let count = 0;
    let offset = 0;

    while (count < 6) {
      const d = new Date(now);
      d.setDate(d.getDate() + offset);
      const dayOfWeek = d.getDay(); // 0 is Sunday

      if (dayOfWeek !== 0) {
        const dateStr = d.toLocaleDateString('pt-BR', {
          weekday: 'short',
          day: '2-digit',
          month: '2-digit',
        });
        const fullDate = d.toISOString().split('T')[0];
        dates.push({ label: dateStr, value: fullDate, raw: d });
        count++;
      }
      offset++;
    }
    return dates;
  }, []);

  useEffect(() => {
    if (availableDates.length > 0 && !selectedDate) {
      setSelectedDate(availableDates[0].value);
    }
  }, [availableDates, selectedDate]);

  const timeSlots = [
    '09:00', '10:00', '11:00', '13:30', '14:30', '15:30', '16:30', '17:30', '18:30', '19:15'
  ];

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const currentBarber =
    selectedBarberId === 'any'
      ? { name: 'Qualquer Barbeiro Disponível' }
      : BARBERS.find((b) => b.id === selectedBarberId) || { name: 'Barbeiro Ramos' };

  const handleNextStep = () => {
    if (step === 1 && !selectedServiceId) return;
    if (step === 2 && !selectedDate) return;
    if (step === 3 && (!clientName.trim() || !clientPhone.trim())) return;
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSuccess(true);
    }
  };

  const handleSendToWhatsApp = () => {
    const formattedDate = availableDates.find((d) => d.value === selectedDate)?.label || selectedDate;
    const message = encodeURIComponent(
      `*AGENDAMENTO - BARBEARIA RAMOS (Vila Harmonia)*\n\n` +
      `👤 *Cliente:* ${clientName}\n` +
      `📱 *WhatsApp:* ${clientPhone}\n` +
      `✂️ *Serviço:* ${currentService.name} (R$ ${currentService.price},00)\n` +
      `💈 *Profissional:* ${currentBarber.name}\n` +
      `📅 *Data:* ${formattedDate}\n` +
      `⏰ *Horário:* ${selectedTime || 'A combinar'}\n` +
      `☕ *Bebida/Lounge:* ${drinkPreference}\n` +
      (notes ? `📝 *Obs:* ${notes}\n\n` : `\n`) +
      `Olá! Gostaria de confirmar meu horário na unidade Araraquara!`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-[#0e172c] border border-[#d4af37]/40 rounded-2xl shadow-2xl text-slate-100 overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1c2c4c] bg-[#111c34]">
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-white">
              BARBEARIA RAMOS
            </span>
            <span className="text-[#d4af37]">·</span>
            <span className="text-xs text-[#d4af37] font-sans-main font-semibold">
              Agendamento Online VIP
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#1a2948] transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!isSuccess && (
          <div className="grid grid-cols-3 border-b border-[#1c2c4c] text-center text-xs font-semibold">
            <div className={`py-2.5 border-b-2 ${step === 1 ? 'border-[#d4af37] text-[#d4af37] bg-blue-900/20' : 'border-transparent text-slate-400'}`}>
              1. Serviço & Barbeiro
            </div>
            <div className={`py-2.5 border-b-2 ${step === 2 ? 'border-[#d4af37] text-[#d4af37] bg-blue-900/20' : 'border-transparent text-slate-400'}`}>
              2. Data & Horário
            </div>
            <div className={`py-2.5 border-b-2 ${step === 3 ? 'border-[#d4af37] text-[#d4af37] bg-blue-900/20' : 'border-transparent text-slate-400'}`}>
              3. Dados & Confirmação
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            /* Success confirmation */
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                Agendamento Solicitado com Sucesso!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Para garantir a confirmação imediata na agenda da Vila Harmonia, clique no botão abaixo para enviar a mensagem pronta no WhatsApp:
              </p>

              {/* Summary Card */}
              <div className="bg-[#111c34] border border-[#1d2d4e] rounded-xl p-5 text-left max-w-md mx-auto mb-6 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#1c2c4c]">
                  <span className="text-slate-400">Cliente:</span>
                  <span className="font-bold text-white">{clientName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1c2c4c]">
                  <span className="text-slate-400">Serviço:</span>
                  <span className="font-bold text-[#d4af37]">{currentService.name} (R$ {currentService.price},00)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1c2c4c]">
                  <span className="text-slate-400">Profissional:</span>
                  <span className="text-slate-200 font-medium">{currentBarber.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1c2c4c]">
                  <span className="text-slate-400">Data & Horário:</span>
                  <span className="text-slate-200 font-medium">
                    {availableDates.find((d) => d.value === selectedDate)?.label || selectedDate} às {selectedTime || '14:30'}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Lounge & Cortesia:</span>
                  <span className="text-slate-200 font-medium">{drinkPreference}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 cursor-pointer border border-emerald-400/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Confirmação no WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3.5 text-xs text-slate-300 hover:text-white border border-[#21355e] rounded-lg hover:bg-[#162444]"
                >
                  Concluir e Fechar
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            /* Step 1 */
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-bold mb-3">
                  Selecione o Serviço:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedServiceId === s.id
                          ? 'border-[#d4af37] bg-blue-900/30 ring-1 ring-[#d4af37]/40 shadow-xs'
                          : 'border-[#1d2d4e] bg-[#111c34] hover:border-[#2f497a] hover:bg-[#152342]'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-bold text-white">{s.name}</span>
                        <span className="text-xs font-bold text-[#d4af37] font-mono">R$ {s.price}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        <span>{s.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-bold mb-3">
                  Barbeiro de Preferência:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setSelectedBarberId('any')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      selectedBarberId === 'any'
                        ? 'border-[#d4af37] bg-blue-900/30'
                        : 'border-[#1d2d4e] bg-[#111c34] hover:border-[#2f497a]'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">Qualquer Barbeiro Disponível</div>
                    <div className="text-[11px] text-slate-400">Horário mais rápido na agenda</div>
                  </div>

                  {BARBERS.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => setSelectedBarberId(b.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedBarberId === b.id
                          ? 'border-[#d4af37] bg-blue-900/30'
                          : 'border-[#1d2d4e] bg-[#111c34] hover:border-[#2f497a]'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{b.name}</div>
                      <div className="text-[11px] text-[#d4af37] font-medium">{b.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : step === 2 ? (
            /* Step 2 */
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-bold mb-3">
                  Escolha o Dia:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {availableDates.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setSelectedDate(item.value)}
                      className={`py-3 px-2 rounded-xl text-center border cursor-pointer transition-all ${
                        selectedDate === item.value
                          ? 'border-[#d4af37] bg-[#123e75] text-white font-bold shadow-xs'
                          : 'border-[#1d2d4e] bg-[#111c34] text-slate-300 hover:bg-[#162444] hover:border-[#2f497a]'
                      }`}
                    >
                      <span className="block text-[11px] uppercase opacity-80">
                        {item.label.split(',')[0]}
                      </span>
                      <span className="text-xs font-bold">
                        {item.label.split(',')[1]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-bold mb-3">
                  Horário de Atendimento (Vila Harmonia):
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-lg text-xs font-mono border cursor-pointer transition-all ${
                        selectedTime === time
                          ? 'border-[#d4af37] bg-[#123e75] text-white font-bold shadow-xs'
                          : 'border-[#1d2d4e] bg-[#111c34] text-slate-200 hover:bg-[#162444]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {!selectedTime && (
                  <p className="text-[11px] text-[#d4af37] mt-2 font-medium">
                    *Selecione um dos horários para continuar.
                  </p>
                )}
              </div>
            </div>
          ) : (
            /* Step 3 */
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex: Carlos Silveira"
                    className="w-full bg-[#111c34] border border-[#1d2d4e] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    WhatsApp para Confirmação *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="(16) 99999-9999"
                    className="w-full bg-[#111c34] border border-[#1d2d4e] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Bebida cortesia de preferência:</span>
                </label>
                <select
                  value={drinkPreference}
                  onChange={(e) => setDrinkPreference(e.target.value)}
                  className="w-full bg-[#111c34] border border-[#1d2d4e] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] cursor-pointer"
                >
                  <option value="Café Espresso">Café Espresso Quente</option>
                  <option value="Cerveja Long Neck Gelada">Cerveja Long Neck Gelada (Lounge)</option>
                  <option value="Água Mineral com Gás">Água Mineral com Gás & Gelo</option>
                  <option value="Água Mineral sem Gás">Água Mineral Natural</option>
                  <option value="Apenas o atendimento">Apenas o atendimento</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Observações (opcional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Ex: Primeira vez na barbearia / prefiro corte mais baixo nas laterais"
                  className="w-full bg-[#111c34] border border-[#1d2d4e] rounded-lg px-3.5 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="p-3 bg-blue-900/20 border border-[#d4af37]/30 rounded-lg text-xs text-slate-300">
                <span className="font-bold text-[#d4af37]">Atendimento Pontual:</span> Chegue 10 minutos antes para relaxar na nossa mesa de sinuca e tomar um café enquanto aguarda seu horário.
              </div>
            </div>
          )}
        </div>

        {/* Footer controls */}
        {!isSuccess && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#1c2c4c] bg-[#111c34]">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>
            ) : (
              <span className="text-xs text-slate-400 font-medium">Vila Harmonia · Araraquara</span>
            )}

            <button
              type="button"
              onClick={handleNextStep}
              disabled={step === 2 && !selectedTime}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
                step === 2 && !selectedTime
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'btn-premium-blue'
              }`}
            >
              <span>{step === 3 ? 'Finalizar e Enviar' : 'Avançar'}</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
