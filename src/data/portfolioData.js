/**
 * PARVATHY FURNISHINGS - Portfolio & Our Works Data
 * Structured across three core branches:
 * A. New Furniture Creations
 * B. Furniture Restoration (includes Before/After pairs)
 * C. Vehicle Upholstery
 * 
 * All placeholders are explicitly marked as "DESIGN INSPIRATION"
 * and can be seamlessly swapped with actual workshop photos.
 */

export const PORTFOLIO_CATEGORIES = [
  { id: "all", name: "All Works" },
  { id: "new-furniture", name: "New Furniture Creations" },
  { id: "restoration", name: "Furniture Restoration" },
  { id: "vehicle-upholstery", name: "Vehicle Upholstery" },
];

export const BEFORE_AFTER_PROJECTS = [
  {
    id: "restoration-sofa-vintage",
    title: "Antique Living Sofa Re-Cushioning & Polishing",
    category: "restoration",
    subCategory: "Sofa Restoration",
    beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    beforeLabel: "Before: Worn Cushioning & Scratched Timber",
    afterLabel: "After: Fresh High-Density Foam & Refinished Frame",
    description: "Complete revival of a traditional wooden sofa suite. Stripped worn upholstery, rebuilt inner webbing support, inserted fresh resilient foam, and hand-polished timber.",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
  },
  {
    id: "restoration-car-seat-renewal",
    title: "Vehicle Front Bucket Seat Foam & Leatherette Revival",
    category: "vehicle-upholstery",
    subCategory: "Vehicle Seat Restoration",
    beforeImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    beforeLabel: "Before: Sagging Lumbar & Torn Bolsters",
    afterLabel: "After: Molded Foam Core & Diamond Contrast Stitch",
    description: "Reconstructed collapsed driver bolster padding and fitted customized automotive-grade leatherette with precision contrast stitching.",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
  },
  {
    id: "restoration-heritage-cot",
    title: "Vintage Hardwood Bed Structural Repair & Hand Polish",
    category: "restoration",
    subCategory: "Bed Restoration",
    beforeImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    beforeLabel: "Before: Loose Joinery & Dull Finish",
    afterLabel: "After: Re-pegged Joints & Deep Lustre Polish",
    description: "Generational wooden cot restored at our Valappad workshop. Tightened mortise-and-tenon joints, leveled base slats, and applied rich protective wood finish.",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
  },
];

