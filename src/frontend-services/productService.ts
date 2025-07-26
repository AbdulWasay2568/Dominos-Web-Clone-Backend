import axios from 'axios';
import { Product, CreateProductRequest, UpdateProductRequest } from '../interfaces/product.interface';

const API_URL = '/api/products';

export const createProduct = (data: CreateProductRequest) =>
  axios.post<{ product: Product }>(API_URL, data).then(res => res.data.product);

export const getProductById = (id: string) =>
  axios.get<{ product: Product }>(`${API_URL}/${id}`).then(res => res.data.product);

export const getAllProducts = () =>
  axios.get<{ products: Product[] }>(API_URL).then(res => res.data.products);

export const updateProduct = (id: string, data: UpdateProductRequest) =>
  axios.put<{ product: Product }>(`${API_URL}/${id}`, data).then(res => res.data.product);

export const deleteProduct = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 