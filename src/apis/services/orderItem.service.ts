import { prisma } from '../../prisma/client';
import { CreateOrderItemDto, UpdateOrderItemDto } from '../interfaces/orderItem.interface';

export const createOrderItem = async (data: CreateOrderItemDto) => {
  return await prisma.orderItem.create({ data });
};

export const getAllOrderItems = async () => {
  return await prisma.orderItem.findMany({
    include: {
      order: true,
      product: true,
    },
  });
};

export const getOrderItemById = async (id: number) => {
  return await prisma.orderItem.findUnique({
    where: { id },
    include: {
      order: true,
      product: true,
    },
  });
};

export const updateOrderItem = async (id: number, data: UpdateOrderItemDto) => {
  return await prisma.orderItem.update({
    where: { id },
    data,
  });
};

export const deleteOrderItem = async (id: number) => {
  return await prisma.orderItem.delete({
    where: { id },
  });
};
