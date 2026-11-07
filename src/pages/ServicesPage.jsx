import { 
  Hammer, 
  MessageCircle, 
  Phone, 
  Mail,
  HelpCircle,
  MapPin 
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/businessInfo';
import ServiceCard from '../components/services/ServiceCard';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function ServicesPage() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Requirement",
      desc: "Discuss your dimensions, design ideas, or restoration requirements via WhatsApp, phone, or at our Valappad workshop.",
    },
    {
      number: "02",
      title: "Material & Fabric Selection",
      desc: "Select suitable timber, wood finish, and upholstery fabric or leatherette swatches based on your preferences.",
    },
    {
      number: "03",
      title: "Workshop Handcrafting",
      desc: "Our experienced carpenters construct or restore your piece using sturdy joinery and careful attention to detail.",
    },
    {
      number: "04",
      title: "Finishing & Inspection",
      desc: "Finely sanded and finished according to your specifications, followed by quality check and handover.",
    },
  ];

  const faqs = [
    {
      q: "Can I inspect the raw wooden frame before polishing starts?",
      a: "Yes. Customers are welcome to visit our workshop in Valappad to inspect the unpolished frame so you can verify the structure and wood grain firsthand.",
    },
    {
      q: "How long does custom furniture or restoration take to complete?",
      a: "Completion timelines depend on the size and complexity of the piece. We provide an estimated timeframe during initial consultation.",
    },
    {
      q: "Where does the upholstery work take place?",
      a: "Upholstery, foam replacement, and precision machine stitching are performed in our dedicated workshop in Valappad to ensure optimal craftsmanship.",
    },
    {
      q: "What types of furniture can you repair or restore?",
      a: "We repair wooden chairs, dining tables, cots, traditional furniture, and handle sofa cushion foam renewal and re-covering.",
    },
  ];

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DCCB] text-[#493528] text-xs font-semibold uppercase tracking-wider">
          <Hammer className="w-3.5 h-3.5 text-[#B89560]" />
          Valappad Workshop Capabilities
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#493528]">
          Manufacturing, Restoration & Upholstery
        </h1>
        <p className="text-xs sm:text-sm text-[#76543E] leading-relaxed">
          For over 20 years, PARVATHY FURNISHINGS has provided customized furniture manufacturing, furniture repairing, restoration, and upholstery according to customer requirements at our Valappad workshop.
        </p>
      </div>

      {/* 2. SERVICES LIST */}
      <div className="space-y-10">
        {SERVICES.map((service, idx) => (
          <ServiceCard key={service.id} service={service} index={idx} />
        ))}
      </div>

      {/* 3. FOUR STEP WORKFLOW */}
      <section className="bg-white rounded-2xl border border-[#E8DCCB] p-8 sm:p-12 shadow-2xs">
        <SectionTitle
          eyebrow="Transparent Process"
          title="How We Bring Your Furniture to Life"
          subtitle="A clear, craftsman-led journey from initial requirement to completion."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <div key={i} className="relative p-5 rounded-xl bg-[#F7F3EC] border border-[#E8DCCB] space-y-3">
              <span className="font-display text-3xl font-bold text-[#B89560]/40">
                {st.number}
              </span>
              <h3 className="font-display text-base font-bold text-[#493528]">
                {st.title}
              </h3>
              <p className="text-xs text-[#76543E] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="space-y-8">
        <SectionTitle
          eyebrow="Help & Transparency"
          title="Common Questions About Our Services"
          subtitle="Helpful information about workshop visits, custom requests, and timelines."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-[#E8DCCB] shadow-2xs space-y-2">
              <h3 className="font-display text-base font-bold text-[#493528] flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#B89560] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-[#76543E] leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DIRECT CONSULTATION CTA */}
      <div className="bg-[#493528] text-[#F7F3EC] rounded-2xl p-8 sm:p-12 text-center space-y-4">
        <Badge variant="gold" size="md">Direct Workshop Consultation</Badge>
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          Ready to Discuss Your Furniture or Restoration Project?
        </h2>
        <p className="text-xs sm:text-sm text-[#E8DCCB] max-w-2xl mx-auto leading-relaxed">
          Send pictures of your space or your existing furniture on WhatsApp or email. We provide honest guidance, material options, and accurate estimates based on your requirements.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Button
            href={getWhatsAppLink("Hello! I would like to enquire about your custom carpentry / restoration services.")}
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
            href={BUSINESS_INFO.contact.emailLink}
            variant="outline"
            size="md"
            icon={Mail}
          >
            Email: {BUSINESS_INFO.contact.email}
          </Button>
        </div>
        <div className="text-[11px] text-[#E8DCCB]/75 pt-2 flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#B89560]" />
          <span>Single physical shop & workshop: East Tippusulthan Road, Valappad, Thriprayar, Thrissur.</span>
        </div>
      </div>
    </div>
  );
}
