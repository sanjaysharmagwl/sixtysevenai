# Quick Reference - Getting Started

## 🚀 Start Here

This is a comprehensive backend implementation for SixtySeven AI. Everything you need to get started is in this repository.

## 📋 What You Have

- ✅ Complete REST API (18 endpoints)
- ✅ Database schema (PostgreSQL)
- ✅ Authentication system
- ✅ XP & ranking system
- ✅ Payment processing
- ✅ Game progression tracking
- ✅ Leaderboard system
- ✅ Skill trees

## 🎯 Next 15 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment
```bash
cp .env.example .env
# Edit .env with your credentials
```

### 3. Create Database
Visit https://supabase.com → Create project
Then:
- Copy SQL from `supabase/schema.sql`
- Paste in Supabase SQL editor
- Run to create tables

### 4. Test Locally
```bash
npm run dev
# Visit http://localhost:8787/health
```

### 5. Deploy
```bash
wrangler login
npm run deploy
```

## 📚 Key Documentation

| Document | Purpose |
|----------|---------|
| **IMPLEMENTATION_GUIDE.md** | Full setup instructions |
| **IMPLEMENTATION_STATUS.md** | What's implemented |
| **PHASE_1_COMPLETION.md** | What's next |
| **FILES_MANIFEST.md** | File inventory |
| **AGENT.md** | Brand guidelines |

## 🔑 Environment Variables

Required in `.env`:
```
SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_key
STRIPE_SECRET_KEY=your_stripe_key
JWT_SECRET=your_secret
```

## 📡 API Endpoints

All endpoints available at:
```
https://your-worker.dev/api/*
```

**Example**: Get player profile
```bash
curl https://your-worker.dev/api/player/user-123
```

## 🛠️ Common Tasks

### Run locally
```bash
npm run dev
```

### Build code
```bash
npm run build
```

### Deploy to production
```bash
npm run deploy
```

### Check types
```bash
npm run type-check
```

## 📖 API Quick Reference

```bash
# Register user
POST /api/auth/register
Body: { email, password, name }

# Login
POST /api/auth/login
Body: { email, password }

# Get player
GET /api/player/:userId

# Award XP
POST /api/xp/award
Body: { userId, gameId, levelId, baseXP, multipliers }

# Get games
GET /api/games

# Get leaderboard
GET /api/games/:gameId/leaderboard
```

## ✅ Deployment Checklist

- [ ] Supabase project created
- [ ] Database schema applied
- [ ] .env file configured
- [ ] `wrangler login` successful
- [ ] `npm run deploy` successful
- [ ] Test endpoint: `curl /health`
- [ ] GitHub Pages frontend configured
- [ ] CORS domain configured

## 🎮 Games Included

1. **Prompt Architect** (🎯) - Beginner
2. **Agent Engineer** (🤖) - Level 5+
3. **Automation Forge** (🔧) - Level 10+
4. **Creator OS** (🎨) - Level 15+
5. **Startup Builder** (💰) - Level 25+

## 🏆 Rank System

```
Noob (0 XP)
  ↓
User (1,000 XP)
  ↓
Hacker (4,000 XP)
  ↓
Engineer (11,000 XP)
  ↓
Architect (26,000 XP)
  ↓
Overlord (56,000 XP)
  ↓
Godmode (156,000 XP)
```

## ⚡ Power-Ups

- Focus Mode (25 min) - +30% focus
- Memory Lock (30 min) - +50% retention
- Speed Burst (25 min) - +40% speed
- XP Multiplier (60 min) - +50% XP
- Time Warp (45 min) - 3x productivity

## 🔐 Security

- ✅ Supabase Auth (JWT)
- ✅ Stripe webhook verification
- ✅ Input validation (Zod)
- ✅ CORS configured
- ✅ Rate limiting ready
- ✅ Environment variables secured

## 📊 Database Tables

| Table | Purpose |
|-------|---------|
| users | Player accounts |
| games | 5 skill games |
| levels | Game levels |
| player_games | Progress tracking |
| xp_transactions | XP audit log |
| skill_trees | Tree progress |
| achievements | Achievement tracking |
| powerups | Power-up catalog |
| payments | Payment records |
| rank_thresholds | Rank definitions |

## 🆘 Troubleshooting

**Worker won't start?**
```bash
wrangler login
wrangler deploy
```

**Database error?**
- Check SUPABASE_URL in .env
- Check SUPABASE_ANON_KEY in .env
- Verify project is active in Supabase

**Build error?**
```bash
rm -rf node_modules
npm install
npm run build
```

## 🚀 Next Phase

Frontend development:
1. Choose framework (Vue/React)
2. Create auth UI
3. Build game interfaces
4. Integrate with API
5. Deploy to GitHub Pages

## 📞 Support

1. Check **IMPLEMENTATION_GUIDE.md** for details
2. Review error logs in Cloudflare dashboard
3. Check database tables in Supabase
4. Test endpoints with curl/Postman

## 💡 Key Facts

- **18 API endpoints** ready
- **10 database tables** pre-configured
- **5 games** included
- **7 ranks** in progression ladder
- **5 power-ups** in system
- **Zero external dependencies** required for core features
- **Production-ready** code

## 🎉 You're Ready!

Everything is built and ready for:
- ✅ Production deployment
- ✅ Frontend integration
- ✅ User registration
- ✅ Game progression
- ✅ Payment processing
- ✅ Real-time leaderboards

Start by running `npm install` and following **IMPLEMENTATION_GUIDE.md**
