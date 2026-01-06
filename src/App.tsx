import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Transition from "./pages/Transition";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

import { TransitionModal } from "./components/ui/transition-modal";
import { useState, useEffect, createContext, useContext } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

// Create a context for the transition modal
export const TransitionModalContext = createContext<{
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}>({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
});

// Hook to use the transition modal context
export const useTransitionModalContext = () => useContext(TransitionModalContext);

const App = () => {
  // Use useState directly instead of the useTransitionModal hook
  const [isOpen, setIsOpen] = useState(false);
  
  // Initialize the modal on first load
  useEffect(() => {
    // Check if user has seen the modal before
    const hasSeenModal = localStorage.getItem('clinicflow-transition-seen');
    
    if (!hasSeenModal) {
      // Show modal after exactly 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  // Function to close modal
  const closeModal = () => {
    setIsOpen(false);
    // Mark that the user has seen the modal
    localStorage.setItem('clinicflow-transition-seen', 'true');
  };
  
  // Function to open modal manually
  const openModal = () => {
    setIsOpen(true);
  };
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <TransitionModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            <Toaster />
            <Sonner />
            <BrowserRouter basename="/">
              <ScrollToTop />
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/transition" element={<Transition />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/cookies" element={<CookiePolicy />} />
                  <Route path="/pricing" element={<Pricing />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
              
              {/* Modal is now inside BrowserRouter but not inside Routes */}
              {isOpen && <TransitionModal onClose={closeModal} />}
            </BrowserRouter>
          </TransitionModalContext.Provider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
