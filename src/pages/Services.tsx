import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  Users,
  Calendar,
  FileText,
  Package,
  BarChart3,
  Receipt,
  Truck,
  Mail,
  Shield,
  Settings,
  ArrowRight,
  Check,
  Zap,
  Clock,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
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
    <div className="bg-white text-black">
      <Helmet>
        <title>Services | ClinicFlow - Complete Clinic Management Solutions</title>
        <meta name="description" content="Discover ClinicFlow's comprehensive suite of clinic management features - from patient records to analytics, everything you need in one platform." />
        <link rel="canonical" href="https://clinicflow.space/services" />
        <meta name="keywords" content="healthcare services, clinic management features, medical practice software, patient scheduling, medical billing" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Everything Your Clinic Needs
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                In One Platform
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Comprehensive features designed to save time, reduce errors, and help you deliver better patient care
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                12 Powerful Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every tool you need to run your clinic efficiently
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Patient Management",
                  description: "Complete patient records with history tracking, demographics, and medical information at your fingertips"
                },
                {
                  icon: <Calendar className="h-8 w-8" />,
                  title: "Smart Scheduling",
                  description: "Automated appointment booking with SMS reminders, reducing no-shows by up to 60%"
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Billing & POS",
                  description: "Fast, accurate billing system with instant invoice generation and payment tracking"
                },
                {
                  icon: <Receipt className="h-8 w-8" />,
                  title: "Invoicing",
                  description: "Professional invoices with tax configuration, payment status, and complete history"
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Prescriptions",
                  description: "Digital prescription management with dispensing tracking and medication records"
                },
                {
                  icon: <Package className="h-8 w-8" />,
                  title: "Inventory Control",
                  description: "Real-time stock tracking with low stock alerts and expiry date management"
                },
                {
                  icon: <Truck className="h-8 w-8" />,
                  title: "Supplier Management",
                  description: "Streamline your supply chain with supplier tracking and purchase order management"
                },
                {
                  icon: <BarChart3 className="h-8 w-8" />,
                  title: "Analytics & Reports",
                  description: "Comprehensive insights into revenue, patient trends, and practice performance"
                },
                {
                  icon: <Mail className="h-8 w-8" />,
                  title: "Communications",
                  description: "Patient communication tools for messages, reminders, and automated follow-ups"
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "User Management",
                  description: "Team member accounts with activity tracking and performance monitoring"
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Roles & Permissions",
                  description: "Secure role-based access control for different staff levels and responsibilities"
                },
                {
                  icon: <Settings className="h-8 w-8" />,
                  title: "Settings & Config",
                  description: "Fully customizable GST/tax settings, clinic details, and system preferences"
                }
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all group"
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-black">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Clinics Choose ClinicFlow
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real results that make a difference in your daily operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Clock className="h-6 w-6 text-green-600" />,
                  title: "Save 10+ Hours Per Week",
                  description: "Automate repetitive tasks like appointment reminders, billing, and patient communication",
                  stat: "35% more efficient"
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-green-600" />,
                  title: "Increase Revenue by 20-30%",
                  description: "Reduce no-shows, eliminate billing errors, and optimize inventory management",
                  stat: "Average revenue increase"
                },
                {
                  icon: <Shield className="h-6 w-6 text-green-600" />,
                  title: "100% Secure & Compliant",
                  description: "HIPAA-compliant data protection with role-based access and complete audit trails",
                  stat: "Enterprise-grade security"
                },
                {
                  icon: <HeartHandshake className="h-6 w-6 text-green-600" />,
                  title: "Better Patient Experience",
                  description: "Faster service, reduced wait times, and improved communication lead to happier patients",
                  stat: "Higher satisfaction scores"
                }
              ].map((benefit, index) => (
                <Card key={index} className="p-8 bg-white border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-3 bg-green-50 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 mb-3">{benefit.description}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                        <Check className="h-4 w-4" />
                        {benefit.stat}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to See It In Action?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Book a free demo and discover how ClinicFlow can transform your clinic operations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://tvccms.vercel.app/login" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-black hover:bg-gray-100 group">
                  Book Your Free Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Link to="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
