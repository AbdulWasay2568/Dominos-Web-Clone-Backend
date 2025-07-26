import { Request, Response } from 'express';
import * as shippingService from '../services/shippingInfo.service';

export const createShippingInformation = async (req: Request, res: Response) => {
  try {
    const info = await shippingService.createShippingInfo(req.body);
    res.status(201).json(info);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create shipping info' });
  }
};

export const getAllShippingInformation = async (_req: Request, res: Response) => {
  try {
    const all = await shippingService.getAllShippingInfo();
    res.json(all);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shipping info' });
  }
};

export const getShippingInformationById = async (req: Request, res: Response) => {
  try {
    const info = await shippingService.getShippingInfoById(Number(req.params.id));
    if (!info) return res.status(404).json({ error: 'Shipping info not found' });
    res.json(info);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shipping info' });
  }
};

export const updateShippingInformation = async (req: Request, res: Response) => {
  try {
    const info = await shippingService.updateShippingInfo(Number(req.params.id), req.body);
    res.json(info);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update shipping info' });
  }
};

export const removeShippingInformation = async (req: Request, res: Response) => {
  try {
    await shippingService.deleteShippingInfo(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete shipping info' });
  }
};
