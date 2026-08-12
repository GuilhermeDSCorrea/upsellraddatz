import React, { useState, useEffect } from 'react';
import { SOCIAL_PROOF_NOTIFICATIONS } from '../data/upsellData';
import { CheckCircle2, X } from 'lucide-react';

export const SocialProofPopups: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Show notification every 10 seconds
    const interval = setInterval(() => {
      setIsVisible(true);
      
      // Hide notification after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
        setCurrentIndex((prev) => (prev + 1) % SOCIAL_PROOF_NOTIFICATIONS.length);
      }, 4000);

    }, 10000);

    // Initial show after 3 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4000);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  if (!isVisible) return null;

  const currentNotification = SOCIAL_PROOF_NOTIFICATIONS[currentIndex];

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm bg-[#0a0a0a] border border-white/10 text-white rounded-sm p-3 shadow-2xl backdrop-blur-md transition-all duration-500 animate-slide-up flex items-center gap-3">
      <div className="relative shrink-0">
        <img
          src={currentNotification.avatar}
          alt={currentNotification.name}
          className="w-10 h-10 rounded-sm object-cover border border-rose-500/40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-1 -right-1 bg-[#050505] text-rose-500 p-0.5 rounded-sm border border-rose-500/30">
          <CheckCircle2 className="w-3 h-3" />
        </div>
      </div>

      <div className="flex-1 text-xs">
        <div className="flex items-center justify-between">
          <p className="font-bold text-white text-xs">{currentNotification.name}</p>
          <span className="text-[9px] text-slate-500 font-mono">{currentNotification.timeAgo}</span>
        </div>
        <p className="text-slate-300 mt-0.5 text-[11px] font-light">
          Garantiu a consulta individual por <strong className="text-rose-400 font-medium">R$ 89,90</strong>
        </p>
        <p className="text-[10px] text-slate-400 font-light mt-0.5">
          📍 {currentNotification.city} • Vaga confirmada
        </p>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="text-slate-500 hover:text-slate-300 p-1 shrink-0 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

