import { 
  Phone, 
  MessageCircle, 
  Mail,
  MapPin, 
  Clock, 
  ExternalLink,
  ShieldCheck 
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function ContactPage() {
  const quickEnquiryTopics = [
    {
      title: "Custom Wooden Furniture",
      desc: "For custom cots, dining tables, wooden sofas, diwans, and wardrobes.",
      msg: "Hello Parvathy Furnishings, I would like to consult about custom wooden furniture manufacturing for my home.",
    },
    {
      title: "Furniture Repair & Restoration",
      desc: "For structural wood repair, re-polishing, and heirloom refurbishment.",
      msg: "Hello Parvathy Furnishings, I have wooden furniture needing restoration / polishing. Could you inspect it?",
    },
    {
      title: "Sofa Re-Upholstery & Foam",
      desc: "For renewing sagging cushions, fabric change, and leatherette work.",
      msg: "Hello Parvathy Furnishings, I would like to get my sofa re-upholstered with new foam and fabric.",
    },
    {
      title: "Vehicle & Custom Seating",
      desc: "For car seat coverings, leatherette seat covers, and foam restoration.",
      msg: "Hello Parvathy Furnishings, I am looking for custom vehicle seat upholstery / seat foam work.",
    },
  ];

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DCCB] text-[#493528] text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#B89560]" />
          Valappad, Thriprayar, Thrissur
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#493528]">
          Contact Our Workshop
        </h1>
        <p className="text-xs sm:text-sm text-[#76543E] leading-relaxed">
          We believe in direct, personal communication. No complicated online forms or call center delays. Contact our workshop directly via WhatsApp, phone, or email.
        </p>
      </div>

      {/* 2. CONTACT DETAILS & MAPS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl border border-[#E8DCCB] p-6 sm:p-8 shadow-2xs space-y-6">
            <div>
              <Badge variant="gold" size="sm">Single Physical Location</Badge>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#493528] mt-2">
                PARVATHY FURNISHINGS
              </h2>
              <p className="text-xs text-[#76543E] mt-1">{BUSINESS_INFO.tagline}</p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#493528]">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F7F3EC] text-[#B89560] flex items-center justify-center shrink-0 mt-0.5 border border-[#E8DCCB]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#493528]">Shop & Workshop Address:</div>
                  <p className="text-[#76543E] text-xs leading-relaxed mt-0.5">
                    {BUSINESS_INFO.address.full}
                  </p>
                  <div className="text-[11px] text-[#B89560] font-medium mt-1">
                    {BUSINESS_INFO.address.landmark}
                  </div>
                  <a
                    href={BUSINESS_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#B89560] hover:underline mt-1 font-semibold"
                  >
                    View on Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3 pt-2 border-t border-[#E8DCCB]">
                <div className="w-9 h-9 rounded-full bg-[#F7F3EC] text-[#B89560] flex items-center justify-center shrink-0 mt-0.5 border border-[#E8DCCB]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#493528]">Direct Contact Number:</div>
                  <a
                    href={BUSINESS_INFO.contact.phoneLink}
                    className="text-base font-bold text-[#B89560] hover:text-[#493528] hover:underline"
                  >
                    {BUSINESS_INFO.contact.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-[#76543E] mt-0.5">Click to call directly for orders & enquiries</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3 pt-2 border-t border-[#E8DCCB]">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#493528]">WhatsApp Consultation:</div>
                  <a
                    href={getWhatsAppLink("Hello! I am contacting Parvathy Furnishings from your website.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                  >
                    {BUSINESS_INFO.contact.whatsappDisplay}
                  </a>
                  <p className="text-[11px] text-[#76543E] mt-0.5">Send photos, room measurements, or sketches anytime</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 pt-2 border-t border-[#E8DCCB]">
                <div className="w-9 h-9 rounded-full bg-[#F7F3EC] text-[#B89560] flex items-center justify-center shrink-0 mt-0.5 border border-[#E8DCCB]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#493528]">Email Us:</div>
                  <a
                    href={BUSINESS_INFO.contact.emailLink}
                    className="text-sm font-bold text-[#B89560] hover:text-[#493528] hover:underline break-all"
                  >
                    {BUSINESS_INFO.contact.email}
                  </a>
                  <p className="text-[11px] text-[#76543E] mt-0.5">Click to send an email enquiry directly</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 pt-2 border-t border-[#E8DCCB]">
                <div className="w-9 h-9 rounded-full bg-[#F7F3EC] text-[#B89560] flex items-center justify-center shrink-0 mt-0.5 border border-[#E8DCCB]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#493528]">Working Hours:</div>
                  <p className="text-sm font-semibold text-[#493528] mt-0.5">
                    {typeof BUSINESS_INFO.workingHours === 'string' ? BUSINESS_INFO.workingHours : '9:00 AM – 6:00 PM'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-[#E8DCCB] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                href={BUSINESS_INFO.contact.phoneLink}
                variant="secondary"
                size="md"
                icon={Phone}
                className="w-full"
              >
                Call Us Now
              </Button>
              <Button
                href={getWhatsAppLink("Hello! I would like to enquire about your showroom in Valappad.")}
                variant="whatsapp"
                size="md"
                icon={MessageCircle}
                className="w-full"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Location Transparency Card */}
          <div className="bg-[#F7F3EC] rounded-xl border border-[#E8DCCB] p-5 text-xs text-[#76543E] space-y-2">
            <div className="font-bold text-[#493528] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B89560]" />
              <span>Single Physical Location Policy</span>
            </div>
            <p className="leading-relaxed">
              PARVATHY FURNISHINGS has <strong>only one physical shop and workshop</strong>, situated in Valappad, Thriprayar. We do not have showrooms or branch outlets in any other towns or cities.
            </p>
          </div>
        </div>

        {/* Right Column: 1-Click WhatsApp Topic Shortcuts & Map Card */}
        <div className="lg:col-span-7 space-y-6">
          {/* Quick WhatsApp Topic Selection */}
          <div className="bg-white rounded-xl border border-[#E8DCCB] p-6 sm:p-8 shadow-2xs space-y-4">
            <div>
              <div className="font-display text-lg font-bold text-[#493528]">
                Instant WhatsApp Enquiry by Service
              </div>
              <p className="text-xs text-[#76543E] mt-0.5">
                Click any topic below to open WhatsApp with a pre-filled message for immediate consultation:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickEnquiryTopics.map((item, idx) => (
                <a
                  key={idx}
                  href={getWhatsAppLink(item.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-[#F7F3EC] border border-[#E8DCCB] hover:border-[#25D366] hover:bg-white transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-[#493528] group-hover:text-emerald-700 flex items-center justify-between">
                      <span>{item.title}</span>
                      <MessageCircle className="w-4 h-4 text-emerald-600 opacity-60 group-hover:opacity-100" />
                    </div>
                    <p className="text-[11px] text-[#76543E] mt-1.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <span>Enquire on WhatsApp</span>
                    <span>&rarr;</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Location Map Guidance Card */}
          <div className="bg-[#493528] text-[#F7F3EC] rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="gold" size="sm">Visiting Our Workshop</Badge>
              <a
                href={BUSINESS_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#B89560] hover:text-[#F7F3EC] underline flex items-center gap-1"
              >
                Open Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <h3 className="font-display text-xl font-bold">
              Shop & Workshop Location in Valappad
            </h3>

            <p className="text-xs text-[#E8DCCB] leading-relaxed">
              We are located on <strong>East Tippusulthan Road in Valappad, Thriprayar, Thrissur</strong>. Customers are welcome to visit our workshop during working hours (9:00 AM – 6:00 PM) to discuss custom requirements, inspect craftsmanship, or choose upholstery materials.
            </p>

            <div className="p-3.5 bg-[#76543E]/60 rounded-lg text-xs space-y-1.5 border border-[#B89560]/30">
              <div className="font-semibold text-[#F7F3EC]">📍 Landmark & Driving Information:</div>
              <div>East Tippusulthan Road, Valappad, Thriprayar, Thrissur, Kerala.</div>
              <div className="text-[11px] text-[#E8DCCB]/80 pt-1">
                Please call us at <strong>{BUSINESS_INFO.contact.phoneDisplay}</strong> before visiting so our team can assist you directly.
              </div>
            </div>

            <div className="pt-2">
              <Button
                href={BUSINESS_INFO.address.googleMapsUrl}
                variant="primary"
                size="md"
                icon={MapPin}
                className="w-full sm:w-auto"
              >
                Navigate to Workshop via Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
