import * as favouriteService from '../services/favourites.service.js';
export const createFavouriteController = async (req, res) => {
    try {
        const fav = await favouriteService.createFavourite(req.body);
        res.status(201).json(fav);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add to favourites' });
    }
};
export const getAllFavouritesByUserIdController = async (req, res) => {
    try {
        const favs = await favouriteService.getAllFavouritesByUserId(Number(req.params.userId));
        res.json(favs);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch favourites' });
    }
};
export const getFavouriteByIdController = async (req, res) => {
    try {
        const fav = await favouriteService.getFavouriteById(Number(req.params.id));
        if (!fav)
            return res.status(404).json({ error: 'Favourite not found' });
        res.json(fav);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch favourite' });
    }
};
export const removeFavouriteController = async (req, res) => {
    try {
        await favouriteService.deleteFavourite(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete favourite' });
    }
};
//# sourceMappingURL=favourites.controller.js.map