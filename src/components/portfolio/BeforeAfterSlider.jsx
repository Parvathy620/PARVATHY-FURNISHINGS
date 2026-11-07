import { useState, useCallback } from 'react';
import { ArrowLeftRight, MessageCircle } from 'lucide-react';
import Button from '../common/Button';
import { getWhatsAppLink } from '../../data/businessInfo';

export default function BeforeAfterSlider({ project }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX, rect) => {
    if (!rect) return;
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      handleMove(e.touches[0].clientX, rect);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      handleMove(e.clientX, rect);
    }
  };

  const whatsappMessage = `Hello Parvathy Furnishings, I saw your restoration work reference: "${project.title}". I have similar furniture/seating needing repair or restoration. Could you please advise?`;

  return (
    <div className="bg-white rounded-2xl border border-[#E8DCCB] overflow-hidden shadow-2xs hover:shadow-md transition-shadow duration-300">
      {/* Slider Viewport */}
      <div
        className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden select-none cursor-ew-resize bg-[#493528]"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full background layer) */}
        <img
          src={project.afterImage}
          alt={project.afterLabel || "After Restoration"}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* After Label Badge */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="bg-[#493528]/85 backdrop-blur-xs text-[#E8DCCB] px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase shadow-xs">
            AFTER RESTORATION
          </span>
        </div>

        {/* Before Image (Clipped with hardware accelerated clip-path) */}
        <img
          src={project.beforeImage}
          alt={project.beforeLabel || "Before Restoration"}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          loading="lazy"
        />

        {/* Before Label Badge */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase shadow-xs">
            BEFORE
          </span>
        </div>

        {/* Divider Slider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#493528] shadow-xl flex items-center justify-center border-2 border-[#B89560]">
            <ArrowLeftRight className="w-4 h-4 text-[#493528]" />
          </div>
        </div>

        {/* Design Inspiration Label */}
        <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded bg-[#493528]/85 backdrop-blur-xs text-[#E8DCCB] text-[10px] font-semibold tracking-wider uppercase shadow-xs">
            {project.label || "DESIGN INSPIRATION"}
          </span>
        </div>

        {/* Accessible Range Input for Keyboard Nav */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="sr-only"
          aria-label="Comparison slider between before and after restoration"
        />
      </div>

      {/* Project Details & CTA */}
      <div className="p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between text-[11px] text-[#B89560] font-semibold uppercase tracking-wider">
          <span>{project.subCategory}</span>
          <span className="text-[#76543E] lowercase italic font-normal">← Drag slider to compare →</span>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-[#493528] leading-snug">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#76543E] leading-relaxed">
          {project.description}
        </p>

        <div className="pt-3 border-t border-[#E8DCCB] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#76543E]">
            <span className="font-semibold text-[#493528]">Have a similar piece needing care?</span>
            <div className="text-[11px] text-[#76543E]/80">Send photos for a free restoration estimate.</div>
          </div>

          <Button
            href={getWhatsAppLink(whatsappMessage)}
            variant="whatsapp"
            size="sm"
            icon={MessageCircle}
          >
            Enquire on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
