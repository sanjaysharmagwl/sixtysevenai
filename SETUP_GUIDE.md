# SixtySeven AI - Independent Frontend & Backend Setup

## Overview

The project has been restructured to allow **independent development** of frontend and backend. Each team can work in isolation without affecting the other's dependencies or build process.

## ✅ What Changed

### Folder Structure
```
Before:                          After:
├── client/                      ├── frontend/            (renamed from client/)
├── src/                         │   ├── src/
├── supabase/                    │   ├── package.json
├── package.json                 │   └── README.md        (new)
├── wrangler.toml                ├── backend/
├── wrangler.toml                │   ├── src/             (moved from src/)
└── tsconfig.json                │   ├── package.json     (new)
                                 │   ├── wrangler.toml    (moved)
                                 │   ├── tsconfig.json    (moved)
                                 │   ├── .dev.vars        (copied)
                                 │   ├── .gitignore       (new)
                                 │   └── README.md        (new)
                                 ├── database/
                                 │   └── supabase/        (moved from supabase/)
                                 ├── scripts/
                                 │   └── md_organizer.py  (moved)
                                 └── package.json         (workspace manager)
```

### Dependencies Separation

**Backend** (`backend/package.json`):
- @supabase/supabase-js
- hono
- stripe
- zod
- wrangler (dev)
- @cloudflare/workers-types (dev)

**Frontend** (`frontend/package.json`):
- react
- react-dom
- react-router-dom
- @tanstack/react-query
- axios
- vite (dev)

**Root** (`package.json`):
- Acts as workspace manager only
- No direct dependencies
- Coordinates frontend and backend

## 🚀 Getting Started

### First Time Setup

```bash
# Clone the repository
git clone <repo-url>
cd sixtysevenai

# Install all dependencies (recommended)
npm install

# This installs dependencies for:
# - Root workspace
# - backend/
# - frontend/
```

### Alternative: Manual Setup

If you prefer to set up individually:

```bash
# Backend only
cd backend
npm install

# Frontend only
cd frontend
npm install
```

## 💻 Development Workflow

### For Full-Stack Developers

Run both frontend and backend together:

```bash
# From root directory
npm run dev:all
```

- Backend: http://localhost:8787
- Frontend: http://localhost:5173

### For Backend Team

```bash
# Option 1: From root
npm run dev:backend

# Option 2: From backend directory
cd backend
npm run dev
```

**Backend-specific commands:**
```bash
cd backend

npm run dev          # Start development server
npm run build        # Type check
npm run type-check   # Type check only
npm run lint         # Run ESLint
npm run deploy       # Deploy to Cloudflare
```

### For Frontend Team

```bash
# Option 1: From root
npm run dev:frontend

# Option 2: From frontend directory
cd frontend
npm run dev
```

**Frontend-specific commands:**
```bash
cd frontend

npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔧 Configuration Files

### Backend Configuration
- **[backend/package.json](backend/package.json)** - Backend dependencies
- **[backend/wrangler.toml](backend/wrangler.toml)** - Cloudflare Workers config
- **[backend/tsconfig.json](backend/tsconfig.json)** - TypeScript config
- **[backend/.dev.vars](backend/.dev.vars)** - Local environment variables (gitignored)

### Frontend Configuration
- **[frontend/package.json](frontend/package.json)** - Frontend dependencies
- **[frontend/vite.config.ts](frontend/vite.config.ts)** - Vite config
- **[frontend/tsconfig.json](frontend/tsconfig.json)** - TypeScript config

### Root Configuration
- **[package.json](package.json)** - Workspace manager
- **[README.md](README.md)** - Project overview

## 🎯 Benefits of This Structure

### Independent Development
- ✅ Backend team can update dependencies without affecting frontend
- ✅ Frontend team can update dependencies without affecting backend
- ✅ Each team has isolated `node_modules`
- ✅ Separate build and test processes

### Workspace Management
- ✅ Root scripts coordinate both projects
- ✅ Single `npm install` sets up everything
- ✅ Shared tooling configuration when needed

### Deployment
- ✅ Backend deploys independently to Cloudflare Workers
- ✅ Frontend deploys independently to static hosting
- ✅ No cross-dependencies in production

## 📝 Common Tasks

### Adding Backend Dependencies
```bash
cd backend
npm install <package-name>
```

### Adding Frontend Dependencies
```bash
cd frontend
npm install <package-name>
```

### Building for Production
```bash
# From root - builds both
npm run build

# Backend only
npm run build:backend

# Frontend only
npm run build:frontend
```

### Deploying

**Backend:**
```bash
npm run deploy:backend
# OR
cd backend && npm run deploy
```

**Frontend:**
```bash
cd frontend
npm run build
# Deploy the dist/ folder to your hosting service
```

## 🔍 Verification

To verify your setup is working:

```bash
# Check backend
cd backend
npm run type-check

# Check frontend
cd frontend
npm run build
```

## 🆘 Troubleshooting

### "Module not found" errors

Make sure you've installed dependencies:
```bash
npm install  # From root
```

### Backend can't find wrangler

```bash
cd backend
npm install
```

### Frontend build fails

```bash
cd frontend
npm install
npm run build
```

## 📚 Additional Resources

- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
- [Project Documentation](./docs/)

## 🤝 Contributing

1. Backend changes: Work in `backend/` directory
2. Frontend changes: Work in `frontend/` directory
3. Each change is isolated and won't break the other team's work
4. Submit PRs for your specific area

---

**Questions?** Check the individual READMEs in `backend/` and `frontend/` directories for more details.
