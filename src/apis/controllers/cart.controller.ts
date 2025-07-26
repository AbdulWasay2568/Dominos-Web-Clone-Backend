import { Request, Response } from 'express';
import * as cartService from '../services/cart.service';

export const createCartController = async (req: Request, res: Response) => {
  try {
    const cart = await cartService.createCart(req.body);
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create cart' });
  }
};

export const getCartByUserIdController = async (req: Request, res: Response) => {
  try {
    const cart = await cartService.getCartByUserId(Number(req.params.userId));
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
};

export const updateCartController = async (req: Request, res: Response) => {
  try {
    const cart = await cartService.updateCart(Number(req.params.id), req.body);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update cart' });
  }
};

export const removeCartController = async (req: Request, res: Response) => {
  try {
    await cartService.deleteCart(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete cart' });
  }
};
