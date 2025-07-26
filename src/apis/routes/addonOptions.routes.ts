import { Router } from 'express';
import * as addonOptionsController from '../controllers/addonOptions.controller';

const addonOptionsRouter = Router();

addonOptionsRouter.post('/', addonOptionsController.createAddonOptionController);
addonOptionsRouter.get('/', addonOptionsController.getAllAddonOptionController);
addonOptionsRouter.get('/:id', addonOptionsController.getAddonOptionByIdController);
addonOptionsRouter.put('/:id', addonOptionsController.updateAddonOptionController);
addonOptionsRouter.delete('/:id', addonOptionsController.removeAddonOptionController);

export default addonOptionsRouter; 