/**
 * Reusable Section Title component with luxury serif styling and gold accents
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) {
  const alignClasses = {
    center: 'text-center items-center mx-auto',
    left: 'text-left items-start',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 ${alignClasses[align] || alignClasses.center} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-2.5">
          <span className="w-6 h-[1.5px] bg-[#B89560]"></span>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B89560]">
            {eyebrow}
          </span>
          <span className="w-6 h-[1.5px] bg-[#B89560]"></span>
        </div>
      )}

      <h2
        className={`font-display text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight leading-tight mb-3.5 ${
          light ? 'text-[#F7F3EC]' : 'text-[#493528]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            light ? 'text-[#E8DCCB]' : 'text-[#76543E]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
