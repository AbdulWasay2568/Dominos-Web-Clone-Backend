import { prisma } from '../../prisma/client.js';
export const createAddress = async (data) => {
    return await prisma.address.create({ data });
};
export const getAllAddresses = async () => {
    return await prisma.address.findMany({
        include: {
            user: true,
        },
    });
};
export const getAddressById = async (id) => {
    return await prisma.address.findUnique({
        where: { id },
        include: {
            user: true,
        },
    });
};
export const getAddressesByUserId = async (userId) => {
    return await prisma.address.findMany({
        where: { userId },
    });
};
export const updateAddress = async (id, data) => {
    return await prisma.address.update({
        where: { id },
        data,
    });
};
export const deleteAddress = async (id) => {
    return await prisma.address.delete({
        where: { id },
    });
};
//# sourceMappingURL=address.service.js.map