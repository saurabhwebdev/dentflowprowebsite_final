# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d7069beb-0052-4c89-89ad-7ee5cf36d420

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d7069beb-0052-4c89-89ad-7ee5cf36d420) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d7069beb-0052-4c89-89ad-7ee5cf36d420) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Telegram Integration for Contact Form

The contact form is integrated with Telegram to send you notifications when someone submits the form. Follow these steps to set it up:

### 1. Create a Telegram Bot

1. Open Telegram and search for "BotFather"
2. Start a chat with BotFather by clicking "Start"
3. Send `/newbot` to create a new bot
4. Follow the instructions to name your bot
5. Once created, BotFather will give you a token that looks like `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`
6. Save this token, you'll need it later

### 2. Get Your Chat ID

1. Start a chat with your new bot
2. Send any message to the bot
3. Open a web browser and go to: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   (Replace `<YOUR_BOT_TOKEN>` with the token you received from BotFather)
4. Look for the "chat" object in the response and find the "id" field. This is your chat ID.
   It will be a number like `123456789` (may be negative if it's a group chat)

### 3. Configure the Website

1. Open the file `src/lib/telegram-config.ts`
2. Replace the placeholder values with your actual Telegram bot token and chat ID:

```typescript
export const TELEGRAM_CONFIG = {
  BOT_TOKEN: 'your_telegram_bot_token_here', // Replace with your bot token
  CHAT_ID: 'your_telegram_chat_id_here'      // Replace with your chat ID
};
```

### 4. Test the Integration

1. Fill out the contact form on the website
2. Submit the form
3. You should receive a message on Telegram with the form details

## Building for Production

```bash
npm run build
```

This will create a production-ready build in the `dist` directory.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- React Router
