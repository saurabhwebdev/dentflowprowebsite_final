import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card } from '@/components/ui/card';
import { Users, Award, Clock, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="About ClinicFlow Pro" 
        description="Transforming dental practice management with innovative solutions"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Mission & Vision Section */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-gray-600 mb-8">
            At ClinicFlow Pro, we're dedicated to empowering dental practices with intuitive, 
            powerful software that streamlines operations and enhances patient care. Our vision is to 
            transform dental practice management through technology that's both sophisticated and simple to use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border border-gray-200 hover:shadow-md transition-all text-left">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide dental professionals with technology that removes administrative burdens, 
                allowing them to focus on what matters most—delivering exceptional patient care.
              </p>
            </Card>
            <Card className="p-6 border border-gray-200 hover:shadow-md transition-all text-left">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Our Values
              </h3>
              <p className="text-gray-600">
                Innovation, integrity, excellence, and a relentless commitment to improving 
                the dental care experience for both practitioners and patients.
              </p>
            </Card>
          </div>
        </div>
        
        {/* Our Story Section */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Story</h2>
            <p className="text-lg text-gray-600">
              The journey of transforming dental practice management
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="ClinicFlow team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600">
                ClinicFlow Pro was born from a simple observation: dental professionals were spending 
                too much time on administrative tasks and not enough time with patients. Our founders, 
                with backgrounds in both dentistry and software development, set out to create a solution.
              </p>
              <p className="text-gray-600">
                Since our founding in 2018, we've grown from a small startup to a trusted partner for 
                dental practices across the country. Our team combines dental industry expertise with 
                cutting-edge technology to deliver solutions that truly understand the unique needs of 
                dental professionals.
              </p>
              <p className="text-gray-600">
                Today, ClinicFlow Pro serves thousands of dental practices, from single-dentist offices 
                to large multi-location clinics. As we grow, we remain committed to our original mission: 
                simplifying practice management so dental professionals can focus on providing exceptional care.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">
              Passionate professionals dedicated to transforming dental practice management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 border border-gray-200 hover:shadow-md transition-all text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                  <img 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-500 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose ClinicFlow Pro?</h2>
            <p className="text-lg text-gray-600">
              What sets us apart in dental practice management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of dental professionals who've elevated their practice management with ClinicFlow Pro.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Team Members Data
const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & CEO",
    bio: "Former dentist with 15 years of clinical experience, passionate about improving dental practice efficiency.",
    image: ""
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Software engineer with expertise in healthcare IT solutions and a vision for technology-enabled care.",
    image: ""
  },
  {
    name: "Jessica Williams",
    role: "Head of Product",
    bio: "Former dental office manager who understands the daily challenges of practice management.",
    image: ""
  },
  {
    name: "David Rodriguez",
    role: "Customer Success Director",
    bio: "Dedicated to ensuring ClinicFlow Pro clients achieve their practice management goals.",
    image: ""
  },
  {
    name: "Emily Taylor",
    role: "Lead Developer",
    bio: "Expert in creating intuitive user experiences for healthcare professionals.",
    image: ""
  },
  {
    name: "James Wilson",
    role: "Implementation Specialist",
    bio: "Helps practices smoothly transition to ClinicFlow Pro with minimal disruption.",
    image: ""
  }
];

// Advantages Data
const advantages = [
  {
    title: "Dental-Specific Design",
    description: "Built specifically for dental practices, with workflows and features tailored to your unique needs.",
    icon: <Award className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Industry Expertise",
    description: "Our team includes dental professionals who understand the challenges you face every day.",
    icon: <Users className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Continuous Innovation",
    description: "Regular updates and new features based on customer feedback and industry trends.",
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Dedicated Support",
    description: "Responsive customer service from team members who understand both dentistry and technology.",
    icon: <Clock className="h-8 w-8 text-blue-600" />
  }
];

export default About; 