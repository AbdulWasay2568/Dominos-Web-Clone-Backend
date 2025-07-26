import { prisma } from '../../prisma/client';
import { CreateProductReviewDto, UpdateProductReviewDto } from '../interfaces/productReview.interface';

export const createReview = async (data: CreateProductReviewDto) => {
  return await prisma.productReview.create({ data });
};

export const getAllReviews = async () => {
  return await prisma.productReview.findMany({
    include: {
      product: true,
      user: true,
    },
  });
};

export const getReviewById = async (id: number) => {
  return await prisma.productReview.findUnique({
    where: { id },
    include: {
      product: true,
      user: true,
    },
  });
};

export const updateReview = async (id: number, data: UpdateProductReviewDto) => {
  return await prisma.productReview.update({
    where: { id },
    data,
  });
};

export const deleteReview = async (id: number) => {
  return await prisma.productReview.delete({
    where: { id },
  });
};
