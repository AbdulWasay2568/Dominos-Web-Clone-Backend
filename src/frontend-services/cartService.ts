import axios from 'axios';
import { Cart, CreateCartRequest, UpdateCartRequest } from '../interfaces/cart.interface';

const API_URL = '/api/carts';

export const createCart = (data: CreateCartRequest) =>
  axios.post<{ cart: Cart }>(API_URL, data).then(res => res.data.cart);

export const getCartById = (id: string) =>
  axios.get<{ cart: Cart }>(`${API_URL}/${id}`).then(res => res.data.cart);

export const getAllCarts = () =>
  axios.get<{ carts: Cart[] }>(API_URL).then(res => res.data.carts);

export const updateCart = (id: string, data: UpdateCartRequest) =>
  axios.put<{ cart: Cart }>(`${API_URL}/${id}`, data).then(res => res.data.cart);

export const deleteCart = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 