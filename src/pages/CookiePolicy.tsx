import React from 'react';
import { PageHeader } from '@/components/ui/page-header';

const CookiePolicy = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Cookie Policy" 
        description="How we use cookies and similar technologies"
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
              ClinicFlow Pro ("we", "our", or "us") uses cookies and similar technologies on our website. This Cookie 
              Policy explains how we use these technologies, what types we use, and your choices regarding their use.
            </p>
            <p className="mt-4">
              By using our website, you consent to the use of cookies and similar technologies in accordance with this 
              Cookie Policy. If you do not accept the use of cookies, please disable them as explained below.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit websites. 
              They are widely used to make websites work more efficiently, provide a better user experience, and to provide 
              information to the owners of the site.
            </p>
            <p className="mt-4">
              Cookies do not harm your device, and they cannot be used to identify you personally from the information 
              stored in them. Cookies can only track your activity on the website they come from.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-bold mb-3">3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core functionality such as 
              security, network management, and account access. You may not opt-out of these cookies.
            </p>
            
            <h3 className="text-xl font-bold mb-3 mt-6">3.2 Performance and Analytics Cookies</h3>
            <p>
              These cookies collect information about how you use our website, such as which pages you visit most often 
              and if you receive any error messages. They help us improve how our website works and understand how users 
              interact with it.
            </p>
            
            <h3 className="text-xl font-bold mb-3 mt-6">3.3 Functionality Cookies</h3>
            <p>
              These cookies allow our website to remember choices you make (such as your username, language, or region) 
              and provide enhanced, personalized features. They may also be used to provide services you have requested.
            </p>
            
            <h3 className="text-xl font-bold mb-3 mt-6">3.4 Targeting and Advertising Cookies</h3>
            <p>
              These cookies are used to deliver advertisements more relevant to you and your interests. They are also used 
              to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third parties on our website. These third parties may include analytics providers 
              (like Google Analytics), advertising networks, and social media platforms. These third-party cookies are subject 
              to the respective privacy policies of these third parties.
            </p>
            <p className="mt-4">
              We use the following third-party services that may place cookies on your device:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Google Analytics (for website analytics)</li>
              <li>Google Tag Manager (for managing tags on our website)</li>
              <li>Facebook Pixel (for advertising measurement)</li>
              <li>LinkedIn Insight Tag (for advertising and analytics)</li>
              <li>Hotjar (for analyzing user behavior)</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Cookie Duration</h2>
            <p>
              Cookies can remain on your device for different periods of time:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li><strong>Session Cookies:</strong> These are temporary cookies that exist only during your browser session. They are deleted when you close your browser.</li>
              <li><strong>Persistent Cookies:</strong> These remain on your device after you close your browser, until they expire or until you delete them manually.</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can usually find these settings 
              in the "Options" or "Preferences" menu of your browser. The following links may help you manage cookies in 
              some of the most popular browsers:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            </ul>
            <p className="mt-4">
              Please note that restricting cookies may impact the functionality of our website. If you choose to disable cookies, 
              some features of our site may not work properly.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Cookie Consent</h2>
            <p>
              When you first visit our website, you will be shown a cookie banner that allows you to:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your cookie preferences</li>
            </ul>
            <p className="mt-4">
              You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in our website footer.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Changes to this Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business 
              practices. Any changes will be posted on this page with an updated revision date. If we make significant changes, 
              we will notify you through a notice on our website.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default CookiePolicy; 