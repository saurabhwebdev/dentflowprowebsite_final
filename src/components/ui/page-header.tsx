import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export function PageHeader({ title, description, breadcrumbs, className }: PageHeaderProps) {
  return (
    <header 
      className={cn("w-full py-16 md:py-20 overflow-hidden relative flex items-center", className)}
      style={{
        backgroundImage: "url('/heroimage/gradient-hero-prerender.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Enhanced grainy texture overlay */}
      <div className="absolute inset-0 grainy-effect"></div>
      
      {/* Monochrome gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-white/30 to-black/10 backdrop-blur-[1px]"></div>
      
      {/* Animated lines */}
      <div className="absolute inset-0 animated-lines"></div>
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex mb-6 inline-block" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((item, index) => (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="h-5 w-5 text-white mx-1" />
                  )}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-base font-bold text-white drop-shadow-md">{item.name}</span>
                  ) : (
                    <Link to={item.href} className="text-base font-bold text-white hover:underline drop-shadow-md">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white animate-slide-up drop-shadow-md">
          {title}
        </h1>
        
        {description && (
          <p className="mt-4 text-xl text-black font-semibold max-w-2xl animate-fade-in bg-white/40 backdrop-blur-sm px-4 py-2 rounded-md inline-block">
            {description}
          </p>
        )}
        
        {/* Subtle animated elements */}
        <div className="absolute -bottom-10 left-10 w-32 h-32 bg-black/5 rounded-full blur-xl animate-float-pulse"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-gray-400/10 rounded-full blur-xl animate-float-delay"></div>
      </div>
      
      {/* Subtle animated dots */}
      <div className="absolute inset-0 animated-dots"></div>
    </header>
  );
} 