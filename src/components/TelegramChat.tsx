import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { sendToTelegram } from '@/lib/telegram-service';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChatFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const initialFormData: ChatFormData = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
};

const TelegramChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<ChatFormData>(initialFormData);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Handle click outside to close the chat window
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggleChat = () => {
    setIsOpen(prev => !prev);
    if (formStatus === 'success' || formStatus === 'error') {
      setFormStatus('idle');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Using the same telegram service as the contact form
      const success = await sendToTelegram({
        ...formData,
        subject: 'Chat Message',
        phone: '' // Phone is not collected in the chat
      });
      
      if (success) {
        setFormStatus('success');
        setFormData(initialFormData);
        
        // Auto-close after 3 seconds on success
        setTimeout(() => {
          setIsOpen(false);
          setFormStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Chat message submission error:', error);
      setFormStatus('error');
      setErrorMessage('There was a problem sending your message. Please try again later.');
    }
  };

  // Render only the button for mobile (the actual chat will be in MobileMenu)
  if (isMobile) {
    return (
      <button
        onClick={handleToggleChat}
        className="flex items-center gap-2 py-3 px-4 rounded-md text-gray-600 hover:bg-gray-50 hover:text-black"
      >
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white">
          <MessageSquare size={14} />
        </div>
        <span>Chat with us</span>
      </button>
    );
  }

  // Desktop version with floating button and popup
  return (
    <>
      {/* Floating chat button */}
      <motion.button
        onClick={handleToggleChat}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
            style={{ maxHeight: 'calc(100vh - 120px)', height: 'auto' }}
          >
            {/* Chat header */}
            <div className="bg-black text-white p-4 flex-shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Chat with ClinicFlow Pro</h3>
                <button onClick={handleToggleChat} className="text-white hover:text-gray-300">
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm mt-1 text-gray-300">We typically respond within a few minutes</p>
            </div>

            {/* Chat content - always fixed height */}
            <div className="p-4 bg-gray-50 h-[180px] overflow-y-auto flex-shrink-0">
              {formStatus === 'success' ? (
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 text-gray-800">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                </div>
              ) : formStatus === 'error' ? (
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-red-800">
                  <p className="font-medium">Error sending message</p>
                  <p className="text-sm mt-1">{errorMessage}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-200 p-3 rounded-lg rounded-tl-none inline-block">
                    <p className="text-sm">Hello! How can we help you today?</p>
                  </div>
                </div>
              )}
            </div>

            {/* Chat form - make scrollable if needed */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex-shrink-0 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 400px)' }}>
              {formStatus !== 'success' && (
                <>
                  <div className="space-y-3 mb-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="text-sm h-9"
                        />
                      </div>
                      <div>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="text-sm h-9"
                        />
                      </div>
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="text-sm h-9"
                    />
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      rows={2}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="text-sm resize-none min-h-[60px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 h-9"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TelegramChat; 