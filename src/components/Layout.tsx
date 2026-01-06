import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { cn, generateOrganizationSchema, generateLocalBusinessSchema, generateSoftwareAppSchema } from '@/lib/utils';
import MobileMenu from './MobileMenu';
import TelegramChat from './TelegramChat';
import Footer from './Footer';
import { useTransitionModalContext } from '@/App';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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

const Layout = () => {
  const location = useLocation();
  const { openModal } = useTransitionModalContext();
  const [scrolled, setScrolled] = useState(false);
  const [pillExpanded, setPillExpanded] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show compact navbar after scrolling down 100px
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        // Collapse pill when starting to scroll
        if (isScrolled) {
          setPillExpanded(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Toggle pill navbar expansion
  const togglePillNavbar = () => {
    setPillExpanded(!pillExpanded);
  };

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
        <style>{`
          @keyframes ping-slow {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.3);
              opacity: 0.3;
            }
            100% {
              transform: scale(1);
              opacity: 0.6;
            }
          }
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}</style>
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
            <div className="flex items-center justify-between h-10">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <div className="w-7 h-7">
                  <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24">
                    <path d="M21.7,10.3l-9-8c-0.4-0.3-0.9-0.3-1.3,0l-9,8c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1L4,11.4V21c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-9.6l0.3,0.3c0.4,0.4,1,0.3,1.4-0.1C22.1,11.3,22.1,10.6,21.7,10.3z M14,15h-1v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S14.6,15,14,15z" />
                  </svg>
                </div>
                <h1 className="text-lg font-bold tracking-tight">ClinicFlow</h1>
              </Link>

              {/* Navigation Pills */}
              <nav className="flex items-center gap-4">
                <div className="p-0.5 bg-gray-100 rounded-full hidden md:flex space-x-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "px-3 py-1 text-sm font-medium rounded-full transition-colors",
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

          {/* When scrolled - condensed pill navbar */}
          {scrolled && (
            <div className="fixed top-4 right-4 md:right-8 z-50">
              <AnimatePresence mode="sync">
                {pillExpanded ? (
                  <motion.div
                    key="expanded-pill"
                    className="flex items-center p-1.5 bg-gradient-to-r from-black to-gray-800 backdrop-blur-sm rounded-full shadow-lg border border-white/10"
                    initial={{ width: 48, opacity: 0.95, scale: 0.9 }}
                    animate={{ 
                      width: "auto", 
                      opacity: 1,
                      scale: 1,
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)" 
                    }}
                    exit={{ 
                      width: 48, 
                      opacity: 0,
                      scale: 0.9,
                      transition: { 
                        duration: 0.1,
                      }
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      mass: 1
                    }}
                    whileHover={{ scale: 1.03 }}
                  >
                    {/* Logo (smaller) */}
                    <Link 
                      to="/" 
                      className="flex items-center justify-center h-8 w-8 mx-1 rounded-full bg-white text-black shadow-sm transition-transform hover:scale-110"
                      onClick={(e) => {
                        if (location.pathname === '/') {
                          e.preventDefault();
                          togglePillNavbar();
                        }
                      }}
                    >
                      <motion.div 
                        className="w-5 h-5"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, -10, 10, -5, 5, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24">
                          <path d="M21.7,10.3l-9-8c-0.4-0.3-0.9-0.3-1.3,0l-9,8c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1L4,11.4V21c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-9.6l0.3,0.3c0.4,0.4,1,0.3,1.4-0.1C22.1,11.3,22.1,10.6,21.7,10.3z M14,15h-1v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S14.6,15,14,15z" />
                        </svg>
                      </motion.div>
                    </Link>
                    
                    {/* Compact Navigation */}
                    <div className="hidden md:flex space-x-1 mx-1">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                        >
                          <Link
                            to={item.href}
                            className={cn(
                              "px-3 py-1.5 text-sm font-medium rounded-full transition-all",
                              location.pathname === item.href
                                ? "bg-white text-black shadow-md"
                                : "text-white hover:bg-white/20"
                            )}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Compact Transition Info Button - HIDDEN ON MOBILE */}
                    <motion.div 
                      className="hidden md:block"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
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
                    </motion.div>
                    
                    {/* Mobile Menu (in pill) */}
                    <div className="md:hidden">
                      <MobileMenu />
                    </div>
                  </motion.div>
                ) : (
                  <motion.button
                    key="collapsed-pill"
                    onClick={togglePillNavbar}
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-black to-gray-800 text-white shadow-lg border border-white/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ 
                      scale: 1, 
                      opacity: 0,
                      transition: { 
                        duration: 0.1,
                      }
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 500,
                      damping: 15,
                      mass: 1
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                      y: -2 
                    }}
                    aria-label="Open navigation menu"
                  >
                    <motion.div 
                      className="w-6 h-6"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
                    >
                      <svg fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24">
                        <path d="M21.7,10.3l-9-8c-0.4-0.3-0.9-0.3-1.3,0l-9,8c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1L4,11.4V21c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-9.6l0.3,0.3c0.4,0.4,1,0.3,1.4-0.1C22.1,11.3,22.1,10.6,21.7,10.3z M14,15h-1v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S14.6,15,14,15z" />
                      </svg>
                    </motion.div>
                    <div className="absolute inset-0 rounded-full bg-white/10 animate-ping-slow opacity-60"></div>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Chat Component (only visible on desktop) */}
      <div className="hidden md:block">
        <TelegramChat />
      </div>
    </div>
  );
};

export default Layout; 