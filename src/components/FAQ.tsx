import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/barberData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0a1122] border-b border-[#1c2c4c] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold mb-2">
            Tire Suas Dúvidas
          </p>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-slate-300 mt-2 font-sans-main">
            Tudo o que você precisa saber sobre o atendimento na Barbearia Ramos na Vila Harmonia.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl bg-[#111c34] overflow-hidden transition-all ${
                  isOpen ? 'border-[#d4af37]/50 shadow-md' : 'border-[#1d2d4e] hover:border-[#2b4170]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 font-sans-main leading-relaxed border-t border-[#1c2c4c]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
