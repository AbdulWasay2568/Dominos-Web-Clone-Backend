import { Router } from 'express';
import * as paymentController from '../controllers/payment.controller.js';
const paymentRouter = Router();
paymentRouter.post('/', paymentController.createPaymentController);
paymentRouter.get('/', paymentController.getAllPaymentController);
paymentRouter.get('/:id', paymentController.getPaymentByIdController);
paymentRouter.put('/:id', paymentController.updatePaymentController);
paymentRouter.delete('/:id', paymentController.removePaymentController);
export default paymentRouter;
//# sourceMappingURL=payment.routes.js.map