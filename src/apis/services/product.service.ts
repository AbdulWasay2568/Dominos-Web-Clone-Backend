import { prisma } from '../../prisma/client';
import { CreateProductDto, UpdateProductDto } from '../interfaces/product.interface';

export const createProduct = async (data: CreateProductDto) => {
  return await prisma.product.create({ data });
};

export const getAllProducts = async () => {
  return await prisma.product.findMany({
    include: {
      category: true,
      reviews: true,
    },
  });
};

export const getProductById = async (id: number) => {
  return await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      reviews: true,
      addons: {
        include:{
          options: true
        }
      },
    },
  });
};

export const updateProduct = async (id: number, data: UpdateProductDto) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

export const deleteProduct = async (id: number) => {
  return await prisma.product.delete({
    where: { id },
  });
};
