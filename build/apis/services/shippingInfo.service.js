import { prisma } from '../../prisma/client.js';
export const createShippingInfo = async (data) => {
    return await prisma.shippingInfo.create({ data });
};
export const getAllShippingInfo = async () => {
    return await prisma.shippingInfo.findMany({
        include: { order: true },
    });
};
export const getShippingInfoById = async (id) => {
    return await prisma.shippingInfo.findUnique({
        where: { id },
        include: { order: true },
    });
};
export const updateShippingInfo = async (id, data) => {
    return await prisma.shippingInfo.update({
        where: { id },
        data,
    });
};
export const deleteShippingInfo = async (id) => {
    return await prisma.shippingInfo.delete({
        where: { id },
    });
};
//# sourceMappingURL=shippingInfo.service.js.map