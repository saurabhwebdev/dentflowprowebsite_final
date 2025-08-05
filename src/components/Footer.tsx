import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-12 md:px-8 md:py-16">
          {/* Brand section */}
          <div className="col-span-full space-y-6 md:col-span-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7">
                <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24">
                  <path d="M21.7,10.3l-9-8c-0.4-0.3-0.9-0.3-1.3,0l-9,8c-0.4,0.4-0.5,1-0.1,1.4s1,0.5,1.4,0.1L4,11.4V21c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-9.6l0.3,0.3c0.4,0.4,1,0.3,1.4-0.1C22.1,11.3,22.1,10.6,21.7,10.3z M14,15h-1v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1h-1c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S14.6,15,14,15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold tracking-tight">ClinicFlow</h3>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Modern clinic management solution for all healthcare specialties.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/clinicflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/clinicflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions section */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-gray-900">Solutions</h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Patient Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Appointment Scheduling
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Billing & Insurance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Analytics & Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company section */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Legal section */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="https://maps.google.com/?q=100+Feet+Road,+Indiranagar,+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  100 Feet Road, Indiranagar<br />
                  Bengaluru, Karnataka 560038<br />
                  India
                </a>
              </li>
              <li>
                <a
                  href="tel:+918087098711"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +91-8087098711
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@clinicflow.space"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  contact@clinicflow.space
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 px-6 py-8 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-center text-xs leading-5 text-gray-500">
              © {new Date().getFullYear()} ClinicFlow. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 