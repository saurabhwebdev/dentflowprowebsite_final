import React, { useState } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { sendToTelegram } from '@/lib/telegram-service';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { SuccessModal, useSuccessModal } from '@/components/ui/success-modal';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbSchema } from '@/lib/utils';

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
        // Reset form
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
      />
      
      <div className="container max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about ClinicFlow? Fill out the form below and one of our team members 
              will get back to you as soon as possible.
            </p>
            
            {formStatus === 'error' && (
              <Alert className="mb-6 bg-red-50 border-red-200">
                <AlertTitle className="text-red-800">Error</AlertTitle>
                <AlertDescription className="text-red-700">
                  {errorMessage}
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6 border border-gray-300 rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  />
                </div>
              </div>
              
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
                />
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
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Prefer to reach out directly? Here are all the ways you can contact us.
            </p>
            
            <div className="space-y-6 mb-10 border border-gray-300 rounded-lg p-6 shadow-sm">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                    {item.extra && <p className="text-sm text-gray-500 mt-1">{item.extra}</p>}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Office Hours */}
            <Card className="p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Office Hours
              </h3>
              <div className="space-y-2">
                {officeHours.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{item.days}</span>
                    <span className="text-gray-600">{item.hours}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* FAQ Section */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group border border-gray-200 rounded-lg">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-600 p-4 pt-0">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">Visit Our Office in Bangalore</h2>
          <div className="h-96 bg-gray-100 rounded-xl overflow-hidden border border-gray-300 shadow-sm">
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.4985%2C12.8861%2C77.7939%2C13.0874&amp;layer=mapnik" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen 
              title="Map of Bangalore"
              loading="lazy"
            ></iframe>
          </div>
          <div className="text-center mt-3">
            <a 
              href="https://www.openstreetmap.org/#map=12/12.9867/77.6462" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              View larger map
            </a>
          </div>
        </div>
      </div>
      
      {/* Success Modal */}
      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={closeSuccessModal}
        title="Message Sent!"
        description="Thank you for contacting us. We've received your message and will get back to you as soon as possible."
      />
    </div>
  );
};

// Contact Information Data
const contactInfo = [
  {
    title: "Email",
    content: "info@clinicflowpro.com",
    icon: <Mail className="h-5 w-5 text-blue-600" />,
    extra: "We usually respond within 24 hours"
  },
  {
    title: "Phone",
    content: "+1 (800) 123-4567",
    icon: <Phone className="h-5 w-5 text-blue-600" />,
    extra: "Monday to Friday, 9am to 6pm EST"
  },
  {
    title: "Office",
    content: "123 ClinicFlow Tower, Whitefield Main Road, Bangalore, Karnataka 560066, India",
    icon: <MapPin className="h-5 w-5 text-blue-600" />
  },
  {
    title: "Live Chat",
    content: "Available on our website",
    icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
    extra: "Our support team is online 24/7"
  }
];

// Office Hours Data
const officeHours = [
  { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
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