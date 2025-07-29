import { Request, Response } from 'express';
import * as cartService from '../services/cart.service';

export const getAllCartsController = async (_req: Request, res: Response) => {
  const carts = await cartService.getAllCarts();
  res.json({ carts });
};


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

export const addItemToCartController = async (req: Request, res: Response) => {
  try {
    const {userId, productId, quantity, addonOptionIds } = req.body;
    const cartItem = await cartService.addItemToCart({
      userId,
      productId,
      quantity,
      addonOptionIds
    });

    res.status(201).json({
    message: 'Item added to cart',
    data: cartItem
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add item to cart' });
  }
}
