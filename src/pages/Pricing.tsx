import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbSchema } from '@/lib/utils';
import { CheckIcon, ArrowRight, Users, Zap, ShieldCheck, BarChart2, Lock, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Pricing = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(item => ({ name: item.name, url: `https://clinicflow.space${item.href}` }))
  );

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Pricing | ClinicFlow - Custom Healthcare Software Pricing</title>
        <meta name="description" content="Get a customized pricing plan for ClinicFlow's clinic management software tailored to your healthcare practice's unique needs." />
        <link rel="canonical" href="https://clinicflow.space/pricing" />
        <meta name="keywords" content="clinic management pricing, healthcare software cost, custom pricing, clinic software pricing, medical practice management cost" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <PageHeader 
        title="Custom Pricing Plans" 
        description="Tailored solutions for your unique practice needs"
        breadcrumbs={breadcrumbs}
        className="bg-gradient-to-r from-gray-100 to-gray-200"
      />
      
      <div className="container max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">No One-Size-Fits-All Pricing</h2>
          <Separator className="w-16 h-1 bg-black mx-auto mb-6" />
          <p className="text-xl text-gray-600 mb-8">
            We believe your practice shouldn't pay for features you don't need. That's why we create 
            customized pricing plans based on your specific requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
            {[
              {
                icon: <Users className="h-6 w-6 text-black" />,
                title: "Practice Size",
                description: "Plans based on the number of practitioners and staff at your clinic"
              },
              {
                icon: <Zap className="h-6 w-6 text-black" />,
                title: "Feature Selection",
                description: "Only pay for the specific features and modules your practice needs"
              },
              {
                icon: <BarChart2 className="h-6 w-6 text-black" />,
                title: "Usage Volume",
                description: "Scaling options based on your patient load and appointment volume"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Features Section */}
        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">All Plans Include</h2>
          <Separator className="w-16 h-1 bg-black mx-auto mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
            {[
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: "HIPAA Compliance",
                description: "Enterprise-grade security that keeps patient data safe and compliant"
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Unlimited Users",
                description: "No per-user fees - your entire team can collaborate efficiently"
              },
              {
                icon: <Lock className="h-5 w-5" />,
                title: "Data Security",
                description: "End-to-end encryption and regular backups to protect your information"
              },
              {
                icon: <Star className="h-5 w-5" />,
                title: "Premium Support",
                description: "Dedicated customer success team available via phone, email, and chat"
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Regular Updates",
                description: "Continuous improvements and new features at no additional cost"
              },
              {
                icon: <BarChart2 className="h-5 w-5" />,
                title: "Analytics Dashboard",
                description: "Actionable insights to help optimize your practice operations"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="border-0 shadow-lg mt-16 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get Your Custom Quote</h2>
                <p className="text-gray-600 mb-6">
                  Every healthcare practice is unique. Contact us today for a customized pricing plan 
                  that perfectly fits your clinic's needs and budget. Our experts will help you 
                  select only the features you need so you never pay for unnecessary functionality.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Transparent pricing with no hidden fees",
                    "Flexible monthly or annual billing options",
                    "Scale your plan as your practice grows",
                    "Free implementation and training included"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-black hover:bg-gray-800 text-white px-6 py-6 h-auto text-lg group">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact for Custom Pricing
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg blur"></div>
                  <div className="relative bg-white p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className="h-2 w-2 bg-black rounded-full"></span>
                      Why Custom Pricing?
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        We've found that standard tiered pricing often means clients either:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-medium">1</span>
                          </div>
                          <p className="text-gray-600">
                            Pay for features they never use
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-medium">2</span>
                          </div>
                          <p className="text-gray-600">
                            Need to upgrade to expensive tiers for just one feature
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-medium">3</span>
                          </div>
                          <p className="text-gray-600">
                            Can't get the exact combination of tools they need
                          </p>
                        </li>
                      </ul>
                      <Separator className="my-4" />
                      <p className="text-gray-600">
                        Our custom pricing ensures you get exactly what you need at a fair price point.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Testimonials */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold mb-12">What Our Clients Say About Our Pricing Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The custom pricing model saved us from paying for features we never would have used. We got exactly what we needed at a price point that made sense for our small practice.",
                author: "Dr. Sarah Johnson",
                position: "Family Practice, 3 Physicians"
              },
              {
                quote: "I was skeptical at first, but their consultative approach to pricing was refreshing. They took the time to understand our workflow before recommending a solution.",
                author: "Dr. Michael Chen",
                position: "Orthopedic Specialist, 8 Physicians"
              },
              {
                quote: "As our practice grew, ClinicFlow scaled with us. Their flexible pricing allowed us to add features incrementally without breaking our budget.",
                author: "Lisa Rodriguez",
                position: "Practice Manager, Multi-location Clinic"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
                <blockquote>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <footer>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </footer>
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 