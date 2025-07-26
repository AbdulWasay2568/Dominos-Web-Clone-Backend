import { prisma } from '../../prisma/client';
import { CreateCartDto, UpdateCartDto} from '../interfaces/cart.interface';

export const createCart = async (data: CreateCartDto) => {
  return await prisma.cart.create({ data });
};

export const getCartByUserId = async (userId: number) => {
  return await prisma.cart.findUnique({
    where: { userId },
    include: {
      cartItems: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const updateCart = async (id: number, data: UpdateCartDto) => {
  return await prisma.cart.update({
    where: { id },
    data,
  });
};

export const deleteCart = async (id: number) => {
  return await prisma.cart.delete({
    where: { id },
  });
};
