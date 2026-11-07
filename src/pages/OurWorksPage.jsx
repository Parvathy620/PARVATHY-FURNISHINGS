import { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Layers, 
  RotateCcw, 
  MessageCircle, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Wrench, 
  Car, 
  Armchair
} from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS, BEFORE_AFTER_PROJECTS } from '../data/portfolioData';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';
import BeforeAfterSlider from '../components/portfolio/BeforeAfterSlider';
import ImageWithFallback from '../components/common/ImageWithFallback';
import Button from '../components/common/Button';

export default function OurWorksPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');

  // Derive available subcategories based on current category
  const availableSubCategories = useMemo(() => {
    const items = selectedCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);
    
    const set = new Set();
    items.forEach((item) => {
      if (item.subCategory) set.add(item.subCategory);
    });
    return Array.from(set);
  }, [selectedCategory]);

  // Filtered portfolio gallery items
  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSub = selectedSubCategory === 'all' || item.subCategory === selectedSubCategory;
      return matchCat && matchSub;
    });
  }, [selectedCategory, selectedSubCategory]);

  // Handle main category switch
  const handleCategorySwitch = (catId) => {
    setSelectedCategory(catId);
    setSelectedSubCategory('all');
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
      {/* 1. HERO HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DCCB] text-[#493528] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#B89560]" />
          Portfolio & Design Gallery
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#493528]">
          Our Craftsmanship & Creations
        </h1>
        <p className="text-xs sm:text-sm text-[#76543E] leading-relaxed">
          From custom-crafted solid wood living suites and bedroom cots to delicate heirloom furniture restoration and tailored vehicle seating. Explore the capabilities of our workshop in Valappad, Thriprayar.
        </p>
      </div>

      {/* 2. TRANSPARENCY NOTICE */}
      <div className="bg-[#F7F3EC] border border-[#E8DCCB] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#76543E]">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E8DCCB] text-[#B89560] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-[#493528]">Design Inspiration & Workshop References:</div>
            <p className="text-[11px] text-[#76543E] mt-0.5 leading-snug">
              Every card is clearly labelled. Reference photos represent design models we fabricate or restore to order at our single Valappad workshop.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#493528] font-semibold shrink-0">
          <MapPin className="w-3.5 h-3.5 text-[#B89560]" />
          <span>East Tippusulthan Road, Valappad</span>
        </div>
      </div>

      {/* 3. INTERACTIVE BEFORE & AFTER RESTORATION SHOWCASE */}
      {(selectedCategory === 'all' || selectedCategory === 'restoration' || selectedCategory === 'vehicle-upholstery') && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E8DCCB] pb-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#B89560] uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                <span>Restoration Spotlight</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#493528] mt-1">
                Before & After Transformations
              </h2>
            </div>
            <p className="text-xs text-[#76543E] max-w-md">
              Drag the interactive slider handle left and right on each piece to see how our craftsmen revive aged wood and collapsed foam.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {BEFORE_AFTER_PROJECTS.map((project) => (
              <BeforeAfterSlider key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* 4. MAIN CATEGORY FILTERS & GALLERY */}
      <section className="space-y-8">
        {/* Filter Controls Box */}
        <div className="bg-white rounded-xl border border-[#E8DCCB] p-4 sm:p-6 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[11px] font-bold text-[#76543E] uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#B89560]" />
              <span>Filter By Workshop Branch:</span>
            </span>

            {selectedSubCategory !== 'all' && (
              <button
                onClick={() => setSelectedSubCategory('all')}
                className="text-xs text-[#B89560] hover:underline font-semibold flex items-center gap-1 cursor-pointer self-start sm:self-auto"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset subcategory filter</span>
              </button>
            )}
          </div>

          {/* Primary Branch Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = cat.id === 'all'
                ? PORTFOLIO_ITEMS.length
                : PORTFOLIO_ITEMS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySwitch(cat.id)}
                  className={`py-3 px-3 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#493528] text-white border-[#493528] shadow-xs'
                      : 'bg-[#F7F3EC] text-[#493528] border-[#E8DCCB] hover:bg-[#E8DCCB]'
                  }`}
                >
                  <div>{cat.name}</div>
                  <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-[#B89560]' : 'text-[#76543E]'}`}>
                    {count} Designs
                  </div>
                </button>
              );
            })}
          </div>

          {/* Secondary Subcategory Chips (Compact) */}
          {availableSubCategories.length > 0 && (
            <div className="pt-3 border-t border-[#E8DCCB]/60 flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-bold text-[#76543E] mr-1">Types:</span>
              <button
                onClick={() => setSelectedSubCategory('all')}
                className={`text-xs px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  selectedSubCategory === 'all'
                    ? 'bg-[#B89560] text-white font-semibold'
                    : 'bg-[#F7F3EC] text-[#76543E] hover:bg-[#E8DCCB]'
                }`}
              >
                All ({availableSubCategories.length})
              </button>
              {availableSubCategories.map((sub, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`text-xs px-3 py-1 rounded-full transition-colors cursor-pointer ${
                    selectedSubCategory === sub
                      ? 'bg-[#B89560] text-white font-semibold'
                      : 'bg-[#F7F3EC] text-[#76543E] hover:bg-[#E8DCCB]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredItems.map((item) => {
            const whatsappMessage = `Hello Parvathy Furnishings, I am looking at "${item.title}" in your Our Works gallery. Could you please share more information and custom pricing?`;
            return (
              <article
                key={item.id}
                className="group h-full flex flex-col justify-between bg-white rounded-xl border border-[#E8DCCB] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#B89560]/60 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-4/3 w-full bg-[#F7F3EC] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    aspectRatio="aspect-4/3"
                    fallbackText={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Clean Label Badge: DESIGN INSPIRATION */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#493528]/85 backdrop-blur-xs text-[#E8DCCB] text-[10px] font-semibold tracking-wider uppercase shadow-xs">
                      {item.label}
                    </span>
                  </div>

                  {/* Category Indicator */}
                  <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-medium">
                      {item.category === 'new-furniture' && <Armchair className="w-3 h-3 text-[#B89560]" />}
                      {item.category === 'restoration' && <Wrench className="w-3 h-3 text-[#B89560]" />}
                      {item.category === 'vehicle-upholstery' && <Car className="w-3 h-3 text-[#B89560]" />}
                      <span>{item.subCategory}</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[11px] font-semibold text-[#B89560] uppercase tracking-wider mb-1">
                      {item.subCategory}
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#493528] group-hover:text-[#B89560] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#76543E] line-clamp-2 leading-relaxed mt-1.5">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8DCCB]/60">
                    <Button
                      href={getWhatsAppLink(whatsappMessage)}
                      variant="whatsapp"
                      size="sm"
                      icon={MessageCircle}
                      className="w-full"
                    >
                      Enquire Similar on WhatsApp
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 5. WORKSHOP VISIT & CUSTOM CONSULTATION CTA */}
      <section className="bg-[#493528] text-[#F7F3EC] rounded-2xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          Have a Custom Blueprint or Furniture Needing Revival?
        </h2>
        <p className="text-xs sm:text-sm text-[#E8DCCB] max-w-2xl mx-auto leading-relaxed">
          Visit our workshop on East Tippusulthan Road, Valappad, Thriprayar. Discuss room dimensions, inspect in-progress timber joinery, or share photos on WhatsApp for immediate guidance.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Button
            href={getWhatsAppLink("Hello Parvathy Furnishings, I would like to consult with your craftsmen regarding a custom furniture/restoration requirement.")}
            variant="whatsapp"
            size="md"
            icon={MessageCircle}
          >
            Chat on WhatsApp
          </Button>
          <Button
            href={BUSINESS_INFO.contact.phoneLink}
            variant="cream"
            size="md"
            icon={Phone}
          >
            Call: {BUSINESS_INFO.contact.phoneDisplay}
          </Button>
          <Button
            to="/contact"
            variant="outline"
            size="md"
            className="border-white/40 text-white hover:bg-white hover:text-[#493528]"
          >
            Valappad Workshop Directions
          </Button>
        </div>
      </section>
    </div>
  );
}
