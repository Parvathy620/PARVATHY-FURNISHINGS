import { useState } from 'react';
import { Armchair } from 'lucide-react';

/**
 * ImageWithFallback
 * Loads image with native lazy loading, error fallback handling, and smooth fade-in.
 * Prevents broken image icons anywhere on the site.
 */
export default function ImageWithFallback({
  src,
  alt = "Parvathy Furnishings",
  className = "w-full h-full object-cover",
  aspectRatio = "aspect-4/3",
  fallbackText = "Design Preview",
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-gradient-to-br from-[#E8DCCB] to-[#F7F3EC] flex flex-col items-center justify-center p-4 text-[#76543E] border border-[#E8DCCB] ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center mb-2 shadow-2xs">
          <Armchair className="w-5 h-5 text-[#B89560]" />
        </div>
        <span className="text-xs font-semibold text-[#493528] tracking-wide">{fallbackText}</span>
        <span className="text-[10px] text-[#76543E]/70 mt-0.5">Parvathy Furnishings</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatio} overflow-hidden bg-[#F7F3EC]`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#E8DCCB]/40 animate-pulse" />
      )}
    </div>
  );
}

