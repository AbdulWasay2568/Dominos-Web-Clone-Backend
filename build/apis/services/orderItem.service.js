import { prisma } from '../../prisma/client.js';
export const createOrderItem = async (data) => {
    return await prisma.orderItem.create({
        data: {
            orderId: data.orderId,
            productId: data.productId,
            quantity: data.quantity,
            addonOptions: {
                connect: data.addonOptions.map((id) => ({ id }))
            }
        }
    });
};
export const getAllOrderItems = async () => {
    return await prisma.orderItem.findMany({
        include: {
            order: true,
            product: true,
        },
    });
};
export const getOrderItemById = async (id) => {
    return await prisma.orderItem.findUnique({
        where: { id },
        include: {
            order: true,
            product: true,
        },
    });
};
export const updateOrderItem = async (id, data) => {
    return await prisma.orderItem.update({
        where: { id },
        data: {
            quantity: data.quantity,
            addonOptions: {
                connect: data.addonOptions.map((id) => ({ id }))
            }
        }
    });
};
export const deleteOrderItem = async (id) => {
    return await prisma.orderItem.delete({
        where: { id },
    });
};
//# sourceMappingURL=orderItem.service.js.map