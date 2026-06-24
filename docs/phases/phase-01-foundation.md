# Phase 01 — Foundation & Scaffold

**Timeline:** Week 1 — 2–3 sessions  
**Status:** In Progress

## Goals

- Initialize monorepo: `/client` (Vite + React + Tailwind) and `/server` (Node + Express)
- Set up SQLite database with Drizzle ORM
- Create `docker-compose.yml` for local dev
- Build basic auth: register, login, JWT token, protected routes
- Create app shell: sidebar navigation, top bar, responsive layout
- Set up routing: `/dashboard`, `/kitchen`, `/fitness`, `/habits` (empty pages OK)
- Create `.env.example` with all required environment variables

## Session Log

### Session 1 — Monorepo Scaffold ✓
- [x] `/client` — Vite + React + Tailwind initialized
- [x] `/server` — Node + Express + Drizzle initialized
- [x] `docker-compose.yml` created
- [x] `.env.example` created
- [x] Both client and server start cleanly
- [x] Auth routes working: register, login, JWT, protected `/me`
- [x] App shell: sidebar, layout, protected routes
- [x] Page stubs: /dashboard, /kitchen, /fitness, /habits
- [x] Login page with sign-in / register toggle

### Session 2 — Auth + App Shell
- [ ] Auth routes: `POST /api/v1/auth/register`, `POST /api/v1/auth/login`
- [ ] JWT middleware protecting all non-auth routes
- [ ] Drizzle `users` table + migration
- [ ] App shell: sidebar, top bar, responsive layout
- [ ] Client-side routing: `/dashboard`, `/kitchen`, `/fitness`, `/habits`
- [ ] Login page wired to auth API

## File Structure After This Phase

```
gainset/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── dashboard/
│   │   │   ├── kitchen/
│   │   │   ├── fitness/
│   │   │   └── habits/
│   │   ├── hooks/
│   │   ├── api/
│   │   └── App.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/
│   ├── src/
│   │   ├── routes/
│   │   ├── db/
│   │   │   ├── schema.js
│   │   │   └── index.js
│   │   ├── middleware/
│   │   └── index.js
│   └── package.json
├── docker-compose.yml
└── .env.example
```
