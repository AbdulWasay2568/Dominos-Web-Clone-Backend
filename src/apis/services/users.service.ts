import { prisma } from '../../prisma/client';
import { CreateUserDto, UpdateUserDto } from '../interfaces/users.interface';

export const createUser = async (data: CreateUserDto) => {
  return prisma.users.create({ data });
};

export const getUserById = async (id: number) => {
  return prisma.users.findUnique({ where: { id } });
};

export const getAllUsers = async () => {
  return prisma.users.findMany();
};

export const updateUser = async (id: number, data: UpdateUserDto) => {
  return prisma.users.update({ where: { id }, data });
};

export const deleteUser = async (id: number) => {
  return prisma.users.delete({ where: { id } });
}; 