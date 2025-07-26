import { prisma } from '../../prisma/client';
import { CreateCategoryDto, UpdateCategoryDto } from '../interfaces/category.interface';

export const createCategory = async (data: CreateCategoryDto) => {
  return prisma.category.create({ data });
};

export const getAllCategories = async () => {
  return await prisma.category.findMany({
    include: { products: true },
  });
};

export const getCategoryById = async (id: number) => {
  return await prisma.category.findUnique({
    where: { id },
    include: { products: true },
  });
};

export const updateCategory = async (id: number, data: UpdateCategoryDto) => {
  return await prisma.category.update({
    where: { id },
    data,
  });
};

export const deleteCategory = async (id: number) => {
  return await prisma.category.delete({
    where: { id },
  });
};