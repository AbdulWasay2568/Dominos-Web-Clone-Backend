import { Router } from 'express';
import * as addressController from '../controllers/address.controller';

const addressRouter = Router();

addressRouter.post('/', addressController.createAddressController);
addressRouter.get('/', addressController.getAllAddressController);
addressRouter.get('/:id', addressController.getAddressByIdController);
addressRouter.put('/:id', addressController.updateAddressController);
addressRouter.delete('/:id', addressController.removeAddressController);

export default addressRouter; 