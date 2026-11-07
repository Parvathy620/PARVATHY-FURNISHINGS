import { Sparkles, ShieldCheck, HeartHandshake, MapPin, Hammer, MessageCircle, Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
      {/* 1. HERO HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DCCB] text-[#493528] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#B89560]" />
          Est. {BUSINESS_INFO.establishedYear} — {BUSINESS_INFO.experienceText}
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#493528]">
          The Story of PARVATHY FURNISHINGS
        </h1>
        <p className="text-xs sm:text-sm text-[#76543E] leading-relaxed">
          Founded in Valappad, Thriprayar. For over two decades, we have been crafting custom comfort, quality furniture, and dedicated restoration for homes and establishments.
        </p>
      </div>

      {/* 2. THE STORY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative aspect-4/3 rounded-xl overflow-hidden shadow-lg border border-[#E8DCCB]">
          <img
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=80"
            alt="Timber craftsmanship tradition"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#493528]/90 backdrop-blur-xs text-[#F7F3EC] p-3 rounded text-xs flex items-center justify-between">
            <span>Craftsmanship Tradition</span>
            <span className="font-bold text-[#B89560]">Est. {BUSINESS_INFO.establishedYear}</span>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#76543E] leading-relaxed">
          <Badge variant="gold" size="sm">Our Origin</Badge>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#493528]">
            Crafting Quality Furniture Since {BUSINESS_INFO.establishedYear}
          </h2>
          <p>
            Founded in {BUSINESS_INFO.establishedYear} in Valappad, Thriprayar, <strong>PARVATHY FURNISHINGS</strong> was built with a clear purpose: <em>crafting honest, durable furniture and providing dedicated repair and restoration services tailored to every customer</em>.
          </p>
          <p>
            Operating from our single physical workshop and showroom on East Tippusulthan Road in Valappad, we have spent over 20 years designing custom living suites, bedroom cots, dining tables, wardrobes, and upholstery works according to individual client requirements.
          </p>
          <p>
            Whether creating a new piece from scratch or restoring a treasured family furniture item, you interact directly with the craftsmen who build, upholster, and finish your furniture.
          </p>
          <div className="p-3 bg-[#F7F3EC] rounded-lg border border-[#E8DCCB] text-xs text-[#493528]">
            <strong>Single Physical Location:</strong> Our business operates exclusively from our workshop in Valappad, Thriprayar, Thrissur. We do not maintain any branch showrooms.
          </div>
        </div>
      </div>

      {/* 3. CORE PRINCIPLES */}
      <div className="bg-white rounded-2xl border border-[#E8DCCB] p-8 sm:p-12 shadow-2xs">
        <SectionTitle
          eyebrow="Our Craft Values"
          title="What Guides Our Workshop"
          subtitle="Four foundational commitments that guide every piece we manufacture or restore."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-[#F7F3EC] border border-[#E8DCCB] space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#B89560]" />
            <h3 className="font-display text-base font-bold text-[#493528]">Custom Manufacturing</h3>
            <p className="text-xs text-[#76543E] leading-relaxed">
              Every furniture piece is built to order based on your space requirements, preferred timber, and design choices.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F7F3EC] border border-[#E8DCCB] space-y-2">
            <Hammer className="w-6 h-6 text-[#B89560]" />
            <h3 className="font-display text-base font-bold text-[#493528]">Reliable Joinery</h3>
            <p className="text-xs text-[#76543E] leading-relaxed">
              Careful timber joinery and structural integrity designed to ensure lasting stability and daily comfort.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F7F3EC] border border-[#E8DCCB] space-y-2">
            <HeartHandshake className="w-6 h-6 text-[#B89560]" />
            <h3 className="font-display text-base font-bold text-[#493528]">Direct Interaction</h3>
            <p className="text-xs text-[#76543E] leading-relaxed">
              Deal directly with the craftsmen at our Valappad workshop without intermediary sales markups.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F7F3EC] border border-[#E8DCCB] space-y-2">
            <Sparkles className="w-6 h-6 text-[#B89560]" />
            <h3 className="font-display text-base font-bold text-[#493528]">Repair & Upholstery</h3>
            <p className="text-xs text-[#76543E] leading-relaxed">
              Expert wooden furniture restoration, sofa re-cushioning, curtain tailoring, and automotive seat coverings.
            </p>
          </div>
        </div>
      </div>

      {/* 4. SHOWROOM & WORKSHOP LOCATION */}
      <div className="bg-[#493528] text-[#F7F3EC] rounded-2xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <Badge variant="gold" size="md">Single Physical Location</Badge>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Visit Our Workshop in Valappad
            </h2>
            <p className="text-xs sm:text-sm text-[#E8DCCB] leading-relaxed">
              We welcome customers to visit our premises on East Tippusulthan Road in Valappad. Discuss dimensions, inspect in-progress work, and choose upholstery fabrics directly.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E8DCCB]">
              <MapPin className="w-4 h-4 text-[#B89560] shrink-0" />
              <span>{BUSINESS_INFO.address.full}</span>
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                href={BUSINESS_INFO.address.googleMapsUrl}
                variant="primary"
                size="md"
                icon={MapPin}
              >
                Directions on Google Maps
              </Button>
              <Button
                href={getWhatsAppLink("Hello! I'd like to visit your Valappad workshop.")}
                variant="whatsapp"
                size="md"
                icon={MessageCircle}
              >
                WhatsApp Workshop Visit
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#76543E]/60 p-6 rounded-xl border border-[#B89560]/30 space-y-3 text-xs">
            <div className="font-bold text-[#F7F3EC] text-sm">Working Hours:</div>
            <div className="text-sm font-semibold text-[#F7F3EC]">
              {typeof BUSINESS_INFO.workingHours === 'string' ? BUSINESS_INFO.workingHours : '9:00 AM – 6:00 PM'}
            </div>
            <div className="pt-2 border-t border-[#B89560]/30 space-y-2">
              <div>
                <strong className="text-[#B89560] block mb-0.5">Direct Call:</strong>
                <a href={BUSINESS_INFO.contact.phoneLink} className="text-sm font-bold text-white hover:underline flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#B89560]" />
                  <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
                </a>
              </div>
              <div>
                <strong className="text-[#B89560] block mb-0.5">Email:</strong>
                <a href={BUSINESS_INFO.contact.emailLink} className="text-xs font-medium text-white hover:underline flex items-center gap-1.5 break-all">
                  <Mail className="w-3.5 h-3.5 text-[#B89560] shrink-0" />
                  <span>{BUSINESS_INFO.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
