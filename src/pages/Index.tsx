import React from 'react';
import { Hero } from '@/components/ui/hero';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>ClinicFlow - Modern Clinic Management Solution</title>
        <meta name="description" content="Streamline your healthcare practice with ClinicFlow's intuitive, efficient, and comprehensive management solution for all clinical specialties." />
        <link rel="canonical" href="https://clinicflow.space/" />
        <meta name="keywords" content="clinic management software, healthcare practice software, medical office solution, patient management system" />
      </Helmet>
      
      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default Index;
