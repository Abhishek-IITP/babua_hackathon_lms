# Babua LMS – Free-First Learning Platform

Babua LMS is a **free, structured learning platform** built with one simple idea:

> Learning should be free. Guidance can be paid. Progress should be earned.

This project was built as part of a **product design challenge**, where the goal was to design an LMS that delivers real learning value **without selling courses or locking content behind paywalls**.

---

## Why I Built This

Most LMS platforms today:
- Lock basic learning behind subscriptions
- Focus more on certificates than understanding
- Let users binge videos without real progress
- Monetize learning itself instead of guidance

As a student, this never felt right.

Babua LMS is my attempt to flip that model:
- **All learning content is free**
- Progress is tracked honestly
- Lectures unlock only when you complete the previous ones
- Monetization is limited to mentorship and guidance, not videos

---

## What This Project Does

Babua LMS provides structured learning across core Computer Science subjects while enforcing **discipline and consistency** instead of random video watching.

### Main things it supports:
- Login using Google or GitHub
- A dashboard showing all available courses
- Per-course progress tracking
- Sequential lecture unlocking
- Daily learning streaks
- A separate section for paid mentorship (mocked)

---

## Learning Experience

### Courses Included
- DSA (Pattern-based, interview focused)
- System Design (Beginner → Advanced)
- Low Level Design (LLD)
- Operating Systems
- Computer Networks
- DBMS

Each course has:
- Ordered lectures
- YouTube videos embedded using iframe (no custom streaming)
- Clear descriptions and takeaways
- Locked progression to avoid skipping

---

## Progress & Accountability

### Lecture Progress
- A lecture is marked complete **only when the user explicitly completes it**
- Progress is stored per user per lecture
- Course progress updates automatically

### Resume Learning
- The dashboard shows **last watched lecture**
- Users can continue exactly where they left off

### Daily Streak System
- Tracks how consistently a user learns
- Based on actual time spent, not page reloads
- Shows:
  - Current streak
  - Longest streak

This encourages habit-based learning instead of binge watching.

---

## Monetization (Exclusive Section)

Babua LMS does **not sell courses**.

Instead, monetization is based on:
- Mentor guidance
- Office hours
- Career advice

This section is:
- Completely optional
- Separated from learning content
- Implemented as a different route so learning never feels blocked

---

## Tech Stack

- **Frontend & Backend**: Next.js (App Router)
- **Authentication**: Auth.js (Google & GitHub)
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma v7 (Driver Adapter)
- **Styling**: Tailwind CSS
- **Videos**: YouTube embeds (iframe)

---

## How the System Works (High Level)

1. User logs in using Google/GitHub
2. Dashboard fetches courses and user progress
3. Course player enforces lecture order
4. Progress updates per lecture
5. Streak updates based on learning time
6. Mentorship lives separately from learning

---

## Running the Project Locally

```bash
# Clone the repo
git clone <your-repo-url>
cd babua_hackathon_lms

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Add DATABASE_URL and DIRECT_URL

# Push database schema and seed data
npx prisma db push
node prisma/seed.js

# Start the dev server
npm run dev
