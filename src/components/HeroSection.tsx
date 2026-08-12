import React from 'react';
import { HERO_IMAGE_PATH, LUCCAS_PHOTO_PATH } from '../data/upsellData';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Star, Clock } from 'lucide-react';

interface Props {
  onOpenCheckout: () => void;
  onDeclineClick: () => void;
}

export const HeroSection: React.FC<Props> = ({ onOpenCheckout, onDeclineClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-slate-100 pt-10 pb-16 border-b border-white/5">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-rose-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Urgent Top Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[11px] uppercase tracking-widest text-rose-500 font-bold">
            Personalize Sua Jornada de 21 Dias • Oferta Exclusiva
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif leading-tight text-white">
            Acelere seu emagrecimento com uma <span className="italic text-rose-500">estratégia individual.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            O Projeto 21 Dias é o motor, mas a consulta individual é o turbo. Garanta uma <strong className="text-white font-medium">Consulta Individual Online</strong> com o <strong className="text-white font-medium">Nutricionista Luccas Raddatz</strong> com 74% de Desconto Especial.
          </p>
        </div>

        {/* Price Contrast Badge */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
          <div className="bg-[#0a0a0a] border border-white/10 px-5 py-2.5 rounded-sm flex items-center gap-3">
            <span className="text-slate-500 line-through text-sm">De R$ 350,00</span>
            <span className="text-[10px] bg-rose-950/60 border border-rose-500/30 text-rose-300 px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider">-74% OFF</span>
          </div>
          <div className="bg-[#0a0a0a] border border-rose-500/30 px-6 py-2.5 rounded-sm flex items-center gap-3 shadow-lg shadow-rose-950/20">
            <span className="text-rose-500 text-xs uppercase tracking-widest font-bold">Preço Especial:</span>
            <span className="text-white text-3xl font-serif font-bold">R$ 89,90</span>
            <span className="text-slate-400 text-xs font-light">à vista ou 12x R$ 8,98</span>
          </div>
        </div>

        {/* Hero Visual Card / Teaser Box */}
        <div className="mt-10 bg-[#0a0a0a] border border-white/10 rounded-sm p-6 sm:p-8 shadow-2xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Showcase */}
            <div className="md:col-span-5 relative group rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={HERO_IMAGE_PATH}
                alt="Consulta e Plano Alimentar Individual Luccas Raddatz"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              
              {/* Overlaid Badges */}
              <div className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm flex items-center gap-1 shadow-md">
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
                Vaga VIP Online
              </div>

              {/* Nutritionist Floating Tag */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#050505]/90 border border-white/10 p-2.5 rounded-sm flex items-center gap-3">
                <img
                  src={LUCCAS_PHOTO_PATH}
                  alt="Luccas Raddatz CRN"
                  className="w-10 h-10 rounded-full object-cover border border-rose-500/50 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-xs">
                  <p className="font-serif italic text-white font-bold text-sm">Luccas Raddatz</p>
                  <p className="text-rose-400 text-[10px] uppercase tracking-wider">Nutricionista CRN Ativo</p>
                </div>
              </div>
            </div>

            {/* Right Highlights & Bullets */}
            <div className="md:col-span-7 space-y-5 text-left">
              
              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-12 bg-rose-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase text-white tracking-wide">Plano Sob Medida</h4>
                    <p className="text-xs text-slate-400 font-light">Ajustes específicos para sua rotina, metabolismo e preferências.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-1 h-12 bg-rose-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase text-white tracking-wide">Suporte Direto</h4>
                    <p className="text-xs text-slate-400 font-light">Tire suas dúvidas diretamente com o Luccas e sua equipe no WhatsApp.</p>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 text-xs text-slate-300 font-light border-t border-white/5 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Análise detalhada de exames de sangue e bloqueios hormonais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Cardápio prático sem passar fome ou alimentos difíceis</span>
                </li>
              </ul>

              {/* Guarantee badge */}
              <div className="flex items-center gap-2 text-xs text-slate-400 font-light">
                <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Garantia de 7 Dias Incondicional • Atendimento Online Seguro</span>
              </div>

            </div>

          </div>

          {/* Primary CTA Button */}
          <div className="mt-8 text-center space-y-3 pt-4 border-t border-white/5">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto min-w-[320px] sm:min-w-[440px] bg-rose-600 hover:bg-rose-700 text-white font-bold text-base sm:text-lg py-4 px-8 rounded-sm shadow-xl shadow-rose-950/40 uppercase tracking-widest transition-all transform active:scale-95 flex items-center justify-center gap-3 border border-rose-500/30 cursor-pointer mx-auto"
            >
              <span>SIM! QUERO MINHA CONSULTA POR R$ 89,90</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </button>

            {/* Subtle Decline Link */}
            <div>
              <button
                onClick={onDeclineClick}
                className="text-xs text-slate-500 hover:text-slate-400 underline transition-colors cursor-pointer pt-2 uppercase tracking-wider"
              >
                Não obrigado, prefiro fazer o Projeto 21 Dias sozinho sem o acompanhamento individual.
              </button>
            </div>
          </div>

        </div>

        {/* Social Proof Star Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="flex text-rose-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-rose-500" />
              ))}
            </div>
            <span className="font-bold text-white">4.9/5</span>
            <span>(+3.800 pacientes)</span>
          </div>
          
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-rose-500" />
            <span>Atendimento 100% Online em HD</span>
          </div>
        </div>

      </div>
    </section>
  );
};

