import { prisma } from '../../prisma/client.js';
export const createOrder = async (data) => {
    return await prisma.order.create({
        data: {
            user: { connect: { id: data.userId } },
            totalAmount: data.totalAmount,
            status: data.status,
            orderItems: {
                create: data.orderItems.map(item => ({
                    product: { connect: { id: item.productId } },
                    quantity: item.quantity,
                    addonOptions: item.addonOptions
                        ? { connect: item.addonOptions.map(addonId => ({ id: addonId })) }
                        : undefined,
                })),
            },
        },
        include: {
            user: true,
            orderItems: {
                include: {
                    product: true,
                },
            },
        },
    });
};
export const getAllOrders = async () => {
    return await prisma.order.findMany({
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            }
        },
    });
};
export const getOrderById = async (id) => {
    return await prisma.order.findUnique({
        where: { id },
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            }
        },
    });
};
// Optional: update only basic fields, not nested writes
export const updateOrder = async (id, data) => {
    return await prisma.order.update({
        where: { id },
        data: {
            totalAmount: data.totalAmount,
            status: data.status,
            // For nested updates, use separate service
        },
    });
};
export const deleteOrder = async (id) => {
    return await prisma.order.delete({
        where: { id },
    });
};
// get all orders of a user
export const getOrdersByUserId = async (userId) => {
    return await prisma.order.findMany({
        where: { userId },
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            }
        },
    });
};
//# sourceMappingURL=order.service.js.map