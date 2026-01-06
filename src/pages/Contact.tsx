import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, MessageSquare, Loader2, ArrowRight, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { sendToTelegram } from '@/lib/telegram-service';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SuccessModal, useSuccessModal } from '@/components/ui/success-modal';
import { generateBreadcrumbSchema } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { CalendlyWidget } from '@/components/ui/calendly-widget';
import { useSearchParams } from 'react-router-dom';

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
  const [activeTab, setActiveTab] = useState<'contact' | 'schedule'>('contact');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'schedule') {
      setActiveTab('schedule');
    }
  }, [searchParams]);

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
    <div className="bg-white text-black">
      <Helmet>
        <title>
          {activeTab === 'schedule'
            ? 'Schedule a Demo | ClinicFlow - Book Your Free Demonstration'
            : 'Contact Us | ClinicFlow - Get In Touch'
          }
        </title>
        <meta name="description" content={
          activeTab === 'schedule'
            ? 'Schedule a personalized demo of ClinicFlow. Book a session with our team to see how our clinic management solution can transform your practice.'
            : 'Get in touch with ClinicFlow for questions, support, or to schedule a demo of our healthcare practice management solution.'
        } />
        <link rel="canonical" href="https://clinicflow.space/contact" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full mb-6">
              <MessageSquare className="h-4 w-4 text-black" />
              <span className="text-sm font-medium">We're Here to Help</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {activeTab === 'schedule' ? 'Schedule Your Free Demo' : 'Get In Touch'}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {activeTab === 'schedule'
                ? 'See ClinicFlow in action - book a personalized demo and discover how we can transform your clinic'
                : "Have questions? Want to learn more? We're here to help you find the perfect solution for your clinic"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1.5 rounded-xl inline-flex">
              <button
                onClick={() => setActiveTab('contact')}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2",
                  activeTab === 'contact'
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <MessageSquare className="h-4 w-4" />
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2",
                  activeTab === 'schedule'
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <Calendar className="h-4 w-4" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Tab */}
      {activeTab === 'contact' && (
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <Card className="p-8 border-gray-200">
                    <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                    <p className="text-gray-600 mb-6">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>

                    {formStatus === 'error' && (
                      <Alert className="mb-6 bg-red-50 border-red-200">
                        <AlertTitle className="text-red-900">Error</AlertTitle>
                        <AlertDescription className="text-red-700">
                          {errorMessage}
                        </AlertDescription>
                      </Alert>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="Rajesh"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="bg-gray-50 border-gray-200 focus:border-black focus:ring-black"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Sharma"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="bg-gray-50 border-gray-200 focus:border-black focus:ring-black"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="rajesh@clinic.com"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-gray-50 border-gray-200 focus:border-black focus:ring-black"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-gray-50 border-gray-200 focus:border-black focus:ring-black"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help you?"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-gray-50 border-gray-200 focus:border-black focus:ring-black"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your clinic and what you're looking for..."
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-gray-50 border-gray-200 focus:border-black focus:ring-black"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-black hover:bg-gray-800 text-white group"
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

                {/* Contact Info Sidebar */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="p-6 border-gray-200">
                    <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      {[
                        { icon: <Building2 className="h-5 w-5" />, title: "Office", content: "100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038" },
                        { icon: <Phone className="h-5 w-5" />, title: "Phone", content: "+91-8087098711" },
                        { icon: <Mail className="h-5 w-5" />, title: "Email", content: "contact@clinicflow.space" },
                        { icon: <Clock className="h-5 w-5" />, title: "Hours", content: "Mon-Sat: 9AM - 7PM IST" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            {item.icon}
                          </div>
                          <div>
                            <div className="font-medium text-sm">{item.title}</div>
                            <div className="text-gray-600 text-sm">{item.content}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6 bg-gray-50 border-gray-200">
                    <h3 className="text-lg font-bold mb-4">Prefer a Demo?</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      See ClinicFlow in action with a personalized demonstration from our team.
                    </p>
                    <Button
                      onClick={() => setActiveTab('schedule')}
                      className="w-full bg-black hover:bg-gray-800 text-white group"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Demo
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Card>

                  <Card className="p-6 border-gray-200">
                    <h3 className="text-lg font-bold mb-4">Quick Response</h3>
                    <div className="space-y-3">
                      {[
                        "Response within 24 hours",
                        "Free consultation call",
                        "No obligation to purchase",
                        "Support in English & Hindi"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Schedule Demo Tab */}
      {activeTab === 'schedule' && (
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* What to Expect */}
              <Card className="p-8 border-gray-200 mb-8">
                <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { step: "01", title: "Live Demo", desc: "See all features in action" },
                    { step: "02", title: "Q&A Session", desc: "Ask all your questions" },
                    { step: "03", title: "Custom Plan", desc: "Get pricing for your needs" }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">
                        {item.step}
                      </div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Calendly Widget */}
              <CalendlyWidget
                title="Book Your Demo Session"
                description="Choose a convenient time for your personalized ClinicFlow demonstration."
                features={[
                  'Live product walkthrough',
                  'Discussion of your specific needs',
                  'Pricing and implementation details',
                  'Q&A session with our experts'
                ]}
              />

              {/* Back to Contact */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Prefer to send us a message instead?
                </p>
                <Button
                  onClick={() => setActiveTab('contact')}
                  variant="outline"
                  className="border-gray-300 hover:border-black"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-gray-200">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <h2 className="text-xl font-bold">Visit Our Office in Bangalore</h2>
                </div>
              </div>
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124425.97709531436!2d77.5159352151494!3d12.972074638522408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16619c45f77d%3A0x65b8ba3513a51219!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1716927978126!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of our office in Bangalore"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        title="Message Sent!"
        message="Thank you for reaching out. We'll get back to you within 24 hours."
      />
    </div>
  );
};

export default Contact;
