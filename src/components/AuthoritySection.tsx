import React from 'react';
import { LUCCAS_PHOTO_PATH } from '../data/upsellData';
import { Award, Heart, Users } from 'lucide-react';

interface Props {
  onOpenCheckout: () => void;
}

export const AuthoritySection: React.FC<Props> = () => {
  return (
    <section className="py-16 bg-[#050505] text-slate-100 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nutritionist Bio Card */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Photo */}
          <div className="md:col-span-5 text-center relative">
            <div className="relative inline-block group">
              <img
                src={LUCCAS_PHOTO_PATH}
                alt="Nutricionista Luccas Raddatz"
                className="relative w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-sm border border-rose-500/40 shadow-2xl mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="mt-4 inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-[10px] font-bold text-rose-400 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-rose-500" />
              <span>CRN Ativo & Cadastrado</span>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-4 text-left">
            <div className="space-y-1">
              <span className="text-rose-500 font-bold text-[10px] tracking-widest uppercase">
                Seu Mentor no Projeto de 21 Dias
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white">
                Nutricionista Luccas Raddatz
              </h2>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-light">
                Especialista em Recomposição Corporal & Aceleração Metabólica
              </p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Com mais de <strong className="text-white font-medium">3.800 pacientes atendidos em todo o Brasil e no exterior</strong>, Luccas Raddatz desenvolveu o método de acompanhamento individual focado em adaptar a nutrição à rotina real de cada pessoa — sem privações absurdas ou alimentos difíceis.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-[#050505] p-3 rounded-sm border border-white/10 flex items-center gap-3">
                <Users className="w-5 h-5 text-rose-500 shrink-0" />
                <div>
                  <p className="font-serif font-bold text-white text-lg">+3.800</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Pacientes Atendidos</p>
                </div>
              </div>

              <div className="bg-[#050505] p-3 rounded-sm border border-white/10 flex items-center gap-3">
                <Heart className="w-5 h-5 text-rose-500 shrink-0" />
                <div>
                  <p className="font-serif font-bold text-white text-lg">98.4%</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Taxa de Satisfação</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 font-serif italic border-t border-white/5">
              "Meu compromisso não é apenas te dar uma dieta, é fazer você atingir sua melhor versão corporal em 21 dias com saúde, energia e sem efeito sanfona."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

