import React, { useState } from 'react';
import { AlertTriangle, Clock, Flame } from 'lucide-react';

interface Props {
  timeLeftSeconds: number;
  onOpenCheckout: () => void;
}

export const TopUrgencyBanner: React.FC<Props> = ({ timeLeftSeconds, onOpenCheckout }) => {
  const [spotsLeft] = useState<number>(7);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="sticky top-0 z-40 bg-[#050505] text-white border-b border-white/10 shadow-2xl backdrop-blur-md">
      <div className="bg-rose-600 text-white text-center py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2">
        <AlertTriangle className="w-3.5 h-3.5 text-white shrink-0 animate-pulse" />
        <span>Oportunidade Única: Oferta expira em {formatTime(timeLeftSeconds)}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          
          {/* Left Title */}
          <div className="flex items-center gap-3">
            <span className="text-rose-500 font-bold text-xs tracking-widest uppercase">Oferta Especial Exclusiva</span>
            <span className="text-white/20">|</span>
            <span className="text-slate-300 font-serif italic text-sm">Luccas Raddatz Nutrição</span>
          </div>

          {/* Countdown & Scarcity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-sm border border-white/10 font-mono text-slate-300">
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Tempo:</span>
              <strong className="text-rose-400 font-bold text-xs tracking-wider">
                {formatTime(timeLeftSeconds)}
              </strong>
            </div>

            <div className="hidden md:flex items-center gap-1.5 bg-rose-950/40 px-2.5 py-1 rounded-sm border border-rose-500/30 text-rose-300">
              <Flame className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-[10px] uppercase tracking-widest font-semibold">
                [ APENAS {spotsLeft} VAGAS RESTANTES ]
              </span>
            </div>

            <button
              onClick={onOpenCheckout}
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-3.5 py-1.5 rounded-sm text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 shrink-0"
            >
              Garantir Vaga
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

