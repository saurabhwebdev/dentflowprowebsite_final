import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card } from '@/components/ui/card';
import { Users, Award, Clock, Lightbulb, Heart, CheckCircle, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbSchema } from '@/lib/utils';

const About = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map(item => ({ name: item.name, url: `https://clinicflow.space${item.href}` }))
  );

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>About Us | ClinicFlow - Modern Clinic Management Solution</title>
        <meta name="description" content="Learn about ClinicFlow's mission to simplify healthcare practice management and our commitment to improving patient care through innovative software." />
        <link rel="canonical" href="https://clinicflow.space/about" />
        <meta name="keywords" content="about clinicflow, healthcare software company, medical practice management, clinic software team" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <PageHeader 
        title="About ClinicFlow" 
        description="We're on a mission to simplify practice management so you can focus on what matters most—your patients."
        breadcrumbs={breadcrumbs}
        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10"
      />
      
      <div className="container max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Mission & Vision Section with Modern Cards */}
        <div id="mission" className="mb-24">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600">
              Creating software that empowers healthcare professionals to deliver exceptional patient care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg rounded-xl bg-gradient-to-br from-gray-50 to-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                  <Lightbulb className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide healthcare professionals with technology that removes administrative burdens, 
                  allowing them to focus on what matters most—delivering exceptional patient care.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg rounded-xl bg-gradient-to-br from-gray-50 to-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Innovation, integrity, excellence, and a relentless commitment to improving 
                  the healthcare experience for both practitioners and patients.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg rounded-xl bg-gradient-to-br from-gray-50 to-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To transform healthcare practice management through technology that's both sophisticated and simple to use,
                  setting new standards for efficiency and patient satisfaction across medical specialties.
                </p>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Our Evolution Section */}
        <div id="evolution" className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Evolution</h2>
            <p className="text-lg text-gray-600">
              From DentFlow Pro to ClinicFlow Pro: Expanding Our Vision
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-6 rounded-lg inline-flex items-center space-x-2">
              <span className="text-2xl font-bold">DentFlow Pro</span>
              <ArrowRight className="mx-2 text-black" />
              <span className="text-2xl font-bold">ClinicFlow Pro</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-5 text-black">From Dental Focus to Healthcare Innovation</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  When we launched DentFlow Pro, our mission was clear: create the most intuitive, efficient dental 
                  practice management software on the market. We worked closely with dental professionals to understand 
                  their unique challenges and built specialized tools to address their needs.
                </p>
                <p className="text-gray-600">
                  Along the way, something unexpected happened. Medical professionals from other specialties began 
                  reaching out, asking if our platform could be adapted for their practices. They were drawn to our 
                  intuitive interface, streamlined workflows, and the attention to detail that made DentFlow Pro stand out.
                </p>
                <p className="text-gray-600">
                  After careful consideration and extensive research, we realized that the core principles that made 
                  DentFlow Pro successful could benefit all clinical practices. Rather than create separate solutions 
                  for each medical specialty, we saw an opportunity to build a unified platform that could be tailored 
                  to the specific needs of different practices.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-black">500+</p>
                    <p className="text-sm text-gray-500">Healthcare practices</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-black">98%</p>
                    <p className="text-sm text-gray-500">Customer satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gray-200/30 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team meeting" 
                  className="relative rounded-xl shadow-lg w-full h-[400px] object-cover grayscale"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg my-12 border border-gray-200">
            <h3 className="text-xl font-bold mb-3">Our Promise to Dental Practices</h3>
            <p className="mb-0">
              If you're a dental practice that has been using DentFlow Pro, rest assured that all the specialized dental features you rely on remain intact. 
              We've simply expanded our platform to serve more healthcare professionals, while continuing to enhance the dental-specific functionality you depend on.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gray-200/30 rounded-2xl transform -rotate-3"></div>
                <img 
                  src="https://images.pexels.com/photos/3846009/pexels-photo-3846009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Modern healthcare technology" 
                  className="relative rounded-xl shadow-lg w-full h-[400px] object-cover grayscale"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-5 text-black">Looking Forward</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  This transition represents an exciting new chapter in our journey. By serving a broader community of healthcare providers, 
                  we can accelerate innovation, share best practices across specialties, and create a more comprehensive solution for everyone.
                </p>
                <p className="text-gray-600">
                  We continue to innovate and improve our platform based on feedback from healthcare professionals 
                  like you. Our development is driven by real-world needs and challenges faced in modern practices.
                </p>
                <ul className="space-y-2 mt-4">
                  {[
                    'Expanded specialty-specific modules for various medical practices',
                    'Enhanced interoperability with other healthcare systems',
                    'Improved reporting and analytics across specialties'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section with Modern Cards */}
        <div id="team" className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Passionate professionals dedicated to transforming healthcare practice management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us Section with Visual Cards */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose ClinicFlow Pro?</h2>
            <p className="text-lg text-gray-600">
              What sets us apart in healthcare practice management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Specialty-Specific Design</h3>
                  <p className="text-gray-600">
                    Built with features tailored to the unique needs of different healthcare specialties, including our original dental expertise.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Healthcare office reception" 
                className="w-full h-48 object-cover rounded-lg grayscale"
              />
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
                  <p className="text-gray-600">
                    Our team includes healthcare professionals who understand the challenges you face every day.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/5998293/pexels-photo-5998293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team working together" 
                className="w-full h-48 object-cover rounded-lg grayscale"
              />
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
                  <p className="text-gray-600">
                    Regular updates and new features based on customer feedback and industry trends across healthcare specialties.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/3912361/pexels-photo-3912361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Innovative healthcare tech" 
                className="w-full h-48 object-cover rounded-lg grayscale"
              />
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                  <p className="text-gray-600">
                    Responsive customer service from team members who understand both healthcare and technology.
                  </p>
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Customer support team" 
                className="w-full h-48 object-cover rounded-lg grayscale"
              />
            </div>
          </div>
        </div>
        
        {/* Call to Action with Background Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Modern healthcare office" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/80"></div>
          </div>
          <div className="relative py-16 px-8 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Practice?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who've elevated their practice management with ClinicFlow Pro.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://clinicflow-roan.vercel.app/signin" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </a>
              <div className="mt-8">
                <Link to="/contact" className="inline-block px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">From DentFlow Pro to ClinicFlow Pro</h3>
            <p className="text-gray-600 mb-6">
              While we've expanded our platform to serve healthcare practices of all specialties, we remain committed 
              to providing the exceptional dental practice management tools that made us a leader in the field.
            </p>
            <div className="flex justify-center">
              <Link to="/transition" className="inline-block px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Learn About Our Evolution
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Team Members Data with Pexels images
const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & CEO",
    bio: "Former dentist with 15 years of clinical experience, passionate about improving healthcare practice efficiency.",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Software engineer with expertise in healthcare IT solutions and a vision for technology-enabled care.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Jessica Williams",
    role: "Head of Product",
    bio: "Former dental office manager who understands the daily challenges of practice management across specialties.",
    image: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "David Rodriguez",
    role: "Customer Success Director",
    bio: "Dedicated to ensuring ClinicFlow Pro clients achieve their practice management goals regardless of specialty.",
    image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Emily Taylor",
    role: "Lead Developer",
    bio: "Expert in creating intuitive user experiences for healthcare professionals across multiple specialties.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "James Wilson",
    role: "Implementation Specialist",
    bio: "Helps practices of all specialties smoothly transition to ClinicFlow Pro with minimal disruption.",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default About;