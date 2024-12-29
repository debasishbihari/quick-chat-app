## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

Quick Chat App is a real-time messaging application that allows users to communicate instantly with each other. Built with a modern tech stack, it ensures seamless and efficient communication.

## <a name="tech-stack">⚙️ Tech Stack</a>

- <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
- <img src="https://img.shields.io/badge/-Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
- <img src="https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
- <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
- <img src="https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
- <img src="https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
- <img src="https://img.shields.io/badge/-Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.io" />
- <img src="https://img.shields.io/badge/-Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" />
  
## <a name="features">🔋 Features</a>

👉 User Authentication: Secure signup and login functionalities to ensure user data privacy and protection.

👉 Real-time Messaging: Instantaneous message delivery and reception, providing a seamless chat experience.

👉 Read Receipts: Visual indicators to show when messages have been read by the recipient.

👉 Online Status Indicator: Real-time display of users' online or offline status, enhancing engagement.

👉 Typing Indicator: Live notifications when a contact is typing, making conversations more interactive.

👉 Profile Management: Users can create and update personal profiles, including avatars.

👉 Image Sharing in Chat: Seamless sharing of images within the chat, enriching the communication experience.

👉 Emoji Support: A wide range of emojis to express emotions and reactions within conversations.

These features collectively provide a comprehensive and engaging real-time chat application experience.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/debasishbihari/quick-chat-app.git
cd quick-chat-app
```
**Installation**

Install the project dependencies using npm:

```bash
cd client
npm install
cd server
npm install
```
**Set Up Environment Variables**

Create a new file named `config.env` in the root of server folder and add the following content:

```env
PORT_NUMBER = 
CONN_STRING = 
SECRET_KEY = 
```
Replace the values with your actual credentials. You can obtain CONN_STRING by signing up &
creating a new database on the [MongoDB Cloud](https://www.mongodb.com/). Add a Port Number and secret key of your own.

**Running the Project**

```bash
-For server
npm run dev
-For client
npm start
```
