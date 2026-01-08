import { Hono } from 'hono';
import { createPaymentIntent, createCheckoutSession, verifyWebhookSignature } from '../services/stripe';
import { getSupabaseClient } from '../services/supabase';
import { z } from 'zod';

const router = new Hono();

const paymentSchema = z.object({
  userId: z.string(),
  amount: z.number().min(100),
  description: z.string(),
  metadata: z.record(z.string()).optional()
});

const checkoutSchema = z.object({
  userId: z.string(),
  priceId: z.string()
});

// Create payment intent
router.post('/payment-intent', async (c) => {
  try {
    const body = await c.req.json();
    const { userId, amount, description, metadata } = paymentSchema.parse(body);

    const paymentIntent = await createPaymentIntent(c.env, amount, {
      userId,
      description,
      ...metadata
    });

    return c.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return c.json({ error: 'Validation error' }, 400);
    }
    return c.json({ error: 'Failed to create payment intent' }, 500);
  }
});

// Create checkout session
router.post('/checkout', async (c) => {
  try {
    const body = await c.req.json();
    const { userId, priceId } = checkoutSchema.parse(body);

    const session = await createCheckoutSession(c.env, priceId, userId);

    return c.json({
      sessionId: session.id,
      url: session.url
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return c.json({ error: 'Validation error' }, 400);
    }
    return c.json({ error: 'Failed to create checkout session' }, 500);
  }
});

// Handle webhook
router.post('/webhook', async (c) => {
  try {
    const signature = c.req.header('stripe-signature');
    const body = await c.req.text();

    if (!signature) {
      return c.json({ error: 'Missing stripe-signature header' }, 400);
    }

    const event = await verifyWebhookSignature(c.env, body, signature);

    const supabase = getSupabaseClient(c.env);

    switch (event.type) {
      case 'payment_intent.succeeded':
        // Handle successful payment
        const paymentIntent = event.data.object;
        await supabase
          .from('payments')
          .insert([{
            payment_intent_id: paymentIntent.id,
            user_id: paymentIntent.metadata.userId,
            amount: paymentIntent.amount,
            status: 'completed',
            created_at: new Date().toISOString()
          }]);
        break;

      case 'customer.subscription.created':
        // Handle subscription creation
        const subscription = event.data.object;
        await supabase
          .from('subscriptions')
          .insert([{
            stripe_subscription_id: subscription.id,
            user_id: subscription.metadata.userId,
            status: subscription.status,
            created_at: new Date().toISOString()
          }]);
        break;

      case 'customer.subscription.updated':
        // Handle subscription update
        const updatedSubscription = event.data.object;
        await supabase
          .from('subscriptions')
          .update({ status: updatedSubscription.status })
          .eq('stripe_subscription_id', updatedSubscription.id);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return c.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return c.json({ error: 'Webhook processing failed' }, 400);
  }
});

export default router;
