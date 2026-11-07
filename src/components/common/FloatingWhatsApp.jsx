import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../../data/businessInfo';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show friendly prompt only ONCE per session, after 5 seconds delay to prevent clutter
  useEffect(() => {
    try {
      const alreadyShown = sessionStorage.getItem('pf_wa_welcome_shown');
      if (!alreadyShown) {
        const timer = setTimeout(() => {
          setShowTooltip(true);
          sessionStorage.setItem('pf_wa_welcome_shown', 'true');
        }, 5000);
        return () => clearTimeout(timer);
      }
    } catch {
      // In private browsing or storage disabled scenarios
    }
  }, []);

  const handleDismiss = (e) => {
    e.stopPropagation();
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Session Welcome Popup (Shown once per session, dismissable, compact) */}
      {showTooltip && (
        <div className="relative mb-2 max-w-[280px] sm:max-w-xs bg-white text-[#493528] rounded-xl shadow-2xl border border-[#E8DCCB] p-3 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 w-5 h-5 bg-[#493528] text-white rounded-full flex items-center justify-center hover:bg-black transition-colors cursor-pointer shadow-md"
            aria-label="Close notification"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#B89560]/20 text-[#B89560] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
              PF
            </div>
            <div>
              <div className="font-bold text-[#493528] flex items-center gap-1.5">
                <span>{BUSINESS_INFO.shortName || 'Parvathy'} Craftsman</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-[#76543E] mt-0.5 leading-snug">
                Need custom furniture, sofa re-upholstery, or restoration in Thrissur? Chat with our craftsmen directly on WhatsApp!
              </p>
              <div className="mt-2 flex items-center justify-between">
                <a
                  href={getWhatsAppLink("Hello! I'd like to consult with your craftsmen regarding a furniture requirement.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 underline"
                >
                  Start WhatsApp Chat &rarr;
                </a>
                <button
                  onClick={handleDismiss}
                  className="text-[10px] text-[#76543E] hover:text-[#493528] cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SINGLE FLOATING WHATSAPP BUTTON */}
      <a
        href={getWhatsAppLink("Hello Parvathy Furnishings, I'd like to enquire about your furniture showroom and custom works.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] active:scale-95 transition-all duration-200"
        aria-label="Chat with Parvathy Furnishings on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-[#25D366]" />
        <span className="font-semibold text-xs tracking-wide pr-1">
          WhatsApp Us
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B89560]"></span>
        </span>
      </a>
    </div>
  );
}
