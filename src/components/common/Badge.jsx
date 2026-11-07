/**
 * Reusable Badge Component for materials, status, and heritage markers
 */
export default function Badge({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
}) {
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs font-semibold px-2.5 py-1',
    lg: 'text-sm font-semibold px-3 py-1.5',
  };

  const variantStyles = {
    gold: 'bg-[#B89560]/15 text-[#76543E] border border-[#B89560]/30',
    goldSolid: 'bg-[#B89560] text-white',
    dark: 'bg-[#493528] text-white',
    coffee: 'bg-[#76543E] text-[#F7F3EC]',
    beige: 'bg-[#E8DCCB] text-[#493528] border border-[#493528]/15',
    green: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full uppercase tracking-wider transition-colors ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.gold} ${className}`}
    >
      {children}
    </span>
  );
}
