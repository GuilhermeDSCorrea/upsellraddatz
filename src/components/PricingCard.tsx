import React from 'react';
import { ShieldCheck, Clock, ArrowRight, Check, Flame, Lock } from 'lucide-react';

interface Props {
  timeLeftSeconds: number;
  onOpenCheckout: () => void;
  onDeclineClick: () => void;
}

export const PricingCard: React.FC<Props> = ({ timeLeftSeconds, onOpenCheckout, onDeclineClick }) => {
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="pricing" className="py-16 bg-[#050505] text-slate-100 border-b border-white/5 relative">
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl relative text-center">
          
          {/* Top Urgent Badge */}
          <div className="inline-flex items-center gap-1.5 bg-rose-600 text-white font-bold text-[10px] px-4 py-1.5 rounded-sm uppercase tracking-widest shadow-lg mb-6">
            <Flame className="w-3.5 h-3.5 fill-white" />
            <span>Oferta Especial • 74% OFF</span>
          </div>

          <div className="space-y-6">
            
            <h2 className="text-2xl sm:text-4xl font-serif text-white">
              Garanta sua consulta individual com Luccas Raddatz antes que expire
            </h2>

            {/* Countdown Box */}
            <div className="bg-[#050505] border border-rose-500/30 p-4 rounded-sm max-w-sm mx-auto flex items-center justify-between gap-2 text-rose-300">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-rose-500" />
                <span>Expira em:</span>
              </div>
              <span className="font-mono text-2xl font-bold text-white tracking-widest">
                {formatTime(timeLeftSeconds)}
              </span>
            </div>

            {/* Limited Spots Bar */}
            <div className="space-y-1.5 max-w-md mx-auto text-xs">
              <div className="flex justify-between font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                <span className="text-rose-500">🔥 Vagas com Desconto</span>
                <span className="text-slate-300">Restam apenas 3 vagas</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 border border-white/10 overflow-hidden">
                <div className="bg-rose-600 h-full rounded-full w-[88%]" />
              </div>
            </div>

            {/* Price Presentation */}
            <div className="py-2 space-y-2">
              <p className="text-slate-500 line-through text-sm font-light">
                De R$ 350,00 por apenas
              </p>
              
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl sm:text-6xl font-serif font-bold text-white tracking-tight">
                  R$ 89,90
                </span>
                <span className="text-rose-400 font-bold text-xs uppercase tracking-widest">
                  à vista
                </span>
              </div>

              <p className="text-slate-300 text-xs font-light">
                ou em até 12x de <span className="text-white font-bold">R$ 8,98</span> no cartão
              </p>
            </div>

            {/* What's included summary checklist */}
            <div className="bg-[#050505] p-5 rounded-sm border border-white/10 text-left text-xs space-y-2 text-slate-300 max-w-md mx-auto font-light">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Consulta Online Individual com Nutricionista Luccas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Plano Alimentar 100% Personalizado no App</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Atendimento e Suporte de Agendamento no WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Análise Completa de Exames de Sangue</span>
              </div>
            </div>

            {/* Primary Action & Kiwify Integration */}
            <div className="pt-2">
              <div style={{ textAlign: 'center' }} id="kiwify-upsell-vOKFrFs" data-upsell-url="" data-downsell-url="">
                <button
                  id="kiwify-upsell-trigger-vOKFrFs"
                  onClick={onOpenCheckout}
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base py-4 px-6 rounded-sm shadow-2xl uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 border border-rose-500/30 cursor-pointer"
                >
                  <Lock className="w-4 h-4 fill-white" />
                  <span>Sim! Quero Minha Consulta por R$ 89,90</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Guarantee Badge */}
                <div className="pt-3 flex items-center justify-center gap-2 text-xs text-slate-400 font-light">
                  <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Garantia de Satisfação de 7 Dias • Pagamento Seguro</span>
                </div>

                <div
                  id="kiwify-upsell-cancel-trigger-vOKFrFs"
                  onClick={onDeclineClick}
                  className="text-xs text-slate-500 hover:text-slate-400 underline transition-colors cursor-pointer pt-3 uppercase tracking-wider text-[11px]"
                >
                  Não, prefiro abrir mão do desconto e continuar no Projeto 21 Dias sem acompanhamento individual.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

