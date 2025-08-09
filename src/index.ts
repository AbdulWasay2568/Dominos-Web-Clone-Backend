// src/index.ts
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import serverless from 'serverless-http';
import { PrismaClient } from '@prisma/client';

// Load env vars only locally
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env' });
}

// Prisma singleton pattern for serverless
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

// Express app
const app: Express = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());

/**
 * Health check — instant, no DB
 */
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('✅ Backend is running without touching DB');
});

/**
 * DB test route — actually queries the DB
 */
app.get('/db-test', async (req: Request, res: Response) => {
  try {
    const result = await prisma.$queryRaw`SELECT NOW()`;
    res.json({ ok: true, result });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Import and register all other routes — only in dev for now
if (process.env.NODE_ENV !== 'production') {
  import('./apis/routes').then((routes) => {
    app.use('/products', routes.productRouter);
    app.use('/categories', routes.categoryRouter);
    app.use('/addons', routes.addonsRouter);
    app.use('/addon-options', routes.addonOptionsRouter);
    app.use('/carts', routes.cartRouter);
    app.use('/cart-items', routes.cartItemRouter);
    app.use('/order-items', routes.orderItemRouter);
    app.use('/favourites', routes.favouritesRouter);
    app.use('/orders', routes.orderRouter);
    app.use('/payments', routes.paymentRouter);
    app.use('/product-reviews', routes.productReviewRouter);
    app.use('/shipping-info', routes.shippingInfoRouter);
    app.use('/users', routes.usersRouter);
    app.use('/addresses', routes.addressRouter);
    app.use('/auth', routes.authRouter);
  });
}

// Local dev mode — normal Express server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

// Serverless export for Vercel
export default serverless(app);
