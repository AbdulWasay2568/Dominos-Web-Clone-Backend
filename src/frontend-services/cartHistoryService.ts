import axios from 'axios';
import { CartHistory, CreateCartHistoryRequest, UpdateCartHistoryRequest } from '../interfaces/OrderItem.interface';

const API_URL = '/api/cart-history';

export const createCartHistory = (data: CreateCartHistoryRequest) =>
  axios.post<{ cartHistory: CartHistory }>(API_URL, data).then(res => res.data.cartHistory);

export const getCartHistoryById = (id: string) =>
  axios.get<{ cartHistory: CartHistory }>(`${API_URL}/${id}`).then(res => res.data.cartHistory);

export const getAllCartHistories = () =>
  axios.get<{ cartHistories: CartHistory[] }>(API_URL).then(res => res.data.cartHistories);

export const updateCartHistory = (id: string, data: UpdateCartHistoryRequest) =>
  axios.put<{ cartHistory: CartHistory }>(`${API_URL}/${id}`, data).then(res => res.data.cartHistory);

export const deleteCartHistory = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 