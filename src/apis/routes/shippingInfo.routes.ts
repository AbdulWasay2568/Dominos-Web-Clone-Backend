import { Router } from 'express';
import * as shippingInfoController from '../controllers/shippingInfo.controller';

const shippingInfoRouter = Router();

shippingInfoRouter.post('/', shippingInfoController.createShippingInformation);
shippingInfoRouter.get('/', shippingInfoController.getAllShippingInformation);
shippingInfoRouter.get('/:id', shippingInfoController.getShippingInformationById);
shippingInfoRouter.put('/:id', shippingInfoController.updateShippingInformation);
shippingInfoRouter.delete('/:id', shippingInfoController.removeShippingInformation);

export default shippingInfoRouter; 