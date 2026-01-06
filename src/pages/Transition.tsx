import React from 'react';
import { Link } from 'react-router-dom';

const Transition = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Evolution</h1>
        <p className="mt-4 text-lg text-gray-600">
          From DentFlow Pro to ClinicFlow Pro: Expanding Our Vision
        </p>
      </div>

      <div className="prose prose-lg mx-auto">
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-6 rounded-lg inline-flex items-center space-x-2">
            <span className="text-2xl font-bold">DentFlow Pro</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <span className="text-2xl font-bold">ClinicFlow Pro</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Journey</h2>
        <p>
          When we launched DentFlow Pro, our mission was clear: create the most intuitive, efficient dental practice management software on the market. We worked closely with dental professionals to understand their unique challenges and built specialized tools to address their needs.
        </p>
        
        <p>
          Along the way, something unexpected happened. Medical professionals from other specialties began reaching out, asking if our platform could be adapted for their practices. They were drawn to our intuitive interface, streamlined workflows, and the attention to detail that made DentFlow Pro stand out.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Why We Expanded</h2>
        <p>
          After careful consideration and extensive research, we realized that the core principles that made DentFlow Pro successful could benefit all clinical practices. The challenges of patient management, scheduling, billing, and operational efficiency are universal across healthcare settings.
        </p>
        
        <p>
          Rather than create separate solutions for each medical specialty, we saw an opportunity to build a unified platform that could be tailored to the specific needs of different practices.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-3">Our Promise to Dental Practices</h3>
          <p className="mb-0">
            If you're a dental practice that has been using DentFlow Pro, rest assured that all the specialized dental features you rely on remain intact. We've simply expanded our platform to serve more healthcare professionals, while continuing to enhance the dental-specific functionality you depend on.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">What's New in ClinicFlow Pro</h2>
        <ul>
          <li>Expanded specialty-specific modules for various medical practices</li>
          <li>Enhanced interoperability with other healthcare systems</li>
          <li>More comprehensive patient management tools</li>
          <li>Improved reporting and analytics across specialties</li>
          <li>Unified platform with customizable workflows for each practice type</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Looking Forward</h2>
        <p>
          This transition represents an exciting new chapter in our journey. By serving a broader community of healthcare providers, we can accelerate innovation, share best practices across specialties, and create a more comprehensive solution for everyone.
        </p>
        
        <p>
          We're committed to maintaining the same level of excellence and attention to detail that made DentFlow Pro successful, while expanding our capabilities to meet the needs of all clinical practices.
        </p>

        <div className="text-center mt-12">
          <a 
            href="https://clinicflow-roan.vercel.app/signin" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800"
          >
            Explore ClinicFlow Pro
          </a>
        </div>
      </div>
    </div>
  );
};

export default Transition; 