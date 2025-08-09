import { Router } from 'express';
import * as orderController from '../controllers/order.controller.js';
const orderRouter = Router();
orderRouter.post('/', orderController.createOrderController);
orderRouter.get('/', orderController.getAllOrderController);
orderRouter.get('/:id', orderController.getOrderByIdController);
orderRouter.put('/:id', orderController.updateOrderController);
orderRouter.delete('/:id', orderController.removeOrderController);
orderRouter.get('/user/:id', orderController.getOrderByUserIdController);
export default orderRouter;
//# sourceMappingURL=order.routes.js.map