import { Request, Response } from 'express';
import * as cartItemService from '../services/cartItem.service';

export const createCartItemController = async (req: Request, res: Response) => {
  try {
    const item = await cartItemService.createCartItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create cart item' });
  }
};

export const getAllCartItemController = async (_req: Request, res: Response) => {
  try {
    const items = await cartItemService.getAllCartItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

export const getCartItemByIdController = async (req: Request, res: Response) => {
  try {
    const item = await cartItemService.getCartItemById(Number(req.params.id));
    if (!item) return res.status(404).json({ error: 'Cart item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart item' });
  }
};

export const updateCartItemController = async (req: Request, res: Response) => {
  try {
    const item = await cartItemService.updateCartItem(Number(req.params.id), req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update cart item' });
  }
};

export const removeCartItemController = async (req: Request, res: Response) => {
  try {
    await cartItemService.deleteCartItem(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete cart item' });
  }
};
