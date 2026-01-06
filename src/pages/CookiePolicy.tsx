import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Cookie, Settings, BarChart, Target, Mail, Phone, MapPin } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/utils';

const CookiePolicy = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(item => ({ name: item.name, url: `https://clinicflow.space${item.href}` }))
  );

  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>Cookie Policy | ClinicFlow - How We Use Cookies</title>
        <meta name="description" content="Learn how ClinicFlow uses cookies and similar technologies to improve your experience on our website." />
        <link rel="canonical" href="https://clinicflow.space/cookies" />
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
              <Cookie className="h-4 w-4 text-black" />
              <span className="text-sm font-medium">Cookie Information</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 6, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types Overview */}
      <section className="py-12 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { icon: <Settings className="h-5 w-5" />, title: "Essential", desc: "Required" },
                { icon: <BarChart className="h-5 w-5" />, title: "Analytics", desc: "Performance" },
                { icon: <Cookie className="h-5 w-5" />, title: "Functional", desc: "Preferences" },
                { icon: <Target className="h-5 w-5" />, title: "Marketing", desc: "Optional" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-white rounded-lg shadow-sm">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-sm">{item.title}</div>
                    <div className="text-xs text-gray-600">{item.desc}</div>
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
                <p className="text-gray-600 leading-relaxed mb-4">
                  ClinicFlow ("we", "our", or "us") uses cookies and similar technologies on our website. This Cookie
                  Policy explains how we use these technologies, what types we use, and your choices regarding their use.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By using our website, you consent to the use of cookies and similar technologies in accordance with this
                  Cookie Policy. If you do not accept the use of cookies, please disable them as explained below.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">2. What Are Cookies?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit websites.
                  They are widely used to make websites work more efficiently, provide a better user experience, and to provide
                  information to the owners of the site.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Cookies do not harm your device, and they cannot be used to identify you personally from the information
                  stored in them. Cookies can only track your activity on the website they come from.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-black mb-2 flex items-center gap-2">
                      <Settings className="h-5 w-5" /> Essential Cookies
                    </h3>
                    <p>
                      These cookies are necessary for the website to function properly. They enable core functionality such as
                      security, network management, and account access. You may not opt-out of these cookies.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-black mb-2 flex items-center gap-2">
                      <BarChart className="h-5 w-5" /> Performance & Analytics Cookies
                    </h3>
                    <p>
                      These cookies collect information about how you use our website, such as which pages you visit most often
                      and if you receive any error messages. They help us improve how our website works.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-black mb-2 flex items-center gap-2">
                      <Cookie className="h-5 w-5" /> Functionality Cookies
                    </h3>
                    <p>
                      These cookies allow our website to remember choices you make (such as your username, language, or region)
                      and provide enhanced, personalized features.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-black mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5" /> Targeting & Advertising Cookies
                    </h3>
                    <p>
                      These cookies are used to deliver advertisements more relevant to you and your interests. They are also used
                      to limit the number of times you see an advertisement.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Some cookies are placed by third parties on our website. We use the following third-party services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                  <li>Google Analytics (for website analytics)</li>
                  <li>Google Tag Manager (for managing tags)</li>
                  <li>Facebook Pixel (for advertising measurement)</li>
                  <li>LinkedIn Insight Tag (for advertising and analytics)</li>
                </ul>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">5. Cookie Duration</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <div className="h-2 w-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <strong>Session Cookies:</strong> Temporary cookies that exist only during your browser session.
                      They are deleted when you close your browser.
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-2 w-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <strong>Persistent Cookies:</strong> These remain on your device after you close your browser,
                      until they expire or until you delete them manually.
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">6. Managing Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You can usually find these settings
                  in the "Options" or "Preferences" menu of your browser:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Chrome', 'Firefox', 'Edge', 'Safari'].map((browser) => (
                    <div key={browser} className="p-3 bg-gray-50 rounded-lg text-center text-sm font-medium">
                      {browser}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Please note that restricting cookies may impact the functionality of our website.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">7. Cookie Consent</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you first visit our website, you will be shown a cookie banner that allows you to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in our website footer.
                </p>
              </Card>

              <Card className="p-8 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business
                  practices. Any changes will be posted on this page with an updated revision date.
                </p>
              </Card>

              <Card className="p-8 bg-gray-50 border-gray-200">
                <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">privacy@clinicflow.space</span>
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

export default CookiePolicy;
