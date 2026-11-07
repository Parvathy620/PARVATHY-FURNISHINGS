/**
 * PARVATHY FURNISHINGS - Core Business Configuration
 * Centralized business data, contact channels, and verified single-location shop details.
 */

export const BUSINESS_INFO = {
  name: "PARVATHY FURNISHINGS",
  shortName: "Parvathy",
  tagline: "Crafting Comfort Since 2005.",
  establishedYear: 2005,
  experienceText: "Over 20 Years of Craftsmanship",
  
  // The business has ONLY ONE physical shop, located exclusively in Valappad.
  address: {
    street: "East Tippusulthan Road",
    locality: "Valappad",
    subDistrict: "Thriprayar",
    district: "Thrissur",
    state: "Kerala",
    pincode: "680567",
    full: "East Tippusulthan Road, Valappad, Thriprayar, Thrissur, Kerala.",
    landmark: "Conveniently located on East Tippusulthan Road in Valappad",
    googleMapsUrl: "https://maps.google.com/?q=East+Tippusulthan+Road,+Valappad,+Thriprayar,+Thrissur,+Kerala",
    locationNote: "Only one physical shop & workshop, located in Valappad.",
  },

  contact: {
    phone: "9447772445",
    phoneDisplay: "+91 94477 72445",
    phoneLink: "tel:9447772445",
    whatsapp: "919447772445",
    whatsappDisplay: "+91 94477 72445",
    email: "PRASADAM009@GMAIL.COM",
    emailLink: "mailto:PRASADAM009@GMAIL.COM",
  },

  // Operating hours: 9:00 AM – 6:00 PM without invented days
  workingHours: "9:00 AM – 6:00 PM",

  highlights: [
    { 
      title: "Over 20 Years of Craftsmanship", 
      description: "Dedicated to customized furniture making and upholstery since 2005." 
    },
    { 
      title: "Custom Furniture Manufacturing", 
      description: "Crafted to your exact room measurements, design ideas, and functional requirements." 
    },
    { 
      title: "Furniture Repair & Restoration", 
      description: "Careful structural repairs, re-polishing, and re-conditioning for wooden furniture." 
    },
    { 
      title: "Curtains & Upholstery Works", 
      description: "Sofa cushioning, cushion making, curtains, and specialized vehicle seat upholstery." 
    },
    { 
      title: "Direct Workshop Consultation", 
      description: "Deal directly with our skilled artisans at our single Valappad workshop." 
    },
  ]
};

/**
 * Generate a pre-filled WhatsApp link for instant customer consultation
 * @param {string} message - Custom query text
 * @returns {string} wa.me URL with encoded message
 */
export const getWhatsAppLink = (message = "") => {
  const defaultText = `Hello Parvathy Furnishings, I would like to enquire about your custom furniture, upholstery, or repair works.`;
  const text = message ? `Hello Parvathy Furnishings, ${message}` : defaultText;
  return `https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${encodeURIComponent(text)}`;
};
