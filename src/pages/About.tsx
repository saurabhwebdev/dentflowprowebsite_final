import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { Card } from '@/components/ui/card';
import { Coffee, Code, Cpu, Github, Linkedin, Mail, MessageSquare, Sparkles, Zap, Users, Award, Clock, Lightbulb, Heart, CheckCircle, Shield, ArrowRight } from 'lucide-react';
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

  const teamMembers = [
    {
      name: "Saurabh Thakur",
      role: "Founder & CEO",
      bio: "Visionary leader passionate about revolutionizing healthcare management through technology. Coffee enthusiast and code architect.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stats: [
        { icon: <Coffee className="w-4 h-4" />, label: "Coffee/Day", value: "6" },
        { icon: <Code className="w-4 h-4" />, label: "Lines of Code", value: "250K+" },
        { icon: <Zap className="w-4 h-4" />, label: "Projects Shipped", value: "15+" }
      ],
      social: {
        github: "https://github.com/saurabhthakur",
        linkedin: "https://linkedin.com/in/saurabhthakur",
        email: "saurabh@clinicflow.space"
      }
    },
    {
      name: "Priya Mehta",
      role: "Lead Product Designer",
      bio: "UX/UI expert crafting intuitive experiences for healthcare professionals. Tea lover and accessibility advocate.",
      avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stats: [
        { icon: <Coffee className="w-4 h-4" />, label: "Tea/Day", value: "4" },
        { icon: <Sparkles className="w-4 h-4" />, label: "Designs Created", value: "100+" },
        { icon: <MessageSquare className="w-4 h-4" />, label: "User Interviews", value: "50+" }
      ],
      social: {
        linkedin: "https://linkedin.com/in/priyamehta",
        email: "priya@clinicflow.space"
      }
    },
    {
      name: "Arjun Sharma",
      role: "Senior Full-Stack Developer",
      bio: "Tech enthusiast turning complex problems into elegant solutions. Midnight coder fueled by music and espresso.",
      avatar: "https://images.pexels.com/photos/8133283/pexels-photo-8133283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stats: [
        { icon: <Coffee className="w-4 h-4" />, label: "Espresso Shots", value: "8" },
        { icon: <Code className="w-4 h-4" />, label: "Bugs Squashed", value: "1000+" },
        { icon: <Github className="w-4 h-4" />, label: "Commits", value: "2.5K+" }
      ],
      social: {
        github: "https://github.com/arjunsharma",
        linkedin: "https://linkedin.com/in/arjunsharma",
        email: "arjun@clinicflow.space"
      }
    }
  ];

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
        {/* Mission & Vision Section */}
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

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="flex flex-col h-full p-6 border border-gray-200 hover:border-black/30 transition-all hover:shadow-lg">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg z-10"></div>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg grayscale hover:grayscale-0 transition-all"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-200">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{member.bio}</p>
                
                <div className="mt-auto">
                  <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
                    {member.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex justify-center mb-2 text-black">{stat.icon}</div>
                        <div className="text-sm font-medium">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4 pt-4 border-t">
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-black">
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Assistant Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <Card className="p-8 border border-gray-200 bg-gradient-to-br from-gray-50 to-white">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Meet Claude</h3>
            <p className="text-center text-gray-600 mb-6">
              Our AI coding companion who helped bring ClinicFlow to life. Powered by coffee ☕ and binary dreams, 
              Claude assists our team in crafting elegant solutions and squashing bugs at superhuman speed.
            </p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Lines of Code", value: "1M+" },
                { label: "Coffee Consumed", value: "∞" },
                { label: "Bugs Fixed", value: "24/7" },
                { label: "Sleep Hours", value: "0" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose ClinicFlow Pro?</h2>
            <p className="text-lg text-gray-600">
              Experience the future of healthcare practice management with our innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">Specialty-Specific Design</h3>
                <p className="text-gray-600 mb-6">
                  Tailored solutions for every medical specialty, from dental to cardiology. Our platform adapts to your unique workflow.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Custom templates for each specialty
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Specialty-specific workflows
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Integrated medical tools
                  </li>
                </ul>
              </div>
            </Card>
            
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Automation</h3>
                <p className="text-gray-600 mb-6">
                  Streamline your practice with intelligent automation that saves time and reduces errors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Automated appointment reminders
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Smart scheduling system
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Billing automation
                  </li>
                </ul>
              </div>
            </Card>
            
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-gray-600 mb-6">
                  Bank-grade security and HIPAA compliance to protect your practice and patient data.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    HIPAA compliant storage
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Regular security audits
                  </li>
                </ul>
              </div>
            </Card>
            
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Expert Support</h3>
                <p className="text-gray-600 mb-6">
                  Round-the-clock support from our team of healthcare technology experts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Live chat support
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Dedicated success manager
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Training resources
                  </li>
                </ul>
              </div>
            </Card>
            
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
                <p className="text-gray-600 mb-6">
                  Stay ahead with regular updates and cutting-edge features based on user feedback.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Monthly feature updates
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    AI-powered insights
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    User-driven development
                  </li>
                </ul>
              </div>
            </Card>
            
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rapid Implementation</h3>
                <p className="text-gray-600 mb-6">
                  Get up and running quickly with our streamlined onboarding process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Quick setup process
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Data migration support
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Staff training included
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
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
              <Link to="/contact" className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;