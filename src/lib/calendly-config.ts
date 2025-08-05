// Calendly Configuration
export const CALENDLY_CONFIG = {
  // Your actual Calendly URL
  url: "https://calendly.com/worlddj0/30min",

  // Widget styling options
  styles: {
    height: '700px',
    width: '100%'
  },

  // Page settings for customization
  pageSettings: {
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '000000',
    textColor: '4d5055'
  },

  // UTM parameters for tracking (optional)
  utm: {
    utmCampaign: 'clinicflow-website',
    utmSource: 'contact-page',
    utmMedium: 'web'
  }
};

// Event types configuration
export const CALENDLY_EVENTS = {
  demo: {
    name: 'ClinicFlow Demo',
    duration: 45, // minutes
    description: 'Personalized demonstration of ClinicFlow features'
  },
  consultation: {
    name: 'Free Consultation',
    duration: 30, // minutes
    description: 'Discuss your practice needs and requirements'
  },
  support: {
    name: 'Technical Support',
    duration: 30, // minutes
    description: 'Get help with technical issues or questions'
  }
};