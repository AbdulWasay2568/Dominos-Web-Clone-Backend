import { prisma } from '../../prisma/client';
import { CreateShippingInfoDto, UpdateShippingInfoDto } from '../interfaces/shippingInfo.interface';

export const createShippingInfo = async (data: CreateShippingInfoDto) => {
  return await prisma.shippingInfo.create({ data });
};

export const getAllShippingInfo = async () => {
  return await prisma.shippingInfo.findMany({
    include: { order: true },
  });
};

export const getShippingInfoById = async (id: number) => {
  return await prisma.shippingInfo.findUnique({
    where: { id },
    include: { order: true },
  });
};

export const updateShippingInfo = async (id: number, data: UpdateShippingInfoDto) => {
  return await prisma.shippingInfo.update({
    where: { id },
    data,
  });
};

export const deleteShippingInfo = async (id: number) => {
  return await prisma.shippingInfo.delete({
    where: { id },
  });
};
