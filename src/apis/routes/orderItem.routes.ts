import { Router } from 'express';
import * as orderItemController from '../controllers/orderItem.controller';

const orderItemRouter = Router();

orderItemRouter.post('/', orderItemController.createOrderItemController);
orderItemRouter.get('/', orderItemController.getAllOrderItemController);
orderItemRouter.get('/:id', orderItemController.getOrderItemByIdController);
orderItemRouter.put('/:id', orderItemController.updateOrderItemController);
orderItemRouter.delete('/:id', orderItemController.removeOrderItemController);

export default orderItemRouter;
