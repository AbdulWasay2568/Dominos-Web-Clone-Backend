import { prisma } from '../../prisma/client';
import { CreateAddonDto, UpdateAddonDto } from '../interfaces/addons.interface';

export const createAddon = async (data: CreateAddonDto) => {
  return await prisma.addon.create({ data });
};

export const getAllAddons = async () => {
  return await prisma.addon.findMany({
    include: {
      options: true,
    },
  });
};

export const getAddonById = async (id: number) => {
  return await prisma.addon.findUnique({
    where: { id },
    include: {
      options: true,
    },
  });
};

export const deleteAddon = async (id: number) => {
  return await prisma.addon.delete({
    where: { id },
  });
};
