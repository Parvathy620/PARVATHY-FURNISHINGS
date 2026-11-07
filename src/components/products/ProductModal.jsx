import { useEffect } from 'react';
import { 
  X, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Ruler, 
  Layers, 
  Sparkles, 
  Clock, 
  MapPin 
} from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import ImageWithFallback from '../common/ImageWithFallback';
import { BUSINESS_INFO, getWhatsAppLink } from '../../data/businessInfo';

export default function ProductModal({ product, isOpen, onClose }) {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const specLabel = product.material || product.woodType || "Custom Specification";
  const whatsappMessage = `Hello Parvathy Furnishings, I am looking at "${product.name}" (${specLabel}) in your digital catalogue. I would like to discuss custom dimensions, material options, and pricing for my requirements.`;
  const isOurWork = Boolean(product.isOurWork);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#E8DCCB] overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-[#E8DCCB] text-[#493528] flex items-center justify-center shadow-md transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Image Showcase */}
          <div className="md:col-span-6 relative aspect-4/3 md:aspect-auto min-h-[320px] bg-[#F7F3EC] flex items-center justify-center">
            <ImageWithFallback
              src={product.image}
              alt={product.imageAlt || product.name}
              aspectRatio="aspect-auto"
              fallbackText={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
              <span className={`px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase shadow-xs ${
                isOurWork ? 'bg-[#B89560] text-white' : 'bg-[#493528]/85 backdrop-blur-xs text-[#E8DCCB]'
              }`}>
                {isOurWork ? 'OUR WORK' : 'DESIGN INSPIRATION'}
              </span>
              <Badge variant="dark" size="sm">{product.categoryName}</Badge>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-[#493528]/90 backdrop-blur-xs text-[#F7F3EC] p-2.5 rounded-lg text-xs flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 text-[11px] text-[#E8DCCB]">
                <Sparkles className="w-3.5 h-3.5 text-[#B89560]" />
                {isOurWork ? 'Workshop Project Sample' : 'Custom Built to Order'}
              </span>
              <span className="text-[#B89560] font-semibold text-[11px]">Valappad, Thrissur</span>
            </div>
          </div>

          {/* Right Column: Specifications & Enquiry Channels */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B89560]">
                  {product.subcategoryName || product.categoryName}
                </span>
                <h2 className="font-display text-2xl font-bold text-[#493528] leading-snug mt-1">
                  {product.name}
                </h2>
                {product.variety && (
                  <div className="text-xs text-[#76543E] mt-0.5">
                    <strong>Variety:</strong> {product.variety}
                  </div>
                )}
                {typeof product.price === 'number' && product.price > 0 && (
                  <div className="text-sm font-bold text-[#493528] mt-1">
                    Starting from ₹{product.price.toLocaleString('en-IN')}
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#76543E] leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Material & Specification Card */}
              <div className="bg-[#F7F3EC] rounded-xl p-4 border border-[#E8DCCB] space-y-2 text-xs text-[#493528]">
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#76543E]">Material / Specification:</span>
                    <span>{specLabel}</span>
                  </div>
                </div>

                {product.dimensions && (
                  <div className="flex items-start gap-2.5">
                    <Ruler className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#76543E]">Dimensions / Fit:</span>
                      <span>{product.dimensions}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Craftsmanship Features List */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#493528]">
                  Key Highlights:
                </div>
                <ul className="space-y-1.5 text-xs text-[#76543E]">
                  {product.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B89560] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supported Varieties */}
              {product.availableVarieties && product.availableVarieties.length > 0 && (
                <div className="p-3 bg-[#E8DCCB]/40 rounded-lg border border-[#E8DCCB] text-xs text-[#493528]">
                  <strong className="text-[#76543E] block mb-1">Supported Varieties in this Category:</strong>
                  <div className="flex flex-wrap gap-1">
                    {product.availableVarieties.map((v, i) => (
                      <span key={i} className="bg-white px-2 py-0.5 rounded text-[11px] border border-[#E8DCCB]">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Customization Options */}
              {product.customOptions && (
                <div className="text-xs text-[#493528]">
                  <strong className="text-[#76543E]">Custom Options:</strong> {product.customOptions}
                </div>
              )}
            </div>

            {/* Direct Contact Actions */}
            <div className="pt-4 border-t border-[#E8DCCB] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#76543E]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B89560]" />
                  Hours: {BUSINESS_INFO.workingHours}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B89560]" />
                  Valappad Shop
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <Button
                  href={getWhatsAppLink(whatsappMessage)}
                  variant="whatsapp"
                  size="md"
                  icon={MessageCircle}
                  className="w-full"
                >
                  WhatsApp Enquiry
                </Button>
                <Button
                  href={BUSINESS_INFO.contact.phoneLink}
                  variant="secondary"
                  size="md"
                  icon={Phone}
                  className="w-full"
                >
                  Call: {BUSINESS_INFO.contact.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
