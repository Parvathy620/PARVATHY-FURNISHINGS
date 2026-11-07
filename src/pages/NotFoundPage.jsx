import { Home, Search } from 'lucide-react';
import Button from '../components/common/Button';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function NotFoundPage() {
  return (
    <div className="py-20 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="font-display text-7xl font-bold text-[#B89560]">404</div>
      <h1 className="font-display text-3xl font-bold text-[#493528]">
        Page Not Found
      </h1>
      <p className="text-sm text-[#76543E] leading-relaxed">
        The showroom page you are looking for does not exist or has been relocated. You can return to our home page or explore our furniture catalog.
      </p>

      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Button to="/" variant="primary" size="md" icon={Home}>
          Return to Home
        </Button>
        <Button to="/catalog" variant="outline" size="md" icon={Search}>
          Explore Showroom
        </Button>
      </div>

      <div className="pt-6 border-t border-[#E8DCCB] text-xs text-[#76543E]">
        Need direct help? Call us at{' '}
        <a href={BUSINESS_INFO.contact.phoneLink} className="font-bold text-[#493528] underline">
          {BUSINESS_INFO.contact.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
