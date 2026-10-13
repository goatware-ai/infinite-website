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

## Contact form API

This site has no backend of its own. The contact form posts to the **teamwork-board** backend
(`POST /api/contact-requests`), which stores each inquiry and SMS consent record in its database.

- Production: the API is served on this domain at `/teamwork-board/api`, so no configuration is needed.
- Local development: run the teamwork-board backend on port 4000; the Vite dev server proxies
  `/teamwork-board/api` to it.
- To use a different API location, set `VITE_API_URL` (see `.env.example`).
