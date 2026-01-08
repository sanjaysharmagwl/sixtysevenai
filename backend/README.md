# Backend - SixtySeven AI API

Cloudflare Worker-based API for SixtySeven AI.

## Independent Setup

This backend can be developed and deployed independently from the frontend.

### Prerequisites
- Node.js 18+
- npm or yarn
- Cloudflare account (for deployment)

### Installation

```bash
cd backend
npm install
```

### Environment Variables

Copy `.env.example` to `.dev.vars` and fill in your credentials:

```bash
cp .env.example .dev.vars
```

Required variables:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_KEY` - Supabase service role key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `JWT_SECRET` - Secret for JWT token signing

### Development

```bash
npm run dev
```

The API will be available at `http://localhost:8787`

### Build & Type Check

```bash
npm run build        # Type check
npm run type-check   # Type check only
npm run lint         # Run ESLint
```

### Deployment

```bash
npm run deploy
```

## Project Structure

```
backend/
├── src/
│   ├── routes/          # API route handlers
│   ├── services/        # Business logic & external services
│   ├── types/           # TypeScript type definitions
│   └── worker.ts        # Main Cloudflare Worker entry point
├── package.json
├── tsconfig.json
├── wrangler.toml        # Cloudflare Workers configuration
└── .dev.vars           # Local environment variables (gitignored)
```

## API Endpoints

- `/api/player/*` - Player profile and statistics
- `/api/game/*` - Game session management
- `/api/payment/*` - Stripe payment integration

## Technology Stack

- **Runtime**: Cloudflare Workers
- **Framework**: Hono
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe
- **Validation**: Zod
- **Language**: TypeScript
