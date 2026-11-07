import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Mail,
  MapPin, 
  Clock, 
  ShieldCheck, 
  Hammer, 
  Sparkles, 
  HeartHandshake,
  ExternalLink 
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../../data/businessInfo';
import { CATEGORIES } from '../../data/categories';

export default function Footer() {
  return (
    <footer className="bg-[#493528] text-[#F7F3EC] pt-16 pb-8 border-t border-[#76543E]">
      {/* 1. CRAFTSMANSHIP COMMITMENT BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 mb-12 border-b border-[#76543E]/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-full bg-[#76543E] flex items-center justify-center shrink-0 text-[#B89560]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-[#F7F3EC]">Over 20 Years Heritage</div>
              <div className="text-xs text-[#E8DCCB]/80">Crafting in Valappad since 2005</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-full bg-[#76543E] flex items-center justify-center shrink-0 text-[#B89560]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-[#F7F3EC]">Customized Manufacturing</div>
              <div className="text-xs text-[#E8DCCB]/80">Built to your exact room requirements</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-full bg-[#76543E] flex items-center justify-center shrink-0 text-[#B89560]">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-[#F7F3EC]">Repair & Restoration</div>
              <div className="text-xs text-[#E8DCCB]/80">Heirloom revive & modern upholstery</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-full bg-[#76543E] flex items-center justify-center shrink-0 text-[#B89560]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-[#F7F3EC]">Direct Artisan Access</div>
              <div className="text-xs text-[#E8DCCB]/80">Single workshop in Valappad</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#76543E]/50">
        {/* Column 1: Brand Story & Mission */}
        <div className="space-y-4">
          <div className="font-display text-2xl font-bold tracking-tight text-[#F7F3EC]">
            PARVATHY <span className="text-[#B89560] font-light">FURNISHINGS</span>
          </div>
          <p className="text-xs text-[#E8DCCB] leading-relaxed">
            Established in 2005 at Valappad, Thriprayar. With over 20 years of craftsmanship, we specialize in customized furniture manufacturing, furniture repairing, timber restoration, and premium upholstery according to individual customer specifications.
          </p>
          <div className="pt-2">
            <span className="inline-block px-3 py-1 bg-[#76543E] text-[#B89560] text-xs font-semibold rounded uppercase tracking-wider">
              {BUSINESS_INFO.tagline}
            </span>
          </div>
          <div className="text-[11px] text-[#E8DCCB]/75 border-l-2 border-[#B89560] pl-2.5">
            <strong>Important:</strong> We have ONLY ONE physical shop, located exclusively in Valappad.
          </div>
        </div>

        {/* Column 2: Digital Showroom Categories */}
        <div className="space-y-3">
          <h3 className="font-display text-base font-semibold text-[#B89560] uppercase tracking-wider text-xs">
            Showroom Categories
          </h3>
          <ul className="space-y-2 text-xs text-[#E8DCCB]">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/catalog?category=${cat.slug}`}
                  className="hover:text-[#B89560] hover:translate-x-1 inline-block transition-transform duration-150"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Specialized Workshop Services */}
        <div className="space-y-3">
          <h3 className="font-display text-base font-semibold text-[#B89560] uppercase tracking-wider text-xs">
            Workshop & Services
          </h3>
          <ul className="space-y-2 text-xs text-[#E8DCCB]">
            <li>
              <Link to="/our-works" className="hover:text-[#B89560] inline-block font-semibold text-[#B89560]">
                Our Works & Before-After Gallery
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#B89560] inline-block">
                Custom Furniture Manufacturing
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#B89560] inline-block">
                Furniture Repair & Structural Restoration
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#B89560] inline-block">
                Wood Polishing & Refinishing
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#B89560] inline-block">
                Sofa Re-Cushioning & Upholstery
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#B89560] inline-block">
                Custom Curtains & Cushion Making
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#B89560] inline-block">
                Automotive & Vehicle Seat Covering
              </Link>
            </li>
          </ul>

          <div className="pt-3">
            <div className="text-[11px] text-[#B89560] font-semibold uppercase tracking-wider mb-1">
              Shop Location:
            </div>
            <div className="text-[11px] text-[#E8DCCB]/80 leading-snug">
              Single physical shop & workshop on East Tippusulthan Road, Valappad.
            </div>
          </div>
        </div>

        {/* Column 4: Showroom Address & Direct Contacts */}
        <div className="space-y-4">
          <h3 className="font-display text-base font-semibold text-[#B89560] uppercase tracking-wider text-xs">
            Shop & Contact Details
          </h3>
          <div className="space-y-2.5 text-xs text-[#E8DCCB]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F7F3EC] block">PARVATHY FURNISHINGS</strong>
                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.subDistrict}, {BUSINESS_INFO.address.district}, {BUSINESS_INFO.address.state}.
                <div className="text-[11px] text-[#B89560] mt-1">{BUSINESS_INFO.address.landmark}</div>
                <a
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#B89560] hover:text-[#F7F3EC] underline mt-1"
                >
                  View on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Phone className="w-4 h-4 text-[#B89560] shrink-0" />
              <a
                href={BUSINESS_INFO.contact.phoneLink}
                className="hover:text-[#B89560] font-medium"
              >
                {BUSINESS_INFO.contact.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <a
                href={getWhatsAppLink("Hello! I would like to enquire about your showroom in Valappad.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] font-medium"
              >
                WhatsApp: {BUSINESS_INFO.contact.whatsappDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#B89560] shrink-0" />
              <a
                href={BUSINESS_INFO.contact.emailLink}
                className="hover:text-[#B89560] font-medium break-all"
              >
                {BUSINESS_INFO.contact.email}
              </a>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-[#B89560] shrink-0" />
              <div className="text-xs">
                Working Hours: <strong>{typeof BUSINESS_INFO.workingHours === 'string' ? BUSINESS_INFO.workingHours : '9:00 AM – 6:00 PM'}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT & DISCLAIMER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DCCB]/70">
        <div>
          © {new Date().getFullYear()} <strong>PARVATHY FURNISHINGS</strong>. All rights reserved. Crafting Comfort Since 2005.
        </div>
        <div className="text-[11px] text-[#E8DCCB]/60 text-center sm:text-right">
          East Tippusulthan Road, Valappad, Thriprayar, Thrissur, Kerala. (Single Physical Location)
        </div>
      </div>
    </footer>
  );
}
