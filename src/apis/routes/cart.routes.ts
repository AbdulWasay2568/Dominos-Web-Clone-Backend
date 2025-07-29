import { Router } from 'express';
import * as cartController from '../controllers/cart.controller';

const cartRouter = Router();

cartRouter.get('/', cartController.getAllCartsController);
cartRouter.post('/', cartController.createCartController);
cartRouter.get('/:userId', cartController.getCartByUserIdController);
cartRouter.put('/:id', cartController.updateCartController);
cartRouter.delete('/:id', cartController.removeCartController);
cartRouter.post('/cartItems', cartController.addItemToCartController);

export default cartRouter; 