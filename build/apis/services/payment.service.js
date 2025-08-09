import { prisma } from '../../prisma/client.js';
export const createPayment = async (data) => {
    return await prisma.payment.create({ data });
};
export const getAllPayments = async () => {
    return await prisma.payment.findMany({
        include: {
            order: true,
        },
    });
};
export const getPaymentById = async (id) => {
    return await prisma.payment.findUnique({
        where: { id },
        include: {
            order: true,
        },
    });
};
export const updatePayment = async (id, data) => {
    return await prisma.payment.update({
        where: { id },
        data,
    });
};
export const deletePayment = async (id) => {
    return await prisma.payment.delete({
        where: { id },
    });
};
//# sourceMappingURL=payment.service.js.map