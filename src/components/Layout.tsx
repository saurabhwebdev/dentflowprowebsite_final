import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { cn, generateOrganizationSchema, generateLocalBusinessSchema, generateSoftwareAppSchema } from '@/lib/utils';
import MobileMenu from './MobileMenu';
import TelegramChat from './TelegramChat';
import { useTransitionModalContext } from '@/App';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Layout = () => {
  const location = useLocation();
  const { openModal } = useTransitionModalContext();
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show compact navbar after scrolling down 100px
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Helmet>
        {/* Default SEO structured data for all pages */}
        <script type="application/ld+json">
          {JSON.stringify(generateOrganizationSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateLocalBusinessSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateSoftwareAppSchema())}
        </script>
      </Helmet>

      {/* Navbar - transforms based on scroll position */}
      <motion.header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled 
            ? "py-2" // Smaller padding when scrolled
            : "py-3 border-b border-black/5 bg-white" // Reduced padding from py-4 to py-3
        )}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* When not scrolled - regular navbar */}
          {!scrolled && (
            <div className="flex items-center justify-between h-10"> {/* Reduced height from h-12 to h-10 */}
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <div className="w-7 h-7"> {/* Reduced size from w-8 h-8 to w-7 h-7 */}
                  <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24">
                    <path d="M21.7,10.3l-9-8c-0.4-0.3-0.9-0.3-1.3,0l-9,8c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1L4,11.4V21c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-9.6l0.3,0.3c0.4,0.4,1,0.3,1.4-0.1C22.1,11.3,22.1,10.6,21.7,10.3z M14,15h-1v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S14.6,15,14,15z" />
                  </svg>
                </div>
                <h1 className="text-lg font-bold tracking-tight">ClinicFlow</h1> {/* Removed 'Pro' suffix */}
              </Link>

              {/* Navigation Pills */}
              <nav className="flex items-center gap-4">
                <div className="p-0.5 bg-gray-100 rounded-full hidden md:flex space-x-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "px-3 py-1 text-sm font-medium rounded-full transition-colors", // Reduced py from py-1.5 to py-1
                        location.pathname === item.href
                          ? "bg-white text-black shadow-sm"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* Transition info button - HIDDEN ON MOBILE */}
                <div className="hidden md:block">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        onClick={openModal}
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white hover:bg-gray-800 transition-colors" 
                        aria-label="DentFlow to ClinicFlow Transition Info"
                      >
                        <Info size={14} /> 
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>DentFlow to ClinicFlow Transition Info</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </nav>

              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          )}

          {/* When scrolled - pill navbar */}
          {scrolled && (
            <motion.div
              className="flex justify-end" // Changed from justify-center to justify-end
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center p-1.5 bg-black/90 backdrop-blur-sm rounded-full shadow-lg border border-white/10"
                initial={{ x: 50, opacity: 0 }} // Initial position from right
                animate={{ x: 0, opacity: 1 }} // Animate to normal position
                transition={{ duration: 0.4, ease: "easeOut" }} // Smooth animation
              >
                {/* Logo (smaller) */}
                <Link 
                  to="/" 
                  className="flex items-center justify-center h-8 w-8 mx-1 rounded-full bg-white text-black"
                >
                  <div className="w-5 h-5">
                    <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24">
                      <path d="M21.7,10.3l-9-8c-0.4-0.3-0.9-0.3-1.3,0l-9,8c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1L4,11.4V21c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-9.6l0.3,0.3c0.4,0.4,1,0.3,1.4-0.1C22.1,11.3,22.1,10.6,21.7,10.3z M14,15h-1v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S14.6,15,14,15z" />
                    </svg>
                  </div>
                </Link>
                
                {/* Compact Navigation */}
                <div className="hidden md:flex space-x-1 mx-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "px-3 py-1.5 text-sm font-medium rounded-full transition-all", // Reduced from px-4 py-2 to px-3 py-1.5
                        location.pathname === item.href
                          ? "bg-white text-black"
                          : "text-white hover:bg-white/10"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* Compact Transition Info Button - HIDDEN ON MOBILE */}
                <div className="hidden md:block">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={openModal}
                        className="px-2 mx-1 flex items-center justify-center h-8 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="DentFlow to ClinicFlow Transition Info"
                      >
                        <Info size={14} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>DentFlow to ClinicFlow Transition Info</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                
                {/* Mobile Menu (in pill) */}
                <div className="md:hidden">
                  <MobileMenu />
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6">
                  <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24">
                    <path d="M21.7,10.3l-9-8c-0.4-0.3-0.9-0.3-1.3,0l-9,8c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1L4,11.4V21c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-9.6l0.3,0.3c0.4,0.4,1,0.3,1.4-0.1C22.1,11.3,22.1,10.6,21.7,10.3z M14,15h-1v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S14.6,15,14,15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">ClinicFlow</h3> {/* Removed 'Pro' suffix */}
              </div>
              <p className="text-gray-600 text-sm">
                Modern clinic management solution for all healthcare specialties.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/services" className="hover:text-black">Patient Management</Link></li>
                <li><Link to="/services" className="hover:text-black">Appointment Scheduling</Link></li>
                <li><Link to="/services" className="hover:text-black">Billing & Insurance</Link></li>
                <li><Link to="/services" className="hover:text-black">Reporting & Analytics</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/about" className="hover:text-black">About Us</Link></li>
                <li><Link to="/about" className="hover:text-black">Our Team</Link></li>
                <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-black">Blog</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>100 Feet Road, Indiranagar</li>
                <li>Bengaluru, Karnataka 560038</li>
                <li>India</li>
                <li><a href="tel:+918087098711" className="hover:text-black">+91-8087098711</a></li>
                <li><a href="mailto:contact@clinicflow.space" className="hover:text-black">contact@clinicflow.space</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Hours</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Monday - Saturday</li>
                <li>9:00 AM - 7:00 PM IST</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/privacy" className="hover:text-black">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-black">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-black">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ClinicFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Chat Component (only visible on desktop) */}
      <div className="hidden md:block">
        <TelegramChat />
      </div>
    </div>
  );
};

export default Layout; 