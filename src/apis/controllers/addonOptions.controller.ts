import { Request, Response } from 'express';
import * as addonOptionService from '../services/addonOptions.service';

export const createAddonOptionController = async (req: Request, res: Response) => {
  try {
    const option = await addonOptionService.createOption(req.body);
    res.status(201).json(option);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create addon option' });
  }
};

export const getAllAddonOptionController = async (_req: Request, res: Response) => {
  try {
    const options = await addonOptionService.getAllOptions();
    res.json(options);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch addon options' });
  }
};

export const getAddonOptionByIdController = async (req: Request, res: Response) => {
  try {
    const option = await addonOptionService.getOptionById(Number(req.params.id));
    if (!option) return res.status(404).json({ error: 'Addon option not found' });
    res.json(option);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch addon option' });
  }
};

export const updateAddonOptionController = async (req: Request, res: Response) => {
  try {
    const option = await addonOptionService.updateOption(Number(req.params.id), req.body);
    res.json(option);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update addon option' });
  }
};

export const removeAddonOptionController = async (req: Request, res: Response) => {
  try {
    await addonOptionService.deleteOption(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete addon option' });
  }
};
