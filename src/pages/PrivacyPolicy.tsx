import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/utils';

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(item => ({ name: item.name, url: `https://clinicflow.space${item.href}` }))
  );

  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>Privacy Policy | ClinicFlow - Your Data Privacy Matters</title>
        <meta name="description" content="Learn how ClinicFlow collects, uses, and protects your personal information. We are committed to maintaining the highest standards of data privacy." />
        <link rel="canonical" href="https://clinicflow.space/privacy" />
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
              <Shield className="h-4 w-4 text-black" />
              <span className="text-sm font-medium">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 6, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Lock className="h-6 w-6" />, title: "Data Encrypted", desc: "Bank-level encryption" },
                { icon: <Eye className="h-6 w-6" />, title: "Transparent", desc: "No hidden data usage" },
                { icon: <Database className="h-6 w-6" />, title: "Your Control", desc: "Delete anytime" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-white rounded-lg shadow-sm">{item.icon}</div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  ClinicFlow ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when you visit our website and use our clinic
                  management software. By accessing or using our services, you acknowledge that you have read, understood,
                  and agree to be bound by all the terms outlined in this policy.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">2.1 Personal Information</h3>
                    <p className="mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Register for an account</li>
                      <li>Sign up for our newsletter</li>
                      <li>Complete contact forms</li>
                      <li>Request customer support</li>
                      <li>Participate in surveys or promotions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">2.2 Patient Data</h3>
                    <p>
                      As a clinic management software provider, we may process patient data on behalf of our clinic clients.
                      This information is provided by our clients and may include patient health information protected under
                      applicable healthcare privacy laws.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">2.3 Usage Information</h3>
                    <p className="mb-3">We automatically collect certain information including:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>IP address and browser type</li>
                      <li>Operating system</li>
                      <li>Access times and pages viewed</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Send administrative information and updates</li>
                  <li>Send marketing communications with your consent</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Protect against unauthorized access and legal liability</li>
                </ul>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">We may share your information in the following situations:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                  <li><strong>Service Providers:</strong> With third-party vendors who provide services on our behalf</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> When you have given us permission to do so</li>
                </ul>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect the security of your personal
                  information, including bank-level encryption, regular security audits, and secure data centers. However,
                  please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">You may have certain rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to request deletion of your information</li>
                  <li>Right to restrict or object to processing</li>
                  <li>Right to data portability</li>
                </ul>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                  Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </Card>

              <Card className="p-8 bg-gray-50 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">contact@clinicflow.space</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">+91-8087098711</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">Bangalore, India</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
