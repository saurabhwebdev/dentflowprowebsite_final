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
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7">
                  <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24">
                    <path d="M21.7,10.3l-9-8c-0.4-0.3-0.9-0.3-1.3,0l-9,8c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1L4,11.4V21c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-9.6l0.3,0.3c0.4,0.4,1,0.3,1.4-0.1C22.1,11.3,22.1,10.6,21.7,10.3z M14,15h-1v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S14.6,15,14,15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">ClinicFlow</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Modern clinic management solution for all healthcare specialties.
              </p>
              
              <div className="flex items-center gap-4 mt-6">
                <a href="https://twitter.com/clinicflow" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/clinicflow" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/services" className="hover:text-black transition-colors">Patient Management</Link></li>
                <li><Link to="/services" className="hover:text-black transition-colors">Appointment Scheduling</Link></li>
                <li><Link to="/services" className="hover:text-black transition-colors">Billing & Insurance</Link></li>
                <li><Link to="/services" className="hover:text-black transition-colors">Analytics & Reporting</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-black transition-colors">Our Team</Link></li>
                <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-black transition-colors">Blog</Link></li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-4 mt-8">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-black transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Contact & Hours Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="not-italic text-gray-600 mb-6">
                <a href="https://maps.google.com/?q=100+Feet+Road,+Indiranagar,+Bengaluru" target="_blank" rel="noopener noreferrer" className="block hover:text-black transition-colors">
                  100 Feet Road, Indiranagar<br />
                  Bengaluru, Karnataka 560038<br />
                  India
                </a>
                <a href="tel:+918087098711" className="block mt-3 hover:text-black transition-colors">+91-8087098711</a>
                <a href="mailto:contact@clinicflow.space" className="block mt-1 hover:text-black transition-colors">contact@clinicflow.space</a>
              </address>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="text-lg font-semibold mb-3">Hours</h4>
                <table className="text-gray-600 w-full">
                  <tbody>
                    <tr>
                      <td className="py-1 pr-3">Monday - Friday</td>
                      <td className="py-1">9:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-3">Saturday</td>
                      <td className="py-1">9:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-3">Sunday</td>
                      <td className="py-1">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
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