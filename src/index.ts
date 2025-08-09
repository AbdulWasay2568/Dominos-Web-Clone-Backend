// src/index.ts
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import serverless from 'serverless-http';
import { PrismaClient } from '@prisma/client';

// Load .env only in local dev
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// Lazy Prisma client instance
let prisma: PrismaClient | null = null;
function getPrisma() {
  if (!prisma) {
    prisma = new PrismaClient({
      log: process.env.NODE_ENV === 'production' ? [] : ['query', 'error', 'warn'],
    });
  }
  return prisma;
}

// Create Express app
const app: Express = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());

// Health check
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('✅ Ecommerce backend is running on Vercel');
});

// Simple DB test route (debug only — remove in prod)
app.get('/test-db', (req, res) => {
  res.json({ status: 'ok', message: 'Route is working' });
});


// Import routes *inside* serverless handler to avoid cold start cost
import {
  productRouter,
  categoryRouter,
  addonsRouter,
  addonOptionsRouter,
  cartRouter,
  cartItemRouter,
  orderItemRouter,
  favouritesRouter,
  orderRouter,
  addressRouter,
  authRouter,
  paymentRouter,
  productReviewRouter,
  shippingInfoRouter,
  usersRouter,
} from './apis/routes';

app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/addons', addonsRouter);
app.use('/addon-options', addonOptionsRouter);
app.use('/carts', cartRouter);
app.use('/cart-items', cartItemRouter);
app.use('/order-items', orderItemRouter);
app.use('/favourites', favouritesRouter);
app.use('/orders', orderRouter);
app.use('/payments', paymentRouter);
app.use('/product-reviews', productReviewRouter);
app.use('/shipping-info', shippingInfoRouter);
app.use('/users', usersRouter);
app.use('/addresses', addressRouter);
app.use('/auth', authRouter);

// Local dev mode
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

// Export for Vercel
export default serverless(app);
