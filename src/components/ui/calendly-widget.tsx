import React from 'react';
import { InlineWidget } from 'react-calendly';
import { CALENDLY_CONFIG } from '@/lib/calendly-config';
import { Card } from './card';
import { Calendar } from 'lucide-react';

interface CalendlyWidgetProps {
  eventType?: string;
  title?: string;
  description?: string;
  features?: string[];
}

export const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  eventType = 'demo',
  title = 'Book Your Demo Session',
  description = 'Choose a convenient time for your personalized ClinicFlow demonstration.',
  features = [
    'Live product walkthrough',
    'Discussion of your specific needs',
    'Pricing and implementation details',
    'Q&A session with our experts'
  ]
}) => {
  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gray-700" />
            {title}
          </h3>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          {features.length > 0 && (
            <div>
              <p className="text-gray-600 mb-3">
                Our sessions typically last 30-45 minutes and include:
              </p>
              <ul className="space-y-1 text-sm text-gray-600 ml-4">
                {features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="calendly-container">
          <InlineWidget
            url={CALENDLY_CONFIG.url}
            styles={CALENDLY_CONFIG.styles}
            pageSettings={CALENDLY_CONFIG.pageSettings}
            utm={CALENDLY_CONFIG.utm}
          />
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">What to expect:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <strong>Before the meeting:</strong>
              <ul className="mt-1 space-y-1 ml-4">
                <li>• You'll receive a calendar invite</li>
                <li>• Meeting link will be provided</li>
                <li>• Preparation materials sent</li>
              </ul>
            </div>
            <div>
              <strong>During the meeting:</strong>
              <ul className="mt-1 space-y-1 ml-4">
                <li>• Screen sharing demonstration</li>
                <li>• Interactive Q&A session</li>
                <li>• Customized feature overview</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};