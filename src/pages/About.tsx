import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  Target,
  Heart,
  Zap,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Check
} from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/utils';

const About = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(item => ({ name: item.name, url: `https://clinicflow.space${item.href}` }))
  );

  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>About Us | ClinicFlow - Transforming Clinic Management</title>
        <meta name="description" content="Learn about ClinicFlow's mission to help clinic owners run their practices effortlessly through innovative technology and exceptional support." />
        <link rel="canonical" href="https://clinicflow.space/about" />
        <meta name="keywords" content="about clinicflow, healthcare software company, medical practice management, clinic software team" />
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
              We're Building the Future
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Of Clinic Management
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Our mission is simple: help clinic owners run their practices effortlessly, so they can focus on what truly matters—exceptional patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our core mission and values that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Our Mission",
                  description: "To eliminate administrative burden from healthcare, allowing practitioners to focus on delivering exceptional patient care through innovative, easy-to-use technology."
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Our Values",
                  description: "Innovation, integrity, and excellence in everything we build. We're committed to improving healthcare for both practitioners and patients across India."
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Our Vision",
                  description: "To become India's most trusted clinic management platform, empowering 10,000+ clinics with technology that transforms their operations."
                }
              ].map((item, index) => (
                <Card key={index} className="p-8 bg-white border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all group">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-black">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Clinics Trust ClinicFlow
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're more than just software—we're your partner in success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Users className="h-6 w-6 text-green-600" />,
                  title: "Built for Indian Clinics",
                  description: "GST-compliant billing, Indian payment integrations, and features designed specifically for the Indian healthcare market.",
                  stat: "Made in India, for India"
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-green-600" />,
                  title: "Proven Results",
                  description: "20+ clinics trust us to manage their appointments efficiently. Our customers see 35% efficiency gains and 20-30% revenue increases.",
                  stat: "Real, measurable impact"
                },
                {
                  icon: <Shield className="h-6 w-6 text-green-600" />,
                  title: "Enterprise-Grade Security",
                  description: "Your patient data is protected with bank-level encryption, regular backups, and HIPAA-compliant infrastructure.",
                  stat: "99.9% uptime guarantee"
                },
                {
                  icon: <Heart className="h-6 w-6 text-green-600" />,
                  title: "Dedicated Support",
                  description: "Our team is here to help you succeed. Free onboarding, training, and 24/7 support in English and Hindi.",
                  stat: "We're with you every step"
                }
              ].map((item, index) => (
                <Card key={index} className="p-8 bg-white border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-3 bg-green-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                        <Check className="h-4 w-4" />
                        {item.stat}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Impact in Numbers
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "20+", label: "Active Clinics" },
                { number: "10M+", label: "Appointments Managed" },
                { number: "35%", label: "Efficiency Increase" },
                { number: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
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
              Ready to Join 20+ Successful Clinics?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              See how ClinicFlow can transform your clinic operations and help you deliver better patient care
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://tvccms.vercel.app/login" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-black hover:bg-gray-100 group">
                  Book Your Free Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
