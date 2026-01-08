# SixtySeven AI - Monorepo

Skill Game Engine powered by modern web technologies, organized as an npm workspace with independent frontend and backend development.

## Project Structure

```
sixtysevenai/
├── frontend/            # React + Vite frontend application
├── backend/             # Cloudflare Workers API
├── database/
│   └── supabase/        # Database schemas and migrations
├── scripts/             # Utility scripts
├── docs/                # Documentation
└── assets/              # Shared assets (images, css, etc.)
```

## Quick Start

### Option 1: Install All Dependencies (Recommended)

```bash
# Install root workspace and all sub-projects
npm install
```

This will install dependencies for both frontend and backend using npm workspaces.

### Option 2: Manual Setup

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## Development

### Run Both Frontend and Backend

```bash
# From root directory
npm run dev:all
```

### Run Backend Only

```bash
# From root
npm run dev:backend

# OR from backend directory
cd backend
npm run dev
```

Backend runs at: `http://localhost:8787`

### Run Frontend Only

```bash
# From root
npm run dev:frontend

# OR from frontend directory
cd frontend
npm run dev
```

Frontend runs at: `http://localhost:5173`

## Building

```bash
# Build both frontend and backend
npm run build

# Build backend only
npm run build:backend

# Build frontend only
npm run build:frontend
```

## Deployment

### Backend (Cloudflare Workers)

```bash
npm run deploy:backend
```

### Frontend

The frontend build output (`frontend/dist/`) can be deployed to:
- Cloudflare Pages
- Vercel
- Netlify
- Any static hosting service

## Independent Development

Each workspace (frontend and backend) can be developed completely independently:

- **Backend Team**: Work in `backend/` directory with its own `package.json`, `node_modules`, and dependencies
- **Frontend Team**: Work in `frontend/` directory with its own `package.json`, `node_modules`, and dependencies

Changes in one workspace won't affect the other's dependencies or build process.

## Documentation

- [Backend README](./backend/README.md) - Backend-specific documentation
- [Frontend README](./frontend/README.md) - Frontend-specific documentation
- [Project Docs](./docs/) - Comprehensive project documentation

## Technology Stack

### Frontend
- React 19 + TypeScript
- Vite
- React Router v7
- TanStack Query
- Axios

### Backend
- Cloudflare Workers
- Hono
- Supabase
- Stripe
- TypeScript

### Database
- PostgreSQL (via Supabase)

## License

See LICENSE file for details.
