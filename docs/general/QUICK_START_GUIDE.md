# PromptForge - Quick Start Guide

Welcome to PromptForge! This guide will help you get started with the React + Vite frontend and Cloudflare Workers backend.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Terminal/command line access

## Quick Start (3 Steps)

### 1. Install Dependencies

```bash
# Install root dependencies (backend)
npm install

# Install client dependencies (frontend)
cd client
npm install
cd ..
```

### 2. Start Development Servers

**Option A: Run both servers separately (recommended)**

```bash
# Terminal 1: Start backend API
npm run dev

# Terminal 2: Start frontend
cd client && npm run dev
```

**Option B: Run both together**

```bash
npm run dev:all
```

### 3. Open the App

Frontend: http://localhost:5173  
Backend API: http://localhost:8787

## Project Structure

```
promptforge/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── context/     # Auth context
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # API client & utilities
│   │   └── App.tsx      # Main app
│   └── vite.config.ts
├── src/                 # Cloudflare Worker backend
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   └── worker.ts        # Entry point
└── package.json
```

## Available Scripts

### Root Directory

```bash
npm run dev           # Start backend (Cloudflare Workers)
npm run dev:client    # Start frontend (React + Vite)
npm run dev:all       # Start both servers
npm run build         # Build both frontend and backend
npm run deploy        # Deploy to Cloudflare
```

### Client Directory

```bash
cd client
npm run dev           # Start dev server
npm run build         # Build for production
npm run preview       # Preview production build
```

## Features

### ✅ Implemented
- User authentication (login/register)
- Level progression (L1-L7)
- Quest submission and validation
- XP and rank system
- Boss challenges
- Godmode progression
- Player profile
- Leaderboard
- Mobile responsive design

## User Flow

1. **Register/Login** → Create account or log in
2. **Game Hub** → View available levels
3. **Play Levels** → Complete quests (L1-L7)
4. **Earn XP** → Rank up and unlock features
5. **Boss Battles** → Defeat mini-boss and final boss
6. **Godmode** → Complete ascension trials
7. **Profile** → View stats and achievements
8. **Leaderboard** → Compare with other players

## API Endpoints

All API endpoints are proxied through Vite in development:

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/games` - List all games
- `GET /api/player/:userId` - Get player profile
- `POST /api/quests/submit` - Submit quest answer
- `POST /api/quests/:id/validate` - Validate quest
- `GET /api/quests/validator/godmode-status/:userId` - Godmode status

See `PHASE_2_API_REFERENCE.md` for complete API documentation.

## Configuration

### Environment Variables

Create `client/.env`:

```env
VITE_API_BASE=/api
```

### Backend Configuration

Configure Cloudflare Workers in `wrangler.toml`:

```toml
name = "promptforge"
main = "src/worker.ts"
compatibility_date = "2024-01-01"

[vars]
SUPABASE_URL = "your-supabase-url"
SUPABASE_ANON_KEY = "your-supabase-key"
```

## Deployment

### Frontend (Cloudflare Pages)

```bash
npm run build:client
npx wrangler pages deploy dist --project-name=promptforge
```

### Backend (Cloudflare Workers)

```bash
npm run deploy
```

## Troubleshooting

### Backend not responding

```bash
# Check if backend is running
curl http://localhost:8787/api/games

# Restart backend
npm run dev
```

### Frontend not loading

```bash
# Clear cache and restart
cd client
rm -rf node_modules .vite
npm install
npm run dev
```

### CORS errors

Ensure backend has CORS configured:
```typescript
// src/worker.ts
app.use('/*', cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
```

### Build errors

```bash
# Type check
npm run type-check

# Rebuild
npm run build
```

## Testing

### Manual Testing Checklist

- [ ] Register new user
- [ ] Login existing user
- [ ] Navigate to game hub
- [ ] Submit a quest
- [ ] Earn XP
- [ ] Rank up
- [ ] Complete mini-boss
- [ ] Complete final boss
- [ ] View profile
- [ ] Check leaderboard
- [ ] Test on mobile

## Development Tips

1. **Hot Module Replacement**: Vite provides instant updates
2. **TypeScript**: All code is type-safe
3. **API Proxy**: Vite proxies `/api` to `http://localhost:8787`
4. **React DevTools**: Install browser extension for debugging
5. **Network Tab**: Monitor API calls in browser DevTools

## Next Steps

1. Complete Phase 2 backend implementation
2. Test all API endpoints
3. Add more levels and quests
4. Implement achievements system
5. Add skill tree visualization
6. Deploy to production

## Support

For issues or questions:
1. Check the `PHASE_3_COMPLETE.md` documentation
2. Review API documentation in `PHASE_2_API_REFERENCE.md`
3. Check console for errors
4. Verify backend is running

## License

MIT License

---

**Happy Prompting! 🚀**

Start playing at: http://localhost:5173
