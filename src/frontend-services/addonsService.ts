import axios from 'axios';
import { Addons, CreateAddonsRequest, UpdateAddonsRequest } from '../interfaces/addons.interface';

const API_URL = '/api/addons';

export const createAddons = (data: CreateAddonsRequest) =>
  axios.post<{ addons: Addons }>(API_URL, data).then(res => res.data.addons);

export const getAddonsById = (id: string) =>
  axios.get<{ addons: Addons }>(`${API_URL}/${id}`).then(res => res.data.addons);

export const getAllAddons = () =>
  axios.get<{ addons: Addons[] }>(API_URL).then(res => res.data.addons);

export const updateAddons = (id: string, data: UpdateAddonsRequest) =>
  axios.put<{ addons: Addons }>(`${API_URL}/${id}`, data).then(res => res.data.addons);

export const deleteAddons = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 