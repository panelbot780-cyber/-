const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();

// 🔑 Telegram Bot Token
const token = '8783636845:AAGLxyw9FVj8VzNAPP1NiNkMQUIEHXUaZXc';

// 🤖 Bot polling
const bot = new TelegramBot(token, { polling: true });

// 🌐 Express server (for Render & UptimeRobot)
app.get('/', (req, res) => {
    res.send('🤖 Telegram Bot is running...');
});

// Render automatically sets PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🌍 Server running on port ${PORT}`);
});

// /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hi iam bot owner you type 👉🏻 /pair open BUG 🪲 bot 👾 enjoy 😊');
});

// /mycoin command
bot.onText(/\/pair/, (msg) => {
    const chatId = msg.chat.id;
    const username = msg.from.first_name || "EXPENSIVE";

    const message = `
Hii i am 1M 💗 
👉🏻 USER :  ${username}
👉🏻 My bot : BUG 🪲 
JOIN 👉🏻 https://chat.whatsapp.com/F38ENsiTCob8oXbGW60GlF
bug bot group link 👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻
by bittu💗😚
`;

    bot.sendMessage(chatId, message);
});

console.log("🤖 Bot started successfully");
