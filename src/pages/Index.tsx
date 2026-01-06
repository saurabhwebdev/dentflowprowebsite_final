import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  Check,
  Clock,
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
  CheckCircle2,
  XCircle,
  Zap,
  HeartHandshake,
  TrendingUp
} from 'lucide-react';

const Index = () => {
  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>ClinicFlow - Modern Clinic Management Solution</title>
        <meta name="description" content="Streamline your healthcare practice with ClinicFlow's intuitive, efficient, and comprehensive management solution for all clinical specialties." />
        <link rel="canonical" href="https://clinicflow.space/" />
        <meta name="keywords" content="clinic management software, healthcare practice software, medical office solution, patient management system" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full mb-6 animate-fade-in">
              <CheckCircle2 className="h-4 w-4 text-black" />
              <span className="text-sm font-medium">Trusted by 1,000+ Clinics Worldwide</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
              Run Your Clinic
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Effortlessly
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in leading-relaxed">
              Complete clinic management software that saves you 10+ hours per week.
              Focus on patient care, not paperwork.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delayed">
              <Link to="/contact?tab=schedule">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-black hover:bg-gray-800 text-white group">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="https://clinicflowpronextmongo.vercel.app/auth/signup" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-2 border-black text-black hover:bg-black hover:text-white">
                  Try It Free
                </Button>
              </a>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up-delayed">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-black" />
                  <div className="text-3xl font-bold">35%</div>
                </div>
                <div className="text-sm text-gray-600">More Efficient</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-black" />
                  <div className="text-3xl font-bold">1,000+</div>
                </div>
                <div className="text-sm text-gray-600">Clinics Trust Us</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-black" />
                  <div className="text-3xl font-bold">99.9%</div>
                </div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Running a Clinic Shouldn't Be This Hard
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We understand the daily challenges clinic owners face
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <XCircle className="h-6 w-6 text-red-600" />,
                  title: "Drowning in Paperwork",
                  description: "Hours wasted on manual record-keeping, appointment scheduling, and billing tasks"
                },
                {
                  icon: <XCircle className="h-6 w-6 text-red-600" />,
                  title: "Disorganized Patient Data",
                  description: "Scattered files, missing information, and difficulty tracking patient history"
                },
                {
                  icon: <XCircle className="h-6 w-6 text-red-600" />,
                  title: "Revenue Leakage",
                  description: "Missed appointments, billing errors, and poor inventory management eating into profits"
                },
                {
                  icon: <XCircle className="h-6 w-6 text-red-600" />,
                  title: "No Clear Insights",
                  description: "Flying blind without data on performance, trends, or areas for improvement"
                }
              ].map((problem, index) => (
                <Card key={index} className="p-6 bg-white border-red-100 hover:border-red-200 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {problem.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                      <p className="text-gray-600">{problem.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">The Solution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Everything You Need in One Place
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                ClinicFlow brings order to chaos with a complete, integrated system
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Zap className="h-6 w-6 text-green-600" />,
                  title: "Automate Administrative Tasks",
                  description: "Save 10+ hours per week with automated scheduling, reminders, and billing",
                  benefit: "35% more efficient operations"
                },
                {
                  icon: <Users className="h-6 w-6 text-green-600" />,
                  title: "Centralized Patient Records",
                  description: "All patient data in one secure, searchable location with complete history tracking",
                  benefit: "Instant access to critical information"
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-green-600" />,
                  title: "Maximize Revenue",
                  description: "Reduce no-shows, eliminate billing errors, and optimize inventory management",
                  benefit: "Increase revenue by 20-30%"
                },
                {
                  icon: <BarChart3 className="h-6 w-6 text-green-600" />,
                  title: "Data-Driven Decisions",
                  description: "Comprehensive analytics dashboard with real-time insights into your practice",
                  benefit: "Make informed decisions instantly"
                }
              ].map((solution, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-3 bg-white rounded-lg shadow-sm">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                      <p className="text-gray-600 mb-3">{solution.description}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                        <CheckCircle2 className="h-4 w-4" />
                        {solution.benefit}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Complete Clinic Management Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                All the tools you need to run your clinic smoothly, in one integrated platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Patient Management",
                  description: "Complete patient records with history tracking, demographics, and medical information"
                },
                {
                  icon: <Calendar className="h-8 w-8" />,
                  title: "Appointments",
                  description: "Smart scheduling with automated reminders, online booking, and calendar management"
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Billing & POS",
                  description: "Point-of-sale billing system with invoice generation and payment tracking"
                },
                {
                  icon: <Receipt className="h-8 w-8" />,
                  title: "Invoicing",
                  description: "Professional invoices with tax configuration, payment status, and history"
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Prescriptions",
                  description: "Digital prescription management with dispensing tracking and medication records"
                },
                {
                  icon: <Package className="h-8 w-8" />,
                  title: "Inventory",
                  description: "Track stock levels, low stock alerts, product management, and expiry tracking"
                },
                {
                  icon: <Truck className="h-8 w-8" />,
                  title: "Suppliers",
                  description: "Manage supplier relationships, purchase orders, and supply chain"
                },
                {
                  icon: <BarChart3 className="h-8 w-8" />,
                  title: "Reports & Analytics",
                  description: "Real-time insights into revenue, patient trends, and practice performance"
                },
                {
                  icon: <Mail className="h-8 w-8" />,
                  title: "Communications",
                  description: "Patient communication tools for messages, reminders, and follow-ups"
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "User Management",
                  description: "Team member accounts with activity tracking and access control"
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Roles & Permissions",
                  description: "Role-based access control for security and workflow management"
                },
                {
                  icon: <Settings className="h-8 w-8" />,
                  title: "Settings & Config",
                  description: "Customize GST/tax settings, clinic details, and system preferences"
                }
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all group"
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-black">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white group">
                  Explore All Features
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Get Started in 3 Simple Steps
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From setup to go-live, we make it easy to transform your clinic operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>

              {[
                {
                  step: "01",
                  title: "Book a Demo",
                  description: "Schedule a personalized demo to see how ClinicFlow works for your specific needs",
                  icon: <Calendar className="h-6 w-6" />
                },
                {
                  step: "02",
                  title: "Setup & Training",
                  description: "Our team helps you configure the system and trains your staff on all features",
                  icon: <Settings className="h-6 w-6" />
                },
                {
                  step: "03",
                  title: "Go Live",
                  description: "Start running your clinic effortlessly with ongoing support from our team",
                  icon: <Zap className="h-6 w-6" />
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-8 bg-white border-2 border-gray-200 hover:border-black transition-colors h-full">
                    <div className="flex flex-col items-center text-center">
                      {/* Step number */}
                      <div className="relative z-10 mb-6">
                        <div className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                          {step.step}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="text-black">{step.icon}</div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact?tab=schedule">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white h-14 px-8 text-lg group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Trusted by Clinic Owners Worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join 1,000+ clinics that have transformed their operations with ClinicFlow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  quote: "ClinicFlow has saved us over 10 hours per week on administrative tasks. The automated appointment reminders alone have reduced no-shows by 60%.",
                  name: "Dr. Sarah Johnson",
                  role: "Clinic Owner",
                  specialty: "Family Practice"
                },
                {
                  quote: "The inventory management feature has been a game-changer. We've reduced waste by 30% and never run out of critical supplies anymore.",
                  name: "Dr. Michael Chen",
                  role: "Practice Manager",
                  specialty: "Multi-Specialty Clinic"
                },
                {
                  quote: "The analytics dashboard gives me real-time insights into our practice performance. I can make data-driven decisions that have increased our revenue by 25%.",
                  name: "Dr. Priya Sharma",
                  role: "Medical Director",
                  specialty: "Dental Practice"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 fill-black"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-600 mb-6 flex-grow italic">"{testimonial.quote}"</p>

                    {/* Author */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="font-bold text-black">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.specialty}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { number: "1,000+", label: "Active Clinics" },
                { number: "10M+", label: "Appointments Managed" },
                { number: "35%", label: "Efficiency Increase" },
                { number: "99.9%", label: "Uptime Guaranteed" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Clinic?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join 1,000+ clinics that are saving time, increasing revenue, and delivering better patient care with ClinicFlow
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link to="/contact?tab=schedule">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-black hover:bg-gray-100 group">
                  Book Your Free Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="https://clinicflowpronextmongo.vercel.app/auth/signup" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-black">
                  Start Free Trial
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Setup & training included</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
