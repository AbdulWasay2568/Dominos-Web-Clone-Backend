import { prisma } from '../../prisma/client';
import { CreateOrderDto, UpdateOrderDto } from '../interfaces/order.interfaces';

export const createOrder = async (data: CreateOrderDto) => {
  return await prisma.order.create({ data });
};

export const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      user: true,
      orderItems: true,
      payment: true,
      shipping: true,
    },
  });
};

export const getOrderById = async (id: number) => {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      orderItems: true,
      payment: true,
      shipping: true,
    },
  });
};

export const updateOrder = async (id: number, data: UpdateOrderDto) => {
  return await prisma.order.update({
    where: { id },
    data,
  });
};

export const deleteOrder = async (id: number) => {
  return await prisma.order.delete({
    where: { id },
  });
};
