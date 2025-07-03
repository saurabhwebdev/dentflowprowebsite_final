import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Users, Calendar, FileText, LineChart, Settings, Shield, Building, HeartPulse, Stethoscope, Syringe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbSchema } from '@/lib/utils';

const Services = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(item => ({ name: item.name, url: `https://clinicflow.space${item.href}` }))
  );

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Services | ClinicFlow - Modern Clinic Management Solution</title>
        <meta name="description" content="Discover ClinicFlow's comprehensive suite of healthcare practice management services, designed for all clinical specialties." />
        <link rel="canonical" href="https://clinicflow.space/services" />
        <meta name="keywords" content="healthcare services, clinic management features, medical practice software, patient scheduling, medical billing" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <PageHeader 
        title="ClinicFlow Services" 
        description="A unified platform for healthcare practices of all specialties, from dental to general medicine and beyond."
        breadcrumbs={breadcrumbs}
        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10"
      />
      
      <div className="container max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Core Features</TabsTrigger>
            <TabsTrigger value="specialties">Specialties</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Streamlined Practice Management
              </h2>
              <p className="text-lg text-gray-600">
                ClinicFlow Pro provides comprehensive solutions for healthcare practices of all specialties. 
                Our platform combines intuitive design with powerful features to help you deliver exceptional patient care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {serviceCards.map((card, index) => (
                <Card key={index} className="p-6 border border-gray-200 hover:border-black/30 transition-all hover:shadow-md">
                  <div className="mb-4 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="relative">
                <div className="absolute -inset-4 bg-gray-200/30 rounded-2xl transform rotate-2"></div>
                <img 
                  src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Healthcare professionals" 
                  className="relative rounded-xl shadow-lg w-full h-[350px] object-cover grayscale"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Choose ClinicFlow Pro?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h4 className="font-medium">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Schedule a Demo
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-6">From DentFlow Pro to ClinicFlow Pro</h3>
                <p className="text-gray-600 mb-6">
                  While we've expanded our platform to serve healthcare practices of all specialties, we remain committed 
                  to providing the exceptional dental practice management tools that made us a leader in the field.
                </p>
                <div className="flex justify-center">
                  <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Learn About Our Evolution
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Features Tab */}
          <TabsContent value="features">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">
                Powerful Features for Modern Healthcare Practices
              </h2>
              <p className="text-center text-lg text-gray-600 mb-12">
                Our comprehensive suite of tools adapts to your specific needs, regardless of your specialty.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {featureGroups.map((group, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -top-10 left-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      {group.icon}
                    </div>
                    <div className="pt-8">
                      <h3 className="text-xl font-bold mb-4 border-b pb-2 border-gray-200">
                        {group.title}
                      </h3>
                      <div className="space-y-4">
                        {group.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-semibold">{feature.title}</h4>
                              <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden mt-16">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/7743498/pexels-photo-7743498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Healthcare professionals with technology" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/70"></div>
              </div>
              <div className="relative py-12 px-8 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of healthcare professionals who've elevated their practice management with ClinicFlow Pro.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="https://clinicflow-roan.vercel.app/signin" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Get Started
                  </a>
                  <Link to="/contact" className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Specialties Tab */}
          <TabsContent value="specialties">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">
                Solutions for Every Specialty
              </h2>
              <p className="text-center text-lg text-gray-600 mb-12">
                ClinicFlow Pro adapts to the unique needs of different healthcare specialties.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {specialtyCards.map((specialty, index) => (
                  <Card key={index} className="p-6 border border-gray-200 hover:border-black/30 transition-all hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                        {specialty.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{specialty.title}</h3>
                        <p className="text-gray-600 mb-4">{specialty.description}</p>
                        <ul className="space-y-1 mt-4">
                          {specialty.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-black flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
                <h3 className="text-xl font-bold mb-4">Don't See Your Specialty?</h3>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                  ClinicFlow Pro is highly customizable to meet the needs of virtually any healthcare specialty. 
                  Contact us to learn how we can tailor our solution for your specific practice.
                </p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Contact Our Specialty Team
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Testimonials Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            Trusted by Healthcare Professionals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border border-gray-200">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black" stroke="none">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-auto flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.specialty}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Cards Data
const serviceCards = [
  {
    title: "Patient Management",
    description: "Comprehensive patient records, history tracking, and secure access to essential information.",
    icon: <Users className="h-6 w-6 text-black" />
  },
  {
    title: "Appointment Scheduling",
    description: "Intuitive scheduling system with automated reminders and online booking capabilities.",
    icon: <Calendar className="h-6 w-6 text-black" />
  },
  {
    title: "Billing & Invoicing",
    description: "Streamlined billing processes, insurance claim management, and financial reporting.",
    icon: <FileText className="h-6 w-6 text-black" />
  },
  {
    title: "Analytics & Reporting",
    description: "Powerful insights into practice performance, patient trends, and financial health.",
    icon: <LineChart className="h-6 w-6 text-black" />
  },
  {
    title: "Configuration & Setup",
    description: "Easily customize the platform to match your clinic's unique workflow and requirements.",
    icon: <Settings className="h-6 w-6 text-black" />
  },
  {
    title: "Security & Compliance",
    description: "HIPAA-compliant data protection with role-based access control and audit trails.",
    icon: <Shield className="h-6 w-6 text-black" />
  },
];

// Benefits Data
const benefits = [
  {
    title: "Unified Healthcare Platform",
    description: "A single solution that works for multiple healthcare specialties while maintaining specialty-specific features."
  },
  {
    title: "Improved Efficiency",
    description: "Reduce administrative workload by up to 35% with streamlined workflows and automation."
  },
  {
    title: "Enhanced Patient Experience",
    description: "Provide better service with fast access to information and reduced wait times."
  },
  {
    title: "Accurate Billing",
    description: "Minimize errors and maximize revenue with our intelligent billing system and specialty-specific coding."
  },
  {
    title: "Data-Driven Decisions",
    description: "Make informed choices based on comprehensive practice analytics and performance metrics."
  },
  {
    title: "Seamless Integration",
    description: "Works with your existing systems and third-party applications across the healthcare ecosystem."
  },
];

// Feature Groups Data
const featureGroups = [
  {
    title: "Patient Management",
    icon: <Users className="h-8 w-8 text-black" />,
    features: [
      {
        title: "Comprehensive Patient Records",
        description: "Store all patient information in a centralized, easily accessible database."
      },
      {
        title: "Custom Fields & Forms",
        description: "Create specialty-specific intake forms and clinical documentation."
      },
      {
        title: "Patient Portal",
        description: "Allow patients to update information, view records, and communicate securely."
      },
      {
        title: "Multi-Specialty Support",
        description: "Track patient data across different departments or specialties within your practice."
      }
    ]
  },
  {
    title: "Appointment & Scheduling",
    icon: <Calendar className="h-8 w-8 text-black" />,
    features: [
      {
        title: "Smart Scheduling",
        description: "Intelligent appointment system that optimizes provider time and resources."
      },
      {
        title: "Automated Reminders",
        description: "Reduce no-shows with SMS, email, and push notification reminders."
      },
      {
        title: "Online Booking",
        description: "Let patients book appointments directly through your website or app."
      },
      {
        title: "Resource Management",
        description: "Manage rooms, equipment, and staff schedules efficiently across specialties."
      }
    ]
  },
  {
    title: "Billing & Financial Management",
    icon: <FileText className="h-8 w-8 text-black" />,
    features: [
      {
        title: "Insurance Verification",
        description: "Verify coverage and eligibility before appointments."
      },
      {
        title: "Specialty-Specific Coding",
        description: "Integrated coding systems relevant to each medical specialty."
      },
      {
        title: "Claim Processing",
        description: "Submit and track insurance claims electronically."
      },
      {
        title: "Patient Invoicing",
        description: "Generate professional invoices and process payments."
      }
    ]
  },
  {
    title: "Reporting & Analytics",
    icon: <LineChart className="h-8 w-8 text-black" />,
    features: [
      {
        title: "Practice Performance",
        description: "Track key metrics like patient volume, revenue, and provider efficiency."
      },
      {
        title: "Financial Reports",
        description: "Generate detailed financial reports for accounting and tax purposes."
      },
      {
        title: "Clinical Outcomes",
        description: "Monitor treatment effectiveness and patient outcomes by specialty."
      },
      {
        title: "Custom Dashboards",
        description: "Create personalized views of the most important data for your practice."
      }
    ]
  }
];

// Specialty Cards Data
const specialtyCards = [
  {
    title: "Dental Practices",
    description: "Our original focus area, with comprehensive tools for dental practice management.",
    icon: <Stethoscope className="h-6 w-6 text-black" />,
    features: [
      "Dental charting and treatment planning",
      "Imaging integration",
      "Procedure-specific documentation",
      "Dental insurance processing",
      "Lab work management"
    ]
  },
  {
    title: "General Practice",
    description: "Essential tools for primary care physicians and general practitioners.",
    icon: <HeartPulse className="h-6 w-6 text-black" />,
    features: [
      "Comprehensive patient health records",
      "Preventive care scheduling",
      "Prescription management",
      "Lab result integration",
      "Referral management"
    ]
  },
  {
    title: "Specialty Clinics",
    description: "Tailored solutions for specialized medical practices.",
    icon: <Syringe className="h-6 w-6 text-black" />,
    features: [
      "Specialty-specific documentation templates",
      "Custom clinical workflows",
      "Equipment and resource scheduling",
      "Specialized billing codes",
      "Treatment outcome tracking"
    ]
  },
  {
    title: "Multi-Specialty Practices",
    description: "Unified management for clinics offering multiple healthcare services.",
    icon: <Building className="h-6 w-6 text-black" />,
    features: [
      "Cross-specialty patient records",
      "Departmental resource allocation",
      "Internal referral management",
      "Consolidated reporting",
      "Specialty-specific configurations"
    ]
  }
];

// Testimonials Data
const testimonials = [
  {
    quote: "Transitioning from DentFlow Pro to ClinicFlow Pro was seamless. We kept all our dental-specific features while gaining new capabilities for our expanding practice.",
    name: "Dr. Sarah Johnson",
    role: "Practice Owner",
    specialty: "Dental",
    avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The unified platform has significantly improved our workflow. Managing multiple specialties under one system has reduced our administrative overhead by nearly 40%.",
    name: "Dr. Michael Chen",
    role: "Medical Director",
    specialty: "Multi-Specialty Clinic",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "As a new practice, we needed a solution that could grow with us. ClinicFlow Pro provides exactly what we need now, with the flexibility to expand as our practice evolves.",
    name: "Dr. Jessica Williams",
    role: "Physician",
    specialty: "General Practice",
    avatar: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default Services; 