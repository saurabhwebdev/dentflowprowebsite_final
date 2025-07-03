import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to generate structured data JSON-LD for SEO
export function generateStructuredData(type: string, data: Record<string, any>) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
}

// Function to generate organization structured data
export function generateOrganizationSchema() {
  return generateStructuredData("Organization", {
    name: "ClinicFlow",
    url: "https://clinicflow.space",
    logo: "https://clinicflow.space/svgicons/clinic-medical-blue.svg",
    sameAs: [
      "https://twitter.com/clinicflow",
      "https://facebook.com/clinicflow",
      "https://linkedin.com/company/clinicflow"
    ],
    description: "Streamline your healthcare practice with our intuitive, efficient, and comprehensive management solution for all clinical specialties."
  });
}

// Function to generate local business structured data
export function generateLocalBusinessSchema() {
  return generateStructuredData("LocalBusiness", {
    name: "ClinicFlow",
    image: "https://clinicflow.space/metaimages/metaimage.png",
    "@id": "https://clinicflow.space",
    url: "https://clinicflow.space",
    telephone: "+91-8087098711",
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Feet Road, Indiranagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560038",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9784,
      longitude: 77.6408
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "09:00",
        closes: "19:00"
      }
    ],
    priceRange: "₹₹"
  });
}

// Function to generate software application structured data
export function generateSoftwareAppSchema() {
  return generateStructuredData("SoftwareApplication", {
    name: "ClinicFlow",
    applicationCategory: "HealthcareApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1024"
    }
  });
}

// Generate breadcrumb structured data
export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return generateStructuredData("BreadcrumbList", {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  });
}
