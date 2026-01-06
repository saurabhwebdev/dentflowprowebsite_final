import React, { useEffect } from 'react';
import { Button } from './button';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export function SuccessModal({ 
  isOpen, 
  onClose, 
  title = "Success!", 
  message = "Your message has been sent successfully. We'll get back to you soon." 
}: SuccessModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      // Lock the body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative bg-white rounded-lg shadow-2xl max-w-md w-full border border-gray-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
          >
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1.5 bg-green-500"
              initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: "linear" }}
            />
            
            <div className="p-6">
              <div className="flex flex-col items-center text-center gap-4 mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotateY: [0, 360] }}
                  transition={{ delay: 0.2, duration: 0.7, type: "spring", bounce: 0.5 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                  <p className="mt-2 text-gray-600">{message}</p>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Button onClick={onClose} className="bg-green-600 hover:bg-green-700 text-white">
                  Continue
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function useSuccessModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  return { isOpen, openModal, closeModal };
} 