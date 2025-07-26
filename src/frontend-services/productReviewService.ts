import axios from 'axios';
import { ProductReview, CreateProductReviewRequest, UpdateProductReviewRequest } from '../interfaces/productReview.interface';

const API_URL = '/api/product-reviews';

export const createProductReview = (data: CreateProductReviewRequest) =>
  axios.post<{ productReview: ProductReview }>(API_URL, data).then(res => res.data.productReview);

export const getProductReviewById = (id: string) =>
  axios.get<{ productReview: ProductReview }>(`${API_URL}/${id}`).then(res => res.data.productReview);

export const getAllProductReviews = () =>
  axios.get<{ productReviews: ProductReview[] }>(API_URL).then(res => res.data.productReviews);

export const updateProductReview = (id: string, data: UpdateProductReviewRequest) =>
  axios.put<{ productReview: ProductReview }>(`${API_URL}/${id}`, data).then(res => res.data.productReview);

export const deleteProductReview = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 