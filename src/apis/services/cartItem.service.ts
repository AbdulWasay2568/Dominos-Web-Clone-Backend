import { prisma } from '../../prisma/client';
import { CreateCartItemDto, UpdateCartItemDto } from '../interfaces/cartItem.interface';

export const createCartItem = async (data: CreateCartItemDto) => {
  return await prisma.cartItem.create({ data });
};

export const getAllCartItems = async () => {
  return await prisma.cartItem.findMany({
    include: {
      cart: true,
      product: true,
    },
  });
};

export const getCartItemById = async (id: number) => {
  return await prisma.cartItem.findUnique({
    where: { id },
    include: {
      cart: true,
      product: true,
    },
  });
};

export const updateCartItem = async (id: number, data: UpdateCartItemDto) => {
  return await prisma.cartItem.update({
    where: { id },
    data,
  });
};

export const deleteCartItem = async (id: number) => {
  return await prisma.cartItem.delete({
    where: { id },
  });
};
