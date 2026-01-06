import axios from 'axios';
import { TELEGRAM_CONFIG } from './telegram-config';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendToTelegram = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const { BOT_TOKEN, CHAT_ID } = TELEGRAM_CONFIG;
    
    // Format the message for Telegram
    const text = `
📬 New Contact Form Submission:
      
👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone || 'Not provided'}
📝 Subject: ${formData.subject}
      
💬 Message:
${formData.message}
    `;

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    await axios.post(telegramApiUrl, {
      chat_id: CHAT_ID,
      text,
      parse_mode: 'HTML'
    });

    return true;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return false;
  }
}; 