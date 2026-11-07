import { useState } from 'react';
import { MessageCircle, Eye } from 'lucide-react';
import Button from '../common/Button';
import ProductModal from './ProductModal';
import ImageWithFallback from '../common/ImageWithFallback';
import { getWhatsAppLink } from '../../data/businessInfo';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) return null;

  const specLabel = product.material || product.woodType || "Custom Specification";
  const whatsappMessage = `Hello Parvathy Furnishings, I am interested in: "${product.name}" (${specLabel}). Could you please share customization details, timber/fabric options, and workshop timeline?`;

  const isOurWork = Boolean(product.isOurWork);

  return (
    <>
      <article className="group h-full flex flex-col justify-between bg-white rounded-xl border border-[#E8DCCB] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#B89560]/60 transition-all duration-300">
        {/* 1. LARGE PRODUCT PHOTOGRAPH */}
        <div 
          className="relative aspect-4/3 w-full bg-[#F7F3EC] overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.imageAlt || product.name}
            aspectRatio="aspect-4/3"
            fallbackText={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Clean Label Badge: DESIGN INSPIRATION vs OUR WORK */}
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            {isOurWork ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#B89560] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                OUR WORK
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#493528]/85 backdrop-blur-xs text-[#E8DCCB] text-[10px] font-semibold tracking-wider uppercase shadow-xs">
                DESIGN INSPIRATION
              </span>
            )}
          </div>

          {/* Quick View Hover Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <span className="bg-white/95 text-[#493528] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
              <Eye className="w-3.5 h-3.5 text-[#B89560]" />
              Quick View
            </span>
          </div>
        </div>

        {/* 2. CARD CONTENT */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            {/* Small Category Label */}
            <div className="text-[11px] font-semibold text-[#B89560] uppercase tracking-wider mb-1">
              {product.subcategoryName || product.categoryName}
            </div>

            {/* Product Name */}
            <h3 
              onClick={() => setIsModalOpen(true)}
              className="font-display text-base sm:text-lg font-bold text-[#493528] group-hover:text-[#B89560] transition-colors leading-snug line-clamp-1 cursor-pointer"
              title={product.name}
            >
              {product.name}
            </h3>

            {/* Short Description (Max 2 lines) */}
            <p className="text-xs text-[#76543E] line-clamp-2 leading-relaxed mt-1.5">
              {product.shortDescription}
            </p>

            {/* Optional Price display only when actual price exists */}
            {typeof product.price === 'number' && product.price > 0 && (
              <div className="mt-2 text-xs font-bold text-[#493528]">
                Starting from ₹{product.price.toLocaleString('en-IN')}
              </div>
            )}
          </div>

          {/* 3. ACTION BUTTONS: View Details & WhatsApp Enquiry */}
          <div className="pt-3 border-t border-[#E8DCCB]/60 grid grid-cols-2 gap-2">
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              size="sm"
              icon={Eye}
              className="w-full text-xs font-semibold"
            >
              View Details
            </Button>

            <Button
              href={getWhatsAppLink(whatsappMessage)}
              variant="whatsapp"
              size="sm"
              icon={MessageCircle}
              className="w-full text-xs font-semibold"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </article>

      {/* Quick View Modal with Full Specifications & Details */}
      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
