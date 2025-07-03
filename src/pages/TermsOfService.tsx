import React from 'react';
import { PageHeader } from '@/components/ui/page-header';

const TermsOfService = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Terms of Service" 
        description="The rules and guidelines for using our services"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>
              Welcome to ClinicFlow Pro. These Terms of Service ("Terms") govern your access to and use of the ClinicFlow Pro 
              website and dental practice management software (collectively, the "Service"). By accessing or using our Service, 
              you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will provide notice of any material changes by posting the updated 
              Terms on our website and updating the "Last updated" date. Your continued use of the Service after such changes 
              constitutes your acceptance of the new Terms.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
            <p>
              You must be at least 18 years old to use our Service. By using the Service, you represent and warrant that you have 
              the legal capacity to enter into a binding agreement with us and that you will comply with these Terms.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Account Registration</h2>
            <p>
              When you register for an account, you must provide accurate and complete information. You are responsible for 
              maintaining the security of your account credentials and for all activities that occur under your account. You agree 
              to notify us immediately of any unauthorized access to or use of your account.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Subscription and Payment</h2>
            <p>
              Access to certain features of the Service requires a paid subscription. You agree to pay all fees associated with 
              your chosen subscription plan. All payments are non-refundable unless otherwise specified in our Refund Policy.
            </p>
            <p className="mt-4">
              We may change our subscription fees at any time. We will notify you of any fee changes before they become effective. 
              Your continued use of the Service after a fee change constitutes your agreement to pay the modified fee.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. User Content</h2>
            <p>
              Our Service allows you to store, manage, and process information related to your dental practice, including patient 
              data ("User Content"). You retain all rights to your User Content. By using our Service, you grant us a license to 
              host, store, and process your User Content solely for the purpose of providing the Service to you.
            </p>
            <p className="mt-4">
              You are solely responsible for all User Content you submit or store through the Service. You represent and warrant 
              that you have all necessary rights to your User Content and that it does not violate any laws or infringe upon the 
              rights of any third party.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by ClinicFlow Pro and are protected by 
              copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any 
              part of our Service without our prior written consent.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Prohibited Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Use the Service in any way that violates any applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
              <li>Collect or harvest user data without permission</li>
              <li>Use the Service to transmit spam or other unsolicited communications</li>
              <li>Impersonate another person or entity</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for any 
              breach of these Terms. Upon termination, your right to use the Service will cease immediately. All provisions of 
              the Terms that by their nature should survive termination shall survive, including ownership provisions, warranty 
              disclaimers, indemnity, and limitations of liability.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
              TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF 
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">11. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CLINICFLOW PRO BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS INTERRUPTION, ARISING 
              OUT OF OR IN CONNECTION WITH YOUR ACCESS TO, USE OF, OR INABILITY TO USE THE SERVICE.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless ClinicFlow Pro and its officers, directors, employees, agents, 
              and affiliates from any claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys' 
              fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict 
              of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought 
              exclusively in the courts of Bangalore, Karnataka, India, and you consent to the personal jurisdiction of such courts.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
              <p><strong>ClinicFlow Pro</strong></p>
              <p>123 ClinicFlow Tower, Whitefield Main Road</p>
              <p>Bangalore, Karnataka 560066, India</p>
              <p>Email: legal@clinicflowpro.com</p>
              <p>Phone: +1 (800) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 