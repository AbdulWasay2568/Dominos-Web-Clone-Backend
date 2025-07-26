import axios from 'axios';
import { CartItem, CreateCartItemRequest, UpdateCartItemRequest } from '../interfaces/cartItem.interface';

const API_URL = '/api/cart-items';

export const createCartItem = (data: CreateCartItemRequest) =>
  axios.post<{ cartItem: CartItem }>(API_URL, data).then(res => res.data.cartItem);

export const getCartItemById = (id: string) =>
  axios.get<{ cartItem: CartItem }>(`${API_URL}/${id}`).then(res => res.data.cartItem);

export const getAllCartItems = () =>
  axios.get<{ cartItems: CartItem[] }>(API_URL).then(res => res.data.cartItems);

export const updateCartItem = (id: string, data: UpdateCartItemRequest) =>
  axios.put<{ cartItem: CartItem }>(`${API_URL}/${id}`, data).then(res => res.data.cartItem);

export const deleteCartItem = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 