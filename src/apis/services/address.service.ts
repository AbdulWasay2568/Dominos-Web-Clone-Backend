import { prisma } from '../../prisma/client';
import { CreateAddressDto, UpdateAddressDto } from '../interfaces/address.interface';

export const createAddress = async (data: CreateAddressDto) => {
  return await prisma.address.create({ data });
};

export const getAllAddresses = async () => {
  return await prisma.address.findMany({
    include: {
      user: true,
    },
  });
};

export const getAddressById = async (id: number) => {
  return await prisma.address.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });
};

export const updateAddress = async (id: number, data: UpdateAddressDto) => {
  return await prisma.address.update({
    where: { id },
    data,
  });
};

export const deleteAddress = async (id: number) => {
  return await prisma.address.delete({
    where: { id },
  });
};
