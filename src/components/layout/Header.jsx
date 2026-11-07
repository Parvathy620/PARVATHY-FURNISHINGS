import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Mail,
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Search,
  Clock,
  Sparkles,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../../data/businessInfo';
import { CATEGORIES } from '../../data/categories';
import Button from '../common/Button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Subtle elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-[#F7F3EC] transition-all duration-200 ${isScrolled ? 'shadow-md' : 'shadow-xs'}`}>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#493528] text-[#F7F3EC] text-xs py-2 px-4 border-b border-[#76543E]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Single Physical Shop Location */}
          <div className="flex items-center gap-1.5 tracking-wide font-normal text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#B89560] shrink-0" />
            <span>
              Shop & Workshop: <strong>East Tippusulthan Road, Valappad, Thriprayar</strong>
            </span>
          </div>

          {/* Contact Details & Hours */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <a
              href={BUSINESS_INFO.contact.phoneLink}
              className="flex items-center gap-1.5 hover:text-[#B89560] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B89560]" />
              <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>
            <span className="text-[#B89560]/60">|</span>
            <a
              href={BUSINESS_INFO.contact.emailLink}
              className="hidden md:flex items-center gap-1.5 hover:text-[#B89560] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#B89560]" />
              <span>{BUSINESS_INFO.contact.email}</span>
            </a>
            <span className="hidden md:inline text-[#B89560]/60">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#E8DCCB]/90">
              <Clock className="w-3 h-3 text-[#B89560]" />
              {BUSINESS_INFO.workingHours}
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & BRAND IDENTITY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <Link to="/" onClick={closeMenus} className="flex flex-col group shrink-0">
          <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#493528] group-hover:text-[#76543E] transition-colors leading-none">
            PARVATHY <span className="text-[#B89560] font-light">FURNISHINGS</span>
          </div>
          <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#76543E] font-medium mt-1">
            {BUSINESS_INFO.tagline}
          </div>
        </Link>

        {/* Quick Search Jump for Desktop */}
        <div className="hidden lg:flex flex-1 max-w-sm mx-4">
          <Link
            to="/catalog"
            onClick={closeMenus}
            className="w-full flex items-center justify-between px-3.5 py-2 bg-white rounded-lg border border-[#E8DCCB] text-xs text-[#76543E] hover:border-[#B89560] shadow-2xs transition-colors"
          >
            <span className="flex items-center gap-2 text-stone-500 truncate">
              <Search className="w-4 h-4 text-[#B89560] shrink-0" />
              <span>Search furniture, curtains, car seats...</span>
            </span>
            <span className="text-[10px] uppercase font-semibold bg-[#F7F3EC] px-2 py-0.5 rounded text-[#76543E] shrink-0 ml-2">
              Browse
            </span>
          </Link>
        </div>

        {/* Direct Contact Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.contact.phoneLink}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#493528] hover:bg-[#E8DCCB]/60 transition-colors border border-transparent hover:border-[#E8DCCB]"
          >
            <div className="w-7 h-7 rounded-full bg-[#E8DCCB] flex items-center justify-center text-[#493528] shrink-0">
              <Phone className="w-3.5 h-3.5 text-[#493528]" />
            </div>
            <div className="text-left">
              <div className="text-[9px] text-[#76543E] uppercase tracking-wider font-semibold">Call Workshop</div>
              <div className="font-bold text-xs text-[#493528]">{BUSINESS_INFO.contact.phoneDisplay}</div>
            </div>
          </a>

          <Button
            href={getWhatsAppLink("Hello! I would like to enquire about your custom furniture, curtains, or vehicle upholstery services.")}
            variant="whatsapp"
            size="sm"
            icon={MessageCircle}
          >
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={BUSINESS_INFO.contact.phoneLink}
            className="p-2 text-[#493528] hover:bg-[#E8DCCB] rounded-lg"
            aria-label="Call Business"
          >
            <Phone className="w-5 h-5 text-[#B89560]" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#493528] hover:bg-[#E8DCCB] rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. NAVIGATION BAR WITH EXPANDED MEGA MENU (ALL 6 CATEGORIES) & OUR WORKS */}
      <nav className="hidden sm:block border-t border-b border-[#E8DCCB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <ul className="flex items-center gap-1 lg:gap-2 text-xs font-semibold uppercase tracking-wider text-[#493528]">
            <li>
              <Link
                to="/"
                onClick={closeMenus}
                className={`inline-block py-3 px-3 hover:text-[#B89560] transition-colors border-b-2 ${
                  location.pathname === '/' ? 'border-[#B89560] text-[#B89560]' : 'border-transparent'
                }`}
              >
                Home
              </Link>
            </li>

            {/* Furniture & Upholstery Mega Menu Trigger */}
            <li
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu('categories')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                to="/catalog"
                onClick={closeMenus}
                className={`inline-flex items-center gap-1 py-3 px-3 hover:text-[#B89560] transition-colors border-b-2 ${
                  location.pathname.startsWith('/catalog') ? 'border-[#B89560] text-[#B89560]' : 'border-transparent'
                }`}
              >
                <span>Digital Showroom</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#B89560] transition-transform group-hover:rotate-180" />
              </Link>

              {/* Mega Menu Panel */}
              <div
                className={`absolute left-0 top-full w-[900px] bg-white border border-[#E8DCCB] shadow-2xl rounded-b-lg p-6 grid grid-cols-3 gap-6 transition-all duration-200 z-50 ${
                  activeMegaMenu === 'categories' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="space-y-2">
                    <Link
                      to={`/catalog?category=${cat.slug}`}
                      onClick={closeMenus}
                      className="flex items-center gap-2 font-display text-xs font-bold text-[#493528] hover:text-[#B89560] transition-colors border-b border-[#E8DCCB]/60 pb-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89560]"></span>
                      {cat.name}
                    </Link>
                    <ul className="space-y-1 pl-2 text-[11px] font-normal tracking-normal text-[#76543E]">
                      {cat.subcategories.slice(0, 4).map((sub) => (
                        <li key={sub.id}>
                          <Link
                            to={`/catalog?category=${cat.slug}&subcategory=${sub.slug}`}
                            onClick={closeMenus}
                            className="hover:text-[#B89560] hover:underline block py-0.5 truncate"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="col-span-3 pt-3 border-t border-[#E8DCCB] flex items-center justify-between bg-[#F7F3EC] -mx-6 -mb-6 p-4 rounded-b-lg">
                  <div className="flex items-center gap-2 text-xs text-[#76543E]">
                    <ShieldCheck className="w-4 h-4 text-[#B89560]" />
                    <span>Customized to your exact requirements at our Valappad workshop.</span>
                  </div>
                  <Link
                    to="/catalog"
                    onClick={closeMenus}
                    className="text-xs font-bold text-[#B89560] hover:text-[#76543E] underline flex items-center gap-1"
                  >
                    Explore Complete Catalogue ({CATEGORIES.length} Categories) &rarr;
                  </Link>
                </div>
              </div>
            </li>

            {/* Dedicated Our Works Page Link */}
            <li>
              <Link
                to="/our-works"
                onClick={closeMenus}
                className={`inline-flex items-center gap-1.5 py-3 px-3 hover:text-[#B89560] transition-colors border-b-2 ${
                  location.pathname === '/our-works' || location.pathname === '/portfolio'
                    ? 'border-[#B89560] text-[#B89560]'
                    : 'border-transparent'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-[#B89560]" />
                <span>Our Works</span>
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                onClick={closeMenus}
                className={`inline-block py-3 px-3 hover:text-[#B89560] transition-colors border-b-2 ${
                  location.pathname === '/services' ? 'border-[#B89560] text-[#B89560]' : 'border-transparent'
                }`}
              >
                Services & Upholstery
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={closeMenus}
                className={`inline-block py-3 px-3 hover:text-[#B89560] transition-colors border-b-2 ${
                  location.pathname === '/about' ? 'border-[#B89560] text-[#B89560]' : 'border-transparent'
                }`}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={closeMenus}
                className={`inline-block py-3 px-3 hover:text-[#B89560] transition-colors border-b-2 ${
                  location.pathname === '/contact' ? 'border-[#B89560] text-[#B89560]' : 'border-transparent'
                }`}
              >
                Valappad Shop
              </Link>
            </li>
          </ul>

          <div className="text-[11px] font-semibold text-[#76543E] hidden md:flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B89560]" />
            <span>Over 20 Years of Craftsmanship</span>
          </div>
        </div>
      </nav>

      {/* 4. MOBILE SLIDE-OUT DRAWER */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-sm bg-[#F7F3EC] h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-5 animate-in slide-in-from-left duration-200">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DCCB]">
                <div>
                  <div className="font-display font-bold text-lg text-[#493528]">PARVATHY</div>
                  <div className="text-[10px] tracking-wider text-[#76543E] uppercase font-semibold">
                    {BUSINESS_INFO.tagline}
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-full bg-[#E8DCCB] text-[#493528] cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-4 space-y-1">
                <Link
                  to="/"
                  onClick={closeMenus}
                  className="block px-3 py-2 rounded-lg font-medium text-sm text-[#493528] hover:bg-[#E8DCCB]"
                >
                  Home
                </Link>

                <Link
                  to="/catalog"
                  onClick={closeMenus}
                  className="block px-3 py-2 rounded-lg font-medium text-sm text-[#493528] hover:bg-[#E8DCCB]"
                >
                  Digital Showroom
                </Link>

                <Link
                  to="/our-works"
                  onClick={closeMenus}
                  className="block px-3 py-2 rounded-lg font-medium text-sm text-[#493528] hover:bg-[#E8DCCB]"
                >
                  Our Works (Portfolio)
                </Link>

                <Link
                  to="/services"
                  onClick={closeMenus}
                  className="block px-3 py-2 rounded-lg font-medium text-sm text-[#493528] hover:bg-[#E8DCCB]"
                >
                  Services & Upholstery
                </Link>

                <Link
                  to="/about"
                  onClick={closeMenus}
                  className="block px-3 py-2 rounded-lg font-medium text-sm text-[#493528] hover:bg-[#E8DCCB]"
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenus}
                  className="block px-3 py-2 rounded-lg font-medium text-sm text-[#493528] hover:bg-[#E8DCCB]"
                >
                  Valappad Shop Location
                </Link>
              </div>

              {/* Mobile Categories Accordion */}
              <div className="pt-3 border-t border-[#E8DCCB]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#76543E] mb-2 px-3">
                  Browse Categories
                </div>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/catalog?category=${cat.slug}`}
                      onClick={closeMenus}
                      className="block px-3 py-1.5 text-xs text-[#493528] hover:text-[#B89560] rounded"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Bottom Contacts */}
            <div className="pt-4 border-t border-[#E8DCCB] space-y-2">
              <Button
                href={getWhatsAppLink("Hello! I am contacting Parvathy Furnishings from your mobile website.")}
                variant="whatsapp"
                size="sm"
                icon={MessageCircle}
                className="w-full"
              >
                Chat on WhatsApp
              </Button>
              <Button
                href={BUSINESS_INFO.contact.phoneLink}
                variant="primary"
                size="sm"
                icon={Phone}
                className="w-full"
              >
                Call: {BUSINESS_INFO.contact.phoneDisplay}
              </Button>
              <div className="text-[10px] text-center text-[#76543E] pt-1">
                📍 East Tippusulthan Road, Valappad
              </div>
            </div>
          </div>

          <div className="flex-1" onClick={closeMenus} />
        </div>
      )}
    </header>
  );
}
