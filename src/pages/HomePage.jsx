import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  Clock,
  ExternalLink,
  Briefcase,
  Wrench
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { SERVICES } from '../data/services';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionTitle from '../components/common/SectionTitle';
import ProductCard from '../components/products/ProductCard';
import ServiceCard from '../components/services/ServiceCard';
import ImageWithFallback from '../components/common/ImageWithFallback';

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProducts = selectedFilter === 'all'
    ? PRODUCTS.slice(0, 6)
    : PRODUCTS.filter((p) => p.category === selectedFilter);

  const homeTabs = [
    { id: 'all', label: 'All Collections' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining-tables', label: 'Tables & Dining' },
    { id: 'wardrobes-storage', label: 'Wardrobes' },
    { id: 'curtains-upholstery', label: 'Curtains & Upholstery' },
    { id: 'vehicle-upholstery', label: 'Vehicle Upholstery' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#493528] text-[#F7F3EC] overflow-hidden">
        {/* Premium Living Room Interior Background */}
        <div 
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-luminosity"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#493528] via-[#493528]/95 to-[#493528]/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Description & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#76543E]/70 border border-[#B89560]/50 text-[#F7F3EC] text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B89560]" />
              <span>{BUSINESS_INFO.experienceText} (Est. {BUSINESS_INFO.establishedYear})</span>
            </div>

            {/* Exact Required Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-[#F7F3EC]">
              Custom Furniture & Restoration,{' '}
              <span className="italic text-[#B89560] font-light">Crafted for Your Home.</span>
            </h1>

            {/* Exact Required Description */}
            <p className="text-sm sm:text-base text-[#E8DCCB] max-w-2xl leading-relaxed">
              From customized furniture creations to transforming old furniture into something beautiful, discover the craftsmanship of Parvathy Furnishings.
            </p>

            {/* Action Buttons: Explore Our Collections & Contact Us on WhatsApp */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                to="/catalog"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore Our Collections
              </Button>

              <Button
                href={getWhatsAppLink("Hello! I would like to consult with Parvathy Furnishings about custom furniture creations / restoration.")}
                variant="whatsapp"
                size="lg"
                icon={MessageCircle}
              >
                Contact Us on WhatsApp
              </Button>

              <Button
                href={BUSINESS_INFO.contact.phoneLink}
                variant="cream"
                size="lg"
                icon={Phone}
              >
                {BUSINESS_INFO.contact.phoneDisplay}
              </Button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-[#76543E]/60 grid grid-cols-3 gap-4 max-w-lg text-xs">
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-[#B89560]">20+</div>
                <div className="text-[#E8DCCB]/80 text-[11px]">Years of Craftsmanship</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-[#B89560]">100%</div>
                <div className="text-[#E8DCCB]/80 text-[11px]">Customized to Needs</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-[#B89560]">Direct</div>
                <div className="text-[#E8DCCB]/80 text-[11px]">Valappad Workshop Access</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Featured Card (Transparently labelled DESIGN INSPIRATION) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative bg-[#F7F3EC] p-4 rounded-2xl shadow-2xl border border-[#B89560]/30 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                  alt="Living room sofa suite design inspiration"
                  aspectRatio="aspect-4/3"
                  className="w-full h-full object-cover"
                />
                {/* Clean Label: DESIGN INSPIRATION */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded bg-[#493528]/85 backdrop-blur-xs text-[#E8DCCB] text-[10px] font-bold tracking-wider uppercase shadow-xs">
                    DESIGN INSPIRATION
                  </span>
                </div>
              </div>
              <div className="text-[#493528]">
                <div className="text-[11px] font-bold text-[#B89560] uppercase tracking-wider">Custom Living Collection</div>
                <h3 className="font-display text-lg font-bold">Handcrafted Solid Wood Living Suite</h3>
                <p className="text-xs text-[#76543E] mt-1 leading-relaxed">
                  Custom manufactured to your required living room dimensions, cushion firmness, and fabric choice.
                </p>
                <div className="mt-3 flex items-center justify-between pt-3 border-t border-[#E8DCCB]">
                  <span className="text-xs font-semibold text-[#493528]">📍 East Tippusulthan Road, Valappad</span>
                  <Link to="/catalog?category=living-room" className="text-xs font-bold text-[#B89560] hover:text-[#76543E] underline">
                    View Living Room &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BROWSE BY FURNITURE CATEGORY (ALL 6 MAIN CATEGORIES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Explore Our Collections"
          title="Browse By Furniture Category"
          subtitle="Explore our digital showroom to discover custom furniture designs, restoration works, and specialized upholstery."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/catalog?category=${category.slug}`}
              className="group flex flex-col bg-white rounded-xl border border-[#E8DCCB] p-3 text-center shadow-2xs hover:shadow-md hover:border-[#B89560] transition-all duration-200"
            >
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[#F7F3EC] mb-3">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  aspectRatio="aspect-square"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 text-[10px] font-bold bg-[#493528]/80 text-white px-1.5 py-0.5 rounded shadow-xs pointer-events-none">
                  {category.badge}
                </span>
              </div>
              <h3 className="font-display text-xs sm:text-sm font-bold text-[#493528] group-hover:text-[#B89560] transition-colors leading-tight mb-1">
                {category.name}
              </h3>
              <p className="text-[11px] text-[#76543E] line-clamp-1">
                {category.subcategories.length} Categories
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. DIGITAL SHOWROOM HIGHLIGHTS & PRODUCT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#B89560]"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B89560]">
                Digital Showroom
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#493528]">
              Featured Furniture & Upholstery
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#E8DCCB]/50 p-1.5 rounded-lg border border-[#E8DCCB] overflow-x-auto">
            {homeTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedFilter === tab.id
                    ? 'bg-[#493528] text-white shadow-2xs'
                    : 'text-[#493528] hover:bg-[#E8DCCB]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Consistent Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button
            to="/catalog"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            Explore Complete Digital Showroom ({PRODUCTS.length} Designs)
          </Button>
        </div>
      </section>

      {/* 4. DEDICATED OUR WORKS / PORTFOLIO SPOTLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl bg-gradient-to-br from-[#493528] to-[#38281E] text-[#F7F3EC] p-8 sm:p-12 overflow-hidden shadow-xl border border-[#76543E]">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#76543E] text-[#F7F3EC] text-xs font-semibold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-[#B89560]" />
                <span>Dedicated Portfolio</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                Explore Our Works & Before-After Transformations
              </h2>
              <p className="text-sm text-[#E8DCCB] max-w-2xl leading-relaxed">
                See our comprehensive portfolio divided into New Furniture Creations, Heirloom Furniture Restoration (with interactive before-and-after sliders), and Automotive Vehicle Seat Covering.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  to="/our-works"
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Visit Our Works Gallery
                </Button>
                <Button
                  href={getWhatsAppLink("Hello! I have furniture that needs restoration. Can I send photos for a preliminary assessment?")}
                  variant="whatsapp"
                  size="md"
                  icon={MessageCircle}
                >
                  Send Restoration Photos on WhatsApp
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-[#B89560]/30 text-xs space-y-3">
              <div className="font-bold text-[#F7F3EC] text-sm flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#B89560]" />
                <span>Restoration Services:</span>
              </div>
              <div className="flex items-start gap-2 text-[#E8DCCB]">
                <CheckCircle2 className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
                <span>Sagging sofa re-cushioning with resilient foam.</span>
              </div>
              <div className="flex items-start gap-2 text-[#E8DCCB]">
                <CheckCircle2 className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
                <span>Hand-rubbed wood polishing and structural repair.</span>
              </div>
              <div className="flex items-start gap-2 text-[#E8DCCB]">
                <CheckCircle2 className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
                <span>Vehicle seat foam reshaping and custom leatherette.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROMOTIONAL WORKSHOP BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl bg-[#E8DCCB] border border-[#B89560]/40 p-8 sm:p-12 overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="gold" size="md">Custom Furniture & Restoration</Badge>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#493528]">
                Have Custom Measurements or Furniture Needing Care?
              </h2>
              <p className="text-sm text-[#76543E] max-w-2xl leading-relaxed">
                Send your room floor plans, design sketches, or photos of your furniture to our craftsmen on WhatsApp or telephone. We provide transparent advice, material guidance, and custom manufacturing estimates based on your exact requirements.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  href={getWhatsAppLink("Hello! I have a custom furniture requirement and would like to share my design/dimensions.")}
                  variant="whatsapp"
                  size="md"
                  icon={MessageCircle}
                >
                  Send Design on WhatsApp
                </Button>
                <Button
                  href={BUSINESS_INFO.contact.phoneLink}
                  variant="secondary"
                  size="md"
                  icon={Phone}
                >
                  Call: {BUSINESS_INFO.contact.phoneDisplay}
                </Button>
                <Button
                  href={BUSINESS_INFO.contact.emailLink}
                  variant="outline"
                  size="md"
                  icon={Mail}
                >
                  Email Us
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/80 backdrop-blur-xs p-6 rounded-xl border border-[#B89560]/30 text-xs space-y-3">
              <div className="font-bold text-[#493528] text-sm">Direct Artisan Commitment:</div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
                <span>Zero middlemen — deal directly with the craftsmen.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
                <span>Visit our single physical workshop and showroom in Valappad.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
                <span>Custom timber fabrication, structural repair, and upholstery.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES & RESTORATION SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Specialized Capabilities"
          title="Manufacturing, Restoration & Upholstery"
          subtitle="Beyond showroom pieces, our workshop handles custom wood carpentry, furniture repair, antique restoration, and specialized vehicle upholstery with over 20 years of craftsmanship."
        />

        <div className="space-y-8">
          {SERVICES.slice(0, 3).map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            to="/services"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            Learn More About Our Workshop Services
          </Button>
        </div>
      </section>

      {/* 7. VISIT OUR SINGLE PHYSICAL SHOP IN VALAPPAD, THRIPRAYAR */}
      <section className="bg-white py-16 border-t border-b border-[#E8DCCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="gold" size="md">Single Physical Location</Badge>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#493528]">
              Visit Our Shop & Workshop in Valappad
            </h2>
            <p className="text-sm text-[#76543E] leading-relaxed">
              We have <strong>only one physical shop</strong>, conveniently located on East Tippusulthan Road in Valappad, Thriprayar. We welcome you to visit our workshop, discuss custom dimensions, inspect raw timber frames, and choose fabric swatches in person.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#493528]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
                <div>
                  <strong>Shop & Workshop Address:</strong>
                  <div className="text-xs text-[#76543E] mt-0.5">{BUSINESS_INFO.address.full}</div>
                  <div className="text-[#B89560] text-[11px] mt-0.5">{BUSINESS_INFO.address.landmark}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B89560] shrink-0" />
                <div>
                  <strong>Phone:</strong>{' '}
                  <a href={BUSINESS_INFO.contact.phoneLink} className="hover:underline font-semibold text-[#B89560]">
                    {BUSINESS_INFO.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <strong>WhatsApp:</strong>{' '}
                  <a
                    href={getWhatsAppLink("Hello! I would like to enquire about your workshop.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-semibold text-emerald-700"
                  >
                    {BUSINESS_INFO.contact.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B89560] shrink-0" />
                <div>
                  <strong>Email:</strong>{' '}
                  <a href={BUSINESS_INFO.contact.emailLink} className="hover:underline font-semibold text-[#B89560]">
                    {BUSINESS_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#B89560] shrink-0" />
                <div>
                  <strong>Working Hours:</strong>{' '}
                  <span className="font-semibold text-[#493528]">
                    {BUSINESS_INFO.workingHours}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                href={BUSINESS_INFO.address.googleMapsUrl}
                variant="primary"
                size="md"
                icon={MapPin}
              >
                Open Google Maps Directions
              </Button>
              <Button
                href={BUSINESS_INFO.contact.phoneLink}
                variant="outline"
                size="md"
                icon={Phone}
              >
                Call Before Visiting
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-[#E8DCCB] shadow-md bg-[#F7F3EC] p-6 space-y-4">
              <div className="font-display text-lg font-bold text-[#493528]">
                Important Location Policy
              </div>
              <p className="text-xs text-[#76543E] leading-relaxed">
                PARVATHY FURNISHINGS operates <strong>exclusively from our single physical shop & workshop located in Valappad</strong>. We do not maintain showrooms, branch outlets, or physical sales stores in any other location.
              </p>
              <div className="p-3.5 bg-white rounded-lg border border-[#E8DCCB] space-y-2 text-xs">
                <div className="font-semibold text-[#493528] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B89560]" />
                  <span>Verified Single Shop Location:</span>
                </div>
                <div className="text-[11px] text-[#76543E]">
                  East Tippusulthan Road, Valappad, Thriprayar, Thrissur, Kerala.
                </div>
                <div className="pt-1">
                  <a
                    href={BUSINESS_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B89560] hover:underline"
                  >
                    <span>View Exact Pin on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="text-[11px] text-[#76543E]/90 italic">
                * For delivery or custom order consultations in your locality, please contact us directly via WhatsApp or phone.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
