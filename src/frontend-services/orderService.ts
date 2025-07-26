import axios from 'axios';
import { Order, CreateOrderRequest, UpdateOrderRequest } from '../interfaces/order.interfaces';

const API_URL = '/api/orders';

export const createOrder = (data: CreateOrderRequest) =>
  axios.post<{ order: Order }>(API_URL, data).then(res => res.data.order);

export const getOrderById = (id: string) =>
  axios.get<{ order: Order }>(`${API_URL}/${id}`).then(res => res.data.order);

export const getAllOrders = () =>
  axios.get<{ orders: Order[] }>(API_URL).then(res => res.data.orders);

export const updateOrder = (id: string, data: UpdateOrderRequest) =>
  axios.put<{ order: Order }>(`${API_URL}/${id}`, data).then(res => res.data.order);

export const deleteOrder = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 