import React from 'react';
import { PageHeader } from '@/components/ui/page-header';

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Privacy Policy" 
        description="How we collect, use, and protect your information"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              ClinicFlow Pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how 
              we collect, use, disclose, and safeguard your information when you visit our website and use our dental practice 
              management software.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, 
              understood, and agree to be bound by all the terms outlined in this policy.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-bold mb-3">2.1 Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Register for an account</li>
              <li>Sign up for our newsletter</li>
              <li>Complete contact forms</li>
              <li>Request customer support</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, billing information, professional 
              credentials, and other details necessary to provide our services.
            </p>
            
            <h3 className="text-xl font-bold mb-3 mt-6">2.2 Patient Data</h3>
            <p>
              As a dental practice management software provider, we may process patient data on behalf of our dental 
              practice clients. This information is provided by our clients and may include patient health information 
              protected under applicable healthcare privacy laws.
            </p>
            
            <h3 className="text-xl font-bold mb-3 mt-6">2.3 Usage Information</h3>
            <p>
              We automatically collect certain information about your device and how you interact with our services, including:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Access times and dates</li>
              <li>Pages viewed</li>
              <li>Referring website addresses</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send administrative information and updates</li>
              <li>Send marketing communications with your consent</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect against unauthorized access and legal liability</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
            <p>
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li><strong>Service Providers:</strong> With third-party vendors who provide services on our behalf</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you have given us permission to do so</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. 
              However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to request deletion of your information</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
              <p><strong>ClinicFlow Pro</strong></p>
              <p>123 ClinicFlow Tower, Whitefield Main Road</p>
              <p>Bangalore, Karnataka 560066, India</p>
              <p>Email: privacy@clinicflowpro.com</p>
              <p>Phone: +1 (800) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 