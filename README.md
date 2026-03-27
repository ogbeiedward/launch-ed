# Launch-Ed – Modern E-Learning Platform

Launch-Ed is a premium, full-stack e-learning platform built with a focus on visual excellence and scalable architecture.

## Tech Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, Prisma, JWT
- **Database**: PostgreSQL
- **Payments**: Stripe Integration

## Project Structure
- `/frontend`: Next.js application with Tailwind & Framer Motion.
- `/backend`: Express.js server with Prisma and JWT Auth.

## Setup Instructions

### 1. Prerequisites
- **Node.js**: (LTS recommended)
- **PostgreSQL**: A running instance (or use a managed one like Supabase/Railawy).
- **Stripe Account**: For payment processing keys.

### 2. Backend Setup
1. `cd backend`
2. `npm install`
3. Create a `.env` file from `.env.example` and add your `DATABASE_URL`, `JWT_SECRET`, and `STRIPE_SECRET_KEY`.
4. Run migrations: `npx prisma migrate dev`
5. Seed demo data: `npm run prisma:seed`
6. Start server: `npm run dev`

### 3. Frontend Setup
1. `cd frontend`
2. `npm install`
3. Create a `.env.local` with `NEXT_PUBLIC_API_URL`.
4. Start dev server: `npm run dev`

## Features
- **Student Dashboard**: Track progress and manage enrolled courses.
- **Instructor Dashboard**: Create courses and view student analytics.
- **Course Player**: Immersive video streaming interface with lesson navigation.
- **Demo Access**: Quick-login buttons for testing Role-Based Access Control (RBAC).
- **Premium Design**: Clean Light theme with Skyblue/Cyan gradients and glassmorphism.
