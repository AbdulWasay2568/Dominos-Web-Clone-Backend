import axios from 'axios';
import { Payment, CreatePaymentRequest, UpdatePaymentRequest } from '../interfaces/payment.interface';

const API_URL = '/api/payments';

export const createPayment = (data: CreatePaymentRequest) =>
  axios.post<{ payment: Payment }>(API_URL, data).then(res => res.data.payment);

export const getPaymentById = (id: string) =>
  axios.get<{ payment: Payment }>(`${API_URL}/${id}`).then(res => res.data.payment);

export const getAllPayments = () =>
  axios.get<{ payments: Payment[] }>(API_URL).then(res => res.data.payments);

export const updatePayment = (id: string, data: UpdatePaymentRequest) =>
  axios.put<{ payment: Payment }>(`${API_URL}/${id}`, data).then(res => res.data.payment);

export const deletePayment = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 