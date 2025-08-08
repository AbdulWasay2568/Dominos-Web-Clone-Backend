import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
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

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env' });
}
const app: Express = express();

// CORS Configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
}));

// Parse JSON body
app.use(express.json());

// Prisma Client
export const prismaClient = new PrismaClient({
  log: ['query'],
});

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Ecommerce backend is running!');
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

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
}); 