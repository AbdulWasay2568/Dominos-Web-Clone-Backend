import axios from 'axios';
import { ShippingInfo, CreateShippingInfoRequest, UpdateShippingInfoRequest } from '../interfaces/shippingInfo.interface';

const API_URL = '/api/shipping-info';

export const createShippingInfo = (data: CreateShippingInfoRequest) =>
  axios.post<{ shippingInfo: ShippingInfo }>(API_URL, data).then(res => res.data.shippingInfo);

export const getShippingInfoById = (id: string) =>
  axios.get<{ shippingInfo: ShippingInfo }>(`${API_URL}/${id}`).then(res => res.data.shippingInfo);

export const getAllShippingInfos = () =>
  axios.get<{ shippingInfos: ShippingInfo[] }>(API_URL).then(res => res.data.shippingInfos);

export const updateShippingInfo = (id: string, data: UpdateShippingInfoRequest) =>
  axios.put<{ shippingInfo: ShippingInfo }>(`${API_URL}/${id}`, data).then(res => res.data.shippingInfo);

export const deleteShippingInfo = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 