import { prisma } from '../../prisma/client';
import { CreatePaymentDto, UpdatePaymentDto } from '../interfaces/payment.interface';

export const createPayment = async (data: CreatePaymentDto) => {
  return await prisma.payment.create({ data });
};

export const getAllPayments = async () => {
  return await prisma.payment.findMany({
    include: {
      order: true,
    },
  });
};

export const getPaymentById = async (id: number) => {
  return await prisma.payment.findUnique({
    where: { id },
    include: {
      order: true,
    },
  });
};

export const updatePayment = async (id: number, data: UpdatePaymentDto) => {
  return await prisma.payment.update({
    where: { id },
    data,
  });
};

export const deletePayment = async (id: number) => {
  return await prisma.payment.delete({
    where: { id },
  });
};
