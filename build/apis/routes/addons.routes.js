import { Router } from 'express';
import * as addonsController from '../controllers/addons.controller.js';
const addonsRouter = Router();
addonsRouter.post('/', addonsController.createAddonController);
addonsRouter.get('/', addonsController.getAllAddonController);
addonsRouter.get('/:id', addonsController.getAddonByIdController);
addonsRouter.delete('/:id', addonsController.removeAddonController);
export default addonsRouter;
//# sourceMappingURL=addons.routes.js.map