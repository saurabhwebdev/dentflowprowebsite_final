# Calendly Integration Setup Guide

## Overview
This guide will help you set up Calendly integration for your ClinicFlow website contact page.

## Prerequisites
1. A Calendly account (free or paid)
2. At least one event type configured in Calendly

## Setup Steps

### 1. Create Calendly Account
1. Go to [calendly.com](https://calendly.com)
2. Sign up for an account or log in to existing account
3. Complete your profile setup

### 2. Configure Event Types
1. In your Calendly dashboard, go to "Event Types"
2. Create a new event type or edit existing one:
   - **Event Name**: "ClinicFlow Demo" or "Free Consultation"
   - **Duration**: 30-45 minutes
   - **Description**: Add details about what the meeting will cover
   - **Location**: Set to "Web conferencing" (Zoom, Google Meet, etc.)

### 3. Get Your Calendly URL
1. In Calendly, go to your event type
2. Click "Share" or "Copy Link"
3. Your URL will look like: `https://calendly.com/your-username/event-name`

### 4. Update Configuration
1. Open `src/lib/calendly-config.ts`
2. Replace the placeholder URL with your actual Calendly URL:
   ```typescript
   export const CALENDLY_CONFIG = {
     url: "https://calendly.com/your-actual-username/your-event-name",
     // ... rest of config
   };
   ```

### 5. Customize Appearance (Optional)
In `src/lib/calendly-config.ts`, you can customize:
- **backgroundColor**: Widget background color (hex without #)
- **primaryColor**: Main accent color (hex without #)
- **textColor**: Text color (hex without #)

Example:
```typescript
pageSettings: {
  backgroundColor: 'ffffff', // White background
  primaryColor: '000000',    // Black primary color
  textColor: '4d5055'        // Dark gray text
}
```

### 6. Test the Integration
1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Click on "Schedule Meeting" tab
4. Verify the Calendly widget loads correctly
5. Test booking a meeting (you can cancel it afterward)

## Advanced Configuration

### Multiple Event Types
If you want different event types for different purposes:

1. Create multiple event types in Calendly
2. Update `src/lib/calendly-config.ts` to include multiple URLs:
   ```typescript
   export const CALENDLY_URLS = {
     demo: "https://calendly.com/your-username/demo",
     consultation: "https://calendly.com/your-username/consultation",
     support: "https://calendly.com/your-username/support"
   };
   ```

### Custom Styling
You can further customize the widget appearance by modifying the styles in the configuration file.

### UTM Tracking
The configuration includes UTM parameters for tracking where bookings come from. These help you analyze which pages drive the most meetings.

## Troubleshooting

### Widget Not Loading
- Check that your Calendly URL is correct and publicly accessible
- Ensure your event type is active in Calendly
- Check browser console for any JavaScript errors

### Styling Issues
- Verify hex colors don't include the '#' symbol
- Test different color combinations for better contrast

### Mobile Responsiveness
The widget is configured to be responsive, but test on various devices to ensure proper display.

## Support
- Calendly Help Center: [help.calendly.com](https://help.calendly.com)
- For integration issues, check the react-calendly documentation

## Security Notes
- Never expose sensitive Calendly API keys in frontend code
- The integration uses public Calendly URLs which is safe for client-side use
- Consider implementing additional validation if needed