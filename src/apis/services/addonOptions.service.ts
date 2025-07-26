import { prisma } from '../../prisma/client';
import { CreateAddonOptionDto, UpdateAddonOptionDto } from '../interfaces/addonOptions.interface';

export const createOption = async (data: CreateAddonOptionDto) => {
  return await prisma.addonOption.create({ data });
};

export const getAllOptions = async () => {
  return await prisma.addonOption.findMany({
    include: {
      addon: true,
    },
  });
};

export const getOptionById = async (id: number) => {
  return await prisma.addonOption.findUnique({
    where: { id },
    include: {
      addon: true,
    },
  });
};

export const updateOption = async (id: number, data: UpdateAddonOptionDto) => {
  return await prisma.addonOption.update({
    where: { id },
    data,
  });
};

export const deleteOption = async (id: number) => {
  return await prisma.addonOption.delete({
    where: { id },
  });
};
