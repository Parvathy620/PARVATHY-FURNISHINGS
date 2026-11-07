import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Sparkles, 
  RotateCcw, 
  X, 
  ArrowUpDown, 
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { getWhatsAppLink } from '../data/businessInfo';
import ProductCard from '../components/products/ProductCard';
import Button from '../components/common/Button';

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read filter state from URL parameters for bookmarking & navigation
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedSubcategory = searchParams.get('subcategory') || 'all';
  const searchQuery = searchParams.get('q') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  // Find active category object
  const activeCategoryObj = useMemo(() => {
    return CATEGORIES.find((cat) => cat.slug === selectedCategory) || null;
  }, [selectedCategory]);

  // Available subcategories based on selected category
  const availableSubcategories = useMemo(() => {
    if (activeCategoryObj) {
      return activeCategoryObj.subcategories;
    }
    // If 'all' is selected, list unique subcategories across all categories
    const allSubs = [];
    CATEGORIES.forEach((cat) => {
      cat.subcategories.forEach((sub) => {
        if (!allSubs.some((s) => s.slug === sub.slug)) {
          allSubs.push({ ...sub, parentCategorySlug: cat.slug });
        }
      });
    });
    return allSubs;
  }, [activeCategoryObj]);

  // Handle Main Category Change
  const handleCategoryChange = (catSlug) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (catSlug === 'all') {
        next.delete('category');
      } else {
        next.set('category', catSlug);
      }
      // Reset subcategory when changing main category
      next.delete('subcategory');
      return next;
    });
  };

  // Handle Subcategory Change
  const handleSubcategoryChange = (subSlug) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (subSlug === 'all') {
        next.delete('subcategory');
      } else {
        next.set('subcategory', subSlug);
      }
      return next;
    });
  };

  // Handle Search Input
  const handleSearchChange = (val) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (!val) {
        next.delete('q');
      } else {
        next.set('q', val);
      }
      return next;
    });
  };

  // Handle Sorting
  const handleSortChange = (sortOption) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (sortOption === 'featured') {
        next.delete('sort');
      } else {
        next.set('sort', sortOption);
      }
      return next;
    });
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchParams({});
  };

  // Check if any product has valid numeric prices.
  // Rule: If price data is unavailable, hide the price filter!
  const hasValidPriceData = useMemo(() => {
    return PRODUCTS.some((item) => typeof item.price === 'number' && !isNaN(item.price) && item.price > 0);
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const filtered = PRODUCTS.filter((item) => {
      // 1. Category Filter
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // 2. Subcategory Filter
      const matchesSubcategory =
        selectedSubcategory === 'all' || item.subcategory === selectedSubcategory;

      // 3. Search Query Filter (name, categoryName, subcategoryName, variety, description)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        item.subcategoryName.toLowerCase().includes(q) ||
        (item.variety && item.variety.toLowerCase().includes(q)) ||
        (item.material && item.material.toLowerCase().includes(q)) ||
        (item.shortDescription && item.shortDescription.toLowerCase().includes(q));

      return matchesCategory && matchesSubcategory && matchesSearch;
    });

    // 4. Sorting logic
    return filtered.sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      // Featured: default order in PRODUCTS array
      return 0;
    });
  }, [selectedCategory, selectedSubcategory, searchQuery, sortBy]);

  // Active filter badge count
  const activeFiltersCount = 
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedSubcategory !== 'all' ? 1 : 0) +
    (searchQuery ? 1 : 0) +
    (sortBy !== 'featured' ? 1 : 0);

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      {/* 1. SHOWROOM HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DCCB] text-[#493528] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#B89560]" />
          Digital Furniture Showroom
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#493528]">
          Furniture & Upholstery Catalogue
        </h1>
        <p className="text-xs sm:text-sm text-[#76543E] leading-relaxed">
          Explore our custom living room suites, beds, dining tables, wardrobes, custom curtains, and specialized vehicle seat upholstery. Every design can be customized to your exact room dimensions and materials.
        </p>
      </div>

      {/* 2. COMPACT & RESPONSIVE FILTERING INTERFACE */}
      <div className="bg-white rounded-xl border border-[#E8DCCB] p-4 sm:p-6 shadow-2xs space-y-5">
        {/* ROW 1: SEARCH BAR AT THE TOP */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#B89560] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search sofa sets, diwans, dining tables, cots, wardrobes, curtains, car seats..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-3 text-xs sm:text-sm rounded-lg border border-[#E8DCCB] focus:outline-none focus:border-[#B89560] focus:ring-1 focus:ring-[#B89560] bg-[#F7F3EC]/50 text-[#493528] transition-colors shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#76543E] hover:text-[#493528] cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* ROW 2: MAIN CATEGORY HORIZONTAL TABS */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#76543E] uppercase tracking-wider flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#B89560]" />
              <span>Main Categories</span>
            </span>
            <span className="text-[11px] text-[#76543E]">
              {CATEGORIES.length} Categories
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`text-xs font-semibold px-3.5 py-2 rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#493528] text-white shadow-xs'
                  : 'bg-[#F7F3EC] text-[#493528] hover:bg-[#E8DCCB] border border-[#E8DCCB]'
              }`}
            >
              All Collections ({PRODUCTS.length})
            </button>

            {CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter((p) => p.category === cat.slug).length;
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#493528] text-white shadow-xs'
                      : 'bg-[#F7F3EC] text-[#493528] hover:bg-[#E8DCCB] border border-[#E8DCCB]'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#E8DCCB] text-[#76543E]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ROW 3: COMPACT CONTROLS - SUBCATEGORY DROPDOWN + SORTING DROPDOWN + CLEAR BUTTON */}
        <div className="pt-3 border-t border-[#E8DCCB]/60 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          {/* Subcategory Dropdown */}
          <div className="sm:col-span-6 relative">
            <label htmlFor="subcategory-select" className="block text-[10px] uppercase font-bold text-[#76543E] tracking-wider mb-1">
              Subcategory
            </label>
            <div className="relative">
              <select
                id="subcategory-select"
                value={selectedSubcategory}
                onChange={(e) => handleSubcategoryChange(e.target.value)}
                className="w-full py-2.5 pl-3 pr-8 text-xs rounded-lg border border-[#E8DCCB] focus:outline-none focus:border-[#B89560] bg-[#F7F3EC]/50 text-[#493528] cursor-pointer appearance-none font-medium"
              >
                <option value="all">
                  All {activeCategoryObj ? `${activeCategoryObj.name} Subcategories` : 'Subcategories'} ({availableSubcategories.length})
                </option>
                {availableSubcategories.map((sub) => {
                  const count = PRODUCTS.filter((p) => {
                    const catMatch = selectedCategory === 'all' || p.category === selectedCategory;
                    return catMatch && p.subcategory === sub.slug;
                  }).length;
                  return (
                    <option key={sub.id} value={sub.slug}>
                      {sub.name} {count > 0 ? `(${count})` : ''}
                    </option>
                  );
                })}
              </select>
              <ChevronDown className="w-4 h-4 text-[#76543E] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sorting Dropdown */}
          <div className="sm:col-span-4 relative">
            <label htmlFor="sort-select" className="block text-[10px] uppercase font-bold text-[#76543E] tracking-wider mb-1">
              Sort By
            </label>
            <div className="relative">
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full py-2.5 pl-3 pr-8 text-xs rounded-lg border border-[#E8DCCB] focus:outline-none focus:border-[#B89560] bg-[#F7F3EC]/50 text-[#493528] cursor-pointer appearance-none font-medium"
              >
                <option value="featured">Featured Designs</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-[#76543E] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Clear Filters Button */}
          <div className="sm:col-span-2 sm:pt-4">
            <button
              onClick={handleResetFilters}
              disabled={activeFiltersCount === 0}
              className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                activeFiltersCount > 0
                  ? 'border border-[#B89560] text-[#76543E] hover:bg-[#B89560] hover:text-white'
                  : 'border border-[#E8DCCB] text-[#76543E]/40 cursor-not-allowed bg-stone-50'
              }`}
              title="Reset all active filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}</span>
            </button>
          </div>
        </div>

        {/* Conditional Price Range Filter: Hidden when no valid prices exist (as mandated) */}
        {hasValidPriceData && (
          <div className="p-3 bg-[#F7F3EC] rounded border border-[#E8DCCB] text-xs">
            <span className="font-semibold text-[#493528]">Price Range (₹)</span>
          </div>
        )}

        {/* ROW 4: ACTIVE FILTER PILL BADGES */}
        {activeFiltersCount > 0 && (
          <div className="pt-2 border-t border-[#E8DCCB]/40 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[#76543E] font-medium text-[11px] mr-1">Active filters:</span>

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8DCCB] text-[#493528] text-[11px] font-medium">
                Search: "{searchQuery}"
                <button
                  onClick={() => handleSearchChange('')}
                  className="hover:text-red-700 ml-1 cursor-pointer"
                  aria-label="Remove search filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8DCCB] text-[#493528] text-[11px] font-medium">
                Category: {CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="hover:text-red-700 ml-1 cursor-pointer"
                  aria-label="Remove category filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedSubcategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8DCCB] text-[#493528] text-[11px] font-medium">
                Subcategory: {availableSubcategories.find((s) => s.slug === selectedSubcategory)?.name}
                <button
                  onClick={() => handleSubcategoryChange('all')}
                  className="hover:text-red-700 ml-1 cursor-pointer"
                  aria-label="Remove subcategory filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {sortBy !== 'featured' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8DCCB] text-[#493528] text-[11px] font-medium">
                Sorted: {sortBy === 'name-asc' ? 'A to Z' : 'Z to A'}
                <button
                  onClick={() => handleSortChange('featured')}
                  className="hover:text-red-700 ml-1 cursor-pointer"
                  aria-label="Reset sorting"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              className="text-[11px] text-[#B89560] hover:underline font-semibold ml-2 cursor-pointer"
            >
              Reset all
            </button>
          </div>
        )}
      </div>

      {/* 3. PRODUCT GRID & STATUS BAR */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs text-[#76543E] px-1">
          <div>
            Showing <strong className="text-[#493528]">{filteredProducts.length}</strong> of{' '}
            <strong className="text-[#493528]">{PRODUCTS.length}</strong> designs
            {selectedCategory !== 'all' && (
              <span> in <strong>{CATEGORIES.find((c) => c.slug === selectedCategory)?.name}</strong></span>
            )}
            {selectedSubcategory !== 'all' && (
              <span> &gt; <strong>{availableSubcategories.find((s) => s.slug === selectedSubcategory)?.name}</strong></span>
            )}
          </div>
          <div className="text-[11px] font-medium hidden sm:block">
            📍 Single shop & workshop in Valappad, Thriprayar
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-xl border border-[#E8DCCB] p-8 space-y-4 shadow-2xs">
            <div className="w-12 h-12 rounded-full bg-[#E8DCCB] text-[#493528] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#493528]">
              No matching items found
            </h3>
            <p className="text-xs sm:text-sm text-[#76543E] max-w-md mx-auto leading-relaxed">
              We make custom furniture, cushions, curtains, and car seat covers to order. If you do not see your specific dimensions or design, contact our craftsmen directly on WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button onClick={handleResetFilters} variant="outline" size="sm">
                Reset All Filters
              </Button>
              <Button
                href={getWhatsAppLink(`Hello Parvathy Furnishings, I am looking for custom furniture/upholstery (${searchQuery || selectedCategory}). Could you please advise?`)}
                variant="whatsapp"
                size="sm"
              >
                Inquire on WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* 4. CUSTOM WORKSHOP ENQUIRY BANNER */}
      <div className="bg-[#493528] text-[#F7F3EC] rounded-2xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          Looking for a Custom Design or Specific Variety?
        </h2>
        <p className="text-xs sm:text-sm text-[#E8DCCB] max-w-2xl mx-auto leading-relaxed">
          Every piece in this catalogue can be customized with specific dimensions, timber choice, fabric textures, foam densities, and finishes. Visit our workshop on East Tippusulthan Road, Valappad or chat with us on WhatsApp.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Button
            href={getWhatsAppLink("Hello! I would like to consult about customizing a furniture design or upholstery with specific dimensions.")}
            variant="whatsapp"
            size="md"
          >
            Chat on WhatsApp
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="md"
            className="border-white/40 text-white hover:bg-white hover:text-[#493528]"
          >
            Visit Valappad Workshop
          </Button>
        </div>
      </div>
    </div>
  );
}
