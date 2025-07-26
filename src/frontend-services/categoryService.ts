import axios from 'axios';
import { Category, CreateCategoryRequest, UpdateCategoryRequest } from '../interfaces/category.interface';

const API_URL = '/api/categories';

export const createCategory = (data: CreateCategoryRequest) =>
  axios.post<{ category: Category }>(API_URL, data).then(res => res.data.category);

export const getCategoryById = (id: string) =>
  axios.get<{ category: Category }>(`${API_URL}/${id}`).then(res => res.data.category);

export const getAllCategories = () =>
  axios.get<{ categories: Category[] }>(API_URL).then(res => res.data.categories);

export const updateCategory = (id: string, data: UpdateCategoryRequest) =>
  axios.put<{ category: Category }>(`${API_URL}/${id}`, data).then(res => res.data.category);

export const deleteCategory = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 