import axios from 'axios';
import { Favourites, CreateFavouritesRequest, UpdateFavouritesRequest } from '../interfaces/favourites.interface';

const API_URL = '/api/favourites';

export const createFavourites = (data: CreateFavouritesRequest) =>
  axios.post<{ favourites: Favourites }>(API_URL, data).then(res => res.data.favourites);

export const getFavouritesById = (id: string) =>
  axios.get<{ favourites: Favourites }>(`${API_URL}/${id}`).then(res => res.data.favourites);

export const getAllFavourites = () =>
  axios.get<{ favourites: Favourites[] }>(API_URL).then(res => res.data.favourites);

export const updateFavourites = (id: string, data: UpdateFavouritesRequest) =>
  axios.put<{ favourites: Favourites }>(`${API_URL}/${id}`, data).then(res => res.data.favourites);

export const deleteFavourites = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 