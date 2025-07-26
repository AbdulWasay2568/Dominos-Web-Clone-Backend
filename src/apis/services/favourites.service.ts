import { prisma } from '../../prisma/client';
import { CreateFavouriteDto } from '../interfaces/favourites.interface';

export const createFavourite = async (data: CreateFavouriteDto) => {
  return await prisma.favourite.create({ data });
};

export const getAllFavourites = async () => {
  return await prisma.favourite.findMany({
    include: {
      product: true,
      user: true,
    },
  });
};

export const getFavouriteById = async (id: number) => {
  return await prisma.favourite.findUnique({
    where: { id },
    include: {
      product: true,
      user: true,
    },
  });
};

export const deleteFavourite = async (id: number) => {
  return await prisma.favourite.delete({
    where: { id },
  });
};
