import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import serverless from 'serverless-http';
import { PrismaClient } from '@prisma/client';

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

// Load env vars only in dev
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env' });
}

// Prisma singleton
declare global {
  var prismaClient: PrismaClient | undefined;
}
export const prismaClient =
  global.prismaClient ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });
if (process.env.NODE_ENV !== 'production') global.prismaClient = prismaClient;

const app: Express = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Ecommerce backend is running on Vercel!');
});

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

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

export default serverless(app);
