import { Request, Response } from 'express';
import * as paymentService from '../services/payment.service';

export const createPaymentController = async (req: Request, res: Response) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create payment' });
  }
};

export const getAllPaymentController = async (_req: Request, res: Response) => {
  try {
    const payments = await paymentService.getAllPayments();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
};

export const getPaymentByIdController = async (req: Request, res: Response) => {
  try {
    const payment = await paymentService.getPaymentById(Number(req.params.id));
    if (!payment) return res.status(404).json({ error: 'Payment not found' });
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch payment' });
  }
};

export const updatePaymentController = async (req: Request, res: Response) => {
  try {
    const payment = await paymentService.updatePayment(Number(req.params.id), req.body);
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update payment' });
  }
};

export const removePaymentController = async (req: Request, res: Response) => {
  try {
    await paymentService.deletePayment(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete payment' });
  }
};
