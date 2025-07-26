import { Router } from 'express';
import * as productReviewController from '../controllers/productReview.controller';

const productReviewRouter = Router();

productReviewRouter.post('/', productReviewController.createProductReview);
productReviewRouter.get('/', productReviewController.getAllProductReviews);
productReviewRouter.get('/:id', productReviewController.getProductReviewById);
productReviewRouter.put('/:id', productReviewController.updateProductReview);
productReviewRouter.delete('/:id', productReviewController.deleteProductReview);

export default productReviewRouter; 