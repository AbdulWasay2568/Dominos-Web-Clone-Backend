import { Request, Response } from 'express';
import * as favouriteService from '../services/favourites.service';

export const createFavouriteController = async (req: Request, res: Response) => {
  try {
    const fav = await favouriteService.createFavourite(req.body);
    res.status(201).json(fav);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add to favourites' });
  }
};

export const getAllFavouriteController = async (_req: Request, res: Response) => {
  try {
    const favs = await favouriteService.getAllFavourites();
    res.json(favs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch favourites' });
  }
};

export const getFavouriteByIdController = async (req: Request, res: Response) => {
  try {
    const fav = await favouriteService.getFavouriteById(Number(req.params.id));
    if (!fav) return res.status(404).json({ error: 'Favourite not found' });
    res.json(fav);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch favourite' });
  }
};

export const removeFavouriteController = async (req: Request, res: Response) => {
  try {
    await favouriteService.deleteFavourite(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete favourite' });
  }
};
