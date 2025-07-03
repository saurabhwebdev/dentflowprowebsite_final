import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TransitionModalProps {
  onClose: () => void;
}

export function TransitionModal({ onClose }: TransitionModalProps) {
  const navigate = useNavigate();
  
  const handleReadMoreClick = () => {
    navigate('/transition');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-lg shadow-xl max-w-md w-full animate-fade-in border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" className="w-6 h-6">
                <path d="M21.7,10.3l-9-8c-0.4-0.3-0.9-0.3-1.3,0l-9,8c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1L4,11.4V21c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-9.6l0.3,0.3c0.4,0.4,1,0.3,1.4-0.1C22.1,11.3,22.1,10.6,21.7,10.3z M14,15h-1v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S14.6,15,14,15z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">We've Evolved!</h2>
          </div>
          
          <div className="mb-6 text-gray-700">
            <p className="mb-3">
              <strong>DentFlow Pro is now ClinicFlow Pro</strong> — we've expanded our healthcare management solution to serve all medical practices, not just dental.
            </p>
            <p className="mb-2">
              Don't worry! All dental-specific features you love are still here, plus we've added specialized tools for various clinical practices.
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={onClose} className="border-gray-300">
              Got it
            </Button>
            <Button 
              onClick={handleReadMoreClick}
              className="bg-black hover:bg-gray-800 text-white"
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function useTransitionModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has seen the modal before
    const hasSeenModal = localStorage.getItem('clinicflow-transition-seen');
    
    if (!hasSeenModal) {
      // Wait a bit before showing the modal
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const closeModal = () => {
    setIsOpen(false);
    // Mark that the user has seen the modal
    localStorage.setItem('clinicflow-transition-seen', 'true');
  };
  
  return { isOpen, closeModal };
} 