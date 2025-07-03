import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Users, Calendar, FileText, LineChart, Settings, Shield } from 'lucide-react';

const Services = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="ClinicFlow Services" 
        description="Comprehensive solutions for all your clinic management needs"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Core Features</TabsTrigger>
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Streamlined Clinic Management
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
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose ClinicFlow?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Features Tab */}
          <TabsContent value="features">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">
                Powerful Features for Modern Clinics
              </h2>
              <p className="text-center text-lg text-gray-600 mb-12">
                Our comprehensive suite of tools adapts to your specific needs, regardless of your specialty.
              </p>
              
              {featureGroups.map((group, index) => (
                <div key={index} className="mb-12">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    {group.icon}
                    {group.title}
                  </h3>
                  <div className="border-l-2 border-gray-200 pl-6 space-y-4">
                    {group.features.map((feature, idx) => (
                      <div key={idx} className="mb-4">
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Getting Started Tab */}
          <TabsContent value="getting-started">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">
                Getting Started with ClinicFlow
              </h2>
              <p className="text-center text-lg text-gray-600 mb-12">
                Setting up your clinic on our platform is simple and intuitive. Follow these steps to get started.
              </p>
              
              <div className="space-y-8">
                {gettingStartedSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        
                        {step.substeps && (
                          <ul className="space-y-2 ml-2 mt-4">
                            {step.substeps.map((substep, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{substep}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {step.tip && (
                          <div className="bg-gray-50 p-4 rounded-lg mt-4 border border-gray-200">
                            <p className="text-sm font-medium">Tip: {step.tip}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {index < gettingStartedSteps.length - 1 && (
                      <div className="absolute left-5 top-10 h-full w-0 border-l-2 border-dashed border-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <div className="flex gap-4 justify-center">
                  <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Sign Up Now
                  </button>
                  <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Schedule a Demo
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Service Cards Data
const serviceCards = [
  {
    title: "Patient Management",
    description: "Comprehensive patient records, history tracking, and easy access to essential information.",
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
    title: "Improved Efficiency",
    description: "Reduce administrative workload by up to 35% with streamlined workflows."
  },
  {
    title: "Enhanced Patient Experience",
    description: "Provide better service with fast access to information and reduced wait times."
  },
  {
    title: "Accurate Billing",
    description: "Minimize errors and maximize revenue with our intelligent billing system."
  },
  {
    title: "Data-Driven Decisions",
    description: "Make informed choices based on comprehensive practice analytics."
  },
  {
    title: "Seamless Integration",
    description: "Works with your existing systems and third-party applications."
  },
  {
    title: "Specialty-Specific Features",
    description: "Tailored functionality for various medical specialties including dental practices."
  },
];

// Feature Groups Data
const featureGroups = [
  {
    title: "Patient Management",
    icon: <Users className="h-5 w-5 text-black" />,
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
      }
    ]
  },
  {
    title: "Appointment & Scheduling",
    icon: <Calendar className="h-5 w-5 text-black" />,
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
      }
    ]
  },
  {
    title: "Billing & Financial Management",
    icon: <FileText className="h-5 w-5 text-black" />,
    features: [
      {
        title: "Insurance Verification",
        description: "Verify coverage and eligibility before appointments."
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
    icon: <LineChart className="h-5 w-5 text-black" />,
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
        title: "Custom Dashboards",
        description: "Create personalized views of the most important data for your practice."
      }
    ]
  }
];

// Getting Started Steps
const gettingStartedSteps = [
  {
    title: "Create Your Account",
    description: "Sign up and set up your initial administrator account to access the platform.",
    substeps: [
      "Visit the ClinicFlow signup page",
      "Enter your email address and create a password",
      "Verify your email address",
      "Complete your profile information"
    ],
    tip: "Use a strong, unique password for your ClinicFlow account to ensure security."
  },
  {
    title: "Configure Your Clinic Profile",
    description: "Add your clinic's information to personalize the system and documents.",
    substeps: [
      "Enter your clinic name and address",
      "Set your practice hours and contact information",
      "Add doctor details and credentials",
      "Configure regional settings and tax information"
    ],
    tip: "Complete your clinic profile before adding patients to ensure all documents display the correct information."
  },
  {
    title: "Understand the Dashboard",
    description: "Familiarize yourself with the main interface to efficiently manage your practice.",
    substeps: [
      "Explore the navigation menu and main sections",
      "Review the dashboard overview and quick actions",
      "Customize your view preferences",
      "Set up user accounts for your staff"
    ]
  },
  {
    title: "Get Your Clinic Operational",
    description: "Take the final steps to start using ClinicFlow for your daily operations.",
    substeps: [
      "Add your existing patients to the system",
      "Set up your appointment schedule",
      "Configure email notifications",
      "Import historical data if needed"
    ],
    tip: "Start with a small batch of patients to get comfortable with the system before importing your entire database."
  }
];

export default Services; 