import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import authRoutes from './routes/auth';
import playerRoutes from './routes/player';
import gameRoutes from './routes/games';
import xpRoutes from './routes/xp';
import paymentsRoutes from './routes/payments';
import questRoutes from './routes/quests';

const app = new Hono();

// Middleware
app.use(cors());
app.use(logger());

// Root endpoint
app.get('/', (c) => {
  return c.json({
    name: 'SixtySeven AI API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: '/health',
      auth: '/api/auth/*',
      player: '/api/player/*',
      games: '/api/games/*',
      xp: '/api/xp/*',
      payments: '/api/payments/*',
      quests: '/api/quests/*'
    }
  });
});

// Health check endpoint
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API Routes
app.route('/api/auth', authRoutes);
app.route('/api/player', playerRoutes);
app.route('/api/games', gameRoutes);
app.route('/api/xp', xpRoutes);
app.route('/api/payments', paymentsRoutes);
app.route('/api/quests', questRoutes);

// 404 handler
app.notFound((c) => {
  return c.json({
    error: 'Not Found',
    path: c.req.path,
    method: c.req.method
  }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error('Error:', err);
  return c.json({
    error: 'Internal Server Error',
    message: err instanceof Error ? err.message : 'Unknown error'
  }, 500);
});

export default app;
