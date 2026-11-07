import { 
  Hammer, 
  Sparkles, 
  Armchair, 
  Truck, 
  CheckCircle2, 
  MessageCircle, 
  Phone 
} from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { BUSINESS_INFO, getWhatsAppLink } from '../../data/businessInfo';

export default function ServiceCard({ service, index = 0 }) {
  if (!service) return null;

  const isReversed = index % 2 !== 0;

  const iconMap = {
    Hammer: Hammer,
    Sparkles: Sparkles,
    Armchair: Armchair,
    Truck: Truck,
  };

  const IconComponent = iconMap[service.icon] || Hammer;

  const whatsappMessage = `Hello Parvathy Furnishings, I would like to consult about your service: "${service.title}". Please let me know how to schedule a workshop visit or site evaluation in Thrissur.`;

  return (
    <div className="bg-white rounded-xl border border-[#E8DCCB] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Service Visual */}
        <div className={`lg:col-span-5 relative aspect-16/10 lg:aspect-auto min-h-[260px] bg-[#F7F3EC] ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          <div className="absolute top-4 left-4 z-10">
            <span className="w-10 h-10 rounded-full bg-[#493528] text-[#B89560] flex items-center justify-center shadow">
              <IconComponent className="w-5 h-5" />
            </span>
          </div>
        </div>

        {/* Service Details */}
        <div className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="gold" size="sm">
                20-Year Workshop Specialization
              </Badge>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#493528] mb-1.5">
              {service.title}
            </h3>

            <p className="text-xs sm:text-sm font-semibold text-[#B89560] mb-3.5">
              {service.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#76543E] leading-relaxed mb-5">
              {service.description}
            </p>

            {/* Deliverables / Process steps */}
            <div className="mb-6 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#493528]">
                What We Deliver:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.benefits?.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#493528]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89560] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#E8DCCB] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Button
                href={getWhatsAppLink(whatsappMessage)}
                variant="whatsapp"
                size="sm"
                icon={MessageCircle}
              >
                Consult on WhatsApp
              </Button>
              <Button
                href={BUSINESS_INFO.contact.phoneLink}
                variant="outline"
                size="sm"
                icon={Phone}
              >
                Call Workshop
              </Button>
            </div>

            <span className="text-[11px] text-[#76543E] font-medium">
              📍 Valappad, Thriprayar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
