import { Router } from 'express';
import * as productController from '../controllers/product.controller';

const router = Router();

router.post('/', productController.createProductController);
router.get('/', productController.getAllProductsController);
router.get('/:id', productController.getProductByIdController);
router.put('/:id', productController.updateProductController);
router.delete('/:id', productController.removeProductController);

export default router; 