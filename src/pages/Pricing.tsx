import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  Users,
  Zap,
  Shield,
  BarChart2,
  Star,
  Clock
} from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/utils';

const Pricing = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(item => ({ name: item.name, url: `https://clinicflow.space${item.href}` }))
  );

  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>Pricing | ClinicFlow - Simple, Transparent Pricing</title>
        <meta name="description" content="Get custom pricing tailored to your clinic's needs. No hidden fees, transparent pricing, and features you'll actually use." />
        <link rel="canonical" href="https://clinicflow.space/pricing" />
        <meta name="keywords" content="clinic management pricing, healthcare software cost, custom pricing, clinic software pricing" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

        <div className="container relative z-10 px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full mb-6">
              <Check className="h-4 w-4 text-black" />
              <span className="text-sm font-medium">Transparent, Fair Pricing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Pay Only For
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                What You Need
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              Custom pricing plans tailored to your clinic's size, features, and patient volume. No hidden fees, no surprises.
            </p>

            {/* Price Highlight */}
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-50 border-2 border-green-200 rounded-2xl">
              <span className="text-green-700 font-medium text-lg">Plans start as low as</span>
              <span className="text-4xl font-bold text-green-600">₹21<span className="text-xl">/day</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How We Calculate Your Price
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Three simple factors that determine your custom pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Practice Size",
                  description: "Number of practitioners and staff members using the system"
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Feature Selection",
                  description: "Only the specific features and modules your practice actually needs"
                },
                {
                  icon: <BarChart2 className="h-8 w-8" />,
                  title: "Usage Volume",
                  description: "Based on your patient load and monthly appointment volume"
                }
              ].map((factor, index) => (
                <Card key={index} className="p-8 bg-white border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all group">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-black">{factor.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Every Plan Includes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Core features that every ClinicFlow customer gets, regardless of plan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: "HIPAA Compliance",
                  description: "Enterprise-grade security and compliance"
                },
                {
                  icon: <Users className="h-5 w-5" />,
                  title: "Unlimited Users",
                  description: "No per-user fees for your team"
                },
                {
                  icon: <Clock className="h-5 w-5" />,
                  title: "24/7 Support",
                  description: "Phone, email, and chat support"
                },
                {
                  icon: <Star className="h-5 w-5" />,
                  title: "Free Updates",
                  description: "New features at no extra cost"
                },
                {
                  icon: <BarChart2 className="h-5 w-5" />,
                  title: "Analytics Dashboard",
                  description: "Real-time insights and reports"
                },
                {
                  icon: <Zap className="h-5 w-5" />,
                  title: "Setup & Training",
                  description: "Complete onboarding included"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg">
                    <div className="text-black">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Get Your Custom Quote
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Every clinic is unique. Let us create a pricing plan that perfectly fits your needs and budget.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
                  {[
                    "Transparent pricing with no hidden fees",
                    "Flexible monthly or annual billing",
                    "Scale your plan as you grow",
                    "Free implementation and training"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-black hover:bg-gray-100 group">
                      Get Custom Pricing
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <a href="https://tvccms.vercel.app/login" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
                      Book a Demo
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                About our pricing model
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The custom pricing saved us from paying for features we never would have used. We got exactly what we needed at a fair price.",
                  author: "Dr. Sarah Johnson",
                  position: "Family Practice"
                },
                {
                  quote: "Their consultative approach to pricing was refreshing. They actually took the time to understand our needs first.",
                  author: "Dr. Michael Chen",
                  position: "Multi-Specialty Clinic"
                },
                {
                  quote: "As we grew, ClinicFlow scaled with us. The flexible pricing let us add features incrementally without breaking our budget.",
                  author: "Dr. Priya Sharma",
                  position: "Dental Practice"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-black" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-bold text-black">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
