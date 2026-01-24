# TheDentist Booking App
A full-featured, responsive booking platform for dental appointments, built with MERN (MongoDB, Express, React, Node.js). Includes a public-facing website, an admin panel with analytics, secure authentication, and server-side email notifications.
This project demonstrates advanced full-stack development, backend architecture, frontend interactivity, and deployment strategies.

## Live Demo
[https://thedentist-aya.netlify.app](https://thedentist-aya.netlify.app)

Note: Email notifications do not work on free hosting tiers (Render), but work fully in production environments.

## Features
1. Public-Facing Website
   - Book dental appointments with validated forms.
   - Prevent double-booking.
   - Interactive contact section with all business information.
   - Mobile-first, responsive design for seamless experience across devices.
   - Privacy Policy & Terms & Conditions pages.
2. Admin Panel
   - Secure login/logout with session management.
   - View, filter, and manage all appointments.
   - Analytics: monthly patient growth (line chart), service popularity (pie chart).
   - Contact info management: update phone, email, social links, and working hours.
   - Settings panel: change email and password securely.
3. Backend Architecture
   - RESTful API with Express.js and MongoDB/Mongoose.
   - Data validation and sanitization using express-validator.
   - Session management with cookies, connect.sid, and secure session storage.
   - Error handling middleware and retry logic for robust database connections.
4. Email Notifications
   - Server-side booking confirmation emails using NodeMailer and Gmail SMTP.
   - Works fully in production with cloud SMTP services.
5. Deployment & DevOps
   - Frontend deployed on Netlify, backend on Render.
   - Netlify Functions used as proxy to bypass CORS and connect frontend with backend on separate domains.
   - Environment variables for secure handling of API keys, email credentials, and database URI.
   - Production-ready configuration with helmet, CORS, and session security.

## License
This project is free to showcase, share, and use for professional purposes.
