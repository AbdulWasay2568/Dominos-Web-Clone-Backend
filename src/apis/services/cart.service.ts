import { prisma } from '../../prisma/client';
import { CreateCartDto, UpdateCartDto, AddItemToCartDto} from '../interfaces/cart.interface';


export const getAllCarts = async () => {
  return await prisma.cart.findMany();
}

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
          addonOptions:{
            include:{
              addon:true
            }
          }
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

export const addItemToCart = async (dto: AddItemToCartDto) => {
  const { userId, productId, quantity, addonOptionIds = [] } = dto;

  let cart = await prisma.cart.findUnique({ where: { userId } });

  if (!cart) {
    cart = await prisma.cart.create({ data: { userId } });
  }

  return await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId,
      quantity,
      addonOptions: {
        connect: addonOptionIds.map((id) => ({ id })),
      },
    },
    include: {
      addonOptions: true,
      product: true,
    },
  });
};