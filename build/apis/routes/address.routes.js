import { Router } from 'express';
import * as addressController from '../controllers/address.controller.js';
const addressRouter = Router();
addressRouter.post('/', addressController.createAddressController);
addressRouter.get('/', addressController.getAllAddressController);
addressRouter.get('/user/:userId', addressController.getAddressesByUserIdController);
addressRouter.get('/:id', addressController.getAddressByIdController);
addressRouter.put('/:id', addressController.updateAddressController);
addressRouter.delete('/:id', addressController.removeAddressController);
export default addressRouter;
//# sourceMappingURL=address.routes.js.map