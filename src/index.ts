import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import serverless from 'serverless-http';

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

// Load .env in development only
// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config({ path: '.env' });
// }
  dotenv.config({ path: '.env' });

const app: Express = express();

// CORS Configuration
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

// Parse JSON body
app.use(express.json());

// Prisma Client
export const prismaClient = new PrismaClient({
  log: ['query'],
});

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Ecommerce backend is running on Vercel!');
});

// Register routers
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

// Local dev server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

// Export handler for Vercel serverless
export const handler = serverless(app);
