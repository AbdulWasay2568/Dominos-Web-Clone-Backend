import { Router } from 'express';
import * as favouritesController from '../controllers/favourites.controller';

const favouritesRouter = Router();

favouritesRouter.post('/', favouritesController.createFavouriteController);
favouritesRouter.get('/user/:userId', favouritesController.getAllFavouritesByUserIdController);
favouritesRouter.get('/:id', favouritesController.getFavouriteByIdController);
favouritesRouter.delete('/:id', favouritesController.removeFavouriteController);

export default favouritesRouter; 