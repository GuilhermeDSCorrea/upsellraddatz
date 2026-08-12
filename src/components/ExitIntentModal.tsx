import React from 'react';
import { AlertTriangle, ArrowRight, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
  timeLeftSeconds: number;
}

export const ExitIntentModal: React.FC<Props> = ({ isOpen, onClose, onOpenCheckout, timeLeftSeconds }) => {
  if (!isOpen) return null;

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-sm p-6 sm:p-8 shadow-2xl text-white text-center space-y-5">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white p-1 rounded-sm hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 bg-rose-950/40 text-rose-400 border border-rose-500/30 rounded-sm flex items-center justify-center mx-auto shadow-xl">
          <AlertTriangle className="w-6 h-6 text-rose-500" />
        </div>

        <div className="space-y-2">
          <span className="bg-rose-600 text-white font-bold text-[10px] px-3 py-1 rounded-sm uppercase tracking-widest">
            Última Chance • Oferta Exclusiva
          </span>
          <h3 className="text-2xl font-serif text-white leading-tight">
            Tem certeza que vai deixar passar R$ 260,10 de desconto?
          </h3>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-light">
          Esta oferta de <strong className="text-rose-400 font-medium">R$ 89,90</strong> é válida exclusivamente nesta página para novos alunos do Projeto 21 Dias. Se fechar agora, o valor da consulta voltará para <strong className="text-slate-500 line-through">R$ 350,00</strong>.
        </p>

        <div className="bg-[#050505] p-3 rounded-sm border border-white/10 flex items-center justify-between text-xs">
          <span className="text-rose-400 uppercase tracking-wider font-bold text-[10px]">Expira em:</span>
          <strong className="text-white font-mono font-bold text-sm tracking-widest">{formatTime(timeLeftSeconds)}</strong>
        </div>

        <div className="space-y-2 pt-2">
          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 px-4 rounded-sm shadow-xl uppercase tracking-widest transition-all text-xs flex items-center justify-center gap-2 cursor-pointer border border-rose-500/30"
          >
            <span>Garantir Minha Consulta por R$ 89,90</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              onClose();
              document.getElementById('kiwify-upsell-cancel-trigger-vOKFrFs')?.click();
            }}
            className="text-[11px] text-slate-500 hover:text-slate-400 underline pt-1 cursor-pointer block mx-auto uppercase tracking-wider"
          >
            Não, prefiro abrir mão do acompanhamento individual.
          </button>
        </div>

      </div>
    </div>
  );
};

