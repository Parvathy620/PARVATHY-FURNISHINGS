import { isValidElement } from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component adhering to PARVATHY FURNISHINGS Luxury Design Tokens
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  target,
  rel,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2 font-semibold',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold tracking-wide',
    xl: 'text-lg px-8 py-4 gap-3 font-semibold tracking-wide',
  };

  const variantStyles = {
    primary: 'bg-[#B89560] text-white hover:bg-[#A07F4E] shadow-sm hover:shadow active:translate-y-0.5 focus:ring-[#B89560]',
    secondary: 'bg-[#493528] text-[#F7F3EC] hover:bg-[#38281E] shadow-sm hover:shadow active:translate-y-0.5 focus:ring-[#493528]',
    coffee: 'bg-[#76543E] text-white hover:bg-[#5C402E] shadow-sm active:translate-y-0.5 focus:ring-[#76543E]',
    outline: 'border border-[#493528] text-[#493528] hover:bg-[#493528] hover:text-[#F7F3EC] focus:ring-[#493528]',
    outlineGold: 'border border-[#B89560] text-[#76543E] hover:bg-[#B89560] hover:text-white focus:ring-[#B89560]',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-sm hover:shadow-md active:translate-y-0.5 focus:ring-[#25D366]',
    cream: 'bg-[#F7F3EC] text-[#493528] hover:bg-[#E8DCCB] border border-[#E8DCCB] focus:ring-[#493528]',
    ghost: 'text-[#493528] hover:bg-[#E8DCCB]/50 focus:ring-[#493528]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const renderIcon = () => {
    if (!Icon) return null;
    if (isValidElement(Icon)) return Icon;
    const IconComponent = Icon;
    return <IconComponent className="w-4 h-4 shrink-0" />;
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && renderIcon()}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
