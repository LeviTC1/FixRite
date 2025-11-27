# FixRite local development

This repository contains a small Express API (`/backend`) and a React + Vite single page app (`/frontend`). Follow the steps below to run both services locally so you can reproduce and fix bugs before deploying.

## Requirements
- Node.js 20.x (or the active LTS) and npm 10.x
- Two terminals or terminal tabs (one for the API, one for the SPA)
- Optional: a Resend API key if you want to exercise end-to-end email delivery

## 1. Backend (Express API)
1. `cd backend`
2. Copy the environment template: `cp .env.example .env` (PowerShell: `Copy-Item .env.example .env`)
3. Update `.env` as needed:
   - `PORT` defaults to `3000`
   - `EMAIL_DELIVERY_MODE=mock` logs enquiries to the console instead of contacting Resend (perfect for local debugging)
   - Set `EMAIL_DELIVERY_MODE=live` **and** provide your Resend credentials (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RECEIVER_EMAIL`) when you need to test email delivery end-to-end
4. Install dependencies: `npm install`
5. Start the API: `npm run dev`
6. Verify the service: `Invoke-RestMethod http://localhost:3000/api/health` (or `curl http://localhost:3000/api/health`)

> When running in mock mode every successful submission is printed to the terminal so you can confirm the payload the frontend sent without triggering Resend.

## 2. Frontend (React + Vite)
1. Open a second terminal and `cd frontend`
2. Copy the env file: `cp .env.example .env`
   - The template points at `http://localhost:3000/api`, matching the backend dev server
   - Override `VITE_BACKEND_URL` if your API is running elsewhere
3. Install dependencies: `npm install`
4. Start the Vite dev server: `npm run dev`
5. Visit `http://localhost:5173` and interact with the site. Contact form submissions should hit the local API from step 1.

## Handy commands
| Task | Command |
| --- | --- |
| Type-check + build API | `cd backend && npm run build` |
| Production build of SPA | `cd frontend && npm run build` |
| Preview SPA build locally | `cd frontend && npm run preview` |

## Troubleshooting
- **CORS errors**: ensure the frontend origin is listed in `ALLOWED_ORIGINS` inside `backend/.env`.
- **Contact form returns 500**: either switch to `EMAIL_DELIVERY_MODE=mock` or supply a working Resend API key plus from/to addresses.
- **Port already in use**: change `PORT` (backend) or pass `--port` to `npm run dev` in the frontend, then keep the two values in sync via `VITE_BACKEND_URL`.

With the two dev servers running you can now reproduce bugs locally, tweak either codebase, and re-test instantly.
