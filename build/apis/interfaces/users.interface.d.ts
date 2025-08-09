import { Role } from './enums.interface.js';
export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
    phone: string;
    profileImage?: string;
    role?: Role;
}
export interface UpdateUserDto {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    profileImage?: string;
    role?: Role;
}
