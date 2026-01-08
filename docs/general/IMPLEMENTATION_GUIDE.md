# Dynamic Website Implementation Guide

## Tech Stack Overview

- **Frontend**: GitHub Pages (static hosting, CDN)
- **Backend**: Cloudflare Workers (serverless compute)
- **Database**: Supabase (PostgreSQL + Auth)
- **Payments**: Stripe (payment processing)
- **Storage**: Supabase Storage (file uploads)
- **CMS**: Notion API / Sanity (content management)

## Project Structure

```
sixtysevenai/
├── src/
│   ├── worker.ts           # Main Hono worker
│   ├── routes/
│   │   ├── auth.ts         # Authentication endpoints
│   │   ├── player.ts       # Player profile endpoints
│   │   ├── games.ts        # Game endpoints
│   │   ├── xp.ts           # XP system endpoints
│   │   └── payments.ts     # Stripe payment endpoints
│   ├── services/
│   │   ├── supabase.ts     # Supabase client & helpers
│   │   └── stripe.ts       # Stripe client & helpers
│   └── types/              # TypeScript types
├── supabase/
│   └── schema.sql          # Database schema
├── public/                 # Static assets (GitHub Pages)
├── wrangler.toml          # Cloudflare Worker config
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── .env.example           # Environment variables template
```

## Getting Started

### 1. Prerequisites
- Node.js 18+
- npm or yarn
- Cloudflare account
- Supabase account
- Stripe account

### 2. Environment Setup

```bash
# Clone repo and install dependencies
npm install

# Copy environment template
cp .env.example .env

# Fill in your credentials in .env
# - SUPABASE_URL
# - SUPABASE_ANON_KEY
# - STRIPE_SECRET_KEY
# - CLOUDFLARE_ACCOUNT_ID
# - etc.
```

### 3. Database Setup

1. Create a new Supabase project
2. Run the schema:
   ```bash
   # In Supabase dashboard SQL editor, paste contents of supabase/schema.sql
   ```
3. Verify tables are created with data

### 4. Cloudflare Workers Deployment

```bash
# Login to Cloudflare
wrangler login

# Deploy worker
npm run deploy

# Your API will be available at: https://api.yourdomain.com
```

### 5. Local Development

```bash
# Start worker locally
npm run dev

# Worker will run on http://localhost:8787
# Test endpoints via curl or Postman
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Player
- `GET /api/player/:userId` - Get player profile
- `PATCH /api/player/:userId` - Update profile
- `GET /api/player/:userId/games` - Get player games progress
- `GET /api/player/:userId/achievements` - Get achievements
- `GET /api/player/:userId/skill-trees` - Get skill trees

### Games
- `GET /api/games` - List all games
- `GET /api/games/:gameId` - Get game details
- `GET /api/games/:gameId/levels` - Get game levels
- `GET /api/games/:gameId/leaderboard` - Get game leaderboard

### XP System
- `POST /api/xp/award` - Award XP to player
- `GET /api/xp/history/:userId` - Get XP transaction history
- `GET /api/xp/ranks` - Get rank information

### Payments
- `POST /api/payments/payment-intent` - Create Stripe payment intent
- `POST /api/payments/checkout` - Create checkout session
- `POST /api/payments/webhook` - Handle Stripe webhooks

## Frontend Integration

The frontend will be hosted on GitHub Pages and make API calls to:
```
https://api.yourdomain.com/api/*
```

Example API call from frontend:
```javascript
// Register
const response = await fetch('https://api.yourdomain.com/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'secure-password',
    name: 'Player Name'
  })
});

// Get player profile
const profile = await fetch('https://api.yourdomain.com/api/player/user-id');
const data = await profile.json();
```

## Development Workflow

1. **Make changes** to src files
2. **Build TypeScript**: `npm run build`
3. **Test locally**: `npm run dev`
4. **Deploy**: `npm run deploy`

## Security Considerations

- All environment variables are stored in `.env` (not committed)
- Wrangler handles secret management for production
- Supabase Auth handles authentication
- Stripe webhook signature verification required
- CORS configured for GitHub Pages domain

## Next Steps

1. Set up GitHub Pages for frontend
2. Create frontend components (Vue/React/Svelte)
3. Implement game logic in frontend
4. Add real-time features (WebSockets via Supabase)
5. Set up CI/CD for deployments

## Troubleshooting

**Worker won't start**
```bash
wrangler login
wrangler deploy --env production
```

**Database connection errors**
- Check SUPABASE_URL and SUPABASE_ANON_KEY in .env
- Ensure Supabase project is active

**Stripe webhook failures**
- Verify STRIPE_WEBHOOK_SECRET in wrangler.toml
- Check webhook endpoint in Stripe dashboard

## Documentation Files

- `DEPLOYMENT_GUIDE.md` - Detailed deployment instructions
- `AGENT.md` - Brand guidelines and design system
- `PROMPTFORGE_README.md` - Feature documentation
