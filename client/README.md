# Infinity Labs Technologies — Website

Public website for Infinity Labs Technologies LLC, a software and AI product development company. Built with React, TypeScript, and Vite.

## Pages

- `/` — company overview, services, process, and contact call-to-action
- `/contact` — contact form with optional SMS opt-in (consent is stored by the API)
- `/terms` — Terms of Use, including the SMS messaging program terms
- `/privacy` — Privacy Policy

## Run

```bash
npm install
npm run dev
```

Create `.env` from `.env.example` and point it at the API in `../server`:

```env
VITE_API_URL=http://localhost:5000/api
```

The API exposes `POST /api/contact`, which saves contact requests and SMS consent records to PostgreSQL. Apply `server/migrations/001_contact_requests.sql` before first use.
