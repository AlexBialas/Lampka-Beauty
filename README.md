# 💅 Lampka Beauty – Fullstack MERN Web App

**Lampka Beauty** is a fullstack web application built for a real beauty salon based in Poland.  
It combines elegant design with powerful functionality: appointment bookings, client and admin dashboards, an AI-powered FAQ assistant, and a loyalty system.

> 🧑‍🎓 Created as a real project for a working beauty salon and a flagship fullstack portfolio app.

---

## ✨ Features

- 💄 Elegant landing page in soft pink & olive green (New York-style design)
- 📆 Appointment booking system with online integration (e.g. Booksy)
- 👩‍🎤 Client Dashboard: profile, visit history, points & rewards
- 🧑‍💼 Admin Dashboard: user & appointment management, analytics
- 🤖 AI-powered FAQ chat assistant (OpenAI or Llama integration)
- 💌 Contact form with email integration
- 🧾 Reviews & ratings from real customers
- 🔐 Secure authentication (JWT + role-based access)
- 🌙 Responsive + dark mode support
- 📱 Fully mobile optimized (PWA-ready)

---

##🚀 Tech Stack

Frontend:

    React (Vite)

    React Router DOM

    Zustand (state management)

    Tailwind CSS (custom theme: pink & olive)

    Framer Motion (animations)

Backend:

    Node.js + Express

    JWT Authentication + Role-based access

    Nodemailer (email integration)

Database:

    MongoDB Atlas

    Mongoose

AI & Automation:

    OpenAI API (or Llama for AI FAQ Assistant)

    Future: Chat memory & intent detection

Design & UX:

    Google Fonts: Montserrat + Playfair Display

    Responsive layout (mobile-first)

    Glassmorphism + soft shadows

    Optional Dark Mode & PWA-ready

---

## 📸 Screenshots

Commin soon 

---

## 🧑‍💻 Getting Started (Local Setup)

```bash
# 1. Clone this repository
git clone https://github.com/AlexBialas/lampka-beauty.git
cd lampka-beauty

# 2. Install frontend
cd client
npm install
npm run dev

# 3. Install backend
cd ../server
npm install
npm run dev

# 4. Create .env file in /server with:
MONGO_URI=your_mongo_url
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
