import { Request, Response } from 'express';
import * as orderItemService from '../services/orderItem.service';

export const createOrderItemController = async (req: Request, res: Response) => {
  try {
    const orderItem = await orderItemService.createOrderItem(req.body);
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order item' });
  }
};

export const getAllOrderItemController = async (_req: Request, res: Response) => {
  try {
    const orderItems = await orderItemService.getAllOrderItems();
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order items' });
  }
};

export const getOrderItemByIdController = async (req: Request, res: Response) => {
  try {
    const orderItem = await orderItemService.getOrderItemById(Number(req.params.id));
    if (!orderItem) return res.status(404).json({ error: 'Order item not found' });
    res.json(orderItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order item' });
  }
};

export const updateOrderItemController = async (req: Request, res: Response) => {
  try {
    const updated = await orderItemService.updateOrderItem(Number(req.params.id), req.body);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order item' });
  }
};

export const removeOrderItemController = async (req: Request, res: Response) => {
  try {
    await orderItemService.deleteOrderItem(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order item' });
  }
};
