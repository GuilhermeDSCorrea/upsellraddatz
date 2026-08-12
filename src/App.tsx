import React, { useState, useEffect } from 'react';
import { TopUrgencyBanner } from './components/TopUrgencyBanner';
import { HeroSection } from './components/HeroSection';
import { SocialProofPopups } from './components/SocialProofPopups';
import { QuizAccelerator } from './components/QuizAccelerator';
import { ComparisonSection } from './components/ComparisonSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { AuthoritySection } from './components/AuthoritySection';
import { PricingCard } from './components/PricingCard';
import { CheckoutModal } from './components/CheckoutModal';
import { ExitIntentModal } from './components/ExitIntentModal';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ArrowRight, Lock, Flame } from 'lucide-react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState<number>(599); // 09:59 initial timer
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState<boolean>(false);
  const [showStickyBottom, setShowStickyBottom] = useState<boolean>(false);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show floating bottom sticky bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBottom(true);
      } else {
        setShowStickyBottom(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exit intent detection (mouse leaving top of browser window)
  useEffect(() => {
    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered && !isCheckoutOpen) {
        triggered = true;
        setIsExitModalOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isCheckoutOpen]);

  const handleOpenCheckout = () => {
    const kiwifyTrigger = document.getElementById('kiwify-upsell-trigger-vOKFrFs');
    if (kiwifyTrigger) {
      kiwifyTrigger.click();
    }
    setIsCheckoutOpen(true);
  };

  const handleDeclineClick = () => {
    const kiwifyCancel = document.getElementById('kiwify-upsell-cancel-trigger-vOKFrFs');
    if (kiwifyCancel) {
      kiwifyCancel.click();
    } else {
      setIsExitModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-rose-500 selection:text-white">
      
      {/* 1. Top Urgency & Countdown Bar */}
      <TopUrgencyBanner
        timeLeftSeconds={timeLeft}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* 2. Hero Section */}
      <HeroSection
        onOpenCheckout={handleOpenCheckout}
        onDeclineClick={handleDeclineClick}
      />

      {/* 3. Interactive Quiz Accelerator */}
      <QuizAccelerator onOpenCheckout={handleOpenCheckout} />

      {/* 4. Comparison Section (Group vs Individual) */}
      <ComparisonSection onOpenCheckout={handleOpenCheckout} />

      {/* 5. Deliverables & Bonus Package */}
      <DeliverablesSection onOpenCheckout={handleOpenCheckout} />

      {/* 6. Nutritionist Authority & Patient Transformations */}
      <AuthoritySection onOpenCheckout={handleOpenCheckout} />

      {/* 7. Pricing & High Conversion Card */}
      <PricingCard
        timeLeftSeconds={timeLeft}
        onOpenCheckout={handleOpenCheckout}
        onDeclineClick={handleDeclineClick}
      />

      {/* 8. FAQ Accordion */}
      <FAQSection />

      {/* 9. Footer */}
      <Footer />

      {/* 10. Social Proof Floating Notifications */}
      <SocialProofPopups />

      {/* 11. Checkout / Scheduling Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* 12. Exit Intent Alert Modal */}
      <ExitIntentModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
        onOpenCheckout={handleOpenCheckout}
        timeLeftSeconds={timeLeft}
      />

      {/* 13. Sticky Mobile/Desktop Bottom Conversion Bar */}
      {showStickyBottom && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 border-t border-white/10 p-3 shadow-2xl backdrop-blur-md animate-slide-up">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <div>
                <p className="text-xs font-serif font-bold text-white">Consulta Individual Luccas Raddatz</p>
                <p className="text-[10px] text-rose-400 uppercase tracking-widest">Desconto Único de 74% OFF • R$ 89,90</p>
              </div>
            </div>

            <button
              onClick={handleOpenCheckout}
              className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-3 px-6 rounded-sm shadow-lg uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border border-rose-500/30"
            >
              <Lock className="w-3.5 h-3.5 fill-white" />
              <span>Garantir Consulta por R$ 89,90</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
