import Stripe from 'stripe';

let stripeClient: Stripe | null = null;

export function getStripeClient(secretKey: string) {
  if (!stripeClient) {
    stripeClient = new Stripe(secretKey, {
      apiVersion: '2023-10-16'
    });
  }
  return stripeClient;
}

export async function createPaymentIntent(env: any, amount: number, metadata: any) {
  const stripe = getStripeClient(env.STRIPE_SECRET_KEY);
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    metadata
  });

  return paymentIntent;
}

export async function createCheckoutSession(env: any, priceId: string, userId: string) {
  const stripe = getStripeClient(env.STRIPE_SECRET_KEY);
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    mode: 'subscription',
    success_url: `${env.FRONTEND_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.FRONTEND_URL}/checkout/canceled`,
    customer_email: undefined,
    metadata: { userId }
  });

  return session;
}

export async function verifyWebhookSignature(env: any, body: string, signature: string) {
  const stripe = getStripeClient(env.STRIPE_SECRET_KEY);
  
  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    );
    return event;
  } catch (err) {
    throw new Error('Webhook signature verification failed');
  }
}
