# PromptForge Client - React Frontend

Modern React 18 + TypeScript + Vite frontend for the PromptForge game engine.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The app runs on `http://localhost:5173` and proxies API requests to `http://localhost:8787`.

Make sure the backend is running:
```bash
# From root directory
npm run dev
```

## Scripts

- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - Build for production (TypeScript + Vite)
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/      # React components
├── context/         # Context providers
├── hooks/           # Custom hooks
├── lib/             # Utilities & API client
├── App.tsx          # Main app with routing
└── main.tsx         # Entry point
```

## Key Features

- ✅ Modern React 18 with hooks
- ✅ TypeScript for type safety
- ✅ Vite for fast dev & builds
- ✅ React Router for navigation
- ✅ Axios for API calls
- ✅ Context API for state
- ✅ Mobile responsive design

## Environment Variables

Create `.env`:

```env
VITE_API_BASE=/api
```

## API Integration

All API calls are handled through `src/lib/api.ts`. The API client includes:

- Automatic token injection
- Error handling
- Type-safe responses
- Request/response interceptors

## Components

### Login
Authentication with login/register forms

### GameHub
Main dashboard with level selection and progress

### Level
Quest gameplay with submission and validation

### Profile
Player stats, XP history, and achievements

### Leaderboard
Rankings and competitive features

## State Management

- **AuthContext**: Global authentication state
- **localStorage**: Persistent token storage
- **Component State**: Local UI state

## Build Configuration

Vite is configured to:
- Proxy `/api` to backend in development
- Build to `../dist` for deployment
- Enable fast refresh and HMR
- Optimize for production

## Deployment

Frontend can be deployed to:
- Cloudflare Pages
- Vercel
- Netlify
- Any static hosting

```bash
npm run build
# Deploy the dist/ directory
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Fast HMR: < 100ms
- Build time: < 5s
- Page load: < 2s
- Bundle size: ~200KB

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Project Documentation](../PHASE_3_COMPLETE.md)

## License

MIT

