import React, { useState } from 'react';
import { FAQS } from '../data/upsellData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-[#050505] text-slate-100 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-rose-500 uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl font-serif text-white">
            Perguntas frequentes sobre a consulta individual
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Tire todas as suas dúvidas antes de garantir sua vaga promocional.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2 font-serif">
                    <span className="text-rose-500 text-xs font-mono">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-rose-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 bg-[#050505] font-light animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 bg-[#0a0a0a] border border-white/10 rounded-sm p-4 text-center text-xs text-slate-400 font-light flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-rose-500" />
            <span>Ainda tem alguma dúvida específica? Fale com nossa equipe de suporte no WhatsApp.</span>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20a%20consulta%20individual%20com%20o%20Nutricionista%20Luccas%20Raddatz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 font-bold hover:underline shrink-0 uppercase tracking-wider text-[11px]"
          >
            Atendimento Online →
          </a>
        </div>

      </div>
    </section>
  );
};

