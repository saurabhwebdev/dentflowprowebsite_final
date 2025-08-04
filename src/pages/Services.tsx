import React, { useState } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Users, Calendar, FileText, LineChart, Settings, Shield, Building, HeartPulse, Stethoscope, Syringe, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbSchema } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const Services = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(item => ({ name: item.name, url: `https://clinicflow.space${item.href}` }))
  );

  const [activeTab, setActiveTab] = useState('overview');

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
        title="Our Services" 
        description="A unified platform for healthcare practices of all specialties"
        breadcrumbs={breadcrumbs}
        className="bg-gradient-to-r from-gray-100 to-gray-200"
      />
      
      <div className="container max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Tabs 
          defaultValue="overview" 
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-center">ClinicFlow Services</h2>
            <Separator className="w-16 h-1 bg-black mx-auto mb-8" />
            <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 bg-gray-100">
              <TabsTrigger 
                value="overview"
                className={cn(
                  "data-[state=active]:bg-black data-[state=active]:text-white"
                )}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="features"
                className={cn(
                  "data-[state=active]:bg-black data-[state=active]:text-white"
                )}
              >
                Core Features
              </TabsTrigger>
              <TabsTrigger 
                value="specialties"
                className={cn(
                  "data-[state=active]:bg-black data-[state=active]:text-white"
                )}
              >
                Specialties
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-600">
                ClinicFlow Pro provides comprehensive solutions for healthcare practices of all specialties. 
                Our platform combines intuitive design with powerful features to help you deliver exceptional patient care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCards.map((card, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 bg-gray-200/50 rounded-2xl transform -rotate-1"></div>
                <img 
                  src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Healthcare professionals" 
                  className="relative rounded-xl shadow-lg w-full h-[400px] object-cover grayscale"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Why Choose ClinicFlow Pro?</h3>
                <Separator className="w-16 h-1 bg-black mb-6" />
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-6 w-6 rounded-full bg-black/10 flex items-center justify-center">
                          <Check className="h-4 w-4 text-black" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/contact" className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center group">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="p-8 bg-gray-50">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-4">From DentFlow Pro to ClinicFlow Pro</h3>
                  <Separator className="w-16 h-1 bg-black mx-auto mb-6" />
                  <p className="text-gray-600 mb-6">
                    While we've expanded our platform to serve healthcare practices of all specialties, we remain committed 
                    to providing the exceptional dental practice management tools that made us a leader in the field.
                  </p>
                  <div className="flex justify-center">
                    <Link to="/transition" className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center group">
                      Learn About Our Evolution
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Features Tab */}
          <TabsContent value="features" className="space-y-12">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-lg text-gray-600">
                Our comprehensive suite of tools adapts to your specific needs, regardless of your specialty.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {featureGroups.map((group, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <div className="p-6 relative">
                    <div className="absolute -top-8 left-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md">
                      {group.icon}
                    </div>
                    <div className="pt-10">
                      <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                        {group.title}
                      </h3>
                      <div className="space-y-4">
                        {group.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="h-5 w-5 rounded-full bg-black/10 flex items-center justify-center">
                                <Check className="h-3 w-3 text-black" />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold">{feature.title}</h4>
                              <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7743498/pexels-photo-7743498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Healthcare professionals with technology" 
                  className="w-full h-[300px] object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-2xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
                    <p className="text-lg mb-8">
                      Join thousands of healthcare professionals who've elevated their practice management with ClinicFlow Pro.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <a href="https://clinicflow-roan.vercel.app/signin" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center group">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                      <Link to="/contact" className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                        Contact Sales
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Specialties Tab */}
          <TabsContent value="specialties" className="space-y-12">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-lg text-gray-600">
                ClinicFlow Pro adapts to the unique needs of different healthcare specialties.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialtyCards.map((specialty, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        {specialty.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{specialty.title}</h3>
                        <p className="text-gray-600">{specialty.description}</p>
                      </div>
                    </div>
                    <Separator className="mb-4" />
                    <ul className="space-y-2">
                      {specialty.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="h-5 w-5 rounded-full bg-black/10 flex items-center justify-center">
                              <Check className="h-3 w-3 text-black" />
                            </div>
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="p-8 bg-gray-50">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4">Don't See Your Specialty?</h3>
                  <Separator className="w-16 h-1 bg-black mx-auto mb-6" />
                  <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                    ClinicFlow Pro is highly customizable to meet the needs of virtually any healthcare specialty. 
                    Contact us to learn how we can tailor our solution for your specific practice.
                  </p>
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors group">
                    Contact Our Specialty Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Testimonials Section */}
        <div className="mt-24 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Trusted by Healthcare Professionals</h2>
            <Separator className="w-16 h-1 bg-black mx-auto mb-8" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black" stroke="none">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover grayscale" />
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.specialty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 text-black hover:underline group">
              See more success stories
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
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
    quote: "The dental charting and treatment planning features are exceptional. After transitioning from DentFlow Pro to ClinicFlow Pro, we kept all our specialized dental tools while gaining access to broader healthcare features.",
    name: "Dr. Sarah Johnson",
    role: "Practice Owner",
    specialty: "Dental",
    avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The multi-specialty management is brilliant. We use the internal referral system daily, and the consolidated reporting gives me clear insights across all departments.",
    name: "Dr. Michael Chen",
    role: "Medical Director",
    specialty: "Multi-Specialty Clinic",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The smart scheduling and automated reminders have reduced our no-show rate by 60%. The patient portal has also greatly improved our patient engagement.",
    name: "Dr. Jessica Williams",
    role: "Physician",
    specialty: "General Practice",
    avatar: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The specialty-specific documentation templates and custom clinical workflows have transformed our cardiology practice. The equipment scheduling feature is particularly valuable for our diagnostic labs.",
    name: "Dr. Rajesh Patel",
    role: "Chief Medical Officer",
    specialty: "Cardiology",
    avatar: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The comprehensive patient records system with custom fields has been invaluable. We can track family health history and preventive care schedules efficiently.",
    name: "Dr. Priya Sharma",
    role: "Practice Owner",
    specialty: "Family Medicine",
    avatar: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The insurance verification and claim processing features are outstanding. Our claim rejection rate has dropped by 45% since implementing ClinicFlow Pro's specialty-specific coding system.",
    name: "Dr. Arun Verma",
    role: "Senior Consultant",
    specialty: "Orthopedics",
    avatar: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The analytics dashboard helps me track KPIs across all departments. The financial reporting and resource management features have improved our operational efficiency by 35%.",
    name: "Dr. Kavita Reddy",
    role: "Managing Director",
    specialty: "Multi-Specialty Hospital",
    avatar: "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The pediatric-specific templates and growth tracking features are perfect for our practice. The patient portal's vaccination scheduler has made immunization management seamless.",
    name: "Dr. Amit Desai",
    role: "Clinic Director",
    specialty: "Pediatrics",
    avatar: "https://images.pexels.com/photos/5407213/pexels-photo-5407213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default Services; 