export const PORTFOLIO_ITEMS = [
  // ==========================================
  // A. NEW FURNITURE CREATIONS
  // ==========================================
  {
    id: "port-sofa-modern-wood",
    title: "Custom 3-Seater Hardwood Lounge Sofa",
    category: "new-furniture",
    subCategory: "Sofas",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for handcrafted 3-seater living room sofa",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Solid hardwood living room sofa with deep cushioned seats and custom linen upholstery fabric.",
  },
  {
    id: "port-diwan-wooden-carved",
    title: "Handcrafted Wooden Living Diwan",
    category: "new-furniture",
    subCategory: "Diwans",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for traditional wooden diwan daybed",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Traditional daybed crafted with sturdy timber joinery, custom mattress base, and bolster pillows.",
  },
  {
    id: "port-corner-settee-modular",
    title: "Bespoke L-Shaped Corner Settee",
    category: "new-furniture",
    subCategory: "Corner Settees",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for tailored L-shaped corner settee",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Spacious family lounger sectional designed to fit exact room corner dimensions.",
  },
  {
    id: "port-bed-hydraulic-storage",
    title: "Hydraulic Storage King Bed Frame",
    category: "new-furniture",
    subCategory: "Beds",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for hydraulic storage wooden bed",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Heavy-duty wooden king bed with smooth pneumatic lift-up storage mechanism and slatted mattress support.",
  },
  {
    id: "port-dining-suite-6seater",
    title: "Solid Wood 6-Seater Dining Suite",
    category: "new-furniture",
    subCategory: "Dining Furniture",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for 6-seater wooden dining table and chairs",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Handcrafted rectangular solid timber dining table accompanied by ergonomic cushioned dining chairs.",
  },
  {
    id: "port-wardrobe-3door-mirror",
    title: "3-Door Hardwood Wardrobe with Dressing Mirror",
    category: "new-furniture",
    subCategory: "Wardrobes",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for 3-door wooden wardrobe",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Spacious bedroom wardrobe with internal hanging rails, shelving partitions, and smooth hinged shutters.",
  },
  {
    id: "port-custom-media-unit",
    title: "Customized Low-Profile TV Console Unit",
    category: "new-furniture",
    subCategory: "Customized Furniture",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for custom living room wooden TV console",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Tailored television entertainment credenza with integrated cable routing and closed storage compartments.",
  },

  // ==========================================
  // B. FURNITURE RESTORATION
  // ==========================================
  {
    id: "port-resto-sofa-cushion",
    title: "Classic Armchair Foam Re-Cushioning & Fabric",
    category: "restoration",
    subCategory: "Sofa Restoration",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for armchair re-cushioning and upholstery restoration",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Complete stripping of collapsed seat padding, installation of new high-density foam, and premium fabric renewal.",
  },
  {
    id: "port-resto-chair-dining",
    title: "Dining Chair Structure Tightening & Seat Covering",
    category: "restoration",
    subCategory: "Chair Restoration",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for dining chair restoration and wood refinishing",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Re-gluing wobbly tenon joints, fine sanding of wood blemishes, and applying fresh stain and padded seat cover.",
  },
  {
    id: "port-resto-furniture-polishing",
    title: "Artisanal Wood Hand-Rubbed Polishing",
    category: "restoration",
    subCategory: "Furniture Polishing",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for fine wood polishing and restoration",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Removal of aged lacquer, precision sanding to reveal natural grain, and multi-coat wood sealing.",
  },
  {
    id: "port-resto-headboard-upholstery",
    title: "Custom Upholstered Headboard Re-Covering",
    category: "restoration",
    subCategory: "Upholstery Replacement",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for padded headboard re-upholstery",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Renewal of faded headboard padding with stain-resistant textured fabric and deep tufted diamond detail.",
  },

  // ==========================================
  // C. VEHICLE UPHOLSTERY
  // ==========================================
  {
    id: "port-veh-custom-bucket",
    title: "Custom Tailored Car Bucket Seat Covering",
    category: "vehicle-upholstery",
    subCategory: "Car Seat Covering",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for automotive interior front bucket seat coverings",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Precision-patterned front seat covers fitted to the contours of vehicle seating with zero sagging.",
  },
  {
    id: "port-veh-leatherette-stitch",
    title: "Automotive Leatherette Covering with Contrast Stitching",
    category: "vehicle-upholstery",
    subCategory: "Leatherette Seat Covering",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for leatherette car seat covering with contrast stitching",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Spill-proof, automotive-grade synthetic leather seats featuring high-tensile contrast twin stitching.",
  },
  {
    id: "port-veh-diamond-quilted",
    title: "Diamond-Quilted Custom Interior Seat Design",
    category: "vehicle-upholstery",
    subCategory: "Leatherette Seat Covering",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for diamond quilted automotive seat design",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Quilted leatherette upholstery with extra foam inlay for added driving comfort and premium cabin styling.",
  },
  {
    id: "port-veh-breathable-fabric",
    title: "Breathable Woven Fabric Vehicle Seat Covers",
    category: "vehicle-upholstery",
    subCategory: "Fabric Seat Covering",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for heat-resistant fabric car seat coverings",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Ventilated, heat-resistant automotive fabric covers designed for maximum breathability under Kerala climate.",
  },
  {
    id: "port-veh-foam-restoration",
    title: "Driver Seat Foam Reshaping & Lumbar Rebuilding",
    category: "vehicle-upholstery",
    subCategory: "Vehicle Seat Restoration",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Design inspiration for vehicle seat restoration and bolster rebuilding",
    label: "DESIGN INSPIRATION",
    isOurWork: false,
    description: "Restoration of collapsed seat foam cores, bolstering worn side supports, and restoring ergonomic driving posture.",
  },
];

