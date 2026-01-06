import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { FileText, Scale, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/utils';

const TermsOfService = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(item => ({ name: item.name, url: `https://clinicflow.space${item.href}` }))
  );

  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>Terms of Service | ClinicFlow - Service Agreement</title>
        <meta name="description" content="Read our Terms of Service to understand the rules and guidelines for using ClinicFlow clinic management software." />
        <link rel="canonical" href="https://clinicflow.space/terms" />
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
              <FileText className="h-4 w-4 text-black" />
              <span className="text-sm font-medium">Legal Agreement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Terms of Service
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
                { icon: <FileText className="h-6 w-6" />, title: "Clear Terms", desc: "Easy to understand" },
                { icon: <Scale className="h-6 w-6" />, title: "Fair Usage", desc: "Balanced agreement" },
                { icon: <Shield className="h-6 w-6" />, title: "Your Rights", desc: "Protected always" }
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
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to ClinicFlow. These Terms of Service ("Terms") govern your access to and use of the ClinicFlow
                  website and clinic management software (collectively, the "Service"). By accessing or using our Service,
                  you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">2. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may modify these Terms at any time. We will provide notice of any material changes by posting the updated
                  Terms on our website and updating the "Last updated" date. Your continued use of the Service after such changes
                  constitutes your acceptance of the new Terms.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
                <p className="text-gray-600 leading-relaxed">
                  You must be at least 18 years old to use our Service. By using the Service, you represent and warrant that you have
                  the legal capacity to enter into a binding agreement with us and that you will comply with these Terms.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">4. Account Registration</h2>
                <p className="text-gray-600 leading-relaxed">
                  When you register for an account, you must provide accurate and complete information. You are responsible for
                  maintaining the security of your account credentials and for all activities that occur under your account. You agree
                  to notify us immediately of any unauthorized access to or use of your account.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">5. Subscription and Payment</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Access to certain features of the Service requires a paid subscription. You agree to pay all fees associated with
                  your chosen subscription plan. All payments are non-refundable unless otherwise specified in our Refund Policy.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We may change our subscription fees at any time. We will notify you of any fee changes before they become effective.
                  Your continued use of the Service after a fee change constitutes your agreement to pay the modified fee.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">6. User Content</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Service allows you to store, manage, and process information related to your clinic, including patient
                  data ("User Content"). You retain all rights to your User Content. By using our Service, you grant us a license to
                  host, store, and process your User Content solely for the purpose of providing the Service to you.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You are solely responsible for all User Content you submit or store through the Service. You represent and warrant
                  that you have all necessary rights to your User Content and that it does not violate any laws or infringe upon the
                  rights of any third party.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Service and its original content, features, and functionality are owned by ClinicFlow and are protected by
                  copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any
                  part of our Service without our prior written consent.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">8. Prohibited Conduct</h2>
                <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                  <li>Use the Service in any way that violates any applicable law or regulation</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                  <li>Upload or transmit viruses, malware, or other malicious code</li>
                  <li>Collect or harvest user data without permission</li>
                  <li>Use the Service to transmit spam or other unsolicited communications</li>
                  <li>Impersonate another person or entity</li>
                </ul>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may terminate or suspend your account and access to the Service immediately, without prior notice, for any
                  breach of these Terms. Upon termination, your right to use the Service will cease immediately.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">10. Disclaimer of Warranties</h2>
                <p className="text-gray-600 leading-relaxed uppercase text-sm">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                  TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">11. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed uppercase text-sm">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CLINICFLOW BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS INTERRUPTION, ARISING
                  OUT OF OR IN CONNECTION WITH YOUR ACCESS TO, USE OF, OR INABILITY TO USE THE SERVICE.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict
                  of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought
                  exclusively in the courts of Bangalore, Karnataka, India, and you consent to the personal jurisdiction of such courts.
                </p>
              </Card>

              <Card className="p-8 bg-gray-50 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">legal@clinicflow.space</span>
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

export default TermsOfService;
