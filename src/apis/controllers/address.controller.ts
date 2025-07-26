import { Request, Response } from 'express';
import * as addressService from '../services/address.service';

export const createAddressController = async (req: Request, res: Response) => {
  try {
    const address = await addressService.createAddress(req.body);
    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create address' });
  }
};

export const getAllAddressController = async (_req: Request, res: Response) => {
  try {
    const addresses = await addressService.getAllAddresses();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch addresses' });
  }
};

export const getAddressByIdController = async (req: Request, res: Response) => {
  try {
    const address = await addressService.getAddressById(Number(req.params.id));
    if (!address) return res.status(404).json({ error: 'Address not found' });
    res.json(address);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch address' });
  }
};

export const updateAddressController = async (req: Request, res: Response) => {
  try {
    const address = await addressService.updateAddress(Number(req.params.id), req.body);
    res.json(address);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update address' });
  }
};

export const removeAddressController = async (req: Request, res: Response) => {
  try {
    await addressService.deleteAddress(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete address' });
  }
};
