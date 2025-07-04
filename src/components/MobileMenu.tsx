import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { useTransitionModalContext } from '@/App';
import { Info, MessageSquare } from 'lucide-react';
import TelegramChat from './TelegramChat';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const MobileMenu = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { openModal } = useTransitionModalContext();

  // Close the menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleTransitionClick = () => {
    setOpen(false); // Close the mobile menu
    openModal(); // Open the transition modal
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[350px]">
          <div className="py-6">
            <h2 className="text-xl font-bold mb-6">ClinicFlow Pro</h2>
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`py-3 px-4 rounded-md ${
                    location.pathname === item.href
                      ? "bg-gray-100 text-black font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Chat button */}
              <TelegramChat />
              
              {/* Transition info button */}
              <button
                onClick={handleTransitionClick}
                className="flex items-center gap-3 py-3 px-4 rounded-md text-gray-600 hover:bg-gray-50 hover:text-black"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white">
                  <Info size={14} />
                </div>
                <span>About our transition</span>
              </button>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu; 