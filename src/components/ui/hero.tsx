import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section 
      className={cn("w-full py-12 md:py-24 lg:py-32 overflow-hidden relative min-h-[85vh] flex items-center", className)}
      style={{
        backgroundImage: "url('/heroimage/gradient-hero-prerender.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      aria-label="Hero section for ClinicFlow - Modern Clinic Management"
    >
      {/* Enhanced grainy texture overlay */}
      <div className="absolute inset-0 grainy-effect" aria-hidden="true"></div>
      
      {/* Monochrome gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-white/30 to-black/10 backdrop-blur-[1px]" aria-hidden="true"></div>
      
      {/* Animated lines */}
      <div className="absolute inset-0 animated-lines" aria-hidden="true"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 text-white animate-slide-up leading-tight">
            Modern Clinic Management
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium animate-fade-in text-gray-800">
            Streamline your healthcare practice with our intuitive, efficient, and comprehensive management solution for all clinical specialties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delayed">
            <a href="https://clinicflowpronextmongo.vercel.app/auth/signin" target="_blank" rel="noopener noreferrer" aria-label="Sign in to ClinicFlow">
              <Button variant="outline" size="lg" className="h-12 px-8 font-medium border-black text-black hover:bg-gray-100">
                Sign In
              </Button>
            </a>
            <a href="https://clinicflowpronextmongo.vercel.app/auth/signup" target="_blank" rel="noopener noreferrer" aria-label="Get started with ClinicFlow">
              <Button size="lg" className="h-12 px-8 font-medium bg-black hover:bg-gray-800 text-white">
                Get Started
              </Button>
            </a>
            <Link to="/contact?tab=schedule" aria-label="Book a demo of ClinicFlow">
              <Button variant="outline" size="lg" className="h-12 px-8 font-medium border-black text-black hover:bg-gray-100">
                Book Demo
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto animate-slide-up-delayed">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-300 flex items-center gap-3 hover:scale-105 transition-transform hover:border-black">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="text-left">
                <div className="font-medium text-sm text-gray-900">Trusted</div>
                <div className="text-xs text-gray-700">By 1,000+ clinics</div>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-300 flex items-center gap-3 hover:scale-105 transition-transform hover:border-black">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <div className="text-left">
                <div className="font-medium text-sm text-gray-900">Time Saving</div>
                <div className="text-xs text-gray-700">35% more efficient</div>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-300 flex items-center gap-3 hover:scale-105 transition-transform hover:border-black">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <div className="text-left">
                <div className="font-medium text-sm text-gray-900">Analytics</div>
                <div className="text-xs text-gray-700">Actionable insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements in monochrome */}
      <div className="absolute -bottom-10 left-10 w-32 h-32 bg-black/5 rounded-full blur-xl animate-float-pulse" aria-hidden="true"></div>
      <div className="absolute top-20 right-10 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-float-delay" aria-hidden="true"></div>
      <div className="absolute top-40 left-1/4 w-16 h-16 bg-black/10 rounded-full blur-xl animate-float-reverse" aria-hidden="true"></div>
      
      {/* Subtle animated dots */}
      <div className="absolute inset-0 animated-dots" aria-hidden="true"></div>
    </section>
  );
} 