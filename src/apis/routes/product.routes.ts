import { Router } from 'express';
import * as productController from '../controllers/product.controller';
import { uploadProductImage } from '../middlewares/upload.middleware';

const productRouter = Router();

productRouter.post('/', productController.createProductController);
productRouter.get('/', productController.getAllProductsController);
productRouter.get('/:id', productController.getProductByIdController);
productRouter.put('/:id', productController.updateProductController);
productRouter.delete('/:id', productController.removeProductController);
productRouter.patch('/:id/image', uploadProductImage.single('image'), productController.updateProductImage);
productRouter.post('/addons/',uploadProductImage.single('image'), productController.createProductWithAddonsController);
    
export default productRouter; 