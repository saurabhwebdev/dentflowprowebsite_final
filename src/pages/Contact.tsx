import React, { useState, useEffect } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, MessageSquare, Loader2, Building2, ArrowRight, ChevronUp, Calendar } from 'lucide-react';
import { sendToTelegram } from '@/lib/telegram-service';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SuccessModal, useSuccessModal } from '@/components/ui/success-modal';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbSchema } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
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
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'contact' | 'schedule'>('contact');
  const [searchParams] = useSearchParams();

  // Check URL parameters on component mount
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'schedule') {
      setActiveTab('schedule');
    }
  }, [searchParams]);

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
        <title>
          {activeTab === 'schedule'
            ? 'Schedule a Demo | ClinicFlow - Book Your Personalized Demonstration'
            : 'Contact Us | ClinicFlow - Modern Clinic Management Solution'
          }
        </title>
        <meta name="description" content={
          activeTab === 'schedule'
            ? 'Schedule a personalized demo of ClinicFlow. Book a 30-45 minute session with our team to see how our clinic management solution can transform your practice.'
            : 'Get in touch with ClinicFlow for questions, support, or to schedule a demo of our healthcare practice management solution.'
        } />
        <link rel="canonical" href="https://clinicflow.space/contact" />
        <meta name="keywords" content={
          activeTab === 'schedule'
            ? 'schedule clinicflow demo, book clinic management demo, healthcare software demonstration, medical practice software trial'
            : 'contact clinicflow, healthcare software support, clinic management demo, medical practice software help'
        } />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <PageHeader
        title={activeTab === 'schedule' ? 'Schedule a Demo' : 'Contact Us'}
        description={
          activeTab === 'schedule'
            ? 'Book a personalized demonstration of ClinicFlow with our team'
            : "We're here to help and answer any questions you might have"
        }
        breadcrumbs={breadcrumbs}
        className="bg-gradient-to-r from-gray-100 to-gray-200"
      />

      <div className="container max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setActiveTab('contact')}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all duration-200",
                activeTab === 'contact'
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              <MessageSquare className="h-4 w-4 inline-block mr-2" />
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all duration-200",
                activeTab === 'schedule'
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              <Calendar className="h-4 w-4 inline-block mr-2" />
              Schedule Meeting
            </button>
          </div>
        </div>

        {/* Contact Form Tab */}
        {activeTab === 'contact' && (
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
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-700">{item.content}</p>
                        {item.extra && <p className="text-sm text-gray-500 mt-1">{item.extra}</p>}
                        {item.whatsappUrl && (
                          <div className="mt-2">
                            <a
                              href={item.whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-full transition-colors duration-200"
                            >
                              <MessageSquare className="h-4 w-4" />
                              WhatsApp Me
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-0" />

                <div className="px-6 py-4 bg-white">
                  <Button
                    onClick={() => setActiveTab('schedule')}
                    className="w-full bg-black hover:bg-gray-800 text-white group"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
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
        )}

        {/* Schedule Meeting Tab */}
        {activeTab === 'schedule' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Schedule a Meeting</h2>
              <Separator className="w-16 h-1 bg-black mb-4 mx-auto" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ready to see ClinicFlow in action? Schedule a personalized demo with our team.
                We'll show you how our solution can transform your practice management.
              </p>
            </div>

            {/* How to Prepare Section */}
            <Card className="border-0 shadow-lg mb-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-gray-700" />
                  How to Set Up Your Demo Meeting
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Before Booking:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">1</span>
                        <span>Prepare a list of your current practice management challenges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">2</span>
                        <span>Think about your practice size and specific needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">3</span>
                        <span>Have your calendar ready to select the best time</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For the Demo:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">4</span>
                        <span>Ensure stable internet connection for video call</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">5</span>
                        <span>Join from a quiet location with minimal distractions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">6</span>
                        <span>Have questions ready about features you're most interested in</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mt-0.5">
                      💡
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-900 mb-1">Pro Tip:</h5>
                      <p className="text-blue-800 text-sm">
                        Bring a colleague or decision-maker to the demo if possible. This helps ensure all stakeholders
                        can ask questions and see how ClinicFlow fits your practice's workflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

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

            {/* After Booking Section */}
            <Card className="border-0 shadow-lg mt-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-700" />
                  After You Book Your Demo
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Confirmation Email</h4>
                      <p className="text-sm text-gray-600">You'll receive an email with meeting details and calendar invite</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Pre-Demo Materials</h4>
                      <p className="text-sm text-gray-600">We'll send helpful resources to review before our meeting</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Meeting Reminder</h4>
                      <p className="text-sm text-gray-600">Automatic reminders 24 hours and 1 hour before your demo</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Need to reschedule or cancel?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    No problem! You can reschedule or cancel your appointment using the link in your confirmation email,
                    or contact us directly.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white px-2 py-1 rounded border">📧 Email: contact@clinicflow.space</span>
                    <span className="text-xs bg-white px-2 py-1 rounded border">📞 Phone: +91-8087098711</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Can't find a suitable time? Need to reschedule?
              </p>
              <Button
                onClick={() => setActiveTab('contact')}
                variant="outline"
                className="border-gray-300 hover:border-gray-400"
              >
                Contact us directly
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

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
    extra: "Monday to Saturday, 9:00 AM to 7:00 PM IST",
    whatsappUrl: "https://wa.me/918087098711"
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
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Schedule Demo",
    content: "Book a personalized demonstration",
    extra: "30-45 minute sessions available"
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