import axios from 'axios';
import { AddonOptions, CreateAddonOptionsRequest, UpdateAddonOptionsRequest } from '../interfaces/addonOptions.interface';

const API_URL = '/api/addon-options';

export const createAddonOptions = (data: CreateAddonOptionsRequest) =>
  axios.post<{ addonOptions: AddonOptions }>(API_URL, data).then(res => res.data.addonOptions);

export const getAddonOptionsById = (id: string) =>
  axios.get<{ addonOptions: AddonOptions }>(`${API_URL}/${id}`).then(res => res.data.addonOptions);

export const getAllAddonOptions = () =>
  axios.get<{ addonOptions: AddonOptions[] }>(API_URL).then(res => res.data.addonOptions);

export const updateAddonOptions = (id: string, data: UpdateAddonOptionsRequest) =>
  axios.put<{ addonOptions: AddonOptions }>(`${API_URL}/${id}`, data).then(res => res.data.addonOptions);

export const deleteAddonOptions = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 