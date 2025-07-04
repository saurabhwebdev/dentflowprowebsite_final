import React, { useState } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, MessageSquare, Loader2, Building2, ArrowRight, ChevronUp } from 'lucide-react';
import { sendToTelegram } from '@/lib/telegram-service';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SuccessModal, useSuccessModal } from '@/components/ui/success-modal';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbSchema } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(item => ({ name: item.name, url: `https://clinicflow.space${item.href}` }))
  );

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { isOpen: isSuccessModalOpen, openModal: openSuccessModal, closeModal: closeSuccessModal } = useSuccessModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const success = await sendToTelegram(formData);
      
      if (success) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setFormStatus('idle');
        openSuccessModal();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setErrorMessage('There was a problem sending your message. Please try again later.');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Contact Us | ClinicFlow - Modern Clinic Management Solution</title>
        <meta name="description" content="Get in touch with ClinicFlow for questions, support, or to schedule a demo of our healthcare practice management solution." />
        <link rel="canonical" href="https://clinicflow.space/contact" />
        <meta name="keywords" content="contact clinicflow, healthcare software support, clinic management demo, medical practice software help" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <PageHeader 
        title="Contact Us" 
        description="We're here to help and answer any questions you might have"
        breadcrumbs={breadcrumbs}
        className="bg-gradient-to-r from-gray-100 to-gray-200"
      />
      
      <div className="container max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Contact Form Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Get in Touch</h2>
              <Separator className="w-16 h-1 bg-black mb-4" />
              <p className="text-gray-600">
                Have questions about ClinicFlow? Fill out the form below and one of our team members 
                will get back to you promptly.
              </p>
            </div>
            
            {formStatus === 'error' && (
              <Alert className="mb-6 bg-gray-100 border-gray-300">
                <AlertTitle className="text-gray-900">Error</AlertTitle>
                <AlertDescription className="text-gray-700">
                  {errorMessage}
                </AlertDescription>
              </Alert>
            )}
            
            <Card className="border-0 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      placeholder="John" 
                      required 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-gray-50 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Doe" 
                      required 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-gray-50 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-50 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="(123) 456-7890" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-gray-50 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="How can we help you?" 
                    required 
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-gray-50 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message here..." 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-50 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white group"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
          
          {/* Contact Information Section */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Contact Info</h2>
              <Separator className="w-16 h-1 bg-black mb-4" />
              <p className="text-gray-600">
                Prefer to reach out directly? Here's how to connect with us.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg mb-8 overflow-hidden">
              <div className="px-6 py-8 space-y-6 bg-gray-50">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-black/10 flex items-center justify-center">
                        {React.cloneElement(item.icon, { className: "h-5 w-5 text-black" })}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-700">{item.content}</p>
                      {item.extra && <p className="text-sm text-gray-500 mt-1">{item.extra}</p>}
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-0" />
              
              <div className="px-6 py-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-700" />
                  Office Hours
                </h3>
                <div className="space-y-2">
                  {officeHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium flex items-center gap-2">
                        {item.days === "Sunday" ? (
                          <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
                        ) : (
                          <span className="h-2 w-2 bg-black rounded-full"></span>
                        )}
                        {item.days}
                      </span>
                      <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            {/* FAQ Accordion */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="px-6 py-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-gray-700" />
                  Frequently Asked Questions
                </h3>
                
                <div className="divide-y divide-gray-200">
                  {faqs.map((faq, index) => (
                    <div key={index} className="py-4">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="flex justify-between items-center w-full text-left font-medium focus:outline-none"
                      >
                        <span className="text-gray-900">{faq.question}</span>
                        <ChevronUp 
                          className={cn(
                            "h-5 w-5 text-gray-500 transition-transform", 
                            activeFaq === index ? "transform rotate-0" : "transform rotate-180"
                          )}
                        />
                      </button>
                      {activeFaq === index && (
                        <div className="mt-2 text-gray-600 pl-0">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-gray-700" />
                <h2 className="text-2xl font-bold">Visit Our Office in Bangalore</h2>
              </div>
              
              <div className="h-96 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124425.97709531436!2d77.5159352151494!3d12.972074638522408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16619c45f77d%3A0x65b8ba3513a51219!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1716927978126!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of our office in Bangalore"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
              
              <div className="mt-4 flex justify-end">
                <a 
                  href="https://goo.gl/maps/iXRnP96JgHqZE9WQ8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm bg-black text-white hover:bg-gray-800 px-4 py-2 rounded inline-flex items-center gap-1 transition-all duration-300"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Success Modal */}
      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={closeSuccessModal}
        title="Message Sent!"
        message="Thank you for reaching out. We'll get back to you as soon as possible."
      />
    </div>
  );
};

// Contact Information Data
const contactInfo = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Office Address",
    content: "100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038, India",
    extra: "Visit us during business hours"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    content: "+91-8087098711",
    extra: "Monday to Saturday, 9:00 AM to 7:00 PM IST"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    content: "contact@clinicflow.space",
    extra: "We'll respond as soon as possible"
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Live Chat",
    content: "Available on our website",
    extra: "Chat with our support team in real-time"
  }
];

// Office Hours Data
const officeHours = [
  { days: "Monday - Saturday", hours: "9:00 AM - 7:00 PM IST" },
  { days: "Sunday", hours: "Closed" }
];

// FAQ Data
const faqs = [
  {
    question: "How can I schedule a demo?",
    answer: "You can schedule a demo by filling out the contact form above, calling our sales team, or using the live chat feature on our website. We'll set up a time that works for you and your team."
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes, we offer 24/7 technical support for all our clients. You can reach our support team via email, phone, or live chat."
  },
  {
    question: "Is ClinicFlow Pro suitable for small practices?",
    answer: "Absolutely! ClinicFlow Pro is designed to scale with your practice. We have solutions for solo practitioners, small clinics, and large multi-location practices."
  },
  {
    question: "How long does implementation take?",
    answer: "The implementation timeline varies depending on the size of your practice and your specific needs. Typically, smaller practices can be up and running in 1-2 weeks, while larger practices might take 3-4 weeks."
  }
];

export default Contact; 