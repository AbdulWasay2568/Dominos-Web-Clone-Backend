import { Router } from 'express';
import * as cartItemController from '../controllers/cartItem.controller.js';
const cartItemRouter = Router();
cartItemRouter.post('/', cartItemController.createCartItemController);
cartItemRouter.get('/', cartItemController.getAllCartItemController);
cartItemRouter.get('/:id', cartItemController.getCartItemByIdController);
cartItemRouter.put('/:id', cartItemController.updateCartItemController);
cartItemRouter.delete('/:id', cartItemController.removeCartItemController);
export default cartItemRouter;
//# sourceMappingURL=cartItem.routes.js.map