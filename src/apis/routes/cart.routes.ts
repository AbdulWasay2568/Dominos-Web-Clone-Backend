import { Router } from 'express';
import * as cartController from '../controllers/cart.controller';

const cartRouter = Router();

cartRouter.post('/', cartController.createCartController);
cartRouter.get('/', cartController.getCartByUserIdController);
cartRouter.get('/:id', cartController.getCartByUserIdController);
cartRouter.delete('/:id', cartController.removeCartController);

export default cartRouter; 