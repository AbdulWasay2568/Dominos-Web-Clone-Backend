import axios from 'axios';
import { User, CreateUserRequest, UpdateUserRequest } from '../interfaces/users.interface';

const API_URL = '/api/users';

export const createUser = (data: CreateUserRequest) =>
  axios.post<{ user: User }>(API_URL, data).then(res => res.data.user);

export const getUserById = (id: string) =>
  axios.get<{ user: User }>(`${API_URL}/${id}`).then(res => res.data.user);

export const getAllUsers = () =>
  axios.get<{ users: User[] }>(API_URL).then(res => res.data.users);

export const updateUser = (id: string, data: UpdateUserRequest) =>
  axios.put<{ user: User }>(`${API_URL}/${id}`, data).then(res => res.data.user);

export const deleteUser = (id: string) =>
  axios.delete(`${API_URL}/${id}`); 