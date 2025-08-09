import { Router } from 'express';
import * as categoryController from '../controllers/category.controller.js';
const categoryRouter = Router();
categoryRouter.post('/', categoryController.createCategoryCategory);
categoryRouter.get('/', categoryController.getAllCategoryCategory);
categoryRouter.get('/:id', categoryController.getCategoryByIdCategory);
categoryRouter.put('/:id', categoryController.updateCategoryCategory);
categoryRouter.delete('/:id', categoryController.removeCategoryCategory);
export default categoryRouter;
//# sourceMappingURL=category.routes.js.